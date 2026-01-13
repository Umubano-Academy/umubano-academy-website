import React, { useState } from "react";
import { Mail } from "lucide-react";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password for:", email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-start justify-center px-4 pt-24">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
        <h2 className="text-3xl font-bold text-[#FFDE59] text-center mb-6">
          Reset Password
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Enter your email and we will send you a new password.
        </p>

        {submitted ? (
          <div className="text-center space-y-4">
            <p className="text-green-600 font-medium">
              ✅ A new password has been sent to your email!
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 w-full py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition"
            >
              Reset Another Password
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl p-4 pl-12 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full  bg-[#0AB0EE] text-white py-3 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              Send New Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ResetPassword;

