import React, { useState } from "react";
import api from "../../../../services/api";
import Swal from "sweetalert2";

function Settings() {
  const [formData, setFormData] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  const [submitting, setSubmitting] = useState(false);

  // 🔹 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔹 Submit update password
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.new_password !== formData.confirm_password) {
      Swal.fire("Error", "Passwords do not match", "error");
      return;
    }

    setSubmitting(true);

    try {
      const res = await api.put("/api/auth/update-password", {
        current_password: formData.current_password,
        new_password: formData.new_password,
        confirm_password: formData.confirm_password,
      });

      Swal.fire({
        icon: "success",
        title: "Password Updated",
        text: res.data.message || "Password updated successfully",
        timer: 2000,
        showConfirmButton: false,
      });

      // 🔹 Clear form after success
      setFormData({
        current_password: "",
        new_password: "",
        confirm_password: "",
      });
    } catch (err) {
      Swal.fire(
        "Error",
        err.response?.data?.message || "Failed to update password",
        "error"
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-[#0AB0EE] mb-6">
        Update Password
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Current Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Password
          </label>
          <input
            type="password"
            name="current_password"
            value={formData.current_password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#0AB0EE] focus:outline-none"
            required
          />
        </div>

        {/* New Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            New Password
          </label>
          <input
            type="password"
            name="new_password"
            value={formData.new_password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#0AB0EE] focus:outline-none"
            required
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm New Password
          </label>
          <input
            type="password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#0AB0EE] focus:outline-none"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-[#0AB0EE] text-white py-3 rounded-2xl font-semibold hover:shadow-xl transition disabled:opacity-50"
        >
          {submitting ? "Updating..." : "Update Password"}
        </button>
      </form>
    </div>
  );
}

export default Settings;

