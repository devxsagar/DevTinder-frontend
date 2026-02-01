import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import UserCard from "@/components/feed/UserCard";
import { addFeed } from "@/feature/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();

  const feedUsers = useSelector((state) => state.feed);

  const fetchFeed = async () => {
    try {
      const res = await axios.get(import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL + "/feed", {
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

  if(!feedUsers) return

  return (
    <div className="w-full min-h-screen pt-30">
      <div className="w-full  max-w-7xl mx-auto flex items-center justify-center">
        {feedUsers?.length > 0 ? (
          <UserCard user={feedUsers[0]} />
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center text-muted-foreground">
            {/* <img
              src="/empty-state.svg"
              alt="No requests"
              className="mb-4 h-24 opacity-80"
            /> */}
            <h3 className="text-xl font-medium text-primary">
              You’re all caught up 🎉
            </h3>
            <p className="mt-1 text-sm">No new profiles to show right now.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
