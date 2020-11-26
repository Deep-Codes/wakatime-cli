"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboard = void 0;
const as_table_1 = __importDefault(require("as-table"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const color_1 = require("./color");
const handleDate_1 = require("./handleDate");
let editorArr = [];
let langArr = [];
exports.dashboard = (apikey, duration) => {
    const fetchRawData = async () => {
        const dashBoardUrl = `https://wakatime.com/api/v1/users/current/stats/${duration}`;
        const rawData = await node_fetch_1.default(`${dashBoardUrl}?api_key=${apikey}`)
            .then((res) => res.json())
            .catch((err) => console.log(color_1.redText(err.message)));
        rawData['data']['languages'].forEach((lang) => {
            let { text, name, percent } = lang;
            let tempObj = {
                Language: `${color_1.greenText(name)}`,
                Duration: `${color_1.purpleText(text)}`,
                'Percent %': `${color_1.pinkText(percent.toString())}`
            };
            langArr.push(tempObj);
        });
        let editorData = rawData['data']['editors'];
        editorData.forEach((el) => {
            let { name, text, percent, } = el;
            let tempObj = {
                Name: color_1.greenText(name),
                Time: color_1.purpleText(text),
                Percent: color_1.pinkText(percent.toString()),
            };
            editorArr.push(tempObj);
        });
        console.log(color_1.headText('\nDASHBOARD FOR LAST 7DAYS \n'));
        console.log(`Weekly Stats : ${color_1.purpleText(rawData['data']['categories'][0]['text'])}\n`);
        console.log(`Best Day : ${handleDate_1.handleDate(rawData['data']['best_day']['created_at'])}`);
        console.log(`Coding Done : ${color_1.blueText(rawData['data']['best_day']['text'])}\n`);
        console.log(as_table_1.default(langArr));
        console.log('');
        console.log(as_table_1.default(editorArr));
        console.log('');
    };
    fetchRawData();
};
