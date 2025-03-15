"use client";
import React from "react";
import * as S from "../../styles/styles";

export function Pillar() {
  return (
    <section className="py-10 px-5 bg-[#f9f3ff]">
      <S.Subtitle>Nossos Pilares</S.Subtitle>
      <S.LineGreen></S.LineGreen>
      <div className="flex flex-col gap-5 items-center">
        <S.PillarCard>
          <S.CardTitle>Inclusão</S.CardTitle>
          <S.CardText>Atendimento sem discriminação.</S.CardText>
        </S.PillarCard>
        <S.PillarCard>
          <S.CardTitle>Representatividade</S.CardTitle>
          <S.CardText>
            Profissionais preparados para atender a comunidade.
          </S.CardText>
        </S.PillarCard>
        <S.PillarCard>
          <S.CardTitle>Segurança</S.CardTitle>
          <S.CardText>Ambientes acolhedores e confiáveis.</S.CardText>
        </S.PillarCard>
      </div>
    </section>
  );
}
