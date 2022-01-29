/* eslint-disable @next/next/link-passhref */
import {  useState } from "react";

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
    <div className=" bg-black w-full min-h-screen text-white font-bold text-center flex pt-3 flex-col justify-center ">
      <div className="container mx-auto flex flex-col justify-center items-center ">
        <h1 className="text-5xl">Implementation of Fuse.js with Next.js</h1>

        <div className="bg-gray-400 p-10 min-w-[30rem] flex justify-center items-center flex-col  text-3xl duration-200 rounded-xl my-4 ">
          {result?.map((n) => {
            return (
              <div
                key={n.item.id}
                className="flex flex-col justify-center items-start"
              >
                {" "}
                <h1> Name :{n.item.name}</h1> <p> time:{n.score}</p>
              </div>
            );
          })}
        </div>

        <div>
          <input
            className="border-2 text-black flex  p-[10px] justify-center items-center border-black rounded-xl text-3xl"
            type="text"
            value={query}
            onChange={onSearch}
          />
        </div>
      </div>
    </div>
  );
}
