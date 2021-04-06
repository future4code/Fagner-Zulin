import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 250px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 5px 5px 3px #cbd5e0;
`;

const Photo = styled.img`
  height: 100.5%;
  border-radius: 10px;
`;

export default function CardUser() {
  return (
    <Card>
      <Photo src="https://vignette.wikia.nocookie.net/disney/images/0/06/Profile_-_Jack_Skellington.jpeg/revision/latest?cb=20190316145716" />
    </Card>
  );
}
