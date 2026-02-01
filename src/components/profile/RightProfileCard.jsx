import React from "react";

const RightProfileCard = ({ user }) => {
  return (
    user && (
      <div className="rounded-2xl border border-border bg-background p-6 lg:col-span-2">
        <h3 className="mb-4 text-lg font-semibold text-primary">
          Bio & Other Details
        </h3>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* First Name */}
          <div>
            <p className="text-xs uppercase text-muted-foreground">
              First Name
            </p>
            <p className="mt-1 text-sm font-medium text-primary">
              {user.firstName}
            </p>
          </div>

          {/* Last Name */}
          <div>
            <p className="text-xs uppercase text-muted-foreground">Last Name</p>
            <p className="mt-1 text-sm font-medium text-primary">
              {user.lastName}
            </p>
          </div>

          {/* Email */}
          <div>
            <p className="text-xs uppercase text-muted-foreground">Email</p>
            <p className="mt-1 text-sm font-medium text-primary">
              {user.email}
            </p>
          </div>

          {/* Age */}
          <div>
            <p className="text-xs uppercase text-muted-foreground">Age</p>
            <p className="mt-1 text-sm font-medium text-primary">
              {user.age || "-"}
            </p>
          </div>

          {/* Date of Birth */}
          <div>
            <p className="text-xs uppercase text-muted-foreground">
              Date of Birth
            </p>
            <p className="mt-1 text-sm font-medium text-primary">
              {user?.dateOfBirth?.split("T")[0] || "-"}
            </p>
          </div>

          {/* Gender */}
          <div>
            <p className="text-xs uppercase text-muted-foreground">Gender</p>
            <p className="mt-1 text-sm font-medium text-primary">
              {user.gender || "-"}
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-6">
          <p className="text-xs uppercase text-muted-foreground">Skills</p>
          <div className="mt-1 flex flex-wrap  gap-2">
            {user.skills?.length === 0 ? (
              <p className="text-sm text-primary/80">Add your top skills</p>
            ) : (
              user.skills?.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700"
                >
                  {skill}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default RightProfileCard;
