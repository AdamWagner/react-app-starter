import {css} from "styled-shortcut-components"; // https://github.com/donavon/styled-shortcuts

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

export const borderHelper = (props) => {
  let borders = []
  if (props.border) {
    props.border.forEach(v => {
      borders.push(`border-${v}: solid 1px ${props.theme.colors.gray1};`)
    })
  }
  return borders.join(`\n`);
}
