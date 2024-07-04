import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Button } from "./button";

describe("Button", () => {
  it("renders successfully", () => {
    render(<Button disabled>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
