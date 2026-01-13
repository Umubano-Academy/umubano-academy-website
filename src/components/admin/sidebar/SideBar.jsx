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
      } transition-all duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-700/50 flex flex-col relative z-10`}
    >
      {/* Header Logo */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-yellow-400 text-blue-900 flex items-center justify-center rounded-xl">
            <GraduationCap size={28} />
          </div>

          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                Umubano
              </h1>
              <p className="text-xs text-orange-300 dark:text-orange-400">
                Academy
              </p>
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
                  ? "bg-orange-400 text-white shadow-lg shadow-orange-200/25"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800/50"
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
                <item.icon className="w-5 h-5" />

                {!collapsed && (
                  <>
                    <span className="font-medium ml-2">{item.label}</span>
                    {item.count && (
                      <span className="px-2 py-1 rounded-full text-center text-xs text-slate-600 dark:text-slate-300">
                        {item.count}
                      </span>
                    )}
                  </>
                )}
              </div>

              {/* Submenu Arrow */}
              {!collapsed && item.submenu && (
                <span
                  className={`transition-transform ${
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
                        ? "bg-orange-300 text-white"
                        : "text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800/50"
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
