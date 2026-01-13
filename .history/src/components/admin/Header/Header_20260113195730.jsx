import React, { useState, useEffect, useRef, useContext } from "react";
import { Menu, Sun, Bell, LogOut, User, Cog } from "lucide-react";

function Header({ sideBarCollapsed, onToggleSidebar }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef();
  const [userInfo, setUserInfo] = useState(null);
  const [currentUser,, setCurrentUser] = useState(null);
  const fetchCurrentUser = async () => {};

  useEffect(() => {
    if (!userInfo) fetchCurrentUser();
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

  return (
    <div className="bg- backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-4 relative z-40">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <button
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            onClick={onToggleSidebar}
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="hidden md:block">
            <p className="text-xl font-black text-slate-800 dark:text-white">
              Admin
            </p>
            <p className="text-xs font-medium text-slate-400 dark:text-slate-400">
              Dashboard
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3" ref={dropdownRef}>
          {/* <button className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Sun className="w-5 h-5" />
          </button> */}

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "user" ? null : "user")
              }
              className="flex items-center pl-3 border-l border-slate-200 dark:border-slate-700"
            >
              {/* Small screen: show only user icon */}
              <User className="w-5 h-5 text-slate-600 dark:text-slate-300 md:hidden" />

              {/* Medium+ screen: show name + role */}
              <div className="hidden md:flex flex-col ml-2 text-left">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {userInfo?.first_name || "Name"}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {userInfo?.roles || "Role"}
                </p>
              </div>
            </button>

            {openDropdown === "user" && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:text-slate-300 dark:bg-slate-800 shadow-xl rounded-xl overflow-hidden z-[300]">
                <button
                  onClick={() => handleNavigate("/marchant/myprofile")}
                  className="flex items-center space-x-2 w-full px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                  <User className="w-4 h-4" /> <span>Profile</span>
                </button>
                <button
                  onClick={() => handleNavigate("/marchant/update-profile")}
                  className="flex items-center space-x-2 w-full px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                  <Cog className="w-4 h-4" /> <span>Settings</span>
                </button>
                <button
                  // onClick={() => {
                  //   logout();
                  //   setOpenDropdown(null);
                  //   navigate("/login", { replace: true });
                  // }}
                  className="flex items-center space-x-2 w-full px-4 py-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-800/30"
                >
                  <LogOut className="w-4 h-4" /> <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
