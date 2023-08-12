import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedPlayers, setSearchedPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const res = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/players");
        const data = await res.json();
        setPlayers(data.data.players);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlayerData();
  }, []);

  useEffect(() => {
    const filteredPlayers = players.filter(player =>
      player.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchedPlayers(filteredPlayers);
  }, [searchText, players]);

  return (
    <>
      <section className="p-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="flex items-center justify-center text-center px-5 text-3xl font-bold lg:text-5xl text-white">
            Puppy Bowl
          </h1>
          
          <form
            className="max-w-xl mx-auto"
            autoComplete="off"
          >
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for a player / breed"
              className="py-2 px-4 rounded shadow w-full bg-slate-400 text-white placeholder-white"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </form>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 my-10 lg:my-20">
          {searchedPlayers.map(player => (
            <Link
              to={`/${player.name}`}
              key={player.id}
              className="bg-slate-700 p-4 rounded hover:bg-slate-600 transition-all duration-200"
            >
              <article>
                <img
                  src={player.imageUrl}
                  alt={player.name}
                  loading="lazy"
                  className="rounded md:h-72 w-full object-cover"
                />
                <h3 className="text-white text-lg font-bold mt-4">
                  {player.name}
                </h3>
                <p className="text-slate-400">Breed: {player.breed}</p>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllPlayers;