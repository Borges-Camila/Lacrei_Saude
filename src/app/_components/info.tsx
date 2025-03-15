"use client";
import React from "react";
import { Card } from "./components/card";

export function Info() {
  const cards = [
    {
      title: "Sou profissional da saúde",
      text: "Seja parte da nossa equipe de profissionais da saúde qualificados que priorizam o bem-estar físico e mental de pessoas LGBTQIAPN+.",
      buttonText: "Oferecer atendimento",
      buttonHref: "https://profissional.lacreisaude.com.br/",
    },
    {
      title: "Depoimentos",
      text: "Relatos de pacientes e profissionais sobre experiências de atendimento seguro e respeitoso.",
      buttonText: "Conheça",
      buttonHref: "/testimonials",
    },
    {
      title: "Dúvidas Frequentes",
      text: "Acesse nossa lista de perguntas frequentes e tire suas dúvidas.",
      buttonText: "Acesse",
      buttonHref: "https://lacreisaude.com.br/ajuda/",
    },
  ];

  return (
    <section className="py-14 px-5">
      <div className="flex gap-5 items-center justify-center flex-wrap">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            text={card.text}
            buttonText={card.buttonText}
            buttonHref={card.buttonHref}
          />
        ))}
      </div>
    </section>
  );
}
