
function TilesSection() {
  return (
    <div className="space-y-6 md:px-16 py-10 px-6 mt-10">
      <InfoCard
        title="Beverly Hills Showroom"
        description="450 Wilshire Blvd, Beverly Hills, CA 90212, United States"
      />

      <InfoCard
        title="Direct Phone"
        description="+1 (310) 892-0199 / +44 20 7946 0912"
      />

      <InfoCard
        title="Private Email"
        description="concierge@luxoramotors.com"
      />
    </div>
  );
}

function InfoCard({ title, description }) {
  return (
    <div className="bg-dark-card border border-white/10 rounded-xl p-10 text-left">
      <div className="flex items-center gap-4 mb-3">
                            <i class="fa-solid fa-location-dot text-xl bg-yellow-500 "></i>
        <h4 className="text-white font-bold text-sm">{title}</h4>
      </div>

      <p className="text-gray-400 text-xs leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default TilesSection;
