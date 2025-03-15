"use client";
import React from "react";
import CoverImage from "../../../../../public/istockphoto-1445331358-1024x1024.jpg";

import * as S from "../../../../styles/styles";
import Image from "next/image";

export function Intro() {
  return (
    <section className="relative overflow-hidden">
      <div>
        <Image
          src={CoverImage}
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-40 lg:hidden"
        />
      </div>

      <div className="container mx-auto py-7 relative md:py-10 ">
        <article className=" grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className="space-y-5">
            <S.Title>🌈 Histórias de Inclusão</S.Title>
            <S.Text>
              Na Lacrei Saúde, acreditamos que toda pessoa merece um atendimento
              digno, acolhedor e seguro. Conheça histórias de pacientes e
              profissionais que vivenciaram experiências transformadoras em
              nossa rede.
            </S.Text>
          </div>
          <div className="hidden lg:block h-full">
            <Image
              src={CoverImage}
              alt="imagem de um médico com a bandeira da comunidade"
              className="object-contain rounded-lg"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
