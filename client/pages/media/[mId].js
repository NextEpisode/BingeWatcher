import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function MediaPage() {
  const [mediaInfo, setMediaInfo] = useState();
  const router = useRouter();
  const { mId, type } = router.query;

  const fetchMediaInfo = async () => {
    if (mId && type) {
      const response = await fetch(
        `https://api.themoviedb.org/3/${type}/${mId}?api_key=468018e64d6cfa119009ede09787dea0&language=en-US`
      );
      const data = await response.json();
      setMediaInfo(data);
    }
  };

  useEffect(() => {
    fetchMediaInfo();
  }, [mId, type]);

  return (
    <div classname="media-page">
      <p className="media-memory">
        {mediaInfo && (
          <div>
            <h1>
              {mediaInfo.title} {mediaInfo.name}
            </h1>
            {mediaInfo.poster_path ? (
              <img
                src={`https:image.tmdb.org/t/p/w200${mediaInfo.poster_path}`}
                alt={`${mediaInfo.title} Poster`}
              />
            ) : (
              <div className="filler-poster"></div>
            )}
            <h3>{mediaInfo.overview}</h3>
            <h4>Runtime: {mediaInfo.runtime} minutes</h4>
            <h4>
              Released: {mediaInfo.release_date}
              {mediaInfo.first_air_date}
            </h4>
            <h4 className="media-format">
              Format: <span>{type}</span>
            </h4>
            <h4>
              Genres:{" "}
              {mediaInfo.genres.map((item) => (
                <div>{item.name}</div>
              ))}
            </h4>
            <h4>
              Production Companies:{" "}
              {mediaInfo.production_companies.map((item) => (
                <div>{item.name}</div>
              ))}
            </h4>
          </div>
        )}
      </p>
      <div className="btn">
        <button> Add to Katalogue </button>
      </div>
    </div>
  );
}
