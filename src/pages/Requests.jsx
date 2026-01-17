import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { BASE_URL } from "@/utils/constants";
import { addConnections } from "@/feature/connectionsSlice";
import { addRequests } from "@/feature/requestsSlice";
import RequestCard from "@/components/RequestCard";

const Requests = () => {
  const receivedRequests = useSelector((state) => state.requests);

  const dispatch = useDispatch();

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(addRequests(res.data.connectionRequests));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!receivedRequests) return;

  console.log(receivedRequests);

  return (
    <div className="min-h-screen  px-4 py-10">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-foreground">
            Connection Requests
          </h1>
          <p className="mt-2 text-muted-foreground">
            People who want to connect with you
          </p>
        </div>

        {/* Cards Grid */}
        {receivedRequests.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {receivedRequests.map((user) => {
              return <RequestCard key={user._id} user={user.fromUserId} />;
            })}
          </div>
        ) : (
          <p className="text-muted-foreground">No connections found</p>
        )}
      </div>
    </div>
  );
};

export default Requests;
