import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://i0.wp.com/nftartwithlauren.com/wp-content/uploads/2024/02/48-17-jpg.webp?fit=820%2C461&ssl=1"
          alt=""
          className="cover"
        />
        <img src={currentUser.profilePic} alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com" target="blank">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com" target="blank">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com" target="blank">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com" target="blank">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com" target="blank">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>{currentUser.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>Dila.dev</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts />
      </div>
    </div>
  );
};

export default Profile;
