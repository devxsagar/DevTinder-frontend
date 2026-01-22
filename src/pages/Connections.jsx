import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import ConnectionCard from "@/components/ConnectionCard";
import { addConnections } from "@/feature/connectionsSlice";

const Connections = () => {
  const connections = useSelector((state) => state.connections);

  const dispatch = useDispatch();

  const fetchConnections = async () => {
    const res = await axios.get(import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL + "/user/connections", {
      withCredentials: true,
    });

    if (res.data.success) {
      dispatch(addConnections(res.data.accedptedConections));
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  return (
    <div className="min-h-screen  px-4 py-10">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-foreground">
            Accepted Connections
          </h1>
          <p className="mt-2 text-muted-foreground">
            People you’re successfully connected with
          </p>
        </div>

        {/* Cards Grid */}
        {connections.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {connections.map((user) => {
              return <ConnectionCard key={user._id} user={user} />;
            })}
          </div>
        ) : (
          <p className="text-muted-foreground text-center text-xl">No connections found</p>
        )}
      </div>
    </div>
  );
};

export default Connections;
