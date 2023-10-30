import "../styles/SearchBar.css";
import searchIcon from "../assets/icon-search.svg";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <img src={searchIcon} alt="" />
      <form>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Search for movies or TV series"
          className="heading-medium"
        />
      </form>
    </div>
  );
};

export default SearchBar;
