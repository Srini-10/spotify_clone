import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext.tsx";

const SongItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();
  const { playWithId } = useContext(PlayerContext);

  return (
    <>
      <div
        onClick={() => playWithId(id)}
        className="min-w-[180px] p-2 px-3 rounded-lg cursor-pointer hover:bg-[#ffffff26]"
      >
        <img className="rounded-lg" src={image} alt="" />
        <p className="font-bold mt-2 mb-1">{name}</p>
        <p className="text-slate-200 text-sm">{desc}</p>
      </div>
    </>
  );
};

export default SongItem;