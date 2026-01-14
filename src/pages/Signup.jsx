import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-2xl border bg-card p-6 shadow-sm">
        <h1 className="mb-6 text-2xl font-semibold text-center">Sign up</h1>

        <form className="space-y-4">
          {/* Email */}
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="text"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
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
            Sign up
          </Button>
        </form>

        {/* Footer links */}
        <div className="mt-6 space-y-3 text-center text-sm">
          {/* <p className="underline cursor-pointer">Forget your password</p> */}
          <p>
            Already have an account?{" "}
            <span className="font-medium underline cursor-pointer" onClick={() => navigate("/login")}>
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
