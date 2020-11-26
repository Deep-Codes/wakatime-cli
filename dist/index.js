#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const allTimeSinceToday_1 = require("./utils/allTimeSinceToday");
const weeklyLanguageData_1 = require("./utils/weeklyLanguageData");
const color_1 = require("./utils/color");
const codingGoals_1 = require("./utils/codingGoals");
commander_1.program.version('1.0.0', '-v, --vers', 'output the current version');
commander_1.program
    .option('-k, --apiKey <type>', 'Enter Your Wakatime APIKEY')
    .option('-r, --remove ', 'Remove Your saved API_KEY')
    .option('-l, --language ', 'Coding Data of Languages in Last 7days')
    .option('-a, --all ', 'All Time Since Today')
    .option('-g, --goals', 'Coding Goals Meet If Set Up');
commander_1.program.parse(process.argv);
// * End Points
// ? ALl time since today
// ? weekly
console.log(color_1.blueText('\nHello from WakaTime-CLI'));
let API_KEY;
// ? ReadFileSync to check if API key exists
API_KEY = fs_1.default.readFileSync(path_1.default.join(__dirname, 'utils/apikey.txt'), {
    encoding: 'utf8',
    flag: 'r',
});
if (API_KEY && !commander_1.program.remove) {
    if (commander_1.program.all) {
        allTimeSinceToday_1.allTimeSinceToday(API_KEY);
    }
    else if (commander_1.program.language) {
        weeklyLanguageData_1.weeklyLanguageData(API_KEY);
    }
    else if (commander_1.program.goals) {
        codingGoals_1.codingGoals(API_KEY);
    }
}
else if (API_KEY === '' && !commander_1.program.remove) {
    // ? writeFileSync to save API KEY
    if (commander_1.program.apiKey) {
        fs_1.default.writeFileSync(path_1.default.join(__dirname, 'utils/apikey.txt'), commander_1.program.apiKey);
        console.log(color_1.greenText('API-KEY Saved !\n'));
    }
    else {
        console.log(color_1.greenText('Save Your API-KEY with > wakatime-cli -k <API_KEY>\n'));
    }
}
if (commander_1.program.remove) {
    // ? Removes Existing Key
    if (API_KEY) {
        fs_1.default.writeFileSync(path_1.default.join(__dirname, 'utils/apikey.txt'), '');
        console.log(color_1.pinkText('API KEY Removed You will need to add  it again .'));
    }
    else {
        console.log(color_1.redText('NO API KEY FOUND TO BE DELETED'));
    }
}
