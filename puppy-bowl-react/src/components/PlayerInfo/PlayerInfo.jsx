import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const PlayerInfo = () => {
  const { name } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayerInfoData = async () => {
      try {
        const res = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/players/${name}`
        );
        const data = await res.json();
        setPlayer(data.data.player);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlayerInfoData();
  }, [name]);

  if (!player) {
    return <p class="text-white">Loading...</p>;
  }

  return (
    <section className="max-w-5xl mx-auto flex items-center justify-center h-screen">
      <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:place-items-center">
        <article>
          <img src={player.imageUrl} alt={player.name} />
        </article>
        <article>
          <h1 className="text-3xl font-bold text-white mb-8 lg:text-5xl">
            {player.name}
          </h1>

          <ul className="text-sm text-slate-400 leading-loose lg:text-base lg:leading-relaxed">
            <li>
              <span className="font-bold text-slate-200">Team ID:</span>{" "}
              {player.team_id}
            </li>
            <li>
              <span className="font-bold text-slate-200">Status:</span>{" "}
              {player.status}
            </li>
            <li>
              <span className="font-bold text-slate-200">Breed:</span>{" "}
              {player.breed}
            </li>
          </ul>
          <Link
            to="/"
            className="inline-block bg-slate-600 py-2 px-6 rounded mt-8 text-white hover:bg-slate-500 transition-all duration-200"
          >
            Back
          </Link>
        </article>
      </div>
    </section>
  );
};

export default PlayerInfo;
