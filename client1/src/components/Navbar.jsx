import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <nav className="h-20 bg-gradient-to-r from-emerald-500 via-purple-500 to-pink-500 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full relative">
          {/* Logo - Green section */}
          <Link
            to="/"
            className="text-3xl font-bold flex items-center group"
            onClick={() => setActiveLink("home")}
          >
            <span className="mr-2 group-hover:rotate-12 transition-transform duration-300">
              🌈
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-200">
              InternHub
            </span>
          </Link>

          {/* Navigation - Purple section */}
          <ul className="hidden md:flex gap-10 absolute left-1/2 transform -translate-x-1/2">
            {[
              { path: "/", name: "Home", id: "home" },
              { path: "/leaderboard", name: "Leaderboard", id: "leaderboard" },
              { path: "/add", name: "Add Intern", id: "add" },
            ].map((link) => (
              <li key={link.id} className="relative group">
                <Link
                  to={link.path}
                  className={`text-lg font-medium px-2 py-1 transition-colors ${
                    activeLink === link.id
                      ? "text-white drop-shadow-md"
                      : "text-purple-100 hover:text-white"
                  }`}
                  onClick={() => setActiveLink(link.id)}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[3px] bg-yellow-300 transition-all duration-300 ${
                      activeLink === link.id
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Buttons - Pink section */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm transition-all duration-200 border border-white/20 hover:border-yellow-200">
              Sign In
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 text-gray-900 rounded-full text-sm font-bold transition-all duration-200 shadow-lg hover:shadow-amber-200/40">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-2xl focus:outline-none hover:text-yellow-300 transition-colors">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;