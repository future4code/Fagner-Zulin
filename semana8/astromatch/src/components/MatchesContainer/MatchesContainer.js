import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Tooltip,
  Avatar,
} from "@chakra-ui/react";
import {
  faHeartBroken,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getMatches } from "../../services/getMatches";
import { Name } from "../CardUser/cardUser.styled";
import { Title } from "../ChooseContainer/chooseContainer.styled";

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  h1 {
    margin-top: 10px;
    font-weight: bold;
    font-family: "Kiwi Maru", serif;
  }
`;

export default function MatchesContainer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [matches, setMaches] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getMatches();
      setMaches(result);
    })();
  }, [setMaches, isOpen]);

  const matchesMap = matches.map((match) => {
    return (
      <Button
        colorScheme="whiteAlpha"
        key={match.id}
        marginTop="10px"
        w="100%"
        h="80px"
      >
        <Avatar name={match.name} src={match.photo} marginRight="18px" />
        <Name>{match.name}</Name>
      </Button>
    );
  });

  return (
    <>
      <Tooltip label="Todos os Matches">
        <Button ref={btnRef} colorScheme="" onClick={onOpen}>
          <FontAwesomeIcon icon={faUserFriends} size="lg" />
        </Button>
      </Tooltip>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent bg="#B23948">
            <DrawerCloseButton color="white" />
            <DrawerHeader>
              <Title>Matches</Title>
            </DrawerHeader>

            <DrawerBody>
              {matches.length > 0 ? (
                matchesMap
              ) : (
                <MessageContainer>
                  <FontAwesomeIcon
                    color="white"
                    icon={faHeartBroken}
                    size="4x"
                  />
                  <h1>Sem matches por enquanto...</h1>
                </MessageContainer>
              )}
            </DrawerBody>

            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
