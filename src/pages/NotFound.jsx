import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

function NotFound() {

    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
      <div className="max-w-7xl w-full">
        <div className="text-center">
          {/* 404 Number */}
          <h1 className="text-9xl md:text-[12rem] lg:text-[16rem] font-bold text-slate-200 select-none">
            404
          </h1>

          {/* Error Message */}
          <div className="-mt-8 md:-mt-16 lg:-mt-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Page Not Found
            </h2>
            <p className="text-base md:text-lg text-slate-600 mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* Home Button */}
          <Button
            onClick={() => navigate("/feed")}
            className="transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
