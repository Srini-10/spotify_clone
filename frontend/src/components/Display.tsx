import React, { useContext, useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome.tsx";
import DisplayAlbum from "./DisplayAlbum.tsx";
import { PlayerContext } from "../context/PlayerContext.tsx";

const Display = () => {
  const { albumsData } = useContext(PlayerContext);

  const displayRef = useRef(null);
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split("/").pop() : "";

  // Ensure albumsData is an array before using .find()
  const album = Array.isArray(albumsData)
    ? albumsData.find((x) => x._id === albumId)
    : null;
  const bgColor = isAlbum && album ? album.bgColor : "#121212";

  useEffect(() => {
    console.log("albumId:", albumId);
    console.log("albumsData:", albumsData);
    console.log("album:", album);

    if (displayRef.current) {
      displayRef.current.style.background = isAlbum
        ? `linear-gradient(${bgColor}, #121212)`
        : "#121212";
    }
  }, [bgColor, isAlbum, albumId, albumsData]);

  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded-lg bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/Album/:id" element={<DisplayAlbum album={album} />} />
      </Routes>
    </div>
  );
};

export default Display;
