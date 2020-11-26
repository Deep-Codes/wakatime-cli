"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allTimeSinceToday = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const color_1 = require("./color");
const cli_spinner_1 = require("cli-spinner");
exports.allTimeSinceToday = (apikey) => {
    let spin = new cli_spinner_1.Spinner('Fetching Data .. %s');
    spin.start();
    const allIimeSinceTodayUrl = 'https://wakatime.com/api/v1/users/current/all_time_since_today';
    const fetchRawData = async () => {
        const rawData = await node_fetch_1.default(`${allIimeSinceTodayUrl}?api_key=${apikey}`)
            .then((res) => res.json())
            .catch((err) => console.log(color_1.redText(err.message)));
        spin.stop();
        console.log(color_1.headText('\nALL TIME SINCE TODAY :\n'));
        console.log(color_1.greenText(`CODING TIME: ${rawData['data']['text']}\n`));
    };
    fetchRawData();
};
