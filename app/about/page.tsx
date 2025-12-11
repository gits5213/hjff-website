'use client';

import { Shield, Users, Heart, Target, Award, Handshake } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

export default function About() {
  const { t } = useLanguage();
  const values = [
    {
      icon: Shield,
      title: t('about.values.integrity.title'),
      description: t('about.values.integrity.description'),
    },
    {
      icon: Heart,
      title: t('about.values.compassion.title'),
      description: t('about.values.compassion.description'),
    },
    {
      icon: Users,
      title: t('about.values.inclusion.title'),
      description: t('about.values.inclusion.description'),
    },
    {
      icon: Handshake,
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.description'),
    },
  ];

  const achievements = [
    {
      number: '500+',
      label: t('about.impact.membersServed'),
    },
    {
      number: '50+',
      label: t('about.impact.eventsHosted'),
    },
    {
      number: '20+',
      label: t('about.impact.programsLaunched'),
    },
    {
      number: '15+',
      label: t('about.impact.partnershipsFormed'),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <h1 className="heading-1 text-white mb-6">{t('about.title')}</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            {t('about.description')}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section id="mission" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="heading-2 mb-6">{t('about.storyTitle')}</h2>
              <div className="space-y-4 text-body">
                <p>
                  {t('about.story1')}
                </p>
                <p>
                  {t('about.story2')}
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="heading-2 mb-6">{t('about.missionTitle')}</h2>
              <div className="space-y-4 text-body">
                <p>
                  {t('about.missionIntro')}
                </p>
                <ul className="list-disc list-inside space-y-3 text-body ml-4">
                  <li>{t('about.mission1')}</li>
                  <li>{t('about.mission2')}</li>
                  <li>{t('about.mission3')}</li>
                  <li>{t('about.mission4')}</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="heading-2 mb-6">{t('about.purposeTitle')}</h2>
              <div className="space-y-4 text-body">
                <p>
                  {t('about.purpose')}
                </p>
                <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 mt-6">
                  <p className="text-body font-semibold text-primary-900 mb-2">{t('about.sloganLabel')}</p>
                  <p className="text-2xl font-display text-primary-700">&quot;{t('common.slogan')}&quot;</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="heading-2 mb-6">{t('about.structureTitle')}</h2>
              <p className="text-body mb-4">
                {t('about.structureIntro')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-body ml-4 mb-4">
                <li>{t('about.structure1')}</li>
                <li>{t('about.structure2')}</li>
              </ul>
              <p className="text-body">
                {t('about.structureOutro')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-6">Our Values</h2>
            <p className="text-body text-lg">
              These core values guide everything we do and shape how we interact with our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-6 rounded-xl shadow-md text-center"
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

      {/* Achievements Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-white mb-4">{t('about.impactTitle')}</h2>
            <p className="text-xl text-primary-100">
              {t('about.impactDescription')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement) => (
              <div key={achievement.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-primary-200">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-6">Our Leadership</h2>
            <p className="text-body text-lg">
              Our dedicated team of leaders works tirelessly to advance our mission and serve the community.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-50 p-8 rounded-xl">
              <p className="text-body text-center">
                {t('about.leadershipText')}
              </p>
              <div className="text-center mt-6">
                <Link href="/contact" className="btn-primary">
                  {t('common.contactUs')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">{t('about.ctaTitle')}</h2>
          <p className="text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
            {t('about.ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="btn-primary">
              {t('common.becomeMember')}
            </Link>
            <Link href="/contact" className="btn-secondary">
              {t('common.contactUs')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
