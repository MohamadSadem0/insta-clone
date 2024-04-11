import React from "react";
import Post from "./Post"; 
import Image from "./../../../assets/Zoom_BG7_Sudy-jpg.webp"
const Timeline = () => {
  const dummyPosts = [
    {
      id: 1,
      username: "user1",
      profilePicture: "profile1.jpg",
      imageUrl: {Image},
      likesCount: 10,
      commentsCount: 5,
    },
    {
      id: 2,
      username: "user2",
      profilePicture: "profile2.jpg",
      imageUrl: "image2.jpg",
      likesCount: 15,
      commentsCount: 8,
    },
    
  ];

  return (
    <div className="flex flex-col items-center">
      <h1>Timeline</h1>
      {dummyPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Timeline;
