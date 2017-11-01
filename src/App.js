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

import  { Box, Section, Button, TextGradient, InputText, Form }  from './components/atoms'
import  { ContainedSection }  from './components/molecules'
import Icon from "./components/Icon";

import { adjacent, convert, hue } from 'chromatism';
import { colors } from './styleConfig/styleVars';
import {borderHelper} from './styleConfig/mixins'
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
  p {color: ${props => props.theme.colors.gray8};}
`;


// responsive grid cols
const columns = responsiveStyle({
  prop: "columns",
  cssProperty: "grid-template-columns"
});

let Grid = styled(G)`
  ${columns}
  grid-gap: ${props => props.gap  || '1em'};
`;

const textAlign = responsiveStyle({
  prop: "textAlign",
  cssProperty: "text-align"
});


let Cell = styled(C)`
  color: ${props => props.color};
  background: ${props => props.bg};
  overflow: visible; // to allow shadows
  ${space}
  ${props => borderHelper};
  ${textAlign}
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

        {/* Header */}
        <Container maxWidth='90vw'>
          <Box flexDirection="row" py={3}>
            <Box vCenterChildren>My app</Box>
            <Button outline iconRight="arrow-right" caps ml="auto"  show={['none', 'inherit']}>try demo</Button>
            <Button iconRight="user" caps ml={3}>login</Button>
          </Box>
        </Container>

        {/* Hero section */}
        <ContainedSection  maxWidth={'90vw'} py={[3,5,6]} bg={theme.gradient} bgSkew={0}>
            <Grid columns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}>

              <Cell pr={[null, '6em']} color="white">
                <h2>
                  <TextGradient color1={theme.colors.blue2} color2={theme.colors.teal4}>
                    Know your company
                  </TextGradient>
                </h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quae, obcaecati? Itaque, a deleniti cumque fugit nemo magni
                  voluptatum dicta harum. Id voluptatibus vitae architecto,
                  atque provident ducimus harum accusamus nesciunt.
                </p>
              </Cell>

              <Cell>
                <Box bg={"white"} p={4} vSpaceChildren={'true'} shadow={'true'}>

                    <Form handleSubmit={function() {console.log(this.state.formData); }}>
                      <InputText label="Name" name="name" placeholder="Full name"/>
                      <InputText label="Password" type="password" name="password"/>
                      <InputText label="Email" type="email" name="email"/>
                      <Button accent big iconRight="export" caps full mt={2}>Get started</Button>
                    </Form>


                </Box>
              </Cell>

            </Grid>
        </ContainedSection>


        {/* 2-column text */}
        <ContainedSection  maxWidth={'90vw'} py={6}>
            <Grid columns={['1fr', 'repeat(2, 1fr)']}>

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

        {/*------------------------------------------------------
         Split section. Perhaps this should be an organism?
         ----------------------------------------------------- */}
        <ContainedSection  bgSkew={15} maxWidth={['100%', '90vw']} px={0} border={'top bottom'}>

          <Grid columns={["1fr", "1fr 1fr"]} gap={'0em'}>

            <Cell px={4} py={[3, 5]} textAlign={["left", "right"]}>
              <Icon name="bell" size={'5em'} color={theme.colors.teal5} thickness={1.5} />
              <Subhead>
                <TextGradient color1={theme.primary} color2={theme.colors.violet5}>
                  Integrates with everything
                </TextGradient>
              </Subhead>
              <p>Stripe integrates with even the most tricky subscription models. Browse the docs for more info on all subscription features.</p>
            </Cell>

            <Cell px={4} py={[3, 5]} border={['top','left']} bg={`linear-gradient(to right, ${theme.colors.gray0}, white)`}>
              <Icon name="upload" size={'5em'} color={theme.colors.fuschia5} thickness={1.5} />
              <Subhead>Does it with style</Subhead>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore qui iste dicta, deserunt, repellat blanditiis reiciendis fugiat maiores saepe debitis perspiciatis libero accusantium at aspernatur alias recusandae explicabo quae eaque.</p>
            </Cell>

          </Grid>

        </ContainedSection>

        {/*------------------------------------------------------
         Cards
         ----------------------------------------------------- */}
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
