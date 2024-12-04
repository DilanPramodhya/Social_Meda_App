import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  // Temporary
  const posts = [
    {
      id: 1,
      name: "jony",
      userId: 1,
      profilePic:
        "https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repellendus!",
      img: "https://t4.ftcdn.net/jpg/07/23/14/93/360_F_723149335_tA0Fo8zefrHzYlSgXRMYHmBQk7CuWrRd.jpg",
    },
    {
      id: 2,
      name: "Kies",
      userId: 2,
      profilePic:
        "https://i.etsystatic.com/45049352/r/il/d1eb4f/6027001697/il_300x300.6027001697_8iyk.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, blanditiis vero eius saepe autem neque!",
    },
    {
      id: 3,
      name: "Endru",
      userId: 3,
      profilePic:
        "https://blog.photofeeler.com/wp-content/uploads/2017/02/okcupid-is-wrong-mens-dating-profile-photos-smiling-eye-contact.jpg",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus asperiores in placeat!",
      img: "https://wallpapers.com/images/featured/coolest-pictures-88c269e953ar0aw4.jpg",
    },
    {
      id: 4,
      name: "Kethy",
      userId: 4,
      profilePic:
        "https://png.pngtree.com/png-clipart/20230330/ourmid/pngtree-woman-profile-silhouette-black-png-image_6660698.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sunt alias qui quaerat voluptatibus ducimus, impedit fugit esse?",
      img: "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
