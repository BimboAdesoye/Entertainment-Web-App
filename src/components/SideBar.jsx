import "../styles/SideBar.css";
import Logo from "../assets/logo.svg";
import HomeIcon from '../assets/icon-nav-home.svg';
import MoviesIcon from "../assets/icon-nav-movies.svg";
import TVseriesIcon from "../assets/icon-nav-tv-series.svg";
import BookmarkedIcon from "../assets/icon-nav-bookmark.svg";
import ProfileImg from "../assets/image-avatar.png";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="icons">
        <img src={HomeIcon} alt="" />
        <img src={MoviesIcon} alt="" />
        <img src={TVseriesIcon} alt="" />
        <img src={BookmarkedIcon} alt="" />
      </div>
      <div className="profile">
        <img src={ProfileImg} alt="" />
      </div>
    </div>
  );
};

export default SideBar;
