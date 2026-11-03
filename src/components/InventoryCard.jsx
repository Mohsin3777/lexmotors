function InventoryCard({ car }) {
  return (
    <div className="w-full bg-[#121212] p-4 border border-white/10 rounded-2xl shadow-2xl hover:border-[#D4AF37]/40 transition-all duration-300">

      {/* Car Image */}
      <div
        className="relative h-60 w-full rounded-xl overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url("${car.image}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

        {/* Category */}
        <span className="absolute top-3 left-3 px-3 py-1 text-[10px] uppercase tracking-wider bg-black/60 text-[#D4AF37] rounded-full border border-white/10">
          {car.category}
        </span>

        {/* Favorite Button */}
        <button
          type="button"
          aria-label={`Add ${car.name} to favorites`}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-red-500 hover:bg-black/60 transition-all"
        >
          <i className="fa-regular fa-heart"></i>
        </button>
      </div>

      {/* Card Content */}
      <div className="pt-4 px-1">

        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-white font-bold text-lg tracking-wide">
            {car.name}
          </h3>

          <span className="text-[#D4AF37] font-semibold text-lg">
            {car.price}
          </span>
        </div>

        {/* Specifications */}
        <div className="grid grid-cols-3 gap-2 mt-4 py-3 border-y border-white/10 text-gray-400 text-xs">

          <div className="flex items-center gap-1.5">
            <i className="fa-solid fa-gauge-high text-[#D4AF37]"></i>
            <span>{car.engine}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <i className="fa-solid fa-bolt text-[#D4AF37]"></i>
            <span>{car.hp}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <i className="fa-solid fa-chair text-[#D4AF37]"></i>
            <span>{car.seats}</span>
          </div>

        </div>

        {/* View Details */}
        <a
          href="#inventory"
          className="flex items-center justify-between pt-4 pb-1 text-white hover:text-[#D4AF37] transition-colors group/link"
        >
          <span className="text-xs font-semibold tracking-widest uppercase">
            View Details
          </span>

          <i className="fa-solid fa-arrow-right text-xs transform group-hover/link:translate-x-1 transition-transform"></i>
        </a>

      </div>
    </div>
  );
}

export default InventoryCard;