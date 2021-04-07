import { Button, Tooltip } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faHeart, faRedo } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import CardUser from "../CardUser/CardUser";
import {
  Box,
  Title,
  HeaderContainer,
  CardContainer,
  FooterContainer,
} from "./chooseContainer.styled";
import { swipeLeft, swipeRight } from "../CardUser/cardUser.styled";
import MatchesContainer from "../MatchesContainer/MatchesContainer";

export default function ChooseContainer() {
  const [direction, setDirection] = useState(null);

  const chooseDirection = (direction) => {
    setDirection(direction);
  };

  return (
    <Box>
      <HeaderContainer>
        <Tooltip label="Resetar Matches">
          <Button colorScheme="">
            <FontAwesomeIcon icon={faRedo} size="lg" />
          </Button>
        </Tooltip>
        <Title>AstroMatch</Title>
        <MatchesContainer />
      </HeaderContainer>
      <CardContainer>
        <CardUser animation={direction} />
      </CardContainer>
      <FooterContainer>
        <Button
          onClick={() => chooseDirection(swipeRight)}
          height="60px"
          width="60px"
          borderRadius="100%"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          _active={{
            transform: "scale(0.85)",
          }}
          _focus={{
            boxShadow: "0 0 1px 2px #FC8181, 0 1px 1px rgba(0, 0, 0, .15)",
          }}
          colorScheme="red"
        >
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </Button>
        <Button
          onClick={() => chooseDirection(swipeLeft)}
          height="60px"
          width="60px"
          borderRadius="100%"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          _active={{
            transform: "scale(0.85)",
          }}
          _focus={{
            boxShadow: "0 0 1px 2px #68D391, 0 1px 1px rgba(0, 0, 0, .15)",
          }}
          colorScheme="green"
        >
          <FontAwesomeIcon icon={faHeart} size="2x" />
        </Button>
      </FooterContainer>
    </Box>
  );
}
