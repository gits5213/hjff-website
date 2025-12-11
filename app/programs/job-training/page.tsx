import { Briefcase, FileText, Users, Target, CheckCircle, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function JobTraining() {
  const programs = [
    {
      icon: FileText,
      title: 'Resume Building',
      description: 'Learn to create professional resumes that stand out to employers. We cover formatting, content strategy, and ATS optimization.',
    },
    {
      icon: Users,
      title: 'Interview Preparation',
      description: 'Master interview skills with mock interviews, common question practice, and techniques to present yourself confidently.',
    },
    {
      icon: TrendingUp,
      title: 'Skills Development',
      description: 'Enhance your professional skills with workshops on communication, time management, and industry-specific competencies.',
    },
    {
      icon: Target,
      title: 'Career Counseling',
      description: 'One-on-one guidance to help you identify career paths, set goals, and develop strategies for professional growth.',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <h1 className="heading-1 text-white mb-6">Job Training Programs</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Empowering community members with the skills and confidence needed to succeed in today&apos;s workforce.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="heading-2 mb-6">Professional Development for Success</h2>
            <p className="text-body mb-4">
              Our Job Training programs are designed to bridge the gap between job seekers and employment opportunities. We recognize that finding and securing employment requires more than just a desire to work—it requires the right skills, preparation, and support.
            </p>
            <p className="text-body">
              Whether you're entering the workforce for the first time, looking to change careers, or re-entering after a gap, our comprehensive training programs provide the tools you need to succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {programs.map((program) => (
              <div key={program.title} className="bg-neutral-50 p-8 rounded-xl">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-lg mb-4">
                  <program.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="heading-3 text-xl mb-3">{program.title}</h3>
                <p className="text-neutral-700">{program.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary-50 border border-primary-200 rounded-xl p-8 mb-12">
            <h3 className="heading-3 mb-4">Program Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-700">Industry-recognized training materials</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-700">Personalized coaching and feedback</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-700">Networking opportunities</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-700">Ongoing support after program completion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Ready to Advance Your Career?</h2>
          <p className="text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
            Join our job training programs and take the next step toward your professional goals.
          </p>
          <Link href="/contact" className="btn-primary">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
