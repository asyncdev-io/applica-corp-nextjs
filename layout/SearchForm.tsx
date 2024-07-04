import { useLazyGetMoviesFromSearchQuery } from "@/redux/api/searchApi";
import { useState } from "react";
import loader from "@/public/loader.gif";
import Image from "next/image";
import { IMovie } from "@/redux/api/search.types";
import { sortByDate } from "@/lib/utils";
import { Input } from "@/components/ui/Input/input";
import { Button } from "@/components/ui/Button/button";
import MovieCard from "@/components/ui/Card/card";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const [trigger, { data, error, isLoading }] =
    useLazyGetMoviesFromSearchQuery();

  const handleOnSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const res = await trigger({ query }).unwrap();
      console.log("Response from the query:", res);
    } catch (error) {
      console.error("Error occurred while triggering the query:", error);
    }
  };

  return (
    <>
      <div className="flex w-full items-center space-x-2">
        <Input
          type="text"
          placeholder="Search for movie"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        />
        <Button onClick={handleOnSubmit}>Search</Button>
      </div>

      {isLoading && (
        <Image src={loader} alt="Loading" width={150} height={150} />
      )}
      {error && <p>Something went terribly wrong</p>}
      <div
        className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        style={{ display: "grid" }}
      >
        {data?.results &&
          [...data?.results]
            ?.sort(sortByDate<IMovie>("release_date"))
            .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </>
  );
};

export default SearchForm;
