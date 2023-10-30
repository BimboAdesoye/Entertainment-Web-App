import { useEffect, useState } from "react";
import "../styles/Trending.css";
import moviesData from "../data.json";

const trendingMovies = moviesData.filter((movie) => movie.isTrending);
console.log(trendingMovies);

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
      <div className="heading-large">Trending</div>
      <div className="d-flex trending-movies">
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
              {/* <img src={thumbnail.trending.small} alt="" /> */}
              <p>{title}</p>
              <p>{category}</p>
              <p>{year}</p>
              <p>{rating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
