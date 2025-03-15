("use client");

import React from "react";
import Image from "next/image";
import logo from "../../../public/logo-footer.png";
import facebook from "../../../public/facebook.png";
import instagram from "../../../public/instagram.png";
import linkedin from "../../../public/linkedin.png";
import mail from "../../../public/envelope.png";
import * as S from "../../styles/styles";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="p-[15px] flex-col ">
      <S.Line />
      <div className="flex justify-center items-center md:justify-between lg:justify-around">
        <Image
          src={logo}
          alt="logo da lacrei saúde"
          className="hidden md:flex w-[200px]"
        />
        <div className="flex justify-around mb-2 md:justify-end gap-x-[8px]">
          <Link href="https://www.facebook.com/lacrei.saude/">
            <Image
              src={facebook}
              alt="icon do facebook"
              className="w-[48px] h-[48px]"
            />{" "}
          </Link>
          <Link href="https://www.instagram.com/lacrei.saude/">
            <Image
              src={instagram}
              alt="icon do instagram"
              className="w-[48px] h-[48px]"
            />
          </Link>
          <Link href="https://www.linkedin.com/company/lacrei/">
            <Image
              src={linkedin}
              alt="icon do linkedin"
              className="w-[48px] h-[48px]"
            />
          </Link>
          <Link href="contato@lacreisaude.com.br">
            <Image
              src={mail}
              alt="icon do email"
              className="w-[48px] h-[48px]"
            />
          </Link>
        </div>
      </div>
      <div
        className="flex justify-evenly
       flex-wrap lg:justify-center lg:gap-x-14"
      >
        <div>
          <S.FooterTitle>Lacrei Saúde</S.FooterTitle>
          <S.FooterLink>Quem Somos</S.FooterLink>
          <S.FooterLink>Nosso Propósito</S.FooterLink>
          <S.FooterLink>Missão, Visão e Valor</S.FooterLink>
          <S.FooterLink>Acessibilidade</S.FooterLink>
        </div>
        <div>
          <S.FooterTitle>Saúde</S.FooterTitle>
          <S.FooterLink> Buscar Atendimento</S.FooterLink>
          <S.FooterLink>Oferecer Atendimento</S.FooterLink>
        </div>
        <div>
          <S.FooterTitle>Segurança e Privacidade</S.FooterTitle>
          <S.FooterLink>Política de Privacidade</S.FooterLink>
          <S.FooterLink>Termos de Uso</S.FooterLink>
          <S.FooterLink>Direitos de Titular</S.FooterLink>
        </div>
      </div>
    </footer>
  );
}
