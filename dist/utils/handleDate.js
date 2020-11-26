"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDate = void 0;
const color_1 = require("./color");
exports.handleDate = (dt) => {
    let tempDt = new Date(dt).toString().split(" ");
    let temp = `${tempDt[2]}${tempDt[1]}`;
    return color_1.purpleText(temp);
};
