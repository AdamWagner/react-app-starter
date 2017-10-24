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
import theme from './styleConfig/theme';




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
        <ContainedSection  maxWidth={'90vw'} py={6} bg={theme.primary} bgSkew={5}>
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
                  <Button rounded primary>View  demo</Button>
                  <Button outline rounded ml={2}>View  demo</Button>
                  <Button secondary rounded>View  demo</Button>
                  <Button outline rounded iconRight="export" ml={2}>Get started</Button>
                </Box>
              </Cell>

            </Grid>
        </ContainedSection>


        <ContainedSection  maxWidth={'90vw'} py={6}>
            <Grid columns={['repeat(2, 1fr)']}>
              <Cell>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, adipisci. Itaque eos maiores consequatur molestias placeat asperiores necessitatibus suscipit, impedit ratione tenetur, totam error nobis vero non laudantium quod quasi.</p>
                <Button secondary rounded mr={2} caps>go back</Button>
                <Button secondary rounded mr={2} iconLeft="bell">cancel</Button>
                <Button rounded primary iconRight="arrow-right">continue</Button>

              </Cell>
              <Cell>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, repellat itaque id nesciunt quidem praesentium reprehenderit quae, aperiam, dolores sunt excepturi sint consectetur quia magnam nulla aliquam in, debitis ipsum!</p>
                <Button outline rounded>View  demo</Button>

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
