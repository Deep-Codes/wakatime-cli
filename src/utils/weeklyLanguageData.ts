import fetch from 'node-fetch';
import asTable from 'as-table';
import { greenText, purpleText, pinkText } from './color';


interface WeeklyLang {
  text  : string ,
  name : string , 
  percent: number 
}
export const weeklyLanguageData = (apikey: string) => {
  let finalArr: Array<any> = [];
  const weeklyDataUrl =
    'https://wakatime.com/api/v1/users/current/stats/last_7_days';
  const fetchRawData = async (): Promise<void> => {
    console.log('Fetching Data');
    const rawData = await fetch(`${weeklyDataUrl}?api_key=${apikey}`)
      .then((res) => res.json())
      .catch((err) => console.log(err.message));
    rawData['data']['languages'].forEach((lang: any) => {
      let { text  ,name  ,percent  } :  WeeklyLang = lang;
      let tempObj = {
        Language : `${greenText(name)}`,
        Duration : `${purpleText(text)}`,
       'Percent %' : `${pinkText(percent.toString())}`
      }
      finalArr.push(tempObj);
    });
    console.log(asTable(finalArr))
  };
  fetchRawData();
};
