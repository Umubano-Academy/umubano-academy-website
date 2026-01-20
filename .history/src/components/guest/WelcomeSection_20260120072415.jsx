import { Link } from "react-router-dom"
import { School, Info, Heart } from "lucide-react"

function WelcomeSection () {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-20">

      {/* 3 Education Levels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Nursery", img: "/images/nursery.jpg", link: "/" },
          { title: "Primary", img: "/images/primary.jpg", link: "/education#primary" },
          { title: "Lower Secondary", img: "/images/secondary.jpg", link: "/education#secondary" },
        ].map((item, i) => (
          <Link
            key={i}
            to={item.link}
            className="group relative rounded-2xl overflow-hidden shadow-lg"
          >
            <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>
            <h3 className="absolute bottom-6 left-6 text-white text-2xl font-bold">
              {item.title}
            </h3>
          </Link>
        ))}
      </div>

      {/* Welcome + Head Teacher Video */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <School className="w-10 h-10 text-[#7ED956]" />
            <h2 className="text-3xl font-bold text-blue-900">
              You are welcome to Umubano Academy!
            </h2>
          </div>

          {/* Small Icon Links */}
          <div className="flex gap-6 mt-4">
            <Link to="/aboutus" className="flex items-center gap-2 text-blue-800 hover:text-[#0AB0EE]">
              <Info className="w-5 h-5" />
              About Us
            </Link>

            <Link to="/aboutus" className="flex items-center gap-2 text-blue-800 hover:text-[#0AB0EE]">
              <Heart className="w-5 h-5" />
              Our Values
            </Link>
          </div>
        </div>

        {/* Right Side – Head Teacher Video */}
        <div className="w-full h-[320px] rounded-2xl overflow-hidden shadow-xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/VIDEO_ID_HERE"
            title="Head Teacher Welcome"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection
