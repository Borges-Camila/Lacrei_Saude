import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TestimonialCard from "../src/app/testimonials/_components/testimonials/components/TestimonialCard";

describe("TestimonialCard", () => {
  it("renderiza corretamente o nome, depoimento e área", () => {
    render(
      <TestimonialCard
        name="John Doe"
        testimonial="Ótimo serviço!"
        area="Saúde"
      />
    );

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Ótimo serviço!")).toBeInTheDocument();
    expect(screen.getByText("Saúde")).toBeInTheDocument();
  });
});
