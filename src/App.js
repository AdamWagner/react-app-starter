import React, { Component } from "react";
import {dissoc} from 'ramda'; // http://ramdajs.com/docs/

import styled, {css} from "styled-shortcut-components"; // https://github.com/donavon/styled-shortcuts
import is, { isNot, isOr, isSomeNot } from "styled-is";
import { responsiveStyle, space } from "styled-system";
import { Grid as G, Cell as C } from "styled-css-grid"; // https://styled-css-grid.js.org/
import {
  Toolbar as t,
  NavLink,
  Container,
  Card,
  Input,
  Box as b,
  BackgroundImage as bg,
  Subhead,
  Small
} from "rebass"; // http://jxnblk.com/rebass/components/

import { adjacent, convert } from 'chromatism';

let color = convert(pink).hex;

let colors = adjacent(40, 3, color).hex;

// let gradient = `linear-gradient(to right bottom ${colors[0]} ${colors[1]} ${colors[2]};`
let gradient = `linear-gradient(-70deg, ${colors[0]} 35%, ${colors[1]} 70%, ${colors[2]} 90%);`

// let gradient = "blue"

console.log(gradient);







let BackgroundImage = styled(bg)`
  &:hover {
    opacity: 0.5;
  }
`;

// include in containers to
// vertically space out their children
let rhythm = is('rhythm')` & > * + * { margin-top: 1em; } `

let Box = styled(b)`
  ${is('centerText')`text-align:center`};
  ${rhythm}
`;

let Toolbar = styled(t)`
  background: none;
  color: darkgray;
  border-bottom: solid 1px gray;
`;

let Page = styled.div`
  background: pink;
  min-height: 100vh;
`;

let Section = styled(b)`background: ${props => props.bg};`;

// responsive grid cols
const columns = responsiveStyle({
  prop: "columns",
  cssProperty: "grid-template-columns"
});

let Grid = styled(G)`${columns};`;

let Cell = styled(C)` ${space} `




const ContainedSection = ( props ) => (
  <Section bg={props.bg}>
    <Container maxWidth={props.maxWidth} {...dissoc('bg', props)}>
      {props.children}
    </Container>
  </Section>
);

let Sm = styled(Small)`display: block;`;

class App extends Component {
  render() {
    let cells = [1, 2, 3, 4];

    let makeCard = c => (
      <Cell>
        <Card bg={'white'}>
          <BackgroundImage
            ratio={1 / 2}
            src={"http://via.placeholder.com/350x150"}
          />
          <Box p={"1em"} centerText>
            <Subhead>Card # {c}</Subhead>
            <Sm>Sm meta text</Sm>
          </Box>
        </Card>
      </Cell>
    );

    return (
      <Page>
        <ContainedSection bg={gradient} maxWidth={'90vw'} py={6}>
            <Grid columns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}>
              <Cell pr={[null, '6em']}>
                <h2>This is TwoPence</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quae, obcaecati? Itaque, a deleniti cumque fugit nemo magni
                  voluptatum dicta harum. Id voluptatibus vitae architecto,
                  atque provident ducimus harum accusamus nesciunt.
                </p>
              </Cell>
              <Cell>
                <Box bg={"white"} p={4} rhythm>
                  <Input p={3} type="password" placeholder="test" />
                  <Input p={3} placeholder="test" />
                  <Input p={3} placeholder="test" />
                </Box>
              </Cell>
            </Grid>
        </ContainedSection>

        <Container maxWidth={"90vw"} py={[3, 4, 6]}>
          <Grid gap={"1em"} columns={["repeat(1,1fr)", "repeat(4,1fr)"]}>
            {cells.map(makeCard)}
          </Grid>
        </Container>
      </Page>
    );
  }
}

export default App;
