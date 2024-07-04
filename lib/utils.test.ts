import { cn, sortByDate } from "./utils";

it("cn function should concatenate class names correctly", () => {
  const result = cn("class1", "class2", "class3");
  expect(result).toBe("class1 class2 class3");
});

it("cn function should concatenate class names correctly with arrays", () => {
  const result = cn(["class1", "class2"], "class3");
  expect(result).toBe("class1 class2 class3");
});

it("cn function should concatenate class names correctly with objects", () => {
  const result = cn({ class1: true, class2: true }, "class3");
  expect(result).toBe("class1 class2 class3");
});

// tests the sortByDate function
it("sortByDate function should sort objects by date", () => {
  const objects = [
    { id: 1, date: "2022-01-01" },
    { id: 2, date: "2021-12-31" },
    { id: 3, date: "2022-01-02" },
  ];

  const sortedObjects = objects.sort(sortByDate("date"));

  expect(sortedObjects).toEqual([
    { id: 2, date: "2021-12-31" },
    { id: 1, date: "2022-01-01" },
    { id: 3, date: "2022-01-02" },
  ]);
});
