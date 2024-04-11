import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";

const PostInteractions = ({ likesCount, commentsCount }) => {
  return (
    <div className="flex justify-between w-40">
      <div className="flex items-center">
        {/* <FontAwesomeIcon icon={faHeart} size="lg" color="white"  /> */}
        <MdFavoriteBorder />

        {/* <p className="text-lg">{likesCount}</p> */}
      </div>
      <div className="flex items-center">
        {/* <FontAwesomeIcon icon={faComment} size="lg" color="gray" /> */}
        <FaRegComment className="mr-2" />

        {/* <p className="text-lg">{commentsCount}</p> */}
      </div>
    </div>
  );
};

export default PostInteractions;
