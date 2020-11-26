"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.codingGoals = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const cli_spinner_1 = require("cli-spinner");
const color_1 = require("./color");
const as_table_1 = __importDefault(require("as-table"));
const handleDate_1 = require("./handleDate");
const codingGoalsUrl = 'https://wakatime.com/api/v1/users/current/goals';
let finalArr = [];
exports.codingGoals = (apikey) => {
    let spin = new cli_spinner_1.Spinner('Fetching Data .. %s');
    spin.start();
    const fetchRawData = async () => {
        const rawData = await node_fetch_1.default(`${codingGoalsUrl}?api_key=${apikey}`)
            .then((res) => res.json())
            .catch((err) => console.log(color_1.redText(err.message)));
        rawData['data'][0]['chart_data'].forEach((el) => {
            const { range, range_status, actual_seconds_text } = el;
            let tempObj = {
                Duration: `${handleDate_1.handleDate(range['start'])}-${handleDate_1.handleDate(range['end'])}`,
                Status: range_status === 'success' ? color_1.greenText('Success') : color_1.redText('Failed'),
                'Coding Time': color_1.blueText(actual_seconds_text),
            };
            finalArr.push(tempObj);
        });
        spin.stop();
        console.log(color_1.headText('\nCODING GOALS :\n'));
        console.log(color_1.purpleText(`Goal : ${rawData['data'][0]['title']}\n`));
        console.log(as_table_1.default(finalArr));
    };
    fetchRawData();
};
