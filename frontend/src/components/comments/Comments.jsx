import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/AuthContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  // Temporary
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repellendus!",
      name: "jony",
      userId: 1,
      profilePic:
        "https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, blanditiis vero eius saepe autem neque!",
      name: "Kies",
      userId: 2,
      profilePic:
        "https://i.etsystatic.com/45049352/r/il/d1eb4f/6027001697/il_300x300.6027001697_8iyk.jpg",
    },
    {
      id: 3,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus asperiores in placeat!",
      name: "Endru",
      userId: 3,
      profilePic:
        "https://blog.photofeeler.com/wp-content/uploads/2017/02/okcupid-is-wrong-mens-dating-profile-photos-smiling-eye-contact.jpg",
    },
    {
      id: 4,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sunt alias qui quaerat voluptatibus ducimus, impedit fugit esse?",
      name: "Kethy",
      userId: 4,
      profilePic:
        "https://png.pngtree.com/png-clipart/20230330/ourmid/pngtree-woman-profile-silhouette-black-png-image_6660698.png",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Write a Comment"/>
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
