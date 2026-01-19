import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { DEFAULT_PHOTO_URL } from "@/utils/constants";

const ConnectionCard = ({ user }) => {
  const skillColors = [
    "bg-indigo-100 text-indigo-700",
    "bg-emerald-100 text-emerald-700",
    "bg-amber-100 text-amber-700",
    "bg-purple-100 text-purple-700",
    "bg-sky-100 text-sky-700",
  ];

  const {
    firstName,
    lastName,
    age,
    photoUrl,
    gender,
    role,
    skills,
    aboutMe,
    location,
  } = user;

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white">
      {/* Hero Image */}
      <div className="relative h-56">
        <img
          src={photoUrl || DEFAULT_PHOTO_URL}
          alt="profile"
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

        {/* Name & Role */}
        <div className="absolute bottom-4 left-4">
          <h2 className="text-lg font-semibold text-white">{`${firstName} ${lastName || ""}`}</h2>
          <p className="text-sm text-gray-200">{role}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Skills – Hero */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`rounded-lg px-3 py-1 text-xs font-medium ${
                skillColors[index % skillColors.length]
              }`}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* About */}
        <p className="mt-3 text-sm leading-relaxed text-gray-600">{aboutMe}</p>

        {/* Meta Info */}
        <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
          {age && <span>{age} yrs</span>}

          {age && gender && (
            <span className="h-1 w-1 rounded-full bg-gray-400" />
          )}

          {gender && <span>{gender}</span>}

          {(age || gender) && location && (
            <span className="h-1 w-1 rounded-full bg-gray-400" />
          )}

          {location && <span>{location}</span>}
        </div>
      </div>
    </div>
  );
};

export default ConnectionCard;
