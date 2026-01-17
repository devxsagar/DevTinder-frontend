import React from "react";
import SocialLinks from "./SocialLinks";
import { DEFAULT_PHOTO_URL } from "@/utils/constants";

const LeftProfileCard = ({ user }) => {
  return (
    user && (
      <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-1 flex flex-col justify-between">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <div className="relative">
            <div className="h-40 w-40 rounded-full bg-secondary p-2">
              <img
                src={
                  user.photoUrl ||
                  DEFAULT_PHOTO_URL
                }
                alt="profile"
                loading="lazy"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Name */}
          <h2 className="mt-4 text-xl font-semibold text-primary">{`${user.firstName} ${user.lastName || ""}`}</h2>
          <p className="text-sm text-muted-foreground">{user.role}</p>

          {/* About */}
          <p className="mt-4 text-sm leading-relaxed text-primary/80">
            {user.aboutMe}
          </p>
        </div>

        {/* Socials Icons */}
        {/* <SocialLinks /> */}
      </div>
    )
  );
};

export default LeftProfileCard;
