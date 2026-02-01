import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/guest/Layout'
import Home from './components/guest/Home'
import Admission from './components/guest/Admission'
import Academic from './components/guest/Academic'
import About from './components/guest/About'
import LayOut from './components/admin/LayOut'
import Dashboard from './components/admin/pages/Dashboard'
import Login from './components/guest/forms/Login'
import ResetPassword from './components/guest/forms/ResetPassword'
import Primary from './components/guest/primary'
import Nusary from './components/guest/Nusary'
import Secondary from './components/guest/Secondary'
import CreateNews from './components/admin/sidebar/pages/news/CreateNews'
import ViewDetails from './components/admin/sidebar/pages/news/ViewDetails'
import UpdateNews from './components/admin/sidebar/pages/news/UpdateNews'
import GalleryContent from './components/admin/sidebar/pages/gallery/GalleryContent'
import GalleryContentCreate from './components/admin/sidebar/pages/gallery/GalleryContentCreate'
import UpdateContent from './components/admin/sidebar/pages/gallery/UpdateContent'
import ViewGalleryDetails from './components/admin/sidebar/pages/gallery/ViewGalleryDetails'
import UpdateImage from './components/admin/sidebar/pages/galleryimage/UpdateImage'
import Event from './components/admin/sidebar/pages/events/Event'
import CreateEvent from './components/admin/sidebar/pages/events/CreateEvent'
import UpdateEvent from './components/admin/sidebar/pages/events/UpdateEvent'
import AnnouncementLists from './components/admin/sidebar/pages/announcements/AnnouncementLists'
import CreateAnnouncement from './components/admin/sidebar/pages/announcements/CreateAnnouncement'
import UpdateAnnouncement from './components/admin/sidebar/pages/announcements/UpdateAnnouncement'
import PrivateRoute from './components/guest/PrivateRoute'
import ViewAnnouncement from './components/admin/sidebar/pages/announcements/ViewAnnouncement'
import CreateImage from './components/admin/sidebar/pages/galleryimage/CreateImage'
import Profile from './components/admin/Header/pages/Profile'
import Settings from './components/admin/Header/pages/Settings'
import NewsAnnouncements from './components/guest/NewsAnnouncements'
import Gallery from './components/guest/Gellery'
import ContactUs from './components/guest/ContactUs'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/admissions' element={<Admission />} />
          <Route path='/academic' element={<Academic />} />
          <Route path='/aboutus' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path="/password-reset" element={<ResetPassword />} />
          <Route path='/primary' element={<Primary />} />
          <Route path='/nursery' element={<Nusary />} />
          <Route path='/lower-secondary' element={<Secondary />} />
          <Route path='/news-announcement' element={<NewsAnnouncements />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contactus' element={<ContactUs />} />
        </Route>

        {/* Protected Admin Routes */}
        <Route path='/admin' element={<PrivateRoute><LayOut /></PrivateRoute>}>
          <Route index element={<Dashboard />} />
          <Route path='createnews' element={<CreateNews />} />
          <Route path='news/:id' element={<ViewDetails />} />
          <Route path='news/update/:id' element={<UpdateNews />} />
          <Route path='gellery-content' element={<GalleryContent />} />
          <Route path='create-gallery-content' element={<GalleryContentCreate />} />
          <Route path='update-content/:id' element={<UpdateContent />} />
          <Route path='gallery-view/:id' element={<ViewGalleryDetails />} />
          <Route path='gallery/image/update/:id' element={<UpdateImage />} />
          <Route path='events' element={<Event />} />
          <Route path='create-event' element={<CreateEvent />} />
          <Route path='update-event/:id' element={<UpdateEvent />} />
          <Route path='announcements' element={<AnnouncementLists />} />
          <Route path='create-announcement' element={<CreateAnnouncement />} />
          <Route path='update-announcement/:id' element={<UpdateAnnouncement />} />
          <Route path='viiew-announcement/:id' element={<ViewAnnouncement />} />
          <Route path='create-gallery-image' element={<CreateImage />} />
          <Route path='myprofile' element={<Profile />} />
          <Route path='update-password' element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App