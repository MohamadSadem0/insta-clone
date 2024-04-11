import React from "react";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import Image from "./../../../assets/Zoom_BG7_Sudy-jpg.webp";
import PostInteractions from "./PostInteractions";

const Post = ({ post }) => {
  const { username, profilePicture, imageUrl, likesCount, commentsCount } =
    post;

  return (
    <div className=" rounded-lg mb-4 w-[500px] ">
      <PostHeader username={username} profilePicture={profilePicture} />
      <PostImage imageUrl={Image} />
      <PostInteractions likesCount={likesCount} commentsCount={commentsCount} />
    </div>
  );
};

export default Post;
