import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { BASE_URL } from "@/utils/constants";
import { addConnections } from "@/feature/connectionsSlice";
import { addRequests, removeRequest } from "@/feature/requestsSlice";
import RequestCard from "@/components/RequestCard";

const Requests = () => {
  const receivedRequests = useSelector((state) => state.requests);

  const dispatch = useDispatch();

  const handleReviewRequests = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + `/request/review/${status}/${_id}`,
        {},
        { withCredentials: true },
      );

      if (res.data.success) {
        dispatch(removeRequest(_id));
      }
    } catch (err) {
      console.log(err);
    }
  };

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
            {receivedRequests.map((req) => {
              return (
                <RequestCard
                  key={req._id}
                  user={req.fromUserId}
                  handleReviewRequests={handleReviewRequests}
                  requestId={req._id}
                />
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center text-muted-foreground">
            {/* <img
              src="/empty-state.svg"
              alt="No requests"
              className="mb-4 h-24 opacity-80"
            /> */}
            <h3 className="text-sm font-medium text-primary">
              No connection requests yet
            </h3>
            <p className="mt-1 text-xs">
              When someone sends you a request, it’ll appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Requests;
