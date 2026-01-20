import React, { useState } from "react";
import menuData from "./data/menuData";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

function SideBar({ collapsed, onToggle, currentPage, onPageChange }) {
  const [expandedItems, setExpandedItems] = useState(new Set(["dashboard"]));

  const toggleExpand = (itemId) => {
    const updated = new Set(expandedItems);
    updated.has(itemId) ? updated.delete(itemId) : updated.add(itemId);
    setExpandedItems(updated);
  };

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-72"
      } transition-all duration-300 ease-in-out bg-white/90 backdrop-blur-xl border-r border-[#0AB0EE]/30 flex flex-col relative z-10`}
    >
      {/* Header Logo */}
      <div className="p-6 border-b border-[#0AB0EE]/30">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-[#FFDE59] text-[#0AB0EE] flex items-center justify-center rounded-xl">
            <GraduationCap size={28} />
          </div>

          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold text-[#0AB0EE]">Umubano</h1>
              <p className="text-xs text-[#7ED956]">Academy</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 space-y-2 p-4 overflow-y-auto">
        {menuData.map((item) => (
          <div key={item.id}>
            {/* Main Menu Item */}
            <Link
              to={item.path}
              className={`w-full flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                currentPage === item.id
                  ? "bg-[#0AB0EE] text-white shadow-lg shadow-[#0AB0EE]/25"
                  : "text-gray-700 hover:bg-[#FFDE59]/20"
              }`}
              onClick={() => {
                if (item.submenu) {
                  toggleExpand(item.id);
                } else {
                  onPageChange(item.id);
                }
              }}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-5 h-5 text-[#0AB0EE]" />

                {!collapsed && (
                  <>
                    <span className="font-medium ml-2">{item.label}</span>
                    {item.count && (
                      <span className="px-2 py-1 rounded-full text-center text-sm bg-[#7ED956]/30 text-[#0AB0EE]">
                        {item.count}
                      </span>
                    )}
                  </>
                )}
              </div>

              {/* Submenu Arrow */}
              {!collapsed && item.submenu && (
                <span
                  className={`transition-transform text-[#0AB0EE] ${
                    expandedItems.has(item.id) ? "rotate-90" : ""
                  }`}
                >
                  ▶
                </span>
              )}
            </Link>

            {/* Submenu */}
            {item.submenu && expandedItems.has(item.id) && !collapsed && (
              <div className="ml-10 mt-1 space-y-1 transition-all duration-300">
                {item.submenu.map((sub) => (
                  <Link
                    key={sub.id}
                    to={sub.path}
                    onClick={() => onPageChange(sub.id)}
                    className={`block p-2 rounded-lg text-sm ${
                      currentPage === sub.id
                        ? "bg-[#7ED956] text-white"
                        : "text-gray-600 hover:bg-[#FFDE59]/20"
                    }`}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default SideBar;
