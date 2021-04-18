import { Box } from "@chakra-ui/layout";
import { faGrinHearts } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ToastItsMatch() {
  return (
    <>
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
    </>
  );
}
