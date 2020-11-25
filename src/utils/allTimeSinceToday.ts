import fetch from 'node-fetch';
import { greenText, headText } from './color';

export const allTimeSinceToday = (apikey :string ) => {
  const allIimeSinceTodayUrl =
  'https://wakatime.com/api/v1/users/current/all_time_since_today';
  const fetchRawData = async (): Promise<void> => {
    console.log('Fetching Data');
    const rawData = await fetch(`${allIimeSinceTodayUrl}?api_key=${apikey}`)
      .then((res) => res.json())
      .catch((err) => console.log(err.message));
    console.log(headText('\nALL TIME SINCE TODAY :\n'))
    console.log(greenText(`CODING TIME: ${rawData['data']['text']}\n`))
  };
  fetchRawData();
}