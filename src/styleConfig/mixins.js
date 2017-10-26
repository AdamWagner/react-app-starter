import {css} from "styled-shortcut-components"; // https://github.com/donavon/styled-shortcuts
import { without } from 'ramda'

export const absPseudo = css`
  position: absolute;
  top: 0;
  bottom:0;
  left:0;
  right:0;
  content: '';
  display: block;
`

export const clickableReset = css`
  cursor: pointer;
  border: none;
  outline: none;
  user-select: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

`



/*props.border is an array of space-separated border directions
  corresponding to breakpoints. E.g.,
  props.border={['top left', 'top']} would result in
  a top & left border at the small breakpoint,
  and only a top border at the middle breakpoint and up.
*/

export const borderHelper = ({border, theme}) => {
  let possibleDirs = ['top', 'right', 'bottom', 'left'];
  let borders = []
  let breakpoints = Array.from(theme.breakpoints); // make a copy
  breakpoints.unshift(0) // adds a starting breakpoint of 0 that rebass assumes

  if (border) {
    border.forEach((str, idx) => {

      // Add a border for the directions
      // specified at each breakpoint
      let activeDirs = str.split(' ').map(i => i.trim());
      activeDirs.forEach(v => {
        borders.push(`@media (min-width: ${breakpoints[idx]}em) {
                        border-${v}: solid 1px ${theme.colors.gray1};
                      }`)
      })

      // Set border to 'none' for directions
      // *not* specified at the given breakpoints
      // to cancel out rules that will apply from earlier breakpoints.
      let inactiveDirs = without(activeDirs, possibleDirs);
      inactiveDirs.forEach(v =>  {
        borders.push(`@media (min-width: ${breakpoints[idx]}em) {
                        border-${v}: none;
                      }`)
      })
    })
  }

  return borders.join(`\n`);
}
