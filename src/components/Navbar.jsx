
function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10 px-6 md:px-16 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-shield-halved text-[#D4AF37] text-2xl"></i>

          <div className="flex flex-col">
            <span className="font-serif-luxury font-bold tracking-widest text-lg leading-none text-white">
              LUXORA
            </span>
            <span className="text-[9px] tracking-[0.3rem] text-gray-400 font-medium">
              MOTORS
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-gray-300 font-medium">
          <a href="/" className="hover:text-[#D4AF37] transition-colors">
            Home
          </a>
          <a href="/inventory" className="hover:text-[#D4AF37] transition-colors">
            Inventory
          </a>
          <a href="/service" className="hover:text-[#D4AF37] transition-colors">
            Services
          </a>
          <a href="/about" className="hover:text-[#D4AF37] transition-colors">
            About Us
          </a>
          <a href="/contact" className="hover:text-[#D4AF37] transition-colors">
            Contact
          </a>
        </nav>

        {/* Action Button */}
        <button className="px-5 py-2.5 border border-[#D4AF37]/50 hover:border-[#D4AF37] text-xs font-semibold tracking-wider uppercase rounded-md text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
          Book A Test Drive
        </button>

      </div>
    </header>
  );
}

export default Navbar;
