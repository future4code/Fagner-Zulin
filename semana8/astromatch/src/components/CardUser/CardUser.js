import React from "react";
import {
  Card,
  FilterBackground,
  InfoContainer,
  Photo,
  Name,
  LineNameAge,
  Age,
  Bio,
} from "./cardUser.styled";

export default function CardUser(props) {
  const { profile, animation } = props;
  return (
    <Card animation={animation}>
      <FilterBackground photo={profile.photo} />
      <Photo src={profile.photo} />
      <InfoContainer>
        <LineNameAge>
          <Name>{profile.name},</Name>
          <Age>{profile.age}</Age>
        </LineNameAge>
        <Bio>{profile.bio}</Bio>
      </InfoContainer>
    </Card>
  );
}
