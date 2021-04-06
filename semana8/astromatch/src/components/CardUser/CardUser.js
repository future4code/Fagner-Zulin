import React from "react";
import { Card, Photo } from "./cardUser.styled";

export default function CardUser(props) {
  return (
    <Card animation={props.animation}>
      <Photo src="https://vignette.wikia.nocookie.net/disney/images/0/06/Profile_-_Jack_Skellington.jpeg/revision/latest?cb=20190316145716" />
    </Card>
  );
}
