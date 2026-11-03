function ContactForm(){
return(
    <div className="md:px-16 py-10 px-6 mt-10 bg-dark-card ">
    <div className="text-left  p-10 border border-white/10 rounded-2xl">
        <h3 className="font-serif-luxury text-2xl font-bold text-white mb-6">Send an Inquiry</h3>

        <form action="" class="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div>
    <label htmlFor="" className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Full Name</label>
    <input type="text" required placeholder="John Doe" class="w-full bg-black/60 border border-white/15 rounded-md px-4 py-3 text-xs text-white focus:outline-none focus:border-yellow-500" />
</div>

<div>
    <label htmlFor="" className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Email Address</label>
    <input type="text" required placeholder="Email" class="w-full bg-black/60 border border-white/15 rounded-md px-4 py-3 text-xs text-white focus:outline-none focus:border-yellow-500" />
</div>
            </div>

            <div>
    <label htmlFor="" className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Interested Vehicle / Service</label>
    <input type="text" required  placeholder="e.g. Aston Martin DB11 or Vault Storage"  class="w-full bg-black/60 border border-white/15 rounded-md px-4 py-3 text-xs text-white focus:outline-none focus:border-yellow-500" />
</div>



        <div>
    <label htmlFor="" className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Message</label>
    <textarea rows="4"  type="text" required  placeholder="Your special requirnment"  class="w-full bg-black/60 border border-white/15 rounded-md px-4 py-3 text-xs text-white focus:outline-none focus:border-yellow-500" />
</div>


<button type="submit"  className="w-full py-4 bg-yellow-500 hover:bg--hover text-black font-semibold text-xs uppercase tracking-widest transition-colors rounded-md">                            Submit Confidential Request
</button>
 
        </form>
    </div>
    </div>
);
}


export default ContactForm;