function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#1d4ed8]/95 via-[#1d4ed8]/85 to-[#1e3a8a]/90"></div>

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-28 sm:pb-24 sm:pt-32 lg:px-8 lg:pb-28 lg:pt-36">
        <div className="max-w-2xl text-white">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-sm">
            Trusted by 500+ Businesses
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
            Precision Accounting for{" "}
            <span className="text-blue-200">Growing Businesses</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
            We handle the numbers so you can handle the business. Expert tax
            strategy, bookkeeping, and CFO services tailored to your goals.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:bg-blue-700"
            >
              Schedule Consultation
            </a>
            <a
              href="#services"
              className="rounded-lg border border-white/40 bg-transparent px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;