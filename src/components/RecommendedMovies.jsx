import "../styles/RecommendedMovies.css";
import moviesData from "../data.json";

const recommendedMovies = moviesData.filter((movie) => !movie.isTrending);

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
    <div className="recommended ac-container">
      <h1 className="heading-large">Recommended for you</h1>
      <div className="recommended-movies">
        {recommendedMovies.map((movie) => {
          const { title, rating, year, category, thumbnail } = movie;
          return (
            <div className="recommended-movie" key={title}>
              <div className="thumbnail">
                <img src={thumbnail.regular[imageSize]} alt="" />
                <div className="bookmark"></div>
              </div>
              <div className="properties">
                <span className="body-small">{year}</span>
                <span className="body-small">{rating}</span>
                <span className="body-small">{category}</span>
              </div>
              <p className="heading-extra-small">{title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecommendedMovies;
