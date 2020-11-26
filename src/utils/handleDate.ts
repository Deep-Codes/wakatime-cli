import { purpleText } from "./color";

export const handleDate = (dt : string )  => {
  let tempDt = new Date(dt).toString().split(" ");
  let temp =  `${tempDt[2]}${tempDt[1]}`;
  return purpleText(temp)
}