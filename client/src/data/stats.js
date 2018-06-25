import { get, set } from './localData';
import { upload } from './S3';

const KEY = 'STATS';

const getPastJourneys = () => {
  const journeys = get(KEY);
  return (journeys) ? journeys : [];
};

const getStatsFromJourneys = () => {
  const journeys = getPastJourneys();
  let stats = [{Letter: "A" ,Frequency: 0},
    {Letter: "B" ,Frequency: 0},
    {Letter: "C" ,Frequency: 0},
    {Letter: "D" ,Frequency: 0},];
  journeys.map((val) => {
    if(val['page10']){
      stats[0].Frequency += val['page11'].buttons[1] ? 1 : 0;
      stats[1].Frequency += val['page11'].buttons[2] ? 1 : 0;
      stats[2].Frequency += val['page11'].buttons[3] ? 1 : 0;
      stats[3].Frequency += val['page11'].buttons[4] ? 1 : 0;
    }
  });
  return stats;
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
