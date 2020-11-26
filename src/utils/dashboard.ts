import asTable from 'as-table';
import { Spinner } from 'cli-spinner';
import fetch from 'node-fetch';
import { blueText, greenText, headText, pinkText, purpleText, redText } from './color';
import { handleDate } from './handleDate';

interface EditorData {
  name : string,
  text  : string,
  percent  :Number,
}
interface WeeklyLang {
  text  : string ,
  name : string , 
  percent: number 
}

let editorArr: Array<any> = [];
let langArr: Array<any> = [];


export const dashboard = (apikey: string, duration : string) => {
  let spin = new Spinner('Fetching Data .. %s');
  const fetchRawData = async (): Promise<void> => {
    spin.start();
    const dashBoardUrl = `https://wakatime.com/api/v1/users/current/stats/${duration}`;
    const rawData = await fetch(`${dashBoardUrl}?api_key=${apikey}`)
      .then((res) => res.json())
      .catch((err) => console.log(redText(err.message)));

      rawData['data']['languages'].forEach((lang: any) => {
        let { text  ,name  ,percent  } :  WeeklyLang = lang;
        let tempObj = {
          Language : `${greenText(name)}`,
          Duration : `${purpleText(text)}`,
         'Percent %' : `${pinkText(percent.toString())}`
        }
        langArr.push(tempObj);
      });
  
      let editorData  = rawData['data']['editors']
      editorData.forEach((el : any) => {
        let {
          name ,
          text  ,
          percent ,
        } : EditorData = el;
        let tempObj = {
          Name : greenText(name) ,
          Time: purpleText(text)  ,
          Percent: pinkText(percent.toString()) ,
        }
        editorArr.push(tempObj);
      })

    spin.stop();

    console.log(headText('\nDASHBOARD FOR LAST 7DAYS \n'));
    console.log(`Weekly Stats : ${purpleText(rawData['data']['categories'][0]['text'])}\n`)
    console.log(`Best Day : ${handleDate(rawData['data']['best_day']['created_at'])}`)
    console.log(`Coding Done : ${blueText(rawData['data']['best_day']['text'])}\n`)

    console.log(asTable(langArr))
    console.log('')
    console.log(asTable(editorArr))
    console.log('')
  };
  fetchRawData();
};
