function ContactUsHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-center bg-cover bg-no-repeat overflow-hidden"
    
          style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
 {/* Dark Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-black/60 z-10"></div>
<div className="relative z-20 max-w-7xl w-full mx-auto px-6 md:px-12 py-20 flex flex-col justify-between min-h-[85vh]">
        {/* Hero Content */}
<div className="max-w-7xl mx-auto mt-12 md:mt-16 text-center">
    <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.25em]  uppercase mb-3">Drive The Extraordinary
</span>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-bold leading-tight text-white mb-6">
           Concierge Desk</h1>



          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
        Our private client advisors are available 24/7 for confidential inquiries.
          </p>
          {/* Action Buttons */}




</div>

</div>
    </section>

  );
}


export default ContactUsHero;