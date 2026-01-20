import {
  House,

  Users,
  CalendarArrowDown,
  LayoutDashboard,
  MessageCircleMore,
  Newspaper,
} from "lucide-react";

const menuData = [
  {
    id: "dashboard",
    title: "dashboard",
    label: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    id: "events",
    title: "eventss",
    label: "Events",
    path: "/admin/eventss",
    icon: House,
  },
  {
    id: "Gallery",
    title: "gallery",
    label: "Gallery",
    path: "/admin/news",
    icon: Newspaper,
  },
  {
    id: "staff",
    title: "staff",
    label: "Staff",
    path: "/admin/admission",
    icon: CalendarArrowDown,
  },
  
  {
    id: "users",
    title: "users",
    label: "Users",
    path: "/admin/users",
    icon: Users,
  },
  {
    id: "announcements",
    title: "announcements",
    label: "Announcements",
    path: "/admin/announcements",
    icon: MessageCircleMore,
  },
  {
    id: "",
    title: "me",
    label: "Announcements",
    path: "/admin/announcements",
    icon: MessageCircleMore,
  },
];


export default menuData;
