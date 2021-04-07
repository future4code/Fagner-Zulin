import { Button, Tooltip } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faHeart, faRedo } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
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
import { getProfileToChoose } from "../../services/getProfileToChoose";
import { postChoosePerson } from "../../services/postChoosePerson";

export default function ChooseContainer() {
  const [direction, setDirection] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isMatch, setIsMatch] = useState({});

  useEffect(() => {
    (async () => {
      const result = await getProfileToChoose();
      setProfile(result);
    })();
  }, [setProfile, direction]);

  useEffect(() => {
    setDirection(null);
    setProfile(null);
  }, [isMatch]);

  const likeOrUnlike = async (option) => {
    switch (option) {
      case "like":
        setDirection(swipeLeft);
        const choisePositive = { id: profile.id, choice: true };
        const resultPositive = await postChoosePerson(choisePositive);
        setIsMatch(resultPositive);
        console.log(resultPositive);
        break;
      case "unlike":
        setDirection(swipeRight);
        const choiseNegative = { id: profile.id, choice: false };
        const resultNegative = await postChoosePerson(choiseNegative);
        console.log(resultNegative);
        setIsMatch(resultNegative);
        break;
      default:
        break;
    }
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
        {profile ? (
          <CardUser profile={profile} animation={direction} />
        ) : (
          <FontAwesomeIcon icon={faHeart} color="#B23948" spin size="5x" />
        )}
      </CardContainer>
      <FooterContainer>
        <Button
          onClick={() => likeOrUnlike("unlike")}
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
          onClick={() => likeOrUnlike("like")}
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
