// PostInteractions.js
import React from "react";
import axios from "axios";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";

const PostInteractions = ({ postId, likesCount, commentsCount }) => {
  const handleLike = async () => {
    try {
      const response = await axios.post(`/posts/${postId}/like`);
      const updatedLikesCount = response.data.likesCount;
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleComment = () => {
  };

  return (
    <div className="flex gap-4">
      <div className="flex items-center" onClick={handleLike}>
        <MdFavoriteBorder size={24} />
        <span className="ml-1">{likesCount}</span>
      </div>
      <div className="flex items-center" onClick={handleComment}>
        <FaRegComment size={22} className="mr-2" />
        <span>{commentsCount}</span>
      </div>
    </div>
  );
};

export default PostInteractions;
