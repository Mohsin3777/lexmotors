
const cars = [
  {
    name: "Aston Martin DB11",
    price: "$214,000",
    engine: "5.2L V12",
    hp: "606 HP",
    seats: "2 Seats",
    image:
      "https://images.unsplash.com/photo-1789330840104-eeefbd73c8c4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    name: "Rolls-Royce Ghost",
    price: "$332,000",
    engine: "6.75L V12",
    hp: "563 HP",
    seats: "5 Seats",
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    name: "Ferrari 812 Superfast",
    price: "$412,000",
    engine: "6.5L V12",
    hp: "789 HP",
    seats: "2 Seats",
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
];

function FeaturedCars() {
  return (
    <section className="py-20 px-6 md:px-16 bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <span className="text-xs font-semibold tracking-[0.25rem] text-[#D4AF37] uppercase">
          Our Collection
        </span>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-4">
          <h2 className="font-serif-luxury text-3xl md:text-4xl font-bold mt-2 text-white">
            Featured Luxury Cars
          </h2>

          <a
            href="#inventory"
            className="text-xs font-semibold tracking-[0.25rem] text-[#D4AF37] uppercase underline underline-offset-4"
          >
            View All Inventory
          </a>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {cars.map((car) => (
            <div
              key={car.name}
              className="w-full bg-[#121212] p-4 border border-white/10 rounded-2xl shadow-2xl"
            >
              {/* Car Image */}
              <div
                className="relative h-60 w-full rounded-xl overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url("${car.image}")` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

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
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCars;
