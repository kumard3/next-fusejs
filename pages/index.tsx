/* eslint-disable @next/next/link-passhref */
import { useEffect, useState } from "react";

import Fuse from "fuse.js";

import { userData } from "../data/Userdata";

const options = {
  includeScore: true,

  keys: ["name", "username"],
};

export default function Home() {
  const [query, setQuery] = useState("");

  const fuse = new Fuse(userData, options);
  const result = fuse.search(query);

  console.log(result);
  function onSearch({ currentTarget }: any) {
    console.log(currentTarget);
    setQuery(currentTarget.value);
  }
  return (
    <div className=" font-bold text-center flex mt-3 flex-col justify-center container mx-auto ">
      <h1 className="text-5xl">Implementation of Fuse.js with Next.js</h1>
=
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
