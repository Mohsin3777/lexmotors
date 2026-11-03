
function WhyChooseUs() {
  return (
    <section
      className="relative w-full min-h-[360px] bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1722643649191-3f1e38f26f01?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')",
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>

      {/* Section Heading */}
      <div className="relative border-t border-white/5 max-w-7xl mx-auto px-6 md:px-16 pt-10">
        <div className="text-center max-w-lg mx-auto">
          <h2 className="font-serif-luxury text-3xl md:text-4xl font-bold text-white">
            Why Choose Luxora Motors
          </h2>

          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mt-3"></div>
        </div>
      </div>

      {/* Four Cards Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10 py-6">
        
        {/* Card 1 */}
        <div className="p-6 text-center group">
          <div className="w-12 h-12 mx-auto flex items-center justify-center text-[#D4AF37] text-2xl group-hover:scale-110 transition-transform">
            <i className="fa-solid fa-crown"></i>
          </div>

          <h3 className="text-white font-semibold text-base mt-4">
            Exclusive Selection
          </h3>

          <p className="text-gray-400 text-xs mt-2 leading-relaxed">
            Access the rarest and most exclusive luxury vehicles.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 text-center group">
          <div className="w-12 h-12 mx-auto flex items-center justify-center text-[#D4AF37] text-2xl group-hover:scale-110 transition-transform">
            <i className="fa-solid fa-award"></i>
          </div>

          <h3 className="text-white font-semibold text-base mt-4">
            Unmatched Quality
          </h3>

          <p className="text-gray-400 text-xs mt-2 leading-relaxed">
            Every car meets our highest standards of excellence.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 text-center group">
          <div className="w-12 h-12 mx-auto flex items-center justify-center text-[#D4AF37] text-2xl group-hover:scale-110 transition-transform">
            <i className="fa-solid fa-user-tie"></i>
          </div>

          <h3 className="text-white font-semibold text-base mt-4">
            Client First
          </h3>

          <p className="text-gray-400 text-xs mt-2 leading-relaxed">
            Your satisfaction and privacy are our top priorities.
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-6 text-center group">
          <div className="w-12 h-12 mx-auto flex items-center justify-center text-[#D4AF37] text-2xl group-hover:scale-110 transition-transform">
            <i className="fa-solid fa-globe"></i>
          </div>

          <h3 className="text-white font-semibold text-base mt-4">
            Worldwide Delivery
          </h3>

          <p className="text-gray-400 text-xs mt-2 leading-relaxed">
            Delivering luxury cars to your doorstep.
          </p>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
