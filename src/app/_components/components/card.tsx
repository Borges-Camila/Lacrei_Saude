import * as S from "../../../styles/styles";
import React from "react";

interface CardProps {
  title: string;
  text: string;
  buttonText: string;
  buttonHref: string;
}

export function Card({ title, text, buttonText, buttonHref }: CardProps) {
  return (
    <S.Card>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardText className="mb-8">{text}</S.CardText>
      <S.Button href={buttonHref}>{buttonText}</S.Button>
    </S.Card>
  );
}
