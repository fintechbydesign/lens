import { get, set } from './localData';
import { upload } from './S3';

const KEY = 'STATS';

const getPastJourneys = () => {
  const journeys = get(KEY);
  return (journeys) ? journeys : [];
}

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
}

export {
  saveJourney
}