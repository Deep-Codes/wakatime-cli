import chalk from 'chalk';

export const redText = (val: string) => {
  return chalk.hex('#e8505b').bold(val);
};

export const lRedText = (val: string) => {
  return chalk.hex('#c70039').bold(val);
};

export const greenText = (val: string) => {
  return chalk.hex('#41aea9').bold(val);
};

export const lGreenText = (val: string) => {
  return chalk.hex('#3b6978').bold(val);
};

export const purpleText = (val: string) => {
  return chalk.hex('#7f78d2').bold(val);
};

export const blueText = (val: string) => {
  return chalk.hex('#3282b8').bold(val);
};

export const lBlueText = (val: string) => {
  return chalk.hex('#0f4c75').bold(val);
};

export const headText = (val: string) => {
  return chalk.hex('#fbf7f0').bold.underline(val);
};

export const pinkText = (val: string) => {
  return chalk.hex('#c3aed6').bold.underline(val);
};