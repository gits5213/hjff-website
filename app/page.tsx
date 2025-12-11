'use client';

import Link from 'next/link';
import { Shield, Users, GraduationCap, Calendar, Heart, Handshake, BookOpen, Briefcase } from 'lucide-react';
import ImageCarousel from '@/components/ImageCarousel';
import { useLanguage } from '@/components/LanguageProvider';

export default function Home() {
  const { t } = useLanguage();
  // Landing page images - images should be in public/images/landingPage/
  // Paths will be adjusted by ImageCarousel component for basePath
  const landingPageImages = [
    '/images/landingPage/picture-1.png',
    '/images/landingPage/picture-2.png',
    '/images/landingPage/picture-3.png',
    '/images/landingPage/picture-4.png',
    '/images/landingPage/picture-5.png',
    '/images/landingPage/picture-6.png',
    '/images/landingPage/picture-7.png',
    '/images/landingPage/picture-8.png',
    '/images/landingPage/picture-9.png',
    // Add more images by adding them to public/images/landingPage/ and adding the paths here
  ];

  const coreValues = [
    {
      icon: Shield,
      title: t('home.coreValues.awareness.title'),
      description: t('home.coreValues.awareness.description'),
    },
    {
      icon: Handshake,
      title: t('home.coreValues.collaboration.title'),
      description: t('home.coreValues.collaboration.description'),
    },
    {
      icon: Heart,
      title: t('home.coreValues.quality.title'),
      description: t('home.coreValues.quality.description'),
    },
    {
      icon: Users,
      title: t('home.coreValues.engagement.title'),
      description: t('home.coreValues.engagement.description'),
    },
  ];

  const programs = [
    {
      icon: GraduationCap,
      title: t('home.programs.education.title'),
      description: t('home.programs.education.description'),
      href: '/programs/education',
    },
    {
      icon: Briefcase,
      title: t('home.programs.jobTraining.title'),
      description: t('home.programs.jobTraining.description'),
      href: '/programs/job-training',
    },
    {
      icon: Heart,
      title: t('home.programs.socialServices.title'),
      description: t('home.programs.socialServices.description'),
      href: '/programs/social-services',
    },
    {
      icon: Users,
      title: t('home.programs.community.title'),
      description: t('home.programs.community.description'),
      href: '/programs/community',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h1 className="heading-1 text-white mb-6">
                {t('home.heroTitle')}
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-6 leading-relaxed">
                {t('home.heroDescription')}
              </p>
              <p className="text-2xl md:text-3xl font-display font-semibold text-white mb-8">
                &quot;{t('common.slogan')}&quot;
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/membership" className="btn-primary bg-white text-primary-600 hover:bg-neutral-100">
                  {t('common.joinUs')}
                </Link>
                <Link href="/donate" className="bg-transparent border-2 border-accent-400 text-white hover:bg-accent-500/20 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                  {t('common.donate')}
                </Link>
                <Link href="/about" className="bg-transparent border-2 border-primary-300 text-white hover:bg-primary-500/20 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                  {t('common.learnMore')}
                </Link>
              </div>
            </div>

            {/* Right Side - Image Carousel */}
            <div className="w-full">
              <ImageCarousel images={landingPageImages} autoPlay={true} autoPlayInterval={5000} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="heading-2 mb-6">{t('home.missionTitle')}</h2>
            <p className="text-body text-lg mb-4">
              {t('home.missionIntro')}
            </p>
            <ul className="text-left space-y-3 text-body max-w-3xl mx-auto">
              <li className="flex items-start space-x-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>{t('home.mission1')}</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>{t('home.mission2')}</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>{t('home.mission3')}</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>{t('home.mission4')}</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-xl bg-neutral-50 hover:bg-primary-50 transition-colors duration-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="heading-3 text-xl mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-6">{t('home.programsTitle')}</h2>
            <p className="text-body text-lg">
              {t('home.programsDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <Link
                key={program.title}
                href={program.href}
                className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 border border-neutral-200 hover:border-primary-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-200">
                      <program.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-200" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-3 text-xl mb-3 group-hover:text-primary-600 transition-colors duration-200">
                      {program.title}
                    </h3>
                    <p className="text-neutral-600">{program.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/programs" className="btn-primary">
              {t('common.viewAll')} {t('nav.programs')}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-6">{t('home.ctaTitle')}</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {t('home.ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="btn-primary bg-white text-primary-600 hover:bg-neutral-100">
              {t('common.becomeMember')}
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
              {t('common.contactUs')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
