import "../styles/RecommendedMovies.css";
import moviesData from "../data.json";

const recommendedMovies = moviesData.filter((movie) => !movie.isTrending);
console.log(recommendedMovies);


const RecommendedMovies = () => {
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
    <div className="recommended">
      <h1 className="heading-large">Recommended for you</h1>
      <div className="recommended-movies">
        {recommendedMovies.map((movie) => {
          const { title, rating, year, category, thumbnail } = movie;
          return (
            <div className="recommended-movie" key={title}>
              <img src={thumbnail.regular[imageSize]} alt="" />
              <p>{rating}</p>
              <p>{year}</p>
              <p>{category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecommendedMovies;
