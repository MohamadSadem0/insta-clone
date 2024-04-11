// import React from "react";
// import PostHeader from "./test/PostHeader";
// import PostImage from "./test/PostImage";
// import PostInteractions from "./test/PostInteractions";

// const Post = ({ post }) => {
//   const { username, profilePicture, imageUrl, likesCount, commentsCount } =post;

//   return (
//     <div className="border border-gray-300 rounded-lg p-4 mb-4">
//       <PostHeader username={username} profilePicture={profilePicture} />
//       <PostImage imageUrl={imageUrl} />
//       <PostInteractions likesCount={likesCount} commentsCount={commentsCount} />
//     </div>
//   );
// };

// export default Post;



import React from "react";
import Timeline from "./components/TimeLine"; 

const Home = () => {
  return (
    <div>
      <h1>Welcome to Your Home Page</h1>
      <Timeline />
    </div>
  );
};

export default Home;
