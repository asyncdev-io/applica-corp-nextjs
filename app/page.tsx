"use client";

import SearchForm from "@/layout/SearchForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10 md:p-24 gap-10">
      <h1 className="text-4xl font-bold text-center">
        Welcome to the Movie App
      </h1>
      <SearchForm />
    </main>
  );
}
