import { useState } from "react";
import InventoryCard from "../../../components/InventoryCard";

const cars = [
  {
    name: "Aston Martin DB11",
    price: "$214,000",
    engine: "5.2L V12",
    hp: "606 HP",
    seats: "2 Seats",
    category: "GT",
    image:
      "https://images.unsplash.com/photo-1506610654-064fbba4780c?q=80&w=1770&auto=format&fit=crop",
  },
  {
    name: "Rolls-Royce Ghost",
    price: "$332,000",
    engine: "6.75L V12",
    hp: "563 HP",
    seats: "5 Seats",
    category: "Sedan",
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1740&auto=format&fit=crop",
  },
  {
    name: "Ferrari 812 Superfast",
    price: "$412,000",
    engine: "6.5L V12",
    hp: "789 HP",
    seats: "2 Seats",
    category: "Supercar",
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1740&auto=format&fit=crop",
  },
  {
    name: "Lamborghini Aventador",
    price: "$507,000",
    engine: "6.5L V12",
    hp: "770 HP",
    seats: "2 Seats",
    category: "Supercar",
    image:
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1740&auto=format&fit=crop",
  },
  {
    name: "Mercedes-Benz S-Class",
    price: "$125,000",
    engine: "3.0L V6",
    hp: "442 HP",
    seats: "5 Seats",
    category: "Sedan",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1740&auto=format&fit=crop",
  },
  {
    name: "Porsche 911 Turbo S",
    price: "$230,000",
    engine: "3.8L Flat-6",
    hp: "640 HP",
    seats: "2 Seats",
    category: "Supercar",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1740&auto=format&fit=crop",
  },
  {
    name: "Bentley Continental GT",
    price: "$250,000",
    engine: "4.0L V8",
    hp: "542 HP",
    seats: "4 Seats",
    category: "GT",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1740&auto=format&fit=crop",
  },
];

const categories = [
  "All Vehicles",
  "Supercar",
  "Sedan",
  "GT",
];

function InventoryItems() {
  const [activeCategory, setActiveCategory] = useState("All Vehicles");
  const [search, setSearch] = useState("");

  // Filter vehicles by category and search
  const filteredCars = cars.filter((car) => {
    const matchesCategory =
      activeCategory === "All Vehicles" ||
      car.category === activeCategory;

    const searchTerm = search.toLowerCase().trim();

    const matchesSearch =
      car.name.toLowerCase().includes(searchTerm) ||
      car.category.toLowerCase().includes(searchTerm) ||
      car.engine.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="inventory"
      className="bg-black md:px-16 md:py-10 px-6 py-4"
    >
      {/* Filter Toolbar */}
      <div className="bg-[#111111] border border-white/10 rounded-xl p-4 md:p-6 mb-12 flex flex-col md:flex-row gap-5 items-center justify-between">

        {/* Categories */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">

          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-md transition-colors ${
                  isActive
                    ? "bg-[#D4AF37] text-black"
                    : "bg-[#1A1A1A] text-gray-300 hover:text-white border border-white/10"
                }`}
              >
                {category === "GT"
                  ? "Grand Tourer"
                  : category === "Sedan"
                    ? "Luxury Sedans"
                    : category === "Supercar"
                      ? "Supercars"
                      : category}
              </button>
            );
          })}

        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">

          <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-xs"></i>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search brand or model..."
            className="w-full bg-black/60 border border-white/15 rounded-md px-4 py-3 pl-10 text-xs text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
          />

        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-400 text-sm">
          Showing{" "}
          <span className="text-[#D4AF37] font-semibold">
            {filteredCars.length}
          </span>{" "}
          vehicles
        </p>

        <button
          type="button"
          onClick={() => {
            setActiveCategory("All Vehicles");
            setSearch("");
          }}
          className="text-xs text-gray-400 hover:text-[#D4AF37] transition-colors"
        >
          Reset Filters
        </button>
      </div>

      {/* Inventory Grid */}
      {filteredCars.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredCars.map((car) => (
            <InventoryCard key={car.name} car={car} />
          ))}

        </div>
      ) : (
        /* No Results */
        <div className="flex flex-col items-center justify-center py-24 text-center border border-white/10 rounded-2xl bg-[#111111]">

          <i className="fa-solid fa-car text-4xl text-[#D4AF37] mb-5"></i>

          <h3 className="text-white text-xl font-semibold">
            No Vehicles Found
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            Try another search or select a different category.
          </p>

          <button
            type="button"
            onClick={() => {
              setActiveCategory("All Vehicles");
              setSearch("");
            }}
            className="mt-6 px-6 py-3 bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider rounded-md hover:bg-[#C19B2E] transition-colors"
          >
            Clear Filters
          </button>

        </div>
      )}
    </section>
  );
}

export default InventoryItems;