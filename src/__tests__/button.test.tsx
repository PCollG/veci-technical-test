import { render, screen } from "@testing-library/react";
import Button from "../components/atoms/button/button";
import "@testing-library/jest-dom";

describe("Button component", () => {
  it("renders the button with the correct text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
