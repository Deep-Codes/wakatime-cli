import fetch from 'node-fetch';
import asTable from 'as-table';
import { greenText, purpleText, pinkText, redText } from './color';
import { Spinner } from 'cli-spinner';


interface WeeklyLang {
  text  : string ,
  name : string , 
  percent: number 
}
export const weeklyLanguageData = (apikey: string) => {
  let spin = new Spinner('Fetching Data .. %s');
  let finalArr: Array<any> = [];
  const weeklyDataUrl =
    'https://wakatime.com/api/v1/users/current/stats/last_7_days';
  const fetchRawData = async (): Promise<void> => {
    spin.start();
    const rawData = await fetch(`${weeklyDataUrl}?api_key=${apikey}`)
      .then((res) => res.json())
      .catch((err) => console.log(redText(err.message)));
    rawData['data']['languages'].forEach((lang: any) => {
      let { text  ,name  ,percent  } :  WeeklyLang = lang;
      let tempObj = {
        Language : `${greenText(name)}`,
        Duration : `${purpleText(text)}`,
       'Percent %' : `${pinkText(percent.toString())}`
      }
      finalArr.push(tempObj);
    });
    spin.stop();
    console.log('\n\n')
    console.log(asTable(finalArr))
    console.log('\n\n')
  };
  fetchRawData();
};
