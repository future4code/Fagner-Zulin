import { Button } from "@chakra-ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ButtonLikeOrUnlike(props) {
  const { likeOrUnlike, choice, borderColor, icon, buttonColor } = props;
  return (
    <>
      <Button
        onClick={() => likeOrUnlike(choice)}
        height="60px"
        width="60px"
        borderRadius="100%"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        _active={{
          transform: "scale(0.85)",
        }}
        _focus={{
          boxShadow: `0 0 1px 2px ${borderColor}, 0 1px 1px rgba(0, 0, 0, .15)`,
        }}
        colorScheme={buttonColor}
      >
        <FontAwesomeIcon icon={icon} size="2x" />
      </Button>
    </>
  );
}
