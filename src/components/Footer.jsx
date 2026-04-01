import { Calculator } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#0f172b] py-14 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#0f172b] text-sm font-bold">
                <Calculator/>
              </div>
              <span className="text-lg font-semibold">FinExpert</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-7 text-white/60">
              Professional accounting services you can trust. Helping businesses
              grow since 2008.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Services</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>Tax Planning</li>
              <li>Bookkeeping</li>
              <li>Audit Support</li>
              <li>Payroll</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © 2026 FinExpert Accounting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;