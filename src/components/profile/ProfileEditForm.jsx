import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import UserCard from "../feed/UserCard";
import { toast } from "sonner";
import axios from "axios";
import { BASE_URL } from "@/utils/constants";
import { addUser } from "@/feature/userSlice";
import { Textarea } from "../ui/textarea";

const ProfileEditForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    role: "",
    dateOfBirth: "",
    aboutMe: "",
    location: "",
  });

  const userData = useSelector((state) => state.user);

  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Generic change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addSkill(e);
    }
  };

  const addSkill = (e) => {
    e.preventDefault();
    if (!skillInput.trim()) return;
    setSkills((prev) => {
      if (prev.length < 8) {
        return [...prev, skillInput.trim()];
      } else {
        toast.error("You can only add up to 8 skills", {
          style: {
            background: "#ed0020", // neutral-800
            color: "#fff",
          },
        });
        return prev;
      }
    });
    setSkillInput("");
  };

  const removeSkill = (skill) => {
    setSkills((prev) => prev.filter((s) => s !== skill));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      skills,
    };

    // call update profile API
    try {
      const res = await axios.patch(BASE_URL + "/profile/edit", payload, {
        withCredentials: true,
      });

      if (res?.data?.success) {
        dispatch(addUser(res?.data?.user));
        toast.success(res.data.message, {
          style: {
            background: "#2dc653", 
            color: "#fff",
          }
        });
        navigate("/profile");
      }
    } catch (err) {
      let message = err?.response?.data?.message;
      const errMessage = Array.isArray(message)
        ? message[0]
        : message || "Something went wrong";
      toast.error(errMessage, { style: { background: "#ef233c", color: "#fff" } });
    }
  };

  useEffect(() => {
    if (userData) {
      setFormData({
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        age: userData.age || "",
        gender: userData.gender || "",
        role: userData.role || "",
        dateOfBirth: userData.dateOfBirth || "",
        aboutMe: userData.aboutMe || "",
        location: userData.location || "",
      });

      setSkills(userData.skills || []);
    }
  }, [userData]);

  return (
    <div className="min-h-screen">
      <div className="w-full max-w-7xl mx-auto mt-20 flex max-lg:flex-col max-lg:items-center max-md:gap-12 max-lg:gap-20 justify-between">
        {/* Edit From */}
        <div className="w-full">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-primary">
              Edit Profile
            </h2>
            <p className="text-sm text-muted-foreground">
              Update your personal information and keep your profile up to date.
            </p>
          </div>

          <form
            className="space-y-6 w-full md:w-3/4 lg:w-3/4"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Role */}
            <div className="space-y-1">
              <Label htmlFor="role">Role</Label>
              <Input
                id="role"
                name="role"
                required={true}
                placeholder="Frontend Developer"
                value={formData.role}
                onChange={handleChange}
              />
            </div>

            {/* Age & Location */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  placeholder="22"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Date of Birth & Gender */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <Label>Gender</Label>
                <Select
                  value={formData.gender}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, gender: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input
                  id="dob"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* About Me */}
            <div className="space-y-1">
              <Label htmlFor="aboutMe">About</Label>
              <Textarea
                id="aboutMe"
                name="aboutMe"
                type="text"
                value={formData.aboutMe}
                onChange={handleChange}
              />
            </div>

            {/* Skills */}
            <div className="space-y-1">
              <Label>Skills</Label>

              <div className="mt-2 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="cursor-pointer"
                    onClick={() => removeSkill(skill)}
                  >
                    {skill} ✕
                  </Badge>
                ))}
              </div>

              <div className="mt-3 flex gap-2">
                <Input
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  placeholder="Add up to 8 skills"
                  onKeyDown={(e) => handleKeyDown(e)}
                />
                <Button type="button" variant="outline" onClick={addSkill}>
                  Add
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/profile")}
              >
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </div>

        {/* Card Preview */}
        <div className="w-full">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-primary">
              Card Preview
            </h2>
            <p className="text-sm text-muted-foreground">
              This is how your profile card will appear to others.
            </p>
          </div>
          <div className="w-full flex items-center justify-center">
            <UserCard user={{ ...formData, skills }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditForm;
