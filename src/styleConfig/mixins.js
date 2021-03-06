import { css } from "styled-components"; // https://github.com/donavon/styled-shortcuts
import { responsiveStyle } from "styled-system";
import is from "styled-is";
import { without, curry } from "ramda";

import theme from './theme'

export const absPseudo = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: "";
  display: block;
`;

export const clickableReset = css`
  cursor: pointer;
  border: none;
  outline: none;
  user-select: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
`;


export const maxWidth = responsiveStyle({
  prop: "maxWidth",
  cssProperty: "max-width"
});

export const borderTheme = `
  border-radius: ${theme.radius}px;
  border-width: ${theme.borderWidth}px;
  border-color: ${theme.colors.gray3};
  border-style: solid;
`


export const inputNormalize = `
  margin:0;
  border:0;
  padding:0;
  display:inline-block;
  vertical-align:middle;
  white-space:normal;
  background:none;
  line-height:1;

  &:focus {
  	outline:0;
  }
`


// TODO: uncouple from display value
export const show = responsiveStyle({
  prop: "show",
  // this is bad because you need to remember
  // component's display value when using, e.g.,
  // show={['none', 'inline-flex']}
  cssProperty: "display"
});


// include in containers to
// vertically space out their children
export const vSpaceChildren = is('vSpaceChildren')` & > * + * { margin-top: 1em; } `
export const hSpaceChildren = is('hSpaceChildren')` & > * + * { margin-left: 1em; } `


/*props.border is
  1) an array of space-separated border directions
    corresponding to breakpoints. E.g.,
    props.border={['top left', 'top']} would result in
    a top & left border at the small breakpoint,
    and only a top border at the middle breakpoint and up.

  2) a string of space separated border directions
    when no responsiveness needed, e.g.
    props.border='top left'
*/
export const borderHelper = ({ border:borderProp, theme }) => {
  let borderMaker = curry((target, bp, rule, val) => {
    target.push(`@media (min-width: ${bp}) {
                      border-${val}: ${rule};
                    }`);
  });

  let cssRules = []; // our final product
  let possibleDirs = ["top", "right", "bottom", "left"];

  // make a copy and add a starting breakpoint of 0 that rebass assumes
  let breakpoints = Array.from(theme.breakpoints);
  breakpoints.unshift(0);

  let activeRule = `solid 1px ${theme.colors.gray1}`;
  let inactiveRule = `none`;

  if (borderProp) {

    if (Array.isArray(borderProp)) {
      borderProp.forEach((str, idx) => {
        let bp = `${breakpoints[idx]}em`;
        let makeBorders = borderMaker(cssRules, bp);

        // Add a border for the directions
        // specified at each breakpoint
        let activeDirs = str.split(" ").map(i => i.trim());
        activeDirs.forEach(val => makeBorders(activeRule, val));

        // Set border to 'none' for directions
        // *not* specified at the given breakpoints
        // to cancel out rules that will apply from earlier breakpoints.
        let inactiveDirs = without(activeDirs, possibleDirs);
        inactiveDirs.forEach(val => makeBorders(inactiveRule, val));
      });

    } else if (typeof borderProp === "string") {
      let bp = "0em";
      let makeBorders = borderMaker(cssRules, bp);
      let activeDirs = borderProp.split(" ").map(i => i.trim());
      activeDirs.forEach(val => makeBorders(activeRule, val));
    }
  }

  return cssRules.join(`\n`);
};
