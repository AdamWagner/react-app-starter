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

let Grid = styled(G)`${columns}`;
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

    return (
      <Page color={theme.colors.black}>

        <Container maxWidth='90vw'>
          <Box flexDirection="row" py={3}>
            <Box>My app</Box>
            <Button to="/" outline iconLeft="arrow-left" caps ml="auto">back home</Button>
            <Button accent iconRight="user" caps ml={3}>login</Button>
          </Box>
        </Container>

        <ContainedSection  maxWidth={'90vw'} py={[3,5,6]} bg={theme.primary}>
            <Grid columns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}>

              <Cell>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quibusdam corporis, id, voluptates ullam vero ab nulla necessitatibus unde maxime rerum nemo, sed ea! Ab numquam natus laborum impedit odio?</p>
              </Cell>
              <Cell>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eveniet dolore ipsa deleniti? Quidem, architecto odit, corporis quasi fugiat magni, minus cum aliquam soluta placeat omnis culpa molestias deserunt repellat!</p>
              </Cell>
              <Cell>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, reiciendis. Iusto magnam fugit, recusandae beatae maxime esse quas laborum illo est accusamus perferendis modi minima, repellendus distinctio impedit dolorem atque?</p>
              </Cell>
              <Cell>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident odio corporis, dolor harum nihil placeat iure dolorem repudiandae molestiae nesciunt. Id aperiam inventore odit suscipit illo reprehenderit officiis vel incidunt.</p>
              </Cell>

            </Grid>

        </ContainedSection>


      </Page>
    );
  }
}

export default App;
