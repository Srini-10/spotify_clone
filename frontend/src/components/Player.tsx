import React, { useContext } from "react";
import { assets } from "../assets/assets.js";
import { PlayerContext } from "../context/PlayerContext.tsx";

const Player = () => {
  const {
    audioRef,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    track,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);

  return track ? (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      {/* Audio element */}
      <audio ref={audioRef} src={track.file} preload="metadata"></audio>

      <div className="hidden lg:flex items-center gap-4">
        <img
          className="w-12 rounded-lg"
          src={track.image}
          alt={`${track.name} cover`}
        />
        <div>
          <p>{track.name}</p>
          <p className="text-xs">{track.desc.slice(0, 40)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt="Shuffle"
            aria-label="Shuffle"
          />
          <img
            onClick={previous}
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt="Previous Track"
            aria-label="Previous Track"
          />
          {playStatus ? (
            <img
              onClick={pause}
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
              alt="Pause"
              aria-label="Pause"
            />
          ) : (
            <img
              onClick={play}
              className="w-4 cursor-pointer"
              src={assets.play_icon}
              alt="Play"
              aria-label="Play"
            />
          )}
          <img
            onClick={next}
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt="Next Track"
            aria-label="Next Track"
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.loop_icon}
            alt="Loop"
            aria-label="Loop"
          />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[12px] text-neutral-300">
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            onClick={seekSong}
            ref={seekBg}
            className="w-[55vw] max-w-[475px] bg-neutral-600 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-white hover:bg-green-500 rounded-full"
            />
          </div>
          <p className="text-[12px] text-neutral-300">
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-3.5 opacity-75">
        <img
          className="w-4"
          src={assets.plays_icon}
          alt="Play Count"
          aria-label="Play Count"
        />
        <img
          className="w-4"
          src={assets.mic_icon}
          alt="Lyrics"
          aria-label="Lyrics"
        />
        <img
          className="w-4"
          src={assets.queue_icon}
          alt="Queue"
          aria-label="Queue"
        />
        <img
          className="w-4"
          src={assets.speaker_icon}
          alt="Speaker"
          aria-label="Speaker"
        />
        <img
          className="w-4"
          src={assets.volume_icon}
          alt="Volume"
          aria-label="Volume"
        />
        <div className="w-20 bg-slate-50 h-1 rounded-lg"></div>
        <img
          className="w-4"
          src={assets.mini_player_icon}
          alt="Mini Player"
          aria-label="Mini Player"
        />
        <img
          className="w-4"
          src={assets.zoom_icon}
          alt="Fullscreen"
          aria-label="Fullscreen"
        />
      </div>
    </div>
  ) : null;
};

export default Player;
