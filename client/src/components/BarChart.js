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
  wrap = (text, width) => {

        text.each(function() {

            let breakChars = ['/', '&', '-'],
                text = select(this),
                textContent = text.text(),
                spanContent;

            breakChars.forEach(char => {
                // Add a space after each break char for the function to use to determine line breaks
                textContent = textContent.replace(char, char + ' ');
            });

            let words = textContent.split(/\s+/).reverse(),
                word,
                line = [],
                lineNumber = 0,
                lineHeight = 1.1, // ems
                x = text.attr('x'),
                y = text.attr('y'),
                dy = parseFloat(text.attr('dy') || 0),
                tspan = text.text(null).append('tspan').attr('x', x).attr('y', y).attr('dy', dy + 'em');

            while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(' '));
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    spanContent = line.join(' ');
                    breakChars.forEach(char => {
                        // Remove spaces trailing breakChars that were added above
                        spanContent = spanContent.replace(char + ' ', char);
                    });
                    tspan.text(spanContent);
                    line = [word];
                    tspan = text.append('tspan').attr('x', x).attr('y', y).attr('dy', ++lineNumber * lineHeight + dy + 'em').text(word);
                }
            }
        });

    } ;

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

      g.append("g")
          .attr("class", "axis axis--x")
          .attr("transform", "translate(0," + height + ")")
          .call(axisBottom(xScale))
          .selectAll(".tick text")
          .call(this.wrap, xScale.bandwidth());
  }
  render() {
    return <svg ref={node => this.node = node}
                width={this.props.width + this.props.margin.right + this.props.margin.left}
                height={this.props.height + this.props.margin.top + this.props.margin.bottom}/>
  }
}
export default BarChart
