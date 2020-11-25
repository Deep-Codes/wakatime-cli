"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileOperations = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
exports.fileOperations = () => {
    const data = fs_1.default.readFileSync(path_1.default.join(__dirname, 'apikey.txt'), { encoding: 'utf8', flag: 'r' });
    if (data !== '') {
        return data;
    }
    else {
        console.log('No API key Found');
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question('Enter WAKATIME API_KEY: ', (apikey) => {
            fs_1.default.writeFileSync(path_1.default.join(__dirname, 'apikey.txt'), `${apikey}`);
            return apikey;
        });
    }
};
