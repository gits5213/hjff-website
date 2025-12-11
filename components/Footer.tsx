'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    organization: [
      { name: t('footer.aboutUs'), href: '/about' },
      { name: t('footer.ourMission'), href: '/about#mission' },
      { name: t('nav.executiveBoard'), href: '/executive-board' },
      { name: t('nav.steeringCommittee'), href: '/steering-committee' },
      { name: t('nav.governance'), href: '/governance' },
      { name: t('nav.contact'), href: '/contact' },
    ],
    programs: [
      { name: t('nav.communitySupport'), href: '/programs/community' },
      { name: t('nav.jobTraining'), href: '/programs/job-training' },
      { name: t('nav.educationalSeminars'), href: '/programs/education' },
      { name: t('nav.socialServices'), href: '/programs/social-services' },
    ],
    legal: [
      { name: t('footer.legal.privacy'), href: '/legal/privacy' },
      { name: t('footer.legal.terms'), href: '/legal/terms' },
      { name: t('footer.legal.accessibility'), href: '/legal/accessibility' },
    ],
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Organization Info */}
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              HJFF Inc.
            </h3>
            <p className="text-neutral-400 mb-2">
              {t('footer.description')}
            </p>
            <p className="text-primary-400 font-semibold text-lg">
              &quot;{t('common.slogan')}&quot;
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer.organization')}</h4>
            <ul className="space-y-2">
              {footerLinks.organization.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer.programs')}</h4>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer.getInvolved')}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/membership"
                  className="text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  {t('footer.becomeMember')}
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  {t('nav.donate')}
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  {t('footer.photoGallery')}
                </Link>
              </li>
              <li>
                <Link
                  href="/members"
                  className="text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  {t('footer.activeMembers')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-400">
                  New York, NY
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:info@hjffinc.org"
                  className="text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  info@hjffinc.org
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:+12125551234"
                  className="text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  (212) 555-1234
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © {currentYear} Hollis Jamaica Friends and Family Inc. {t('footer.copyright')}
            </p>
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-neutral-400 hover:text-primary-400 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
