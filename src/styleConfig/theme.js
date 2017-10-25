import { colors as color } from "./styleVars";
import palx from "palx";
import { saturation, convert, hue } from "chromatism";
import { lighten, darken } from "polished";
import flattenColors from "../utils/flattenColors";

/*------------------------------------------------------
 Generate color palette
 ----------------------------------------------------- */
const baseColor = "#6772e5";

const palette       = palx(baseColor);
const saturateGrays = 10;
palette.gray        = palette.gray.map(i => saturation(saturateGrays, i).hex);
palette.black       = saturation(saturateGrays, palette.black).hex;
palette.black       = lighten(0.08, palette.black);
const { r, g, b }   = convert(palette.black).rgb;
palette.accent      = saturation(-10, hue(-50, baseColor).hex).hex;
const flattened     = flattenColors(palette);

let shadowStrength = 0.5;

const theme = {
  color,
  colors: flattened,
  primary: baseColor,
  secondary: color.cloud,
  gradient: `linear-gradient(to bottom right, ${baseColor}, ${palette.accent})`,
  borderWidth: 2,
  radius: 3,
  font: "sans-serif",
  shadows: {
    zero: `box-shadow: 0 2px 2px 0 rgba(${r}, ${g}, ${b}, 0), 0 1px 5px 0 rgba(${r}, ${g}, ${b}, 0), 0 3px 1px -2px rgba(${r}, ${g}, ${b}, 0);`,
    one: `box-shadow: 0 2px 2px 0 rgba(${r}, ${g}, ${b}, ${shadowStrength *
      0.14}), 0 1px 5px 0 rgba(${r}, ${g}, ${b}, ${shadowStrength *
      0.12}), 0 3px 1px -2px rgba(${r}, ${g}, ${b}, ${shadowStrength * 0.2});`,
    two: `box-shadow: 0 3px 3px 0 rgba(${r}, ${g}, ${b}, ${shadowStrength *
      0.14}), 0 1px 7px 0 rgba(${r}, ${g}, ${b}, ${shadowStrength *
      0.12}), 0 3px 1px -1px rgba(${r}, ${g}, ${b}, ${shadowStrength * 0.2});`,
    three: `box-shadow: 0 4px 5px 0 rgba(${r}, ${g}, ${b}, ${shadowStrength *
      0.14}), 0 1px 10px 0 rgba(${r}, ${g}, ${b}, ${shadowStrength *
      0.12}), 0 2px 4px -1px rgba(${r}, ${g}, ${b}, ${shadowStrength * 0.3});`,
    four: `box-shadow: 0 6px 10px 0 rgba(${r}, ${g}, ${b}, ${shadowStrength *
      0.14}), 0 1px 18px 0 rgba(${r}, ${g}, ${b}, ${shadowStrength *
      0.12}), 0 3px 5px -1px rgba(${r}, ${g}, ${b}, ${shadowStrength * 0.3});`,
    five: `box-shadow: 0 8px 10px 1px rgba(${r}, ${g}, ${b}, ${shadowStrength *
      0.14}), 0 3px 14px 2px rgba(${r}, ${g}, ${b}, ${shadowStrength *
      0.12}), 0 5px 5px -3px rgba(${r}, ${g}, ${b}, ${shadowStrength * 0.3});`,
    six: `box-shadow: 0 16px 24px 2px rgba(${r}, ${g}, ${b}, ${shadowStrength *
      0.14}), 0 6px 30px 5px rgba(${r}, ${g}, ${b}, ${shadowStrength *
      0.12}), 0 8px 10px -5px rgba(${r}, ${g}, ${b}, ${shadowStrength * 0.3});`
  }
};

export default theme;
