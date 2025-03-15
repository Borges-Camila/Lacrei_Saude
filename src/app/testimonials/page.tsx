import React from "react";
import { Intro } from "./_components/Intro/intro";
import TestimonialsSection from "./_components/testimonials/components/TestimonialsSection";
import {
  pacientsTestimonials,
  professionalsTestimonials,
} from "@/data/testimonials";

export default function Testimonials() {
  return (
    <main>
      <Intro />
      <TestimonialsSection
        title="Depoimentos dos Nossos Pacientes"
        testimonials={pacientsTestimonials}
      />
      <TestimonialsSection
        title="Depoimentos dos Nossos Profissionais"
        testimonials={professionalsTestimonials}
      />
    </main>
  );
}
