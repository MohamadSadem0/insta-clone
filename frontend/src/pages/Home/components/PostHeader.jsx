import React from "react";
import Image from "./../../../assets/Zoom_BG7_Sudy-jpg.webp";

const PostHeader = ({ username, profilePicture }) => {
  return (
    <div className="flex items-center mb-2  pt-1 ">
      <img
        src={Image  || profilePicture}
        alt="Profile"
        className="w-10 h-10 rounded-full mr-4"
      />
      <p className="font-semibold text-lg">{username}</p>
    </div>
  );
};

export default PostHeader;
