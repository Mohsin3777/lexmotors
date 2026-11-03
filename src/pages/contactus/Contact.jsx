import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ContactUsHero from './component/Contact_us_hero'
import TilesSection from "./component/Contact-Us_Info-Card";
import ContactForm from './component/Contact-Form'
function ContactUs() {
  return (
    <div className="bg-black">
        <Navbar />
   {/* hero */}
<ContactUsHero />
<TilesSection />
<ContactForm />
        <Footer />

    </div>
  );
}

export default ContactUs;
