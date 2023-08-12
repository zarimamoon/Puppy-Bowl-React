import { Link, Routes, Route } from "react-router-dom"
import AllPlayers from "./components/AllPlayers/AllPlayers";
import PlayerInfo from "./components/PlayerInfo/PlayerInfo";
import AddNewPlayer from "./components/AddNewPlayer";
import "./index.css";

function App() {
  return (
    <>
    <div className="container">
    <nav class="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4 text-white hover:bg-slate-800 transition-all duration-200">
      <Link to="/">HOME</Link>
      <Link to="/players">ALL PLAYERS</Link>
      <Link to="/addnewplayer">ADD NEW PLAYER</Link>
    </nav>
    </div>

        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/players" element={<PlayerInfo />} />
          <Route path="/addnewplayer" element={<AddNewPlayer />} />
        </Routes>
    </>
  );
};

export default App