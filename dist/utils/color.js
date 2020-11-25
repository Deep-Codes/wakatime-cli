"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pinkText = exports.headText = exports.lBlueText = exports.blueText = exports.purpleText = exports.lGreenText = exports.greenText = exports.lRedText = exports.redText = void 0;
const chalk_1 = __importDefault(require("chalk"));
exports.redText = (val) => {
    return chalk_1.default.hex('#e8505b').bold(val);
};
exports.lRedText = (val) => {
    return chalk_1.default.hex('#c70039').bold(val);
};
exports.greenText = (val) => {
    return chalk_1.default.hex('#41aea9').bold(val);
};
exports.lGreenText = (val) => {
    return chalk_1.default.hex('#3b6978').bold(val);
};
exports.purpleText = (val) => {
    return chalk_1.default.hex('#7f78d2').bold(val);
};
exports.blueText = (val) => {
    return chalk_1.default.hex('#3282b8').bold(val);
};
exports.lBlueText = (val) => {
    return chalk_1.default.hex('#0f4c75').bold(val);
};
exports.headText = (val) => {
    return chalk_1.default.hex('#fbf7f0').bold.underline(val);
};
exports.pinkText = (val) => {
    return chalk_1.default.hex('#c3aed6').bold.underline(val);
};
