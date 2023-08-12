import React, { useState } from "react";

const AddNewPlayer = () => {
  const [breed, setBreed] = useState("");
  const [team, setTeam] = useState("");
  const [add, setAdd] = useState("");

  const handleBreedChange = (event) => {
    setBreed(event.target.value);
  };

  const handleTeamChange = (event) => {
    setTeam(event.target.value);
  };

  const handleAddChange = (event) => {
    setAdd(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setBreed("");
    setTeam("");
    setAdd("");
  };

  return (
    <div class="mb-6">
      <section>
        <h1 className="px-10 text-lg text-white font-bold mt-4">Add New Player</h1>
        <form className="py-2 px-10 text-black mt-3" onSubmit={handleSubmit}>
          <label for="breed" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Breed:</label>
          <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            id="breed"
            value={breed}
            onChange={handleBreedChange}
            placeholder="Enter breed"
          />
          <label for="team" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Team:</label>
          <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            id="team"
            value={team}
            onChange={handleTeamChange}
            placeholder="Enter team"
          />
          <label for="add" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add:</label>
          <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            id="add"
            value={add}
            onChange={handleAddChange}
            placeholder="Enter additional info"
          />
    <div class="flex items-center h-5"></div>
          <button class="flex items-start mb-6 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default AddNewPlayer;