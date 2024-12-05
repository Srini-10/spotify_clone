import React, { useContext } from "react";
import Navbar from "./Navbar.tsx";
import AlbumItem from "./AlbumItem.tsx";
import SongItem from "./SongItem.tsx";
import { PlayerContext } from "../context/PlayerContext.tsx";

const DisplayHome = () => {
  const { songsData, albumsData } = useContext(PlayerContext);

  return (
    <div>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto space-x-4">
          {albumsData.length > 0 ? (
            albumsData.map((item) => (
              <AlbumItem
                key={item._id}
                name={item.name}
                desc={item.desc}
                id={item._id}
                image={item.image}
              />
            ))
          ) : (
            <p>No albums available</p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
        <div className="flex overflow-auto space-x-4">
          {songsData.length > 0 ? (
            songsData.map((item) => (
              <SongItem
                key={item._id}
                name={item.name}
                desc={item.desc}
                id={item._id}
                image={item.image}
              />
            ))
          ) : (
            <p>No songs available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayHome;
