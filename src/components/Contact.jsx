import { Mail, MapPin, Phone } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Let's Discuss Your Finances
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Ready to take the first step towards financial clarity? Fill out the
            form and our team will reach out within 24 hours.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Phone/>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Phone</h4>
                <p className="text-sm text-slate-500">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Mail/>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Email</h4>
                <p className="text-sm text-slate-500">contact@finexpert.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <MapPin />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Office</h4>
                <p className="text-sm text-slate-500">
                  100 Financial District, Suite 400
                  <br />
                  New York, NY 10005
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 shadow-sm sm:p-8">
          <form className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@company.com"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Service Interest
              </label>
              <select className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500">
                <option>Tax Preparation</option>
                <option>Financial Analysis</option>
                <option>Audit Defense</option>
                <option>Bookkeeping</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="How can we help you?"
                className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
              ></textarea>
            </div>

            <button className="w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;