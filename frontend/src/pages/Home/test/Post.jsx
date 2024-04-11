import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRegHeart, FaHeart } from "react-icons/fa"; 
import { Link } from "react-router-dom"; 
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";


const Post = ({ post, currentUser }) => {
  const {
    id,
    username,
    location,
    imageUrl,
    caption,
    likes: initialLikes,
    comments,
  } = post;

  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(initialLikes.some((like) => like.user_id === currentUser));
  }, [initialLikes, currentUser]);

  const handleLike = async () => {
    try {
      await axios.post(`/like/${id}`);
      setLikes((prevLikes) => [...prevLikes, { user_id: currentUser }]);
      setIsLiked(true);
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleUnlike = async () => {
    try {
      await axios.post(`/unlike/${id}`);
      setLikes((prevLikes) =>
        prevLikes.filter((like) => like.user_id !== currentUser)
      );
      setIsLiked(false);
    } catch (error) {
      console.error("Error unliking post:", error);
    }
  };

  return (
    <div className="post w-550 mx-40 my-30">
      <div className="post__header flex justify-between items-center mb-10">
        <div className="post__headerAuthor flex items-center font-bold">
          <Avatar style={{ marginRight: "10px" }}>
            {username.charAt(0).toUpperCase()}
          </Avatar>{" "}
          <Link to={`/profile/${username}`} className="hover:text-blue-500">
            {username}
          </Link>{" "}
          <span className="text-gray-500 text-sm">• {location}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img src={imageUrl} alt="Post" className="w-full rounded border" />
      </div>
      <div className="post__footer flex items-center justify-between px-6 py-4">
        {isLiked ? (
          <FaHeart
            className="postIcon text-red-500 text-xl cursor-pointer"
            onClick={handleUnlike}
          />
        ) : (
          <FaRegHeart
            className="postIcon text-gray-700 text-xl cursor-pointer hover:text-red-500 transition duration-150 ease-in-out"
            onClick={handleLike}
          />
        )}
        <div>
          <span className="font-bold">{likes.length} likes</span>
          <p className="text-gray-700 text-sm mt-1">{caption}</p>
        </div>
      </div>
      <div className="px-6 py-4">
        <span className="font-bold text-sm">
          View all {comments.length} comments
        </span>
        {comments.slice(0, 2).map((comment, index) => (
          <p key={index} className="text-gray-700 text-sm mt-1">
            <span className="font-bold">{comment.user}</span> {comment.comment}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Post;
