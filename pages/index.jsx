/* eslint-disable @next/next/link-passhref */
import { useEffect, useState } from "react";
import Link from "next/link";
import Fuse from "fuse.js";

import { userData } from "../data/Userdata";
// import { type } from "os";
// interface Person {
//   name: string;
//   username: string;
//   email: string;
//   password: string;
//   phone: string;
//   website: string;
//   query?: string[] | undefined;
// }
// interface Person {
//   name: string;
//   age: number;
// }
const options = {
  includeScore: true,
  // Search in `author` and in `tags` array
  keys: ["name", "username"],
};

export default function Home() {
  const [query, setQuery] = useState("");

  const fuse = new Fuse(userData, options);
  const result = fuse.search(query);

  console.log(result);
  function onSearch({ currentTarget }) {
    console.log(currentTarget);
    setQuery(currentTarget.value);
  }
  return (
    <div className=" font-bold text-center flex mt-3 flex-col justify-center container mx-auto ">
      <h1 className="text-5xl">Implementation of Fuse.js with Next.js</h1>
      {/* {query?.map((n)=> {
            return(
<div key={n.id}>
  
   </div>
            )
          })} */}
      <div className="bg-gray-400 p-10 flex justify-center items-center flex-col  text-4xl duration-200 rounded-xl my-4 ">
        {result?.map((n) => {
          return (
            <div key={n.item.id}>
              {" "}
              <h1> Name :{n.item.name}</h1>{" "} 
              <p>{n.score}</p>
            </div>
          );
        })}
      </div>

      <div>
        <input
          className="border-2 border-black rounded-xl text-4xl"
          type="text"
          value={query}
          onChange={onSearch}
        />
      </div>
    </div>
  );
}
