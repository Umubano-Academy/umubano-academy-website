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
    id: "announcements",
    title: "announcements",
    label: "Announcements",
    path: "/admin/announcements",
    icon: MessageCircleMore,
  },
  {
    id: "messages",
    title: "messages",
    label: "Messages",
    path: "/admin/messages",
    icon: MessageCircleMore,
  },
];


export default menuData;
