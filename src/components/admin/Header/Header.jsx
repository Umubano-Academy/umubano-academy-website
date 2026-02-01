import React, { useState, useEffect, useRef } from "react";
import { Menu, User, Cog, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function Header({ sideBarCollapsed, onToggleSidebar }) {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef();
  const [userInfo, setUserInfo] = useState({
    user_name: "Guest",
    roles: [],
  });

  // Load user info from storage
  useEffect(() => {
    const loadUserInfo = () => {
      // Try localStorage first, then sessionStorage
      let userData = localStorage.getItem("user") || sessionStorage.getItem("user");
      
      if (userData) {
        try {
          const user = JSON.parse(userData);
          setUserInfo({
            user_name: user.user_name || "Guest",
            roles: user.roles || [],
          });
        } catch (error) {
          console.error("Error parsing user data:", error);
        }
      }
    };

    loadUserInfo();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    setOpenDropdown(null);
  };

  const handleLogout = () => {
    // Clear all stored data
    localStorage.removeItem("token");
    localStorage.removeItem("roles");
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("roles");
    sessionStorage.removeItem("user");
    
    // Redirect to login
    navigate("/login");
  };

  return (
    <div className="bg-white/90 backdrop-blur-xl border-b border-[#0AB0EE]/30 px-6 py-4 relative z-40">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <button
            className="p-2 rounded-lg text-[#0AB0EE] hover:bg-[#FFDE59]/30 transition-colors"
            onClick={onToggleSidebar}
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="hidden md:block">
            <p className="text-xl font-black text-[#0AB0EE]">Admin</p>
            <p className="text-xs font-medium text-[#7ED956]">Dashboard</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3" ref={dropdownRef}>
          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "user" ? null : "user")
              }
              className="flex items-center pl-3 border-l border-[#0AB0EE]"
            >
              <User className="w-5 h-5 text-[#0AB0EE] md:hidden" />

              <div className="hidden md:flex flex-col ml-2 text-left">
                <p className="text-sm font-medium text-[#0AB0EE]">
                  {userInfo?.user_name}
                </p>
                <p className="text-xs text-[#7ED956] capitalize">
                  {userInfo?.roles?.join(", ") || "User"}
                </p>
              </div>
            </button>

            {openDropdown === "user" && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-xl overflow-hidden z-50 border border-[#0AB0EE]/30">
                <Link
                  to="/admin/myprofile"
                  className="flex items-center space-x-2 w-full px-4 py-2 hover:bg-[#FFDE59]/30 transition-colors"
                >
                  <User className="w-4 h-4 text-[#0AB0EE]" /> <span>Profile</span>
                </Link>
                <Link
                 to="/admin/update-password"
                  className="flex items-center space-x-2 w-full px-4 py-2 hover:bg-[#FFDE59]/30 transition-colors"
                >
                  <Cog className="w-4 h-4 text-[#0AB0EE]" /> <span>Settings</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 w-full px-4 py-2 text-red-600 hover:bg-red-100 transition-colors"
                >
                  <LogOut className="w-4 h-4" /> <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;