#!/usr/bin/env node
import { program } from 'commander';
import path from 'path';
import fs from 'fs';
import { allTimeSinceToday } from './utils/allTimeSinceToday';
import { weeklyLanguageData } from './utils/weeklyLanguageData';
import { blueText, greenText, pinkText, redText } from './utils/color';
import { codingGoals } from './utils/codingGoals';
import { dashboard } from './utils/dashboard';
import { validDuration } from './utils/validDurationType';

program.version('1.0.0', '-v, --vers', 'output the current version');
program
  .option('-k, --apiKey <type>', 'Enter Your Wakatime APIKEY')
  .option('-r, --remove ', 'Remove Your saved API_KEY')
  .option('-l, --language ', 'Coding Data of Languages in Last 7days')
  .option('-a, --all ', 'All Time Since Today')
  .option('-g, --goals' , 'Coding Goals Meet If Set Up')
  .option('-d, --dashboard <type>' , 'Coding Dashboard of Specific Duration');
program.parse(process.argv);

// * End Points
// ? ALl time since today
// ? weekly

console.log(blueText('\nHello from WakaTime-CLI'));

let API_KEY: string | undefined;

// ? ReadFileSync to check if API key exists
API_KEY = fs.readFileSync(path.join(__dirname, 'utils/apikey.txt'), {
  encoding: 'utf8',
  flag: 'r',
});
if (API_KEY && !program.remove) {
  if(program.all){
    allTimeSinceToday(API_KEY);
  }else if(program.language){
    weeklyLanguageData(API_KEY)
  }else if(program.goals){
    codingGoals(API_KEY);
  }else if(program.dashboard){
    if(validDuration.includes(program.dashboard)){
      dashboard(API_KEY ,program.dashboard );
    }else{
      console.log(redText('Enter as Valid Duration \n'))
      console.log(redText('It should be one of the Following: \n'))
      console.log(redText('last_7_days, last_30_days, last_6_months,last_year\n'))
    }
  }
} else if (API_KEY === '' && !program.remove) {
  // ? writeFileSync to save API KEY
  if (program.apiKey) {
    fs.writeFileSync(path.join(__dirname, 'utils/apikey.txt'), program.apiKey);
    console.log(greenText('API-KEY Saved !\n'));
  } else {
    console.log(greenText('Save Your API-KEY with > wakatime-cli -k <API_KEY>\n'));
  }
}

if (program.remove) {
  // ? Removes Existing Key
  if (API_KEY) {
    fs.writeFileSync(path.join(__dirname, 'utils/apikey.txt'), '');
    console.log(pinkText('API KEY Removed You will need to add  it again .'));
  } else {
    console.log(redText('NO API KEY FOUND TO BE DELETED'));
  }
}
