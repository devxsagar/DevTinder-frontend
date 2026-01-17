import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import UserCard from "@/components/feed/UserCard";
import { BASE_URL } from "@/utils/constants";
import { addFeed } from "@/feature/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();

  const feedUsers = useSelector((state) => state.feed);
  // console.log(feedUsers[0]);

  const fetchFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(addFeed(res.data.users));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    <div className="w-full min-h-screen pt-30">
      <div className="w-full  max-w-7xl mx-auto flex items-center justify-center">
        {feedUsers?.length > 0 && <UserCard user={feedUsers[0]} />}
      </div>
    </div>
  );
};

export default Feed;
