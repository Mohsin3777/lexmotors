import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ServiceHero from "./components/Service-hero";
import ServiceCardList from './components/Service-card-section'
function Service() {
  return (
    <div className="bg-black">
        <Navbar />
<ServiceHero />
<ServiceCardList />
        <Footer />

    </div>
  );
}

export default Service;
