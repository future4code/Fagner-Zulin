import { Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faHeart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import CardUser from "../CardUser/CardUser";

const Box = styled.section`
  background-color: white;
  width: 350px;
  height: 500px;
  border: 2px solid #5c1428;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-family: "Love Ya Like A Sister", cursive;
  text-align: center;
  color: white;
  font-size: 2em;
`;

const HeaderContainer = styled.header`
  padding: 5px;
  background-color: #420736;
  width: 100.4%;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;

const CardContainer = styled.div``;

const FooterContainer = styled.footer`
  background-color: #420736;
  width: 100.4%;
  height: 100px;
  margin-bottom: -1px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-top: 2px solid #5c1428;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default function ChoiseContainer() {
  return (
    <Box>
      <HeaderContainer>
        <Title>AstroMatch</Title>
      </HeaderContainer>
      <CardContainer>
        <CardUser />
      </CardContainer>
      <FooterContainer>
        <Button
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
