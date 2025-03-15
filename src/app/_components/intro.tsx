"use client";
import React from "react";
import DocImage from "../../../public/istockphoto-1083769728-1024x1024.jpg";

import * as S from "../../styles/styles";
import Image from "next/image";

export function Intro() {
  return (
    <section className="relative overflow-hidden px-4">
      <div>
        <Image
          src={DocImage}
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-45 lg:hidden"
        />
      </div>

      <div className="container mx-auto py-7 relative md:py-10 ">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className=" flex flex-col justify-center space-y-5">
            <S.Title>Saúde sem barreiras</S.Title>
            <S.Text>
              Encontre profissionais qualificados para um atendimento acolhedor
              e seguro, feito para a comunidade LGBTQIAPN+.
            </S.Text>

            <div>
              <S.Button href="https://paciente.lacreisaude.com.br/">
                Encontre seu profissional
              </S.Button>
            </div>
          </div>
          <div className="hidden lg:block h-full">
            <Image
              src={DocImage}
              alt="imagem de um médico com a bandeira da comunidade"
              className="object-contain rounded-lg"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
