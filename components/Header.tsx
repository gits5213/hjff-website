'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import LanguageSwitcher from './LanguageSwitcher';

// Navigation will be built using translations in the component

export default function Header() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { 
      name: t('nav.programs'), 
      href: '/programs',
      submenu: [
        { name: t('nav.communitySupport'), href: '/programs/community' },
        { name: t('nav.jobTraining'), href: '/programs/job-training' },
        { name: t('nav.educationalSeminars'), href: '/programs/education' },
        { name: t('nav.socialServices'), href: '/programs/social-services' },
      ]
    },
    { name: t('nav.events'), href: '/events' },
    { name: t('nav.membership'), href: '/membership' },
    { 
      name: t('nav.organization'), 
      href: '#',
      submenu: [
        { name: t('nav.executiveBoard'), href: '/executive-board' },
        { name: t('nav.steeringCommittee'), href: '/steering-committee' },
        { name: t('nav.activeMembers'), href: '/members' },
        { name: t('nav.governance'), href: '/governance' },
        { name: t('nav.photoGallery'), href: '/gallery' },
      ]
    },
    { name: t('nav.donate'), href: '/donate' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-primary-600">
                HJFF
              </span>
              <span className="text-xs text-neutral-600 -mt-1 hidden sm:block">
                Hollis Jamaica Friends & Family
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <LanguageSwitcher />
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200 flex items-center space-x-1"
                >
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {item.submenu && activeSubmenu === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-neutral-200 py-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact" className="btn-primary">
              Get Involved
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-neutral-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-200">
            <div className="mb-4 pb-4 border-b border-neutral-200">
              <LanguageSwitcher />
            </div>
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-3 text-neutral-700 hover:text-primary-600 font-medium"
                  onClick={() => !item.submenu && setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4 space-y-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block py-2 text-neutral-600 hover:text-primary-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="block mt-4 btn-primary text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Involved
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
