import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { EyeOff } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("asta@gmail.com");
  const [password, setPassword] = useState("Asta@123");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res.data || res.response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
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
