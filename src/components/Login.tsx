import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import eduflowLogo from "figma:asset/562c9501655e2431328e2a15da39cbf3ffbf732b.png";

interface LoginProps {
  onSuccess: () => void;
  onBack: () => void;
  onSwitchToRegister: () => void;
}

export default function Login({ onSuccess, onBack, onSwitchToRegister }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </button>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex justify-center mb-6">
            <img src={eduflowLogo} alt="Eduflow" className="h-12" />
          </div>

          <h1 className="text-center mb-2">Welcome back</h1>
          <p className="text-center text-gray-600 mb-8">
            Sign in to continue to Eduflow
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12 rounded-xl"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-gray-900 hover:bg-gray-800 rounded-xl transition-all duration-300 hover:scale-105 text-white"
            >
              Sign In
            </Button>

            <div className="text-center">
              <span className="text-gray-600">Don't have an account? </span>
              <button
                type="button"
                onClick={onSwitchToRegister}
                className="text-gray-900 hover:text-gray-700"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
