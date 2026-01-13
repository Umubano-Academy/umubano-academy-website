import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    alert("Login submitted!");
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-start justify-center px-4 py-4 pt-24">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
        <h2 className="text-3xl font-bold text-[#FFDE59] text-center mb-6">
          Welcome Back
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Login to your account to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-xl p-4 pl-12 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full border border-gray-300 rounded-xl p-4 pl-12 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 text-gray-600">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="form-checkbox h-4 w-4 text-orange-500"
              />
              <span>Remember me</span>
            </label>
            <Link to="/password-reset" className="text-orange-500 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0AB0EE] text-white py-3 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
