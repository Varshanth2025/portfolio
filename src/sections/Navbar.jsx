import { useState } from "react";
import { motion } from "motion/react";
function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40 border-b-2 border-transparent">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-orange-500/20 to-purple-600/20 animate-gradient-x"
        style={{ backgroundSize: "200% 200%" }}
      ></div>
      <div className="w-full px-2 md:px-4 relative z-10">
        <div className="flex items-center justify-between py-1.5 sm:py-1.5 relative">
          <motion.a
            href="/"
            className="text-2xl font-bold relative group"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span
              className="relative z-10 bg-gradient-to-r from-purple-400 via-orange-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x"
              style={{ backgroundSize: "200% 200%" }}
            >
              Varshanth
            </span>
            <motion.span
              className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-orange-500 opacity-0 group-hover:opacity-30 blur-xl rounded-lg"
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
