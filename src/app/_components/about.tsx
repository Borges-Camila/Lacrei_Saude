"use client";
import React from "react";
import GloveImage from "../../../public/istockphoto-1257274642-1024x1024.jpg";

import * as S from "../../styles/styles";
import Image from "next/image";

export function About() {
  return (
    <section className="py-10 px-5">
      <S.Subtitle>A Lacrei Saúde</S.Subtitle>
      <S.LineGreen></S.LineGreen>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
          <Image
            src={GloveImage}
            alt="pessoa ajustando as lugas médicas e com uma pulseiras com as cores da bandeira da comunidade"
            fill
            quality={100}
            priority
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <S.Text>
            <span>Saúde com Respeito e Inclusão 🌈 </span>
            Na Lacrei Saúde, conectamos pessoas LGBTQIAPN+ a profissionais
            qualificados, garantindo um atendimento seguro, ético e inclusivo,
            baseado em inclusão, representatividade e segurança.
            <span>
              💙 Juntos, construímos um futuro onde todos recebem o cuidado que
              merecem.
            </span>
          </S.Text>
        </div>
      </div>
    </section>
  );
}
