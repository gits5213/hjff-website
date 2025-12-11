import Link from "next/link";
import { Facebook, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-white mt-16 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* About */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">About</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              A community-based 501(c)(3) organization serving Hollis & Jamaica residents through 
              social, cultural, educational and welfare services.
            </p>
            <p className="text-[#F59E0B] font-semibold text-sm">ONE TEAM ONE DREAM</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/governance/bylaws" className="text-sm text-gray-300 hover:text-[#BBF7D0] transition-colors">
                  Constitution & Bylaws
                </Link>
              </li>
              <li>
                <Link href="/programs/welfare" className="text-sm text-gray-300 hover:text-[#BBF7D0] transition-colors">
                  Welfare & Bereavement Program
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-sm text-gray-300 hover:text-[#BBF7D0] transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/events/annual-picnic" className="text-sm text-gray-300 hover:text-[#BBF7D0] transition-colors">
                  Annual Picnic
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-[#BBF7D0] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p>Queens, NY</p>
              <p>
                <a href="mailto:info@hjff.org" className="hover:text-[#BBF7D0] transition-colors">
                  info@hjff.org
                </a>
              </p>
              <p>
                <a href="tel:+1234567890" className="hover:text-[#BBF7D0] transition-colors">
                  (123) 456-7890
                </a>
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="text-gray-300 hover:text-[#BBF7D0] transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#BBF7D0] transition-colors" aria-label="WhatsApp">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Legal & Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Legal & Info</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>501(c)(3) Non-Profit Organization</p>
              <p className="text-xs text-gray-400 mt-4">
                Designed for community, by community.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} Hollis Jamaica Friends & Family Inc. | ONE TEAM ONE DREAM</p>
        </div>
      </div>
    </footer>
  );
}
