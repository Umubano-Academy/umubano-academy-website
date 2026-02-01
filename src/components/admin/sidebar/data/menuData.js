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
    label: "News",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    id: "events",
    title: "eventss",
    label: "Events",
    path: "/admin/events",
    icon: House,
  },
  {
    id: "Gallery",
    title: "galleryContent",
    label: "Gallery",
    path: "/admin/gellery-content",
    icon: Newspaper,
  },
  {
    id: "image",
    title: "GalleryImage",
    label: "InsertGallery",
    path: "/admin/create-gallery-image",
    icon: CalendarArrowDown,
  },
  
  {
    id: "announcements",
    title: "announcements",
    label: "Announcements",
    path: "/admin/announcements",
    icon: MessageCircleMore,
  },
  // {
  //   id: "messages",
  //   title: "messages",
  //   label: "Messages",
  //   path: "/admin/messages",
  //   icon: MessageCircleMore,
  // },
];


export default menuData;
