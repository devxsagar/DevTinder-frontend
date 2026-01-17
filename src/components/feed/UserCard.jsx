import React from "react";

const UserCard = ({ user }) => {

  const skillColors = [
    "bg-indigo-100 text-indigo-700",
    "bg-emerald-100 text-emerald-700",
    "bg-amber-100 text-amber-700",
    "bg-purple-100 text-purple-700",
    "bg-sky-100 text-sky-700",
  ];

  const { firstName, lastName, age, photoUrl, gender, role, skills, aboutMe, location } = user;

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white">
      {/* Hero Image */}
      <div className="relative h-56">
        <img
          src={photoUrl}
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
          <span className={`h-1 w-1 rounded-full bg-gray-400 ${gender && age ? "" : "hidden"}`} />
          <span>{gender}</span>
          {location && <span className="h-1 w-1 rounded-full bg-gray-400" />}
          <span>{location}</span>
        </div>

        {/* Actions */}
        <div className="mt-4 flex gap-3">
          <button className="flex-1 rounded-lg border border-gray-300 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
            Ignore
          </button>
          <button className="flex-1 rounded-lg bg-gray-900 py-2 text-sm font-medium text-white hover:bg-gray-800">
            Interested
          </button>
        </div>
      </div>  
    </div>
  );
};

export default UserCard;
