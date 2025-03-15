import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "../src/app/_components/components/card";

describe("Card Component", () => {
  const props = {
    title: "Test Title",
    text: "Test Text",
    buttonText: "Test Button",
    buttonHref: "https://example.com",
  };

  it("deve renderizar o título corretamente", () => {
    render(<Card {...props} />);
    expect(screen.getByText(props.title)).toBeInTheDocument();
  });

  it("deve renderizar o texto corretamente", () => {
    render(<Card {...props} />);
    expect(screen.getByText(props.text)).toBeInTheDocument();
  });

  it("deve renderizar o botão corretamente", () => {
    render(<Card {...props} />);
    expect(screen.getByText(props.buttonText)).toBeInTheDocument();
  });

  it("deve ter o link correto no botão", () => {
    render(<Card {...props} />);
    const button = screen.getByRole("link", { name: props.buttonText });
    expect(button).toHaveAttribute("href", props.buttonHref);
  });
});
