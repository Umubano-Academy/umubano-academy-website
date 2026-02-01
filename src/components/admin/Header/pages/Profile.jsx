import React, { useEffect, useState } from "react";
import api from "../../../../services/api";
import Swal from "sweetalert2";

function Profile() {
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [profile, setProfile] = useState(null);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  // 🔹 Fetch profile
  const fetchProfile = async () => {
    try {
      setLoading(true);
      const res = await api.get("/api/auth/profile");
      const data = res.data.data;

      setProfile(data);
      setFormData({
        username: data.user_name,
        email: data.email,
      });
    } catch (err) {
      Swal.fire("Error", "Failed to load profile", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // 🔹 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔹 Update profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await api.put("/api/auth/update-profile", {
        username: formData.username,
        email: formData.email,
      });

      const updatedUser = res.data.data;

      // Update stored user info
      localStorage.setItem("user", JSON.stringify(updatedUser));
      sessionStorage.setItem("user", JSON.stringify(updatedUser));

      Swal.fire({
        icon: "success",
        title: "Profile Updated",
        text: "Your profile has been updated successfully",
        timer: 2000,
        showConfirmButton: false,
      });

      setProfile(updatedUser);
    } catch (err) {
      Swal.fire(
        "Error",
        err.response?.data?.message || "Failed to update profile",
        "error"
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px] text-gray-500">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-[#0AB0EE] mb-6">
        My Profile
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#0AB0EE] focus:outline-none"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#0AB0EE] focus:outline-none"
            required
          />
        </div>

        {/* Roles (read-only) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Roles
          </label>
          <input
            type="text"
            value={profile.roles.join(", ")}
            disabled
            className="w-full border border-gray-200 bg-gray-100 rounded-xl p-3 text-gray-500 cursor-not-allowed"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-[#0AB0EE] text-white py-3 rounded-2xl font-semibold hover:shadow-xl transition disabled:opacity-50"
        >
          {submitting ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
}

export default Profile;

