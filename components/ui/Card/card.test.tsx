import { render, screen } from "@testing-library/react";

import Card from "./card";

const mockMovie = {
  id: 1,
  title: "Movie Title",
  poster_path: "/poster.jpg",
  release_date: "2021-01-01",
};

describe("Card", () => {
  it("should render the card", () => {
    render(<Card movie={mockMovie} />);
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("should render the card with the movie title", () => {
    render(<Card movie={mockMovie} />);
    expect(screen.getByText(mockMovie.title)).toBeInTheDocument();
  });

  it("should render the card with the movie release date", () => {
    render(<Card movie={mockMovie} />);
    expect(
      screen.getByText(`Fecha: ${mockMovie.release_date}`)
    ).toBeInTheDocument();
  });

  it("should render the card with the movie poster", () => {
    render(<Card movie={mockMovie} />);
    expect(screen.getByAltText(mockMovie.title)).toBeInTheDocument();
  });

  it("should render the card with a default poster if the movie does not have a poster", () => {
    const movieWithoutPoster = { ...mockMovie, poster_path: null };
    render(<Card movie={movieWithoutPoster} />);
    expect(screen.getByAltText(movieWithoutPoster.title)).toBeInTheDocument();
  });

  it("should show TBD when the release date is blank", () => {
    const movieWithoutReleaseDate = { ...mockMovie, release_date: "" };
    render(<Card movie={movieWithoutReleaseDate} />);
    expect(screen.getByText("Fecha: TBD")).toBeInTheDocument();
  });
});
