import React from "react";
import { useNavigate } from "react-router-dom";

import LeftProfileCard from "@/components/profile/LeftProfileCard";
import RightProfileCard from "@/components/profile/RightProfileCard";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
        {" "}
        <p>Please login in first to view your profile </p>{" "}
        <Button
          className=" text-sm font-medium"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary py-10 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-primary">Profile</h1>
            <p className="text-sm text-muted-foreground">
              View all your profile details here.
            </p>
          </div>

          {/* Edit Button */}
          <button
            className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-primary transition hover:bg-accent"
            onClick={() => navigate("/app/profile/edit")}
          >
            Edit Profile
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <LeftProfileCard user={user} />
          <RightProfileCard user={user} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
