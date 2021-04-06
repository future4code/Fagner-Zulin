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
  width: 250px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 2px 10px 0 rgba(117, 117, 117, 0.77);
  animation: ${(props) => props.animation} 0.5s forwards;
`;

export const Photo = styled.img`
  height: 100.5%;
  border-radius: 10px;
`;
