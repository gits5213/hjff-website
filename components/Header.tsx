"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [governanceOpen, setGovernanceOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About HJFF" },
    {
      label: "Programs & Services",
      submenu: [
        { href: "/programs/welfare", label: "Welfare & Bereavement Support" },
        { href: "/programs/life-insurance", label: "Life Insurance Support" },
        { href: "/programs/community", label: "Community Services" },
      ],
    },
    { href: "/membership", label: "Membership" },
    {
      label: "Events",
      submenu: [
        { href: "/events/annual-picnic", label: "Annual Picnic" },
        { href: "/events", label: "Other Events" },
      ],
    },
    {
      label: "Governance",
      submenu: [
        { href: "/governance/bylaws", label: "Constitution & Bylaws" },
        { href: "/governance/committees", label: "Executive Board & Committees" },
      ],
    },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#166534] text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>Hollis Jamaica Friends & Family Inc. – ONE TEAM ONE DREAM</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/donate" className="hover:text-[#BBF7D0] transition-colors">
              Donate
            </Link>
            <span>|</span>
            <Link href="/member-portal" className="hover:text-[#BBF7D0] transition-colors">
              Member Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#166534] to-[#0D9488] rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center justify-center space-y-0.5">
                  <div className="w-4 h-0.5 bg-white rounded-full"></div>
                  <div className="w-4 h-0.5 bg-white rounded-full"></div>
                  <div className="w-4 h-0.5 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="font-heading font-bold text-base text-[#166534] leading-tight">
                  Hollis Jamaica Friends & Family Inc.
                </div>
                <div className="text-xs text-[#6B7280] leading-tight">
                  Community • Charity • Education • Social Services
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 flex-1 justify-center max-w-4xl mx-8">
              {navLinks.map((link) => {
                if (link.submenu) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => {
                        if (link.label === "Programs & Services") setProgramsOpen(true);
                        if (link.label === "Governance") setGovernanceOpen(true);
                      }}
                      onMouseLeave={() => {
                        if (link.label === "Programs & Services") setProgramsOpen(false);
                        if (link.label === "Governance") setGovernanceOpen(false);
                      }}
                    >
                      <button className="px-4 py-2 text-sm text-[#111827] hover:text-[#166534] hover:bg-[#F9FAFB] rounded-lg font-medium transition-all duration-200 flex items-center whitespace-nowrap">
                        {link.label}
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {(link.label === "Programs & Services" && programsOpen) ||
                      (link.label === "Governance" && governanceOpen) ? (
                        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-[#E5E7EB] py-2 z-50">
                          {link.submenu?.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-4 py-2 text-sm text-[#111827] hover:bg-[#F9FAFB] hover:text-[#166534] transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-sm text-[#111827] hover:text-[#166534] hover:bg-[#F9FAFB] rounded-lg font-medium transition-all duration-200 whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <Link
                href="/membership"
                className="px-5 py-2.5 bg-[#166534] text-white rounded-lg hover:bg-[#15803D] transition-all duration-200 font-semibold text-sm shadow-md hover:shadow-lg whitespace-nowrap"
              >
                Become a Member
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 -mr-2 text-[#111827] hover:text-[#166534] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-[#E5E7EB]">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  if (link.submenu) {
                    return (
                      <div key={link.label} className="px-4 py-2">
                        <div className="text-sm font-semibold text-[#6B7280] uppercase tracking-wide mb-2">
                          {link.label}
                        </div>
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-[#111827] hover:text-[#166534] hover:bg-[#F9FAFB] rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-4 py-3 text-[#111827] hover:text-[#166534] hover:bg-[#F9FAFB] rounded-lg font-medium transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="pt-4 px-4 border-t border-[#E5E7EB] mt-2">
                  <Link
                    href="/membership"
                    className="block w-full text-center px-4 py-3 bg-[#166534] text-white rounded-lg hover:bg-[#15803D] transition-colors font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Become a Member
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
