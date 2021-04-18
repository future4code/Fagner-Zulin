import { Button, Tooltip, useToast } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faHeart, faRedo } from "@fortawesome/free-solid-svg-icons";
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
import ToastItsMatch from "../ToastItsMatch/ToastItsMatch";

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
      toast({
        render: () => <ToastItsMatch />,
        duration: 3000,
        isClosable: true,
      });
    }
  }, [isMatch, toast]);

  useEffect(() => {
    if (resultReset.message === "Success") {
      toast({
        title: "Matches limpos",
        description: "Agora você pode começar tudo de novo!",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [resultReset, toast]);

  const like = async () => {
    setDirection(swipeLeft);
    const result = await postChoosePerson({
      id: profile.id,
      choice: true,
    });
    setIsMatch(result);
  };

  const unlike = async () => {
    setDirection(swipeRight);
    const result = await postChoosePerson({
      id: profile.id,
      choice: false,
    });
    setIsMatch(result);
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
          likeOrUnlike={unlike}
          borderColor="#FC8181"
          icon={faTimes}
          buttonColor={"red"}
        />

        <ButtonLikeOrUnlike
          likeOrUnlike={like}
          borderColor="#68D391"
          icon={faHeart}
          buttonColor={"green"}
        />
      </FooterContainer>
    </BoxContainer>
  );
}
