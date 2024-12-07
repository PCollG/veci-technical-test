import { render, screen } from "@testing-library/react";
import Card from "../components/atoms/card/card";
import "@testing-library/jest-dom";

describe("Card component", () => {
  it("renders the card with the correct text", () => {
    render(<Card>This is a card</Card>);
    expect(screen.getByText("This is a card")).toBeInTheDocument();
  });
});
