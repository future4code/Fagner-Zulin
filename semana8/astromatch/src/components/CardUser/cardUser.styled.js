import styled, { keyframes } from "styled-components";

export const swipeRight = keyframes`
  from {
    opacity: 1;
	  transform: translate(0) rotate(0);
  }

  to {
    opacity: 0;
	  transform: translate(-200px) rotate(-20deg);
  }
`;
export const swipeLeft = keyframes`
  from {
    opacity: 1;
	  transform: translate(0) rotate(0);
  }

  to {
    opacity: 0;
	  transform: translate(200px) rotate(20deg);
  }
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 250px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 2px 10px 0 rgba(117, 117, 117, 0.77);
  animation: ${(props) => props.animation} 0.5s forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Kiwi Maru", serif;
`;

export const FilterBackground = styled.div`
  background-image: ${(props) => `url(${props.photo})`};
  filter: blur(20px);
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Photo = styled.img`
  max-height: 100%;
  position: relative;
  z-index: 1;
`;

export const InfoContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 0;
  z-index: 2;
  min-height: 25%;
  width: 100%;
  padding: 10px;
  color: #ffff;
  text-shadow: 1px 1px 2px black;
`;

export const LineNameAge = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Name = styled.h1`
  font-weight: bold;
  font-size: 1.2em;
  color: #ffff;
  text-shadow: 1px 1px 2px black;
  font-family: "Kiwi Maru", serif;
`;

export const Age = styled.h2`
  margin-left: 5px;
  font-weight: bold;
  font-size: 0.9em;
`;

export const Bio = styled.p`
  font-size: 0.9em;
`;
