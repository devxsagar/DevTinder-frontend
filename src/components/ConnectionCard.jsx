import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const ConnectionCard = ({ user }) => {
  console.log(user);

  const skillColors = [
    "bg-indigo-100 text-indigo-700",
    "bg-emerald-100 text-emerald-700",
    "bg-amber-100 text-amber-700",
    "bg-purple-100 text-purple-700",
    "bg-sky-100 text-sky-700",
  ];

  return (
    <Card className="relative rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-md">
      <div
        className="absolute inset-0 z-0 opacity-50 rounded-2xl"
        style={{
          backgroundImage: `
        linear-gradient(135deg, 
          rgba(248,250,252,1) 0%, 
          rgba(219,234,254,0.7) 30%, 
          rgba(165,180,252,0.5) 60%, 
          rgba(129,140,248,0.6) 100%
        ),
        radial-gradient(circle at 20% 30%, rgba(255,255,255,0.6) 0%, transparent 40%),
        radial-gradient(circle at 80% 70%, rgba(199,210,254,0.4) 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(224,231,255,0.3) 0%, transparent 60%)
      `,
        }}
      />

      <CardContent className="p-6 z-10">
        {/* Avatar */}
        <div className="flex items-center gap-4">
          <img
            src={user.photoUrl}
            alt={user.firstName}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold text-card-foreground">
              {`${user.firstName} ${user.lastName || ""}`}
            </h2>
            <p className="text-sm text-muted-foreground">{user.role}</p>
          </div>
        </div>

        {/* About */}
        <p className="mt-4 text-sm text-muted-foreground">{user.aboutMe}</p>

        {/* Skills */}
        <div className="mt-4 flex flex-wrap gap-2">
          {user.skills.map((skill, index) => (
            <Badge
              key={skill}
              variant="secondary"
              className={`rounded-full ${skillColors[index % skillColors.length]}`}
            >
              {skill}
            </Badge>
          ))}
        </div>

        {/* Location */}
        <div className="mt-4 text-sm font-medium text-primary flex items-center gap-1.5">
          <MapPin className="w-4 h-4" />
          {user.location}
        </div>
      </CardContent>
    </Card>
  );
};

export default ConnectionCard;
