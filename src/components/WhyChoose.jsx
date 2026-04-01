import { CircleCheckBig } from "lucide-react";

const benefits = [
  "Certified Public Accountants",
  "24/7 Online Portal Access",
  "Dedicated Account Manager",
  "Transparent Flat-Fee Pricing",
];

const stats = [
  { value: "15+", label: "Years Experience", color: "text-sky-400" },
  { value: "$2M+", label: "Taxes Saved", color: "text-emerald-400" },
  { value: "500+", label: "Clients Served", color: "text-fuchsia-400" },
  { value: "100%", label: "Commitment", color: "text-amber-400" },
];

function WhyChoose() {
  return (
    <section id="about" className="bg-[#071330] py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Why Partner With FinExpert?
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
            We believe in proactive accounting. Instead of just reporting what
            happened, we help you plan for what’s next. Our team of CPAs and
            financial advisors are dedicated to your success.
          </p>

          <ul className="mt-8 space-y-4">
            {benefits.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm sm:text-base">
                <span className="flex h-6 w-6 items-center justify-center rounded-full text-emerald-400">
                  <CircleCheckBig />
                </span>
                <span className="text-white/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <h3 className={`text-3xl font-bold ${stat.color}`}>{stat.value}</h3>
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;