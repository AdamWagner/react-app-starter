import React, { Component } from "react";
import { Link } from 'react-router-dom'

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
  background: ${props => props.bg};
  color: darkgray;
  border-bottom: solid 1px gray;
  position: relative;
  z-index:99990;
  padding: 1em;
`;

let Page = styled.div`
  min-height: 100vh;
  color: ${props => props.color};
`;


// responsive grid cols
const columns = responsiveStyle({
  prop: "columns",
  cssProperty: "grid-template-columns"
});

let Grid = styled(G)`
  ${columns}
  grid-gap: ${props => props.gap || '1em'};
`;

let Cell = styled(C)`
  color: ${props => props.color};
  overflow: visible; // to allow shadows
  ${space}
`

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
            <Small>Sm meta text</Small>
          </Box>
        </Card>
      </Cell>
    );

    return (
      <Page color={theme.colors.black}>

        <Container maxWidth='90vw'>
          <Box flexDirection="row" py={3}>
            <Box vCenterChildren>My app</Box>
            <Button outline iconRight="arrow-right" caps ml="auto">try demo</Button>
            <Button iconRight="user" caps ml={3}>login</Button>
          </Box>
        </Container>

        <ContainedSection  maxWidth={'90vw'} py={[3,5,6]} bg={theme.gradient}>
            <Grid columns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}>

              <Cell pr={[null, '6em']} color="white">
                <h2>Know your company</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quae, obcaecati? Itaque, a deleniti cumque fugit nemo magni
                  voluptatum dicta harum. Id voluptatibus vitae architecto,
                  atque provident ducimus harum accusamus nesciunt.
                </p>
              </Cell>

              <Cell>
                <Box bg={"white"} p={4} vSpaceChildren={'true'} shadow={'true'}>
                  <Input p={3} type="password" placeholder="test" />
                  <Input p={3} placeholder="test" />
                  <Input p={3} placeholder="test" />
                  <Button to="/example" accent iconRight="export" caps>Get started</Button>
                </Box>
              </Cell>

            </Grid>
        </ContainedSection>


        <ContainedSection  maxWidth={'90vw'} py={6}>
            <Grid columns={['repeat(2, 1fr)']}>
              <Cell>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, adipisci. Itaque eos maiores consequatur molestias placeat asperiores necessitatibus suscipit, impedit ratione tenetur, totam error nobis vero non laudantium quod quasi.</p>
                <Button secondary mr={2} caps>go back</Button>
                <Button secondary mr={2} iconLeft="bell">cancel</Button>
                <Button iconRight="arrow-right">continue</Button>

              </Cell>
              <Cell>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, repellat itaque id nesciunt quidem praesentium reprehenderit quae, aperiam, dolores sunt excepturi sint consectetur quia magnam nulla aliquam in, debitis ipsum!</p>
                <Button outline>View  demo</Button>

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
