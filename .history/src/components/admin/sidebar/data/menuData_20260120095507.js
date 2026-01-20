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
    title: "Gallery",
    label: "News",
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
    id: "messages",
    title: "messagess",
    label: "Messages",
    path: "/admin/messages",
    icon: MessageCircleMore,
  },
];


export default menuData;
