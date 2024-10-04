import { dynamicFilter } from "@/cheat/ts/grid-operations";
import React from "react";

interface Person {
  name: string | null;
  age: number | null;
  city: string | null;
}

const sampleData: Person[] = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "Los Angeles" },
  { name: "Charlie", age: 35, city: "New York" },
  { name: "David", age: 40, city: "Chicago" },
  { name: "bogh", age: 40, city: "Chicago" },
];

const Home = () => {
  const result = dynamicFilter(
    { name: "Al", age: 25, city: null } as Person,
    [...sampleData] as Person[]
  );

  console.log(result);

  return <div>Home</div>;
};

export default Home;
