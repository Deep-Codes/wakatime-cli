import fetch from 'node-fetch';
import { greenText, headText, redText } from './color';
import { Spinner } from 'cli-spinner';

export const allTimeSinceToday = (apikey :string ) => {
  let spin = new Spinner('Fetching Data .. %s');
  spin.start();
  const allIimeSinceTodayUrl =
  'https://wakatime.com/api/v1/users/current/all_time_since_today';
  const fetchRawData = async (): Promise<void> => {
    const rawData = await fetch(`${allIimeSinceTodayUrl}?api_key=${apikey}`)
      .then((res) => res.json())
      .catch((err) => console.log(redText(err.message)));
      spin.stop();
    // if request doesnt work the 1st time 
    if(rawData['data']['is_up_to_date']){
      console.log(headText('\nALL TIME SINCE TODAY :\n'))
      console.log(greenText(`CODING TIME: ${rawData['data']['text']}\n`))
    }else{
      console.log(redText('Your stats will be refreshed soon : Try it again .'))
    }
  };
  fetchRawData();
}