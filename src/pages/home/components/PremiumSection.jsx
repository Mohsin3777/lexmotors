
function PremiumServices() {
  return (
    <section className="py-20 px-6 md:px-16 bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center max-w-lg mx-auto">
          <span className="text-xs font-semibold tracking-[0.25rem] text-[#D4AF37] uppercase">
            Experience Excellence
          </span>

          <h2 className="font-serif-luxury text-3xl md:text-4xl font-bold mt-2 text-white">
            Premium Services
          </h2>

          <p className="text-gray-400 text-xs md:text-sm mt-3">
            Every detail is crafted to deliver the ultimate luxury car
            ownership experience.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">

          {/* Card 1 */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#D4AF37] text-xl group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-gem"></i>
            </div>

            <h3 className="text-white font-semibold text-base mt-5">
              Premium Collection
            </h3>

            <p className="text-gray-400 text-xs mt-2 leading-relaxed">
              Handpicked luxury cars from the world's most prestigious brands.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#D4AF37] text-xl group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-shield-halved"></i>
            </div>

            <h3 className="text-white font-semibold text-base mt-5">
              Certified Quality
            </h3>

            <p className="text-gray-400 text-xs mt-2 leading-relaxed">
              All vehicles undergo a rigorous inspection for uncompromised
              quality.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#D4AF37] text-xl group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-concierge-bell"></i>
            </div>

            <h3 className="text-white font-semibold text-base mt-5">
              Concierge Service
            </h3>

            <p className="text-gray-400 text-xs mt-2 leading-relaxed">
              Personalized assistance for a seamless and luxurious journey.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#D4AF37] text-xl group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-headset"></i>
            </div>

            <h3 className="text-white font-semibold text-base mt-5">
              Aftercare Support
            </h3>

            <p className="text-gray-400 text-xs mt-2 leading-relaxed">
              Reliable maintenance and support long after you drive away.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PremiumServices;
