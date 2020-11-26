#!/usr/bin/env node
import { program } from 'commander';
import path from 'path';
import fs from 'fs';
import { allTimeSinceToday } from './utils/allTimeSinceToday';
import { weeklyLanguageData } from './utils/weeklyLanguageData';
import { blueText, greenText, pinkText, redText } from './utils/color';

program.version('1.0.0', '-v, --vers', 'output the current version');
program
  .option('-k, --apiKey <type>', 'Enter Your Wakatime APIKEY')
  .option('-r, --remove ', 'Remove Your saved API_KEY')
  .option('-l, --language ', 'Coding Data of Languages in Last 7days')
  .option('-a, --all ', 'All Time Since Today')
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
