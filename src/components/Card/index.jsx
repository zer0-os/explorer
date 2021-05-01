import styled from "styled-components";

const animationTime = 7;

const ContainerCard = styled.div`
  position: relative;
  perspective: 750px;
`;

const BaseCard = styled.div`
  width: 320px;
  height: 520px;
  background-color: #222222;
  background-image: url("/card/planet.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;
  box-shadow: 0 0 6px 2px rgb(38 230 247 / 30%), 0 35px 25px -15px rgb(0 0 0 / 30%);
  position: relative;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  animation: holoCard ${animationTime}s ease infinite;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-image: linear-gradient(
      115deg,
      transparent 0%,
      rgb(0, 231, 255) 30%,
      rgb(255, 0, 231) 70%,
      transparent 100%
    );
    background-position: 0% 0%;
    background-repeat: no-repeat;
    background-size: 300% 300%;
    mix-blend-mode: color-dodge;
    opacity: 0.25;
    z-index: 1;
    animation: holoGradient ${animationTime}s ease infinite;
  }

  &:after {
    background-image: url("/card/sparkles.gif");
    background-position: center;
    background-size: 150%;
    mix-blend-mode: color-dodge;
    opacity: 1;
    z-index: 2;
    animation: holoSparkle ${animationTime * 2}s ease infinite;
  }

  @keyframes holoSparkle {
    0%,
    5% {
      opacity: 0.25;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: 0.25;
    }
  }

  @keyframes holoGradient {
    0%,
    100% {
      opacity: 0;
      background-position: 0% 0%;
    }
    8% {
      opacity: 0;
    }
    10% {
      background-position: 0% 0%;
    }
    19% {
      background-position: 100% 100%;
      opacity: 0.5;
    }
    35% {
      background-position: 100% 100%;
    }
    55% {
      background-position: 0% 0%;
      opacity: 0.3;
    }
    75% {
      opacity: 0;
    }
  }

  @keyframes holoCard {
    0%,
    100% {
      transform: none;
    }
    25% {
      transform: rotateZ(-2deg) rotateX(-10deg) rotateY(5deg);
    }
    66% {
      transform: rotateZ(2deg) rotateX(10deg) rotateY(-5deg);
    }
  }
`;

const Card = () => {
  return (
    <ContainerCard>
      <BaseCard />
    </ContainerCard>
  );
};

export default Card;
