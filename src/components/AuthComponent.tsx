"use client";
import { useState } from "react";
import Button from "./common/Button";
import { useAuth } from "@/context/AuthContext ";
import { useRouter } from "next/navigation";

const AuthPage = () => {
  const { login, signup } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      await signup(formData.email, formData.password);
    } else {
      await login(formData.email, formData.password);
      router.push("/");
    }
  };

  return (
    <section>
      <div className="flex items-center justify-center min-h-screen bg-gradientPattern container">
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-xl font-bold mb-4">
            {isSignUp ? "Sign Up" : "Login"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-2 border rounded text-gray-700"
                required
              />
            )}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 border rounded text-gray-700"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-2 border rounded text-gray-700"
              required
            />

            <Button label={isSignUp ? "Sign Up" : "Login"} />
          </form>
          <p
            className="mt-4 text-white font-semibold cursor-pointer text-sm rounded-xl"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Already have an account? Login" : "New user? Sign up"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
