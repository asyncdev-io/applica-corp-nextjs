import { render, screen } from "@testing-library/react";

import { Button } from "./button";

describe("Button", () => {
  it("should render the button", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should render the button with a variant", () => {
    render(<Button variant="destructive">Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass(
      "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"
    );
  });

  it("should render the button with a size", () => {
    render(<Button size="sm">Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass(
      "h-8 rounded-md px-3 text-xs"
    );
  });

  it("should render the button with a custom class", () => {
    render(<Button className="custom-class">Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });

  it("should render the button as a child", () => {
    render(
      <Button asChild>
        <a href="https://google.com">Click me</a>
      </Button>
    );
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("should call the onClick handler", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    screen.getByRole("button").click();
    expect(onClick).toHaveBeenCalled();
  });

  it("should be disabled", () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
