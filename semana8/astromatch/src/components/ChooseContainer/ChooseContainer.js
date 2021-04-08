import { Box, Button, Tooltip, useToast } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faHeart,
  faRedo,
  faGrinHearts,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import CardUser from "../CardUser/CardUser";
import {
  BoxContainer,
  Title,
  HeaderContainer,
  CardContainer,
  FooterContainer,
} from "./chooseContainer.styled";
import { swipeLeft, swipeRight } from "../CardUser/cardUser.styled";
import MatchesContainer from "../MatchesContainer/MatchesContainer";
import { getProfileToChoose } from "../../services/getProfileToChoose";
import { postChoosePerson } from "../../services/postChoosePerson";
import { putClear } from "../../services/putClear";
import ButtonLikeOrUnlike from "../ButtonLikeOrUnlike/ButtonLikeOrUnlike";

export default function ChooseContainer() {
  const [direction, setDirection] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isMatch, setIsMatch] = useState({});
  const [resultReset, setResultReset] = useState({});
  const toast = useToast();

  useEffect(() => {
    (async () => {
      const result = await getProfileToChoose();
      setProfile(result);
    })();
  }, [setProfile, direction]);

  useEffect(() => {
    setDirection(null);
    setProfile(null);
    if (isMatch.isMatch) {
      itsMatch();
    }
  }, [isMatch]);

  useEffect(() => {
    clear();
  }, [resultReset]);

  const clear = () => {
    toast({
      title: "Matches limpos",
      description: "Agora você pode começar tudo de novo!",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const itsMatch = () => {
    toast({
      render: () => (
        <Box
          display="flex"
          alignItems="center"
          color="white"
          p={6}
          bg="#5C1428"
          borderRadius="md"
        >
          <FontAwesomeIcon icon={faGrinHearts} size="2x" />
          <Box fontFamily='"Kiwi Maru", serif' marginLeft="10px">
            <h1>It's a match!</h1>
            <p>Agora vocês podem conversar</p>
          </Box>
        </Box>
      ),
      duration: 3000,
      isClosable: true,
    });
  };

  const likeOrUnlike = async (option) => {
    switch (option) {
      case "like":
        setDirection(swipeLeft);
        const choisePositive = { id: profile.id, choice: true };
        const resultPositive = await postChoosePerson(choisePositive);
        setIsMatch(resultPositive);
        break;
      case "unlike":
        setDirection(swipeRight);
        const choiseNegative = { id: profile.id, choice: false };
        const resultNegative = await postChoosePerson(choiseNegative);
        setIsMatch(resultNegative);
        break;
      default:
        break;
    }
  };

  const resetMatches = async () => {
    const result = await putClear();
    setResultReset(result);
  };

  return (
    <BoxContainer>
      <HeaderContainer>
        <Tooltip label="Resetar Matches">
          <Button onClick={resetMatches} colorScheme="">
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
        <ButtonLikeOrUnlike
          likeOrUnlike={likeOrUnlike}
          choice={"unlike"}
          borderColor="#FC8181"
          icon={faTimes}
          buttonColor={"red"}
        />

        <ButtonLikeOrUnlike
          likeOrUnlike={likeOrUnlike}
          choice={"like"}
          borderColor="#68D391"
          icon={faHeart}
          buttonColor={"green"}
        />
      </FooterContainer>
    </BoxContainer>
  );
}
