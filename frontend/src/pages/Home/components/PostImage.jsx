import React from "react";

const PostImage = ({ imageUrl }) => {
  return (
    <div>
      <img
        src={imageUrl}
        alt="Post"
        className="w-full rounded-lg mb-1 w-[500px] h-[300px]"
      />
    </div>
  );
};

export default PostImage;
