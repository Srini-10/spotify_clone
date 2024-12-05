import React, { useContext } from "react";
import Sidebar from "./components/Sidebar.tsx";
import Player from "./components/Player.tsx";
import Display from "./components/Display.tsx";
import { PlayerContext } from "./context/PlayerContext.tsx";

const App = () => {
  const { audioRef, track, songsData } = useContext(PlayerContext);
  return (
    <>
      <div className="bg-black h-screen">
        {songsData.length !== 0 ? (
          <>
            <div className="h-[90%] flex">
              <Sidebar />
              <Display />
            </div>
            <Player />
          </>
        ) : null}
        <audio
          ref={audioRef}
          src={track ? track.file : ""}
          preload="auto"
        ></audio>
      </div>
    </>
  );
};

export default App;
