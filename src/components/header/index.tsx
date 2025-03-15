("use client");
import React from "react";

import Link from "next/link";
import * as S from "../../styles/styles";

export function Header() {
  return (
    <S.Header>
      <h2 className="text-3xl font-bold text-[#018762]  lg:text-4xl">
        <Link href="/">Lacrei Saúde</Link>
      </h2>
      <nav>
        <ul className="hidden md:flex items-center justify-center gap-7 ">
          <li className="text-[#018762] font-semibold text-2xl hover:text-[#001912]">
            <Link href="https://lacreisaude.com.br/quem-somos/">Sobre Nós</Link>
          </li>
          <li className="text-[#018762] font-semibold text-2xl hover:text-[#001912]">
            <Link href="/testimonials">Depoimentos</Link>
          </li>
          <li className="text-[#018762] font-semibold text-2xl hover:text-[#001912]">
            <Link href="https://lacreisaude.com.br/ajuda/">Ajuda</Link>
          </li>
        </ul>
      </nav>
      <S.Button>Entrar</S.Button>
    </S.Header>
  );
}
