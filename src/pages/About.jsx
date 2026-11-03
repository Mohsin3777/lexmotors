import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function About() {
    return (
        <div className="bg-black-600">
            <Navbar />
            <section className="min-h-screen w-full bg-black flex items-center pt-24 pb-16 px-6 md:px-16 bg-cover bg-center bg-no-repeat">
                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    {/* Subtitle */}
                    <span className="block text-center md:text-left text-xs font-semibold tracking-[0.25em] text-[#D4AF37] uppercase">
                        OUR LEGACY
                    </span>

                    {/* Heading */}
                    <h1 className="font-serif-luxury text-center md:text-left text-5xl md:text-7xl font-bold tracking-tight text-white mt-2 leading-[1.1]">
                        Crafting Automotive Excellence Since 2008

                    </h1>


                    <p className="text-gray-400 mt-6 text-sm md:text-base leading-relaxed text-center md:text-left">
                        Luxora Motors was founded with a singular vision: to connect true automobile connoisseurs with the most exquisite engineering masterpieces ever produced.


                    </p>


                    <p className="text-gray-700 mt-6 text-sm md:text-base leading-relaxed text-center md:text-left">
                        From hypercars produced in limited runs of 10 units worldwide to pristine vintage classics with documented provenance, our private showrooms in Beverly Hills, London, and Dubai represent the pinnacle of automotive culture.



                    </p>

                    <div className="p-10   border-l-[#D4AF37] border-l-4 mt-4">
                        <h4 className="font-serif-luxury text-center md:text-left text-sm md:text-lg font-light tracking-wide text-white mt-2 leading-[1.1]">
                            Crafting Automotive Excellence Since 2008

                        </h4>
                        <span className="block text-center md:text-left text-sm font-bold tracking-[0.25em] text-[#D4AF37] uppercase">
                            — Julian Vance, Founder
                        </span>
                    </div>


                </div>
            </section>


            <section className="bg-black h-full">
                <div
                    className="relative h-[32rem] mx-auto  overflow-hidden rounded-2xl border border-white/50 bg-cover bg-center md:px-16 py-10 px-6 md:mx-16"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1506610654-064fbba4780c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
            </section>
            <div className="h-56 bg-black"></div>
            <Footer />

        </div>
    );
}

export default About;





