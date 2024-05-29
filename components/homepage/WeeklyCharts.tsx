"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { MUSIC_CHARTS } from "@/constants";

const WeeklyCharts = () => {
  const [isclicked, setIsClicked] = useState<boolean>(false);
  const [chartContent, setChartContent] = useState<JSX.Element[]>(
    MUSIC_CHARTS.albums.map((album) => (
      <div
        className="h-[70px] flex justify-between items-center py-4 px-5 border-b text-sm"
        key={album.id}
      >
        <p className="w-5">{album.id}</p>
        <p className="w-1/5">{album.artist}</p>
        <p className="w-[150px]">{album.title}</p>
        <Image src={album.image} alt={album.title} width={40} height={40} />
      </div>
    ))
  );

  const toggleChartContent = (arg: boolean) => {
    setIsClicked(arg);
  };

  useEffect(() => {
    if (isclicked) {
      setChartContent(
        MUSIC_CHARTS.songs.map((song) => (
          <div
            className="h-[70px] flex justify-between items-center py-4 px-5 border-b text-sm"
            key={song.id}
          >
            <p className="w-5">{song.id}</p>
            <p className="w-1/5">{song.artist}</p>
            <p className="w-[150px]">{song.title}</p>
            <Image src={song.image} alt={song.title} width={40} height={40} />
          </div>
        ))
      );
    } else {
      setChartContent(
        MUSIC_CHARTS.albums.map((album) => (
          <div
            className="h-[70px] flex justify-between items-center py-4 px-5 text-sm"
            key={album.id}
          >
            <p className="w-5">{album.id}</p>
            <p className="w-1/5">{album.artist}</p>
            <p className="w-[150px]">{album.title}</p>
            <Image src={album.image} alt={album.title} width={40} height={40} />
          </div>
        ))
      );
    }
  }, [isclicked]);

  return (
    <div className="w-[600px] sm:w-4/5 lg:w-[700px] xl:w-[500px] xxl:w-[650px] bg-red shadow-xl shadow-[#000] rounded-2xl text-[#000] dark:text-white transition-all duration-500 ease-in-out overflow-x-scroll sm:overflow-x-hidden">
      <h2 className="text-3xl text-center font-semibold py-5">
        Week's Top Picks!
      </h2>

      <div className="w-full">
        <div className="flex">
          <button
            className={`w-[100px] h-[50px] font-semibold tracking-wide ${
              !isclicked ? "bg-mainLightBG dark:bg-mainDarkBG rounded-t-xl" : ""
            }`}
            onClick={() => toggleChartContent(false)}
          >
            Albums
          </button>
          <button
            className={`w-[100px] h-[50px] font-semibold tracking-wide ${
              isclicked ? "bg-mainLightBG dark:bg-mainDarkBG rounded-t-xl" : ""
            }`}
            onClick={() => toggleChartContent(true)}
          >
            Songs
          </button>
        </div>
        <div className="bg-mainLightBG dark:bg-mainDarkBG rounded-b-2xl transition-opacity duration-500 ease-in-out">
          {chartContent}
        </div>
      </div>
    </div>
  );
};

export default WeeklyCharts;
