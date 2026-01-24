import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { addUser } from "@/feature/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL + "/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      dispatch(addUser(res?.data?.user));

      toast.success(res?.data?.message, {
        description: `Welcome back ${res?.data?.user?.firstName}!`,
      });

      navigate("/");
    } catch (error) {
      const message = error?.response?.data?.message || "Something went wrong";
      setErrMessage(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border bg-card p-6 shadow-sm">
        <h1 className="mb-6 text-2xl font-semibold text-center">Log in</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
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
              id="password"
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
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

          {errMessage && <p className="text-sm text-red-400 text-center">Error: {errMessage}</p>}

          {/* Button */}
          <Button className="w-full rounded-full" size="lg" type="submit">
            Log in
          </Button>
        </form>

        {/* Footer links */}
        <div className="mt-6 space-y-3 text-center text-sm">
          <p className="underline cursor-pointer">Forget your password</p>
          <p>
            Don’t have an account?{" "}
            <span
              className="font-medium underline cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
