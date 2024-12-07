import { render, screen } from "@testing-library/react";
import ListItem from "../components/atoms/listItem/listItem";
import "@testing-library/jest-dom";

describe("ListItem component", () => {
  it("renders the list item with the correct text", () => {
    render(<ListItem item={"item 1"} />);
    expect(screen.getByText("item 1")).toBeInTheDocument();
  });
});
