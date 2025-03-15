import styled from "styled-components";

export const Button = styled.a`
  height: 48px;
  background-color: #018762;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 18px;
  color: #f2f2f2;
  font-weight: 700;
  text-align: center;

  &:hover {
    background-color: #007756;
  }

  &:active {
    outline: 2px solid #014c37;
    outline-offset: 3px;
    background-color: #014c37;
  }

  @media (max-width: 340px) {
    font-size: 16px;
  }
`;

export const Header = styled.header`
  background-color: #ebf9f0;
  box-shadow: 0 2px 5px #b2dfd0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterTitle = styled.h3`
  font-size: 18px;
  margin: 24px 0;
  font-weight: bold;
  line-height: 25px;
`;

export const FooterLink = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: regular;
  line-height: 21px;
`;

export const Line = styled.div`
  background-color: #f0f0f0;
  height: 3px;
  width: 100%;
  margin-bottom: 32px;
`;

export const Title = styled.h1`
  font-weight: bold;
  line-height: 58px;
  font-size: 48px;
  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }
  @media (max-width: 340px) {
    font-size: 32px;
    line-height: 38px;
  }
`;

export const Subtitle = styled.h2`
  font-weight: bold;
  line-height: 48px;
  font-size: 40px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 38px;
  }
  @media (max-width: 340px) {
    font-size: 24px;
    line-height: 150%;
  }
`;

export const LineGreen = styled.div`
  background-color: #018762;
  height: 3px;
  max-width: 150px;
  border-radius: 50%;
  margin-bottom: 32px;
  margin: 0 auto 30px;
`;

export const Text = styled.p`
  font-weight: regular;
  line-height: 27px;
  font-size: 18px;
  color: #2d2d2d;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  & span {
    font-weight: bold;
  }
`;

export const Card = styled.div`
  background: #f9f3ff;
  border-radius: 8px;
  box-shadow: 0 2px 5px #f9f3ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
  max-width: 356px;
  height: 342px;
  text-align: center;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CarrouselCard = styled.div`
  background: #f9f3ff;
  border-radius: 8px;
  box-shadow: 0 2px 5px #f9f3ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
  max-width: 320px;
  min-height: 300px;
  text-align: center;
`;

export const PillarCard = styled.div`
  background: linear-gradient(135deg, #f2f2f2, #ebf9f0);
  border-radius: 8px;
  box-shadow: 0 2px 5px #cfcfcf;
  padding: 32px;
  width: 356px;
  text-align: center;
  border: 1px solid #f0f0f0;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 360px) {
    max-width: 300px;
  }
`;

export const CardTitle = styled.h3`
  font-weight: bold;
  line-height: 150%;
  font-size: 24px;
  margin-bottom: 16px;

  @media (max-width: 340px) {
    font-size: 18px;
  }
`;

export const CardArea = styled.p`
  font-weight: regular;
  line-height: 150%;
  font-size: 16px;
  color: #a6a6a6;
  margin-top: -14px;
  margin-bottom: 14px;
  @media (max-width: 340px) {
    font-size: 14px;
  }
`;

export const CardText = styled.p`
  font-weight: regular;
  line-height: 150%;
  font-size: 18px;
  color: #2d2d2d;
  @media (max-width: 340px) {
    font-size: 16px;
  }
`;
