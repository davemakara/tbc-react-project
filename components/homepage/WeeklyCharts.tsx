"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useI18n } from "../../locales/client";

import SpotifyLogo from "../../public/Spotify_icon-icons.com_66783.png";

interface Song {
  rank: number;
  artist: string;
  name: string;
  image: string;
}

interface Artist {
  rank: number;
  name: string;
  image: string;
}

const WeeklyCharts = () => {
  const [isclicked, setIsClicked] = useState<boolean>(false);
  const [songsChart, setSongsChart] = useState<Song[]>([]);
  const [artistsChart, setArtistsChart] = useState<Artist[]>([]);
  const [chartContent, setChartContent] = useState<JSX.Element[]>([]);
  const t = useI18n();

  const toggleChartContent = (arg: boolean) => {
    setIsClicked(arg);
  };

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-hot-100/recent.json"
    )
      .then((res) => res.json())
      .then((data) => setSongsChart(data.data.slice(0, 5)));
  }, []);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-artist-100/recent.json"
    )
      .then((res) => res.json())
      .then((data) => setArtistsChart(data.data.slice(0, 5)));
  }, []);

  useEffect(() => {
    if (isclicked) {
      setChartContent(
        artistsChart.map((artist) => (
          <div
            className="h-[70px] md:h-[90px] flex justify-between items-center px-5 text-sm"
            key={artist.rank}
          >
            <p className="w-5">{artist.rank}</p>
            <p className="w-1/5 text-center">{artist.name}</p>
            <span className="w-[150px] flex justify-center">
              <Image
                src={artist.image}
                alt={artist.name}
                width={50}
                height={50}
                className="rounded-sm"
              />
            </span>

            <a
              href={`https://open.spotify.com/search/${artist.name}`}
              target="_blank"
            >
              <Image
                src={SpotifyLogo}
                alt="spotify logo"
                width={40}
                height={40}
              />
            </a>
          </div>
        ))
      );
    } else {
      setChartContent(
        songsChart.map((song) => (
          <div
            className="h-[70px] md:h-[90px] flex justify-between items-center px-5 text-sm"
            key={song.rank}
          >
            <p className="w-5">{song.rank}</p>
            <p className="w-1/5 text-center">{song.artist}</p>
            <p className="w-[150px] text-center">{song.name}</p>
            <Image
              src={song.image}
              alt={song.name}
              width={50}
              height={50}
              className="rounded-sm"
            />
          </div>
        ))
      );
    }
  }, [isclicked, songsChart, artistsChart]);

  console.log(songsChart);

  return (
    <div className="w-full md:w-[600px] lg:w-[700px] xl:w-[550px] xxl:w-[700px] rounded-2xl sm:flex sm:justify-center overflow-x-auto lg:overflow-x-hidden">
      <div className="w-[600px] lg:w-[700px] xl:w-[550px] xxl:w-[700px] bg-red shadow-xl shadow-[#000] rounded-2xl text-[#000] dark:text-white transition-colors duration-500 ease-in-out">
        <h2 className="text-2xl md:text-3xl text-center font-semibold py-6">
          {t("chartHeadline")}
        </h2>

        <div className="w-full">
          <div className="flex">
            <button
              className={`w-[110px] h-[50px] font-semibold tracking-wide ${
                !isclicked
                  ? "bg-mainLightBG dark:bg-mainDarkBG rounded-t-xl"
                  : ""
              }`}
              onClick={() => toggleChartContent(false)}
            >
              {t("songs")}
            </button>
            <button
              className={`w-[110px] h-[50px] font-semibold tracking-wide ${
                isclicked
                  ? "bg-mainLightBG dark:bg-mainDarkBG rounded-t-xl"
                  : ""
              }`}
              onClick={() => toggleChartContent(true)}
            >
              {t("artists")}
            </button>
          </div>
          <div className="bg-mainLightBG dark:bg-mainDarkBG rounded-b-2xl min-h-[350px] md:min-h-[450px]">
            {chartContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyCharts;
