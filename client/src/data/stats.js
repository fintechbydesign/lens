import { get, set } from './localData';
import { upload } from './S3';

const KEY = 'STATS';

const getPastJourneys = () => {
  const journeys = get(KEY);
  return (journeys) ? journeys : [];
};

const getStatsFromJourneys = () => {
  // First stat: What Poll options were chosen

  const journeys = getPastJourneys();
  let stats1 = [{Choice: "Strongly Agree" ,Frequency: 0},
    {Choice: "Agree" ,Frequency: 0},
    {Choice: "Indifferent" ,Frequency: 0},
    {Choice: "Disagree" ,Frequency: 0},
    {Choice: "Strongly Disagree", Frequency: 0}
  ];
  journeys.map((val) => {
    if(val['page11']){
      stats1[0].Frequency += val['page11'].buttons[1] ? 1 : 0;
      stats1[1].Frequency += val['page11'].buttons[2] ? 1 : 0;
      stats1[2].Frequency += val['page11'].buttons[3] ? 1 : 0;
      stats1[3].Frequency += val['page11'].buttons[4] ? 1 : 0;
      stats1[4].Frequency += val['page11'].buttons[5] ? 1 : 0;
    }
  });
  let stats2 = [{ Gotten: "Yes", Frequency: 0}, {Gotten: "No", Frequency: 0}];
    journeys.map((val) => {
        if(val['page6']){
          val['page6'].jobGotten ? stats2[0].Frequency++ : stats2[1].Frequency++;
        }
    });

  // Second stat: How often was the job gotten
  return [stats1, stats2];
};

const saveJourney = async(journey) => {
  try {
    const journeys = getPastJourneys();
    journeys.push(journey);
    console.log(JSON.stringify(journeys, null, 2));
    set(KEY, journeys);
    await upload(journeys);
  } catch (err) {
    console.log(err);
  }
};

export {
  saveJourney,
  getStatsFromJourneys
}
