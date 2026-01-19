import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "@/utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "@/feature/userSlice";
import { toast } from "sonner";

const Signup = () => {
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errMessage, setErrMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignUpData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(BASE_URL + "/signup", signUpData, {
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(addUser(res.data.user));
        toast.info();
        navigate("/profile/edit");
      }
    } catch (err) {
      setErrMessage(err?.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border bg-card p-6 shadow-sm">
        <h1 className="mb-6 text-2xl font-semibold text-center">Sign up</h1>

        <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
          <div className="flex justify-between md:items-center max-sm:flex-col max-sm:space-y-4">
            {/* First Name */}
            <div className="space-y-1">
              <Label htmlFor="firstName"> First Name</Label>
              <Input
                required={true}
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Enter your email"
                value={signUpData.firstName}
                onChange={handleChange}
              />
            </div>

            {/* Last Name */}
            <div className="space-y-1">
              <Label htmlFor="lastName"> Last Name</Label>
              <Input
                required={true}
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Enter your last name"
                value={signUpData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              required={true}
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email"
              value={signUpData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              {/* <span className="flex items-center gap-1 text-sm text-muted-foreground cursor-pointer">
                <EyeOff size={14} /> Hide
              </span> */}
            </div>
            <Input
              required={true}
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={signUpData.password}
              onChange={handleChange}
            />
          </div>

          {/* Remember me */}
          {/* <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-sm font-normal">
              Remember me
            </Label>
          </div> */}

          {/* Terms */}
          <p className="text-xs text-muted-foreground">
            By continuing, you agree to the{" "}
            <span className="underline cursor-pointer">Terms of use</span> and{" "}
            <span className="underline cursor-pointer">Privacy Policy</span>.
          </p>

          {errMessage && (
            <p className="text-sm text-red-400 text-center">
              Error: {errMessage}
            </p>
          )}

          {/* Button */}
          <Button className="w-full rounded-full" size="lg" type="submit">
            Sign up
          </Button>
        </form>

        {/* Footer links */}
        <div className="mt-6 space-y-3 text-center text-sm">
          {/* <p className="underline cursor-pointer">Forget your password</p> */}
          <p>
            Already have an account?{" "}
            <span
              className="font-medium underline cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
