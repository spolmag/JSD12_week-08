import { useState, useEffect } from "react";

export default function SimpleAsyncAwait() {
  const [name, setName] = useState("Loading...");

  //async = tell program can run others next code line between this function working, await = wait till finished
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/10"); //fetch data from url -> keep in variable 'res' *10 pokemaon#
      const data = await res.json(); // convert res to json -> keep in variable 'data'
      setName(data.name); //go to data field 'name'
    };

    //Old style code
    //useEffect (()=>{
    //fetch("https://pokeapi.co/api/v2/pokemon/1")
    //.then((res)=>res.json())
    //.then((data) => setName(data.name));
    //    }, []);

    getData();
  }, []); //,[] mean useEffect work only first time load

  return (
    <div className="flex flex-col items-center gap-2 p-6 bg-gray-800 text-white rounded-xl">
      <h2 className="text-xl font-bold text-yellow-300">Simple async/await</h2>
      <p className="capitalize text-2xl">{name}</p>
    </div>
  );
}
