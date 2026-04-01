import { FileText, ShieldCheck, TrendingUp } from "lucide-react";

const services = [
  {
    title: "Tax Preparation",
    desc: "Strategic tax planning and preparation to maximize your returns and ensure compliance.",
    icon: <FileText />,
  },
  {
    title: "Financial Analysis",
    desc: "In-depth reporting and forecasting to help you make informed business decisions.",
    icon: <TrendingUp />,
  },
  {
    title: "Audit Defense",
    desc: "Expert representation and support during IRS audits and financial reviews.",
    icon: <ShieldCheck />,
  },
];

function Services() {
  return (
    <section id="services" className="bg-[#f8fafc] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            Our Expertise
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Comprehensive Financial Solutions
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            From daily bookkeeping to complex tax litigation, we provide a full
            spectrum of accounting services.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 text-xl">
                {service.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                {service.desc}
              </p>

              <a
                href="#"
                className="mt-6 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;