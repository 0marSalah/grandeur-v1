import { styled, keyframes } from "styled-components";

const VerticalAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(15px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const RotAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(15deg);
  }
  75% {
    transform: rotate(1deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const Vector = styled.img`
  position: absolute;
  top: 10%;
  left: 10%;
  animation: ${VerticalAnimation} 2.5s ease-in-out infinite;
`;

export const Vector1 = styled.img`
  position: absolute;
  bottom: 5%;
  right: 5%;
  animation: ${RotAnimation} 10s ease-in-out infinite;
`;

export const Vector2 = styled.img`
  position: absolute;
  bottom: 5%;
  left: 30%;
  animation: ${RotAnimation} 10s ease-in-out infinite;
`;

export const Vector3 = styled.img`
  position: absolute;
  top: 10%;
  right: 35%;
  animation: ${RotAnimation} 10s ease-in-out infinite;
`;

export const Vector4 = styled.img`
  position: absolute;
  top: 20%;
  right: 0%;
  animation: ${VerticalAnimation} 4s ease-in-out infinite;
`;

export const Vector5 = styled.img`
  /* tringle */
  position: absolute;
  top: 30%;
  right: 35%;
  animation: ${VerticalAnimation} 4s ease-in-out infinite;
`;

export const Vector6 = styled.img`
  position: absolute;
  bottom: 5%;
  left: 5%;
  animation: ${RotAnimation} 10s ease-in-out infinite;
`;
export const Vector7 = styled.img`
  position: absolute;
  top: 45%;
  left: 25%;
  animation: ${RotAnimation} 10s ease-in-out infinite;
`;
export const Vector8 = styled.img``;
