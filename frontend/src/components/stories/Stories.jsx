import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./stories.scss";
import Drawer from "@mui/material/Drawer";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  // Temporary
  const stories = [
    {
      id: 1,
      name: "John 1",
      img: "https://img.freepik.com/premium-photo/child-imagining-story-book-98_1107970-13006.jpg",
    },
    {
      id: 2,
      name: "John 2",
      img: "https://static.vecteezy.com/system/resources/thumbnails/030/639/789/small_2x/kids-reading-image-hd-free-photo.jpg",
    },
    {
      id: 3,
      name: "John 3",
      img: "https://ik.imagekit.io/storybird/images/63dcf909-3960-4dd2-8467-57241688c676/8_578584002.webp?tr=q-80",
    },
    {
      id: 4,
      name: "John 4",
      img: "https://img.freepik.com/free-photo/fantasy-style-scene-international-day-education_23-2151040288.jpg",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
