import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import InventoryHero from './components/Inventory_Hero'
import InventoryItems from './components/Inventory-Items'

function Inventory() {
  return (
    <div className="bg-[#080808]">
        <Navbar />
<InventoryHero />
<InventoryItems />
        <Footer />

    </div>
  );
}

export default Inventory;
