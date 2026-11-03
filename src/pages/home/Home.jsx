import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Hero from "./components/Hero";
import PremiumServices from './components/PremiumSection'
import FeaturedCars from './components/FeaturesSection'
import WhyChooseUs from './components/WhyChooseUs'
function Home() {
  return (
    <div>
        <Navbar />
                <Hero />
<PremiumServices />
<FeaturedCars />
<WhyChooseUs />
        <Footer />

    </div>
  );
}

export default Home;
