import React, { useEffect, useState } from "react";
import Post from "./Post";

const Seeds = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setCurrentUser(userId);
  }, []);

  return (
    <div className="App">
      <Post
        currentUser={currentUser}
        username="JohnDoe"
        location="New York, USA"
        imageUrl="https://via.placeholder.com/400"
        caption="Had a great time visiting #CentralPark!"
        likes="150"
        comments={[
          { user: "JaneDoe", comment: "Looks fun!" },
          { user: "DoeJohn", comment: "Wish I was there!" },
        ]}
      />
    </div>
  );
};

export default Seeds;
