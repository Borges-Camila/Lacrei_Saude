"use client";
import * as S from "../../../../../styles/styles";
import TestimonialsCarousel from "./TestimonialsCarousel";
import React from "react";

type Testimonial = {
  id: number;
  name: string;
  testimonial: string;
  area?: string;
};

type TestimonialsSectionProps = {
  title: string;
  testimonials: Testimonial[];
};

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title,
  testimonials,
}) => {
  return (
    <section className="py-10 px-5">
      <S.Subtitle>{title}</S.Subtitle>
      <S.LineGreen />

      <div className="container mx-auto">
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
