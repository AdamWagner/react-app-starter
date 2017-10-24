import React, { Component } from "react";

import styled, {css} from "styled-components"; // https://github.com/donavon/styled-shortcuts
import is, { isNot, isOr, isSomeNot } from "styled-is";
import { responsiveStyle, space } from "styled-system";
import { Grid as G, Cell as C } from "styled-css-grid"; // https://styled-css-grid.js.org/
import {
  Toolbar as t,
  NavLink,
  Container,
  Card,
  Input,
  BackgroundImage as bg,
  Box as b,
  Subhead,
  Small
} from "rebass"; // http://jxnblk.com/rebass/components/

import  { Box, Section, Button  }  from './components/atoms'
import  { ContainedSection }  from './components/molecules'

import { adjacent, convert, hue } from 'chromatism';
import { colors } from './styleConfig/styleVars';




let BackgroundImage = styled(bg)`
  &:hover {
    opacity: 0.5;
  }
`;

let Toolbar = styled(t)`
  background: none;
  color: darkgray;
  border-bottom: solid 1px gray;
`;

let Page = styled.div`
  ${'' /* background: pink; */}
  min-height: 100vh;
`;


// responsive grid cols
const columns = responsiveStyle({
  prop: "columns",
  cssProperty: "grid-template-columns"
});

let Grid = styled(G)`${columns}`;
let Cell = styled(C)`
  overflow: visible; // to allow shadows
  ${space} `

let Sm = styled(Small)`
  display: block;
  color: ${props => props.theme.main};
`;



/*------------------------------------------------------
 Application
 ----------------------------------------------------- */

class App extends Component {
  render() {
    let cells = [1, 2, 3, 4];

    let makeCard = c => (
      <Cell key={c}>
        <Card bg={'white'}>
          <BackgroundImage
            ratio={1 / 1.5}
            src={"http://via.placeholder.com/350x150"}
          />
          <Box p={"1em"}>
            <Subhead>Card # {c}</Subhead>
            <Sm>Sm meta text</Sm>
          </Box>
        </Card>
      </Cell>
    );

    return (
      <Page>
        <ContainedSection  maxWidth={'90vw'} py={6}>
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
                <Box bg={"white"} p={4} spacechildren={'true'} shadow={'true'}>
                  <Input p={3} type="password" placeholder="test" />
                  <Input p={3} placeholder="test" />
                  <Input p={3} placeholder="test" />
                  <Button round>View  demo</Button>
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
