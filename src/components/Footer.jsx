
function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-12 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16">

          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center bg-black">
                <i className="fa-solid fa-crown text-gold text-sm"></i>
              </div>
              <span className="font-serif-luxury text-lg font-bold text-white uppercase tracking-wider">
                LUXORA
              </span>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              The ultimate destination for luxury, exotic, and ultra-rare
              automotive engineering.
            </p>

            <div className="flex items-center space-x-4 text-gray-400">
              <a href="#" className="hover:text-gold transition-colors">
                <i className="fa-brands fa-instagram text-base"></i>
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <i className="fa-brands fa-youtube text-base"></i>
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <i className="fa-brands fa-x-twitter text-base"></i>
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <i className="fa-brands fa-linkedin text-base"></i>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Home Showcase
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Private Vault Inventory
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Bespoke Concierge
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Our History
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
              Featured Brands
            </h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li><a href="#" className="hover:text-gold transition-colors">Aston Martin</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Rolls-Royce Motor Cars</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Ferrari SpA</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Lamborghini Automobili</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
              VIP Newsletter
            </h4>
            <p className="text-gray-400 text-xs mb-4">
              Subscribe to receive off-market private vehicle listings before
              public release.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing!");
              }}
              className="flex flex-col gap-2"
            >
              <input
                type="email"
                required
                placeholder="Enter your email..."
                className="bg-dark-elevated border border-white/10 rounded-md px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gold"
              />

              <button
                type="submit"
                className="bg-[#D4AF37] hover:bg-gold-hover border-green-900 text-black font-semibold text-xs py-2.5 uppercase tracking-widest transition-colors rounded-md"
              >
                Join Private List
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 mt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
          <p>&copy; 2026 Luxora Motors. All rights reserved.</p>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Security Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
