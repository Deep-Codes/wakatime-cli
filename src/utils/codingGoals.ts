import fetch from 'node-fetch';
import { Spinner } from 'cli-spinner';
import { blueText, greenText, headText, purpleText, redText } from './color';
import asTable from 'as-table';
import { handleDate } from './handleDate';

const codingGoalsUrl = 'https://wakatime.com/api/v1/users/current/goals';

interface Goals {
  range: any;
  range_status: string;
  actual_seconds_text: string
}


let finalArr: Array<any> = [];

export const codingGoals = (apikey: string) => {
  let spin = new Spinner('Fetching Data .. %s');
  spin.start();
  const fetchRawData = async (): Promise<void> => {
    const rawData = await fetch(`${codingGoalsUrl}?api_key=${apikey}`)
      .then((res) => res.json())
      .catch((err) => console.log(redText(err.message)));
    rawData['data'][0]['chart_data'].forEach((el: any) => {
      const { range, range_status , actual_seconds_text }: Goals = el;
      let tempObj = {
        Duration: `${handleDate(range['start'])}-${handleDate(range['end'])}`,
        Status:
          range_status === 'success' ? greenText('Success') : redText('Failed'),
        'Coding Time': blueText(actual_seconds_text),
      };
      finalArr.push(tempObj);
    });
    spin.stop();
    console.log(headText('\nCODING GOALS :\n'))
    console.log(purpleText(`Goal : ${rawData['data'][0]['title']}\n`))
    console.log(asTable(finalArr));
  };
  fetchRawData();
};
