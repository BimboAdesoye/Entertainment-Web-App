import "../styles/Home.css";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";
import RecommendedMovies from "../components/RecommendedMovies";

const Home = () => {
  return (
    <div className="">
      <div className="home">
        {/* <SideBar /> */}
        <div className="home-content cc-container">
          <SearchBar />
          <Trending />
          <RecommendedMovies/>
        </div>
      </div>
    </div>
  );
};

export default Home;
