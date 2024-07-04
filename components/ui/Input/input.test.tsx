import { fireEvent, render, screen } from "@testing-library/react";

import { Input } from "./input";

describe("Input", () => {
  it("should render the input", () => {
    render(<Input />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should render the input with a placeholder", () => {
    render(<Input placeholder="Search" />);
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });

  it("should render the input with a value", () => {
    render(<Input value="Search" />);
    expect(screen.getByDisplayValue("Search")).toBeInTheDocument();
  });

  it("should render the input with a custom class", () => {
    render(<Input className="custom-class" />);
    expect(screen.getByRole("textbox")).toHaveClass("custom-class");
  });

  it("should call the onChange handler", () => {
    const onChange = jest.fn();
    render(<Input onChange={onChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Search" } });
    expect(onChange).toHaveBeenCalled();
  });

  it("should be disabled", () => {
    render(<Input disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });
});
