"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.weeklyLanguageData = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const as_table_1 = __importDefault(require("as-table"));
const color_1 = require("./color");
const cli_spinner_1 = require("cli-spinner");
exports.weeklyLanguageData = (apikey) => {
    let spin = new cli_spinner_1.Spinner('Fetching Data .. %s');
    let finalArr = [];
    const weeklyDataUrl = 'https://wakatime.com/api/v1/users/current/stats/last_7_days';
    const fetchRawData = async () => {
        spin.start();
        const rawData = await node_fetch_1.default(`${weeklyDataUrl}?api_key=${apikey}`)
            .then((res) => res.json())
            .catch((err) => console.log(color_1.redText(err.message)));
        rawData['data']['languages'].forEach((lang) => {
            let { text, name, percent } = lang;
            let tempObj = {
                Language: `${color_1.greenText(name)}`,
                Duration: `${color_1.purpleText(text)}`,
                'Percent %': `${color_1.pinkText(percent.toString())}`
            };
            finalArr.push(tempObj);
        });
        spin.stop();
        console.log('\n\n');
        console.log(as_table_1.default(finalArr));
        console.log('\n\n');
    };
    fetchRawData();
};
