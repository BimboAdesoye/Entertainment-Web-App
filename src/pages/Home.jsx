import "../styles/Home.css";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <div className="ac-container">
      <div className="home">
        <SideBar />
        <div className="home-content cc-container">
          <SearchBar />
          <Trending />
        </div>
      </div>
    </div>
  );
};

export default Home;
