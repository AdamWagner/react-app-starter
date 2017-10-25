
import { colors as color } from './styleVars';


let shadowStrength = 0.2;

const theme = {
  color,
  primary:  '#6772e5',
  secondary: color.cloud,
  borderWidth: 2,
  radius: 3,
  font: 'sans-serif',
  shadows: {
    zero: `box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0), 0 1px 5px 0 rgba(0, 0, 0, 0), 0 3px 1px -2px rgba(0, 0, 0, 0);`,
    one: `box-shadow: 0 2px 2px 0 rgba(0, 0, 0, ${shadowStrength * 0.14}), 0 1px 5px 0 rgba(0, 0, 0, ${shadowStrength * 0.12}), 0 3px 1px -2px rgba(0, 0, 0, ${shadowStrength * 0.2});`,
    two: `box-shadow: 0 3px 3px 0 rgba(0, 0, 0, ${shadowStrength * 0.14}), 0 1px 7px 0 rgba(0, 0, 0, ${shadowStrength * 0.12}), 0 3px 1px -1px rgba(0, 0, 0, ${shadowStrength * 0.2});`,
    three: `box-shadow: 0 4px 5px 0 rgba(0, 0, 0, ${shadowStrength * 0.14}), 0 1px 10px 0 rgba(0, 0, 0, ${shadowStrength * 0.12}), 0 2px 4px -1px rgba(0, 0, 0, ${shadowStrength * 0.3});`,
    four: `box-shadow: 0 6px 10px 0 rgba(0, 0, 0, ${shadowStrength * 0.14}), 0 1px 18px 0 rgba(0, 0, 0, ${shadowStrength * 0.12}), 0 3px 5px -1px rgba(0, 0, 0, ${shadowStrength * 0.3});`,
    five: `box-shadow: 0 8px 10px 1px rgba(0, 0, 0, ${shadowStrength * 0.14}), 0 3px 14px 2px rgba(0, 0, 0, ${shadowStrength * 0.12}), 0 5px 5px -3px rgba(0, 0, 0, ${shadowStrength * 0.3});`,
    six: `box-shadow: 0 16px 24px 2px rgba(0, 0, 0, ${shadowStrength * 0.14}), 0 6px 30px 5px rgba(0, 0, 0, ${shadowStrength * 0.12}), 0 8px 10px -5px rgba(0, 0, 0, ${shadowStrength * 0.3});`,
  }
}


export default theme
