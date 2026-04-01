import { CircleCheckBig } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$199",
    desc: "/month",
    features: [
      "Monthly Bookkeeping",
      "Annual Tax Filing",
      "Email Support",
      "Basic Reports",
    ],
    featured: false,
  },
  {
    name: "Business",
    price: "$499",
    desc: "/month",
    features: [
      "Weekly Bookkeeping",
      "Quarterly Tax Strategy",
      "Priority Phone Support",
      "CFO Dashboard",
      "Payroll Management",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "",
    features: [
      "Dedicated Accounting Team",
      "Daily Reconciliation",
      "Audit Representation",
      "Financial Forecasting",
      "Custom Integrations",
    ],
    featured: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="bg-[#eef2f7] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 text-sm text-slate-500 sm:text-base">
            No hidden fees. Choose a plan that fits your business size.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3 cursor-pointer">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border bg-white p-8 shadow-sm transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl ${
                plan.featured
                  ? "border-blue-500 shadow-lg shadow-blue-200/50 scale-105"
                  : "border-slate-200"
              }`}
            >
              {/* MOST POPULAR */}
              {plan.featured && (
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white ">
                  Most Popular
                </span>
              )}

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-slate-900">
                {plan.name}
              </h3>

              {/* PRICE */}
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-bold text-slate-900">
                  {plan.price}
                </span>
                {plan.desc && (
                  <span className="pb-1 text-sm text-slate-500">
                    {plan.desc}
                  </span>
                )}
              </div>

              {/* FEATURES */}
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-slate-600"
                  >
                    <CircleCheckBig className="h-5 w-5 text-blue-600" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <button
                className={`mt-8 w-full rounded-lg px-5 py-3 text-sm font-semibold transition ${
                  plan.featured
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;