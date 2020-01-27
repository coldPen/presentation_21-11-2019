// Import React
import React from "react";

import styled from "react-emotion";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import image1 from "./img/image1.png";
import image2 from "./img/image2.png";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#F4F2F3",
    secondary: "#1F2022",
    tertiary: "#CC3F0C",
    quaternary: "#93B7BE",
    quinary: "#593F62"
  },
  {
    primary: { name: "Space Mono", googleFont: true },
    secondary: { name: "Work Sans", googleFont: true }
  }
);

const CustomQuote = styled(Quote)`
  font-weight: 400;
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="tertiary">
            Développement web
          </Heading>
          <Text margin="20px 0 20px" textColor="secondary" size={1} bold>
            X
          </Text>
          <Heading size={4} caps lineHeight={1} textColor="tertiary">
            Sobriété énergétique
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <BlockQuote>
            <CustomQuote textSize="2rem" textColor="primary">
              Le numérique émet aujourd'hui 4&nbsp;% des gaz à effet de serre du
              monde, soit davantage que le transport aérien civil. Cette part
              pourrait doubler d’ici 2025 pour atteindre 8&nbsp;% du total –
              soit la part actuelle des émissions des voitures. Tandis que la
              contrainte climatique impose une baisse drastique des émissions
              mondiales de gaz à effet de serre dans les prochaines années, le
              numérique accroît sa consommation d'énergie de 9&nbsp;% par an.
            </CustomQuote>
            <Cite textSize="0.816326530612rem" textColor="primary">
              CLIMAT : L'INSOUTENABLE USAGE DE LA VIDÉO EN LIGNE | Un cas
              pratique pour la sobriété numérique - The Shift Project
            </Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Pourquoi cette croissance des G.E.S. via le numérique ?
          </Heading>
          <List>
            <Appear>
              <div>
                <ListItem>Problème non perceptible (le "cloud")</ListItem>
              </div>
            </Appear>
            <Appear>
              <div>
                <ListItem>Effet rebond (efficacité ≠ sobriété)</ListItem>
              </div>
            </Appear>
            <Appear>
              <div>
                <ListItem>Designs addictifs</ListItem>
              </div>
            </Appear>
            <Appear>
              <div>
                <ListItem>
                  Complexité / abstraction croissante de l'outillage de
                  développement
                </ListItem>
              </div>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={5} margin="0 0 40px" textColor="tertiary">
            Site statique VS Site dynamique
          </Heading>
          <Image src={image1} />
          <Text textSize="1rem" textColor="quaternary">
            Source :
            https://www.toptal.com/front-end/static-site-generators-comparison-2018
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={5} margin="0 0 40px" textColor="tertiary">
            Générateur de site statique
          </Heading>
          <Image src={image2} />
          <Text textSize="1rem" textColor="quaternary">
            Source :
            https://www.toptal.com/front-end/static-site-generators-comparison-2018
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={5} margin="0 0 40px" textColor="tertiary">
            Autres tactiques
          </Heading>
          <List textColor="quaternary">
            <Appear>
              <div>
                <ListItem>Optimisation maximale des ressources</ListItem>
              </div>
            </Appear>
            <Appear>
              <div>
                <ListItem>Sobriété technique</ListItem>
              </div>
            </Appear>
            <Appear>
              <div>
                <ListItem>Limitation des outils d'analyse</ListItem>
              </div>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} caps lineHeight={1} textColor="primary">
            Au final :
          </Heading>
          <List textColor="primary">
            <ListItem>un site moins énergivore...</ListItem>
            <Appear>
              <div>
                <ListItem>... et beaucoup plus rapide</ListItem>
              </div>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="quinary">
          <Heading size={6} textColor="quaternary">
            Mes missions en tant que développeur web:
          </Heading>
          <List textColor="primary">
            <Appear>
              <div>
                <ListItem>
                  Innover pour la sobriété sans sacrifier les fonctionnalités
                </ListItem>
              </div>
            </Appear>
            <Appear>
              <div>
                <ListItem>
                  Sensibiliser aux principes et techniques de la sobriété
                  numérique
                </ListItem>
              </div>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={6} textColor="quaternary">
            La suite : objectifs, réseaux ?
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
