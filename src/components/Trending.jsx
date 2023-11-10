// import { useEffect, useState } from "react";
import "../styles/Trending.css";
import moviesData from "../data.json";

const trendingMovies = moviesData.filter((movie) => movie.isTrending);

const Trending = () => {
  const windowWidth = window.innerWidth;

  const breakpoints = {
    small: 480,
    medium: 768,
  };

  let imageSize;

  if (windowWidth < breakpoints.small) {
    imageSize = "small";
  } else if (windowWidth < breakpoints.medium) {
    imageSize = "medium";
  } else {
    imageSize = "large";
  }

  return (
    <div className="trending">
      <p className="heading-large border-danger border">Trending</p>
      <div className="trending-movies">
        {trendingMovies.map((trendingMovie) => {
          const { title, year, category, rating, thumbnail } = trendingMovie;
          return (
            <div
              className="trending-movie"
              key={title}
              style={{
                backgroundImage: `url(${thumbnail.trending[imageSize]})`,
              }}
            >
              <div className="dropdown">
                <div className="properties">
                  <p className="body-medium">{category}</p>
                  <p className="body-medium">{year}</p>
                  <p className="body-medium">{rating}</p>
                </div>
                <p className="heading-small">{title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
