function ServiceCard(){
    return(

  <div className="flex flex-col md:flex-row items-start gap-8 border border-white/10 rounded-xl p-8 hover:border-[#D4AF37]">

    {/* Icon Container */}
    <div className="w-32 h-32 shrink-0 rounded-[2rem] border border-white/15 bg-[#1A1A1A] flex items-center justify-center">

      <div className="flex items-center gap-1 text-[#D4AF37]">
        <i className="fa-solid fa-plane text-5xl"></i>
        <i className="fa-solid fa-lock text-2xl"></i>
      </div>

    </div>

    <div className="flex-1">
            <h2 className="text-white text-1xl md:text-2xl font-bold leading-tight">
        Global Track & Enclosed Freight
      </h2>
            <p className="text-gray-400 text-lg md:text-md leading-relaxed mt-6">
        We coordinate white-glove climate-controlled delivery anywhere in the world. Fully insured international air and ocean cargo handling.
      </p>
         <a
        href="#contact"
        className="inline-flex items-center gap-4 mt-8 text-[#D4AF37] text-md font-semibold tracking-widest hover:gap-6 transition-all"
      >
        INQUIRE LOGISTICS
        <i className="fa-solid fa-arrow-right"></i>
      </a>

    </div>
</div>
    );
}

export default ServiceCard