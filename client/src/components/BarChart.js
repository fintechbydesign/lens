// Originally from https://medium.com/@Elijah_Meeks/interactive-applications-with-react-d3-f76f7b3ebc71
import React, { Component } from 'react'
import { scaleLinear, scaleBand } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'
import {axisBottom, axisLeft} from  'd3-axis'
import './BarChart.css'
class BarChart extends Component {
  classFunction_job = d => ((d.Gotten === "Yes" && this.props.jobGotten) || (d.Gotten === "No"  && !this.props.jobGotten)) ? "bar" : "bar_inactive";
  classFunction_choice = d => (d.Choice === this.props.pollChoice) ? "bar" : "bar_inactive";

  constructor(props){
    super(props);
    this.createBarChart = this.createBarChart.bind(this);
    if (typeof(props.jobGotten) === "boolean"){
      this.classFunction = this.classFunction_job.bind(this);
    }else{
      this.classFunction = this.classFunction_choice.bind(this);
    }
  }
  componentDidMount() {
    this.createBarChart()
  }
  componentDidUpdate() {
    this.createBarChart()
  }
  createBarChart() {
    const {
      data,width,height,fill,x,y,barWidth,margin,position
    } = this.props;

    const node = this.node;
    const xScale = scaleBand().rangeRound([0, width]).padding(0.1)
        .domain(data.map(x));
    const yScale = scaleLinear().rangeRound([height, 0])
        .domain([0, max(data, y)]);

    // This is here so it doesn't render it on top of each other every time it is updated
    select(node).selectAll('*')
        .remove();

    const g = select(node)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(axisBottom(xScale));

    g.append("g")
        .attr("class", "axis axis--y")
        .call(axisLeft(yScale).ticks(10).tickPadding(10))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Frequency");

    g.selectAll(".text")
        .data(data)
        .enter()
        .append("text")
        .attr("class","label");
    g.selectAll('text.label')
        .attr("x", d => {
          if (d.Choice){
          return xScale(x(d)) + 50
        } else{
          return xScale(x(d)) + 70
        }
        }).attr('dx', '+1em')
        .attr("y", d => yScale(y(d))).attr('dy', '-0.1em')
        .text(function(d) {return y(d) + "%"; });

    g.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", this.classFunction)
        .attr('x', d => {
            if (d.Choice){
                return xScale(x(d)) + 45
            } else{
                return xScale(x(d)) + 70
            }
        })
        .attr('y', d => yScale(y(d)))
        .attr('width', barWidth)
        .attr('rx',15)
        .attr('ry',15)
        .attr('height', d => height - yScale(y(d)));
  }
  render() {
    return <svg ref={node => this.node = node}
                width={this.props.width + this.props.margin.right + this.props.margin.left}
                height={this.props.height + this.props.margin.top + this.props.margin.bottom}/>
  }
}
export default BarChart
