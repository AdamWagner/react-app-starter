import { adjacent, convert, hue, brightness } from 'chromatism';
import {css} from "styled-shortcut-components"; // https://github.com/donavon/styled-shortcuts

const cloud = '#F0F1F5';
const sidewalk = brightness(-10,  cloud).hex;
const asphalt = '#3A3D42';

const sky = '#00A3EE';
const yellow = '#F5D908'
const strawberry = '#D80351'
const white = '#FFFFFF'
const orange = '#e99930'
const aqua = '#50C1C2'

const blue = '#60B2D0'
const red = '#DA3743'
const pink = '#E5656E'
const gray = '#D7D9E0'

export const colors = {
  cloud,
  sidewalk,
  asphalt,
  sky,
  red,
  pink
}



export function makeGradient(color, shift=25) {
  let steps = 2;
  let colors = adjacent(shift, 3, color);
  return css`linear-gradient(to bottom right, ${colors.hex[0]}, ${colors.hex[1]});`
}
