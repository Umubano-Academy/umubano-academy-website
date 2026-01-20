// import React from "react";
// import { stats, bookingGraphData } from "./dashboardData";
// import {
//   Users,
//   ShoppingBag,
//   BadgeDollarSign,
//   TrendingUp,
// } from "lucide-react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// function Dashboard() {
//   return (
//     <div className="p-6 space-y-6">

//       <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
//         Dashboard Overview
//       </h1>

    
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//         {/* USERS CARD */}
//         <div className="p-6 bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50">
//           <div className="flex items-center justify-between mb-3">
//             <Users className="w-8 h-8 text-orange-500" />
//             <span className="text-green-500 text-sm">{stats.users.growth}</span>
//           </div>
//           <h2 className="text-3xl font-bold dark:text-white">
//             {stats.users.thisYear}
//           </h2>
//           <p className="text-slate-500 dark:text-slate-300 text-sm mt-1">
//             Users This Year
//           </p>
//         </div>

//         {/* BOOKINGS CARD */}
//         <div className="p-6 bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50">
//           <div className="flex items-center justify-between mb-3">
//             <ShoppingBag className="w-8 h-8 text-orange-500" />
//             <span className="text-green-500 text-sm">+12%</span>
//           </div>
//           <h2 className="text-3xl font-bold dark:text-white">
//             {stats.bookings.total}
//           </h2>
//           <p className="text-slate-500 dark:text-slate-300 text-sm mt-1">
//             Total Bookings
//           </p>
//         </div>

//         {/* REVENUE CARD */}
//         <div className="p-6 bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50">
//           <div className="flex items-center justify-between mb-3">
//             <BadgeDollarSign className="w-8 h-8 text-orange-500" />
//             <span className="text-green-500 text-sm">{stats.revenue.growth}</span>
//           </div>
//           <h2 className="text-3xl font-bold dark:text-white">
//             {stats.revenue.thisMonth.toLocaleString()} RWF
//           </h2>
//           <p className="text-slate-500 dark:text-slate-300 text-sm mt-1">
//             Revenue This Month
//           </p>
//         </div>
//       </div>

//       {/* BOTTOM 3 SUMMARY CARDS */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//         {/* USER BREAKDOWN */}
//         <div className="p-6 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
//           <h3 className="font-semibold dark:text-white mb-3">User Summary</h3>
//           <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
//             <li>Today: {stats.users.today}</li>
//             <li>Yesterday: {stats.users.yesterday}</li>
//             <li>Last Week: {stats.users.lastWeek}</li>
//             <li>Last Year: {stats.users.lastYear}</li>
//           </ul>
//         </div>

//         {/* BOOKING BREAKDOWN */}
//         <div className="p-6 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
//           <h3 className="font-semibold dark:text-white mb-3">Booking Summary</h3>
//           <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
//             <li>Today: {stats.bookings.today}</li>
//             <li>Pending: {stats.bookings.pending}</li>
//             <li>Completed: {stats.bookings.completed}</li>
//             <li>Cancelled: {stats.bookings.cancelled}</li>
//           </ul>
//         </div>

//         {/* REVENUE BREAKDOWN */}
//         <div className="p-6 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
//           <h3 className="font-semibold dark:text-white mb-3">Revenue Summary</h3>
//           <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
//             <li>Total Revenue: {stats.revenue.total.toLocaleString()} RWF</li>
//             <li>This Month: {stats.revenue.thisMonth.toLocaleString()} RWF</li>
//             <li>Pending: {stats.revenue.pending.toLocaleString()} RWF</li>
//             <li>Last Month: {stats.revenue.lastMonth.toLocaleString()} RWF</li>
//           </ul>
//         </div>
//       </div>

//       {/* BOOKINGS CHART */}
//       <div className="p-6 bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50 rounded-xl shadow-md">
//         <h2 className="text-lg font-bold mb-4 dark:text-white">
//           Bookings This Week
//         </h2>

//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={bookingGraphData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="day" />
//             <YAxis />
//             <Tooltip />
//             <Line
//               type="monotone"
//               dataKey="bookings"
//               stroke="#f97316" 
//               strokeWidth={3}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;




import React from 'react'

function Dashboard() {
  return (
    <div className=' bg-white w-'>
      Umubano Academy Admin Dashboard
    </div>
  )
}

export default Dashboard

