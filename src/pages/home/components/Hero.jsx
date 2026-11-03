
function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 md:px-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1696524147929-56f1e4a05caf?q=80&w=1735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')",
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-xl">
          {/* Subtitle */}
          <span className="block text-center md:text-left text-xs font-semibold tracking-[0.25em] text-[#D4AF37] uppercase">
            Drive The Extraordinary
          </span>

          {/* Heading */}
          <h1 className="font-serif-luxury text-center md:text-left text-5xl md:text-7xl font-bold tracking-tight text-white mt-2 leading-[1.1]">
            Luxury <br />
            <span className="italic text-gray-200">Redefined.</span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 mt-6 text-sm md:text-base leading-relaxed text-center md:text-left">
            Discover elite performance, unmatched comfort, and timeless
            design. Your dream car awaits.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-8">
            <button className="px-6 py-3.5 bg-[#C5A059] hover:bg-[#D4AF37] text-black font-semibold text-xs tracking-widest uppercase rounded-md transition-all duration-300 shadow-lg shadow-[#C5A059]/20 flex items-center gap-2">
              Explore Inventory
            </button>

            <button className="px-6 py-3.5 border border-white/30 hover:border-white text-white font-semibold text-xs tracking-widest uppercase rounded-md backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
              <i className="fa-regular fa-circle-play text-sm"></i>
              Watch Video
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-14 pt-8 border-t border-white/10">

            {/* Premium Brands */}
            <div>
              <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
                <i className="fa-solid fa-award"></i>
                Premium Brands
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white mt-1">
                50+
              </p>
            </div>

            {/* Luxury Models */}
            <div>
              <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
                <i className="fa-solid fa-car"></i>
                Luxury Models
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white mt-1">
                100+
              </p>
            </div>

            {/* Happy Clients */}
            <div>
              <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
                <i className="fa-solid fa-users"></i>
                Happy Clients
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white mt-1">
                10K+
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
