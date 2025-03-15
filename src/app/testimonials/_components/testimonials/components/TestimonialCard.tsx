"use client";

import React from "react";

import * as S from "../../../../../styles/styles";

type CardProps = {
  name: string;
  testimonial: string;
  area?: string;
};

const TestimonialCard: React.FC<CardProps> = ({ name, testimonial, area }) => {
  return (
    <S.CarrouselCard>
      <S.CardTitle className="text-[#018762]">{name}</S.CardTitle>
      {area && <S.CardArea>{area}</S.CardArea>}
      <S.CardText>{testimonial}</S.CardText>
    </S.CarrouselCard>
  );
};

export default TestimonialCard;
