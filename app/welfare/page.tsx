import { 
  Heart, Shield, Users, FileText, Clock, DollarSign, Calendar, 
  Handshake, CheckCircle, AlertCircle, Building2, Lock, 
  ArrowRight, Star, Phone, Mail, Globe, BookOpen, 
  TrendingUp, Activity, HelpCircle, Award, Zap
} from 'lucide-react';
import Link from 'next/link';

export default function Welfare() {
  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="heading-1 text-white mb-6">Welfare, Life Insurance & Bereavement Support</h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-4 max-w-3xl mx-auto">
              Official Policy — Final Modern Version (2025)
            </p>
            <p className="text-lg text-primary-200 max-w-2xl mx-auto">
              Comprehensive support system for our community members and their families during times of need
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-white border-b border-neutral-200 py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">$100</div>
              <div className="text-sm text-neutral-600">Pre-Death Contribution</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">12hrs</div>
              <div className="text-sm text-neutral-600">Collection Lock Period</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">40</div>
              <div className="text-sm text-neutral-600">Days of Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">48-72hrs</div>
              <div className="text-sm text-neutral-600">Family Payment Window</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 - Establishment */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
                <Building2 className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="heading-2 mb-4">SECTION 1 — ESTABLISHMENT OF WLIBSC</h2>
              <p className="text-body text-lg text-neutral-600 max-w-2xl mx-auto">
                Welfare, Life Insurance & Bereavement Support Committee
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="heading-3 text-xl mb-3">1.1 Name</h3>
                <p className="text-body">Welfare, Life Insurance & Bereavement Support Committee (WLIBSC)</p>
              </div>

              <div className="bg-gradient-to-br from-accent-50 to-accent-100 border-2 border-accent-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="heading-3 text-xl mb-3">1.2 Formation Authority</h3>
                <p className="text-body">Created under Article 9.2 by the Steering Committee.</p>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="heading-3 text-xl mb-3">1.3 Purpose</h3>
                <p className="text-body text-sm">Comprehensive community welfare operations</p>
              </div>
            </div>

            {/* Purpose Details */}
            <div className="bg-white border-2 border-neutral-200 rounded-2xl p-8 shadow-sm">
              <h3 className="heading-3 text-xl mb-6 flex items-center space-x-2">
                <Star className="w-6 h-6 text-accent-600" />
                <span>Committee Purpose & Responsibilities</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Pre-death welfare fund collection</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Funeral & burial support</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Family financial assistance</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-body">40-day meal rotation system</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Community emotional support</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Group life insurance enrollment</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Funeral volunteer corps</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Emergency assistance</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Member memorial & legacy program</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-body">Grief counseling coordination</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Pre-Death Welfare Fund */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-2xl mb-4">
                <DollarSign className="w-8 h-8 text-accent-600" />
              </div>
              <h2 className="heading-2 mb-4">SECTION 2 — PRE-DEATH WELFARE FUND MODEL</h2>
              <p className="text-body text-lg text-neutral-600 max-w-2xl mx-auto">
                Updated & Final Version — Comprehensive fund management system
              </p>
            </div>

            <div className="space-y-6">
              {/* Collection Process */}
              <div className="bg-white border-2 border-primary-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-3 text-2xl mb-2">2.1 Collection Process</h3>
                    <p className="text-body text-neutral-600">Pre-death fund collection mechanism</p>
                  </div>
                </div>
                <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <span className="text-body">
                        Every active monthly-subscriber member contributes <strong className="text-primary-700">$100 BEFORE any death occurs</strong>
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <span className="text-body">
                        Collection window: <strong className="text-primary-700">7 days</strong>
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <span className="text-body">
                        Fund kept as <strong className="text-primary-700">Welfare Standby Fund</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Lock Mechanism */}
              <div className="bg-white border-2 border-accent-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lock className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-3 text-2xl mb-2">2.2 Lock Mechanism</h3>
                    <p className="text-body text-neutral-600">Automatic collection pause system</p>
                  </div>
                </div>
                <div className="bg-accent-50 rounded-xl p-6 border border-accent-100">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <ArrowRight className="w-5 h-5 text-accent-600 mt-1 flex-shrink-0" />
                      <span className="text-body">
                        When the FIRST death occurs → <strong className="text-accent-700">Collection stops for 12 hours</strong>
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <ArrowRight className="w-5 h-5 text-accent-600 mt-1 flex-shrink-0" />
                      <span className="text-body">Funeral process begins immediately</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <ArrowRight className="w-5 h-5 text-accent-600 mt-1 flex-shrink-0" />
                      <span className="text-body">After 12 hours → normal collection resumes</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Multiple Deaths Exception */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-3 text-2xl mb-2">2.3 Multiple Deaths Exception</h3>
                    <p className="text-body text-neutral-600">Emergency protocol for simultaneous deaths</p>
                  </div>
                </div>
                <div className="bg-white/80 rounded-xl p-6 border border-red-100">
                  <p className="text-body font-semibold mb-3 text-red-900">If TWO deaths occur:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span className="text-body">Steering Committee instantly releases emergency funds</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span className="text-body">Funeral process starts immediately</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span className="text-body">Collection from members begins afterwards to replenish the main fund</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span className="text-body">Steering Committee remains in <strong>24/7 standby mode</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Fund Usage */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
                <TrendingUp className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="heading-2 mb-4">SECTION 3 — FUND USAGE</h2>
              <p className="text-body text-lg text-neutral-600 max-w-2xl mx-auto">
                Updated guidelines for approved expenses and family payments
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200 rounded-2xl p-6">
                <h3 className="heading-3 text-xl mb-4 flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-primary-600" />
                  <span>3.1 Approved Expenses</span>
                </h3>
                <ul className="space-y-2 text-body text-sm">
                  <li className="flex items-start space-x-2">
                    <ArrowRight className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                    <span>Mosque/funeral home charges</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ArrowRight className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                    <span>Ghusl & Kafan supplies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ArrowRight className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                    <span>Janaza arrangements</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ArrowRight className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                    <span>Body transportation <span className="text-neutral-500">(NOT family transportation)</span></span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ArrowRight className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                    <span>Emergency burial-related expenses</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-accent-50 to-accent-100 border-2 border-accent-200 rounded-2xl p-6">
                <h3 className="heading-3 text-xl mb-4 flex items-center space-x-2">
                  <Star className="w-6 h-6 text-accent-600" />
                  <span>3.2 Graveyard Exception</span>
                </h3>
                <div className="bg-white/60 rounded-lg p-4 border border-accent-200">
                  <p className="text-body text-sm font-semibold text-accent-900 mb-2">Final Version:</p>
                  <p className="text-body text-sm">
                    HJFF pays graveyard-related costs <strong>ONLY IF</strong> the family does <strong>NOT</strong> already own a burial plot.
                  </p>
                  <p className="text-body text-sm mt-2 text-neutral-600">
                    If family owns a plot → HJFF does NOT purchase or contribute to plot cost.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200 rounded-2xl p-6">
                <h3 className="heading-3 text-xl mb-4 flex items-center space-x-2">
                  <Star className="w-6 h-6 text-primary-600" />
                  <span>3.3 Payment to Family</span>
                </h3>
                <div className="bg-white/60 rounded-lg p-4 border border-primary-200">
                  <p className="text-body text-sm mb-2">After all funeral expenses:</p>
                  <div className="flex items-center space-x-2 text-primary-700 font-semibold">
                    <ArrowRight className="w-5 h-5" />
                    <span className="text-body text-sm">All remaining funds paid directly to spouse/children</span>
                  </div>
                  <p className="text-body text-sm mt-3 font-semibold">
                    Payment delivered within <strong className="text-primary-700">48–72 hours</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - 40-Day Support */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-2xl mb-4">
                <Calendar className="w-8 h-8 text-accent-600" />
              </div>
              <h2 className="heading-2 mb-4">SECTION 4 — 40-DAY MEAL & FAMILY SUPPORT PROGRAM</h2>
              <p className="text-body text-lg text-neutral-600 max-w-2xl mx-auto">
                Separate from Welfare Fund — Comprehensive family support system
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-accent-200 rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 bg-accent-600 rounded-xl flex items-center justify-center mb-6">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <h3 className="heading-3 text-2xl mb-4">4.1 Meal Rotation</h3>
                <ul className="space-y-3 text-body">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent-600 mt-1 flex-shrink-0" />
                    <span>Members volunteer to provide food each day</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent-600 mt-1 flex-shrink-0" />
                    <span>Committee creates a 40-day schedule</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent-600 mt-1 flex-shrink-0" />
                    <span>Meals delivered respectfully</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-primary-200 rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <h3 className="heading-3 text-2xl mb-4">4.2 Emotional & Community Support</h3>
                <p className="text-body mb-4">Committee arranges:</p>
                <ul className="space-y-3 text-body">
                  <li className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <span>Daily/weekly check-ins</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <span>Community visits</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <span>Help with paperwork</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <span>Counseling referral</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Life Insurance */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="heading-2 mb-4">SECTION 5 — GROUP LIFE INSURANCE MODEL</h2>
              <p className="text-body text-lg text-neutral-600 max-w-2xl mx-auto">
                Updated insurance enrollment and coverage guidelines
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200 rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <h3 className="heading-3 text-2xl mb-4">5.1 Premium Payment Rule</h3>
                <p className="text-body mb-4">Each eligible member:</p>
                <div className="bg-white/80 rounded-xl p-5 border border-primary-200">
                  <p className="text-body font-semibold text-primary-900 mb-2">
                    Pays their OWN premium directly to insurer
                  </p>
                  <p className="text-body text-sm text-neutral-600">
                    Welfare Fund does NOT pay insurance premium.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent-50 to-accent-100 border-2 border-accent-200 rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 bg-accent-600 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="heading-3 text-2xl mb-4">5.2 Non-Eligible Members</h3>
                <p className="text-body mb-4">Even if not medically eligible for insurance:</p>
                <div className="bg-white/80 rounded-xl p-5 border border-accent-200">
                  <p className="text-body font-semibold text-accent-900 mb-3">They still receive:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" />
                      <span className="text-body text-sm">Full funeral support</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" />
                      <span className="text-body text-sm">Burial support</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" />
                      <span className="text-body text-sm">Remaining welfare funds</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Membership Continuity */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
                <Handshake className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="heading-2 mb-4">SECTION 6 — MEMBERSHIP CONTINUITY AFTER DEATH</h2>
              <p className="text-body text-lg text-neutral-600 max-w-2xl mx-auto">
                Updated guidelines for family members continuing membership
              </p>
            </div>

            <div className="bg-white border-2 border-primary-200 rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
              <p className="text-body text-lg mb-6 text-center">Upon the death of a member:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-body font-semibold mb-1">Continuity Members</p>
                    <p className="text-body text-sm text-neutral-600">Spouse or children may join as Continuity Members</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-body font-semibold mb-1">No Waiting Period</p>
                    <p className="text-body text-sm text-neutral-600">Immediate eligibility</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-body font-semibold mb-1">Same Dues</p>
                    <p className="text-body text-sm text-neutral-600">Same dues as regular members</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-body font-semibold mb-1">Full Participation</p>
                    <p className="text-body text-sm text-neutral-600">Eligible for future programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - Additional Recommendations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-2xl mb-4">
                <Award className="w-8 h-8 text-accent-600" />
              </div>
              <h2 className="heading-2 mb-4">SECTION 7 — ADDITIONAL RECOMMENDATIONS</h2>
              <p className="text-body text-lg text-neutral-600 max-w-2xl mx-auto">
                Now Officially Included — Enhanced support systems and services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Globe,
                  title: '7.1 Digital Portal',
                  items: ['Online payments', 'Case tracking', 'Transparency dashboard', 'Volunteer coordination', 'Notification system']
                },
                {
                  icon: DollarSign,
                  title: '7.2 Emergency Reserve Fund',
                  items: ['$10,000 minimum', 'Immediate funds', 'Multiple deaths', 'High-cost emergencies']
                },
                {
                  icon: Users,
                  title: '7.3 Funeral Volunteer Corps',
                  items: ['Ghusl training', 'Kafan procedures', 'Janaza management', 'Graveyard procedures', 'Emergency logistics']
                },
                {
                  icon: FileText,
                  title: '7.4 Government Benefits',
                  items: ['NYC Burial Assistance', 'Medicaid Funeral Benefits', 'Religious burial grants', 'Application help']
                },
                {
                  icon: BookOpen,
                  title: '7.5 Burial Preference Form',
                  items: ['Cemetery preference', 'Overseas burial option', 'Family plot info', 'Emergency contacts', 'Advance instructions']
                },
                {
                  icon: TrendingUp,
                  title: '7.6 Transparency Report',
                  items: ['Total collected', 'Total spent', 'Number of deaths', 'Family support', 'Remaining balance']
                },
                {
                  icon: Heart,
                  title: '7.7 Mental Health & Counseling',
                  items: ['Imam partnership', 'Muslim counselor', 'Community mentor', '2-3 grief sessions']
                },
                {
                  icon: Award,
                  title: '7.8 Legacy & Memorial',
                  items: ['Annual memorial dua', 'Memorial Honor Book', 'Community recognition', 'Children support']
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-neutral-50 border-2 border-neutral-200 rounded-2xl p-6 hover:shadow-xl hover:border-primary-300 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="heading-3 text-lg mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.items.map((listItem, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700">{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 - Final SOP */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
                <Activity className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="heading-2 mb-4">SECTION 8 — FINAL SOP</h2>
              <p className="text-body text-lg text-neutral-600 max-w-2xl mx-auto">
                End-to-End Funeral Process — Complete workflow from notification to closure
              </p>
            </div>

            <div className="bg-white border-2 border-primary-200 rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Notification & Verification', desc: 'Confirm death, verify membership, activate committee, notify Executive Board' },
                  { step: '2', title: 'Lock Welfare Fund', desc: 'Stop collection for 12 hours, calculate available balance' },
                  { step: '3', title: 'Funeral Preparation', desc: 'Ghusl, Kafan, Janaza schedule, body transportation' },
                  { step: '4', title: 'Burial Process', desc: 'Cemetery arrangements, pay plot fees ONLY if family has none, perform burial' },
                  { step: '5', title: 'Financial Support', desc: 'Pay remaining funds to family (within 48–72 hrs)' },
                  { step: '6', title: '40-Day Support', desc: 'Daily meal rotation, emotional/spiritual support' },
                  { step: '7', title: 'Closure', desc: 'Treasurer logs expenses, committee submits final report, Steering Committee reviews, add to Memorial Honor List' }
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-primary-50 to-white rounded-xl border border-primary-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-3 text-xl mb-2">{item.title}</h3>
                      <p className="text-body text-neutral-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Diagrams Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-2xl mb-4">
                <Activity className="w-8 h-8 text-accent-600" />
              </div>
              <h2 className="heading-2 mb-4">VISUAL DIAGRAMS</h2>
              <p className="text-body text-lg text-neutral-600 max-w-2xl mx-auto">
                Text Version — Ready to convert into PNG or graphic versions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* A. Full Funeral Workflow */}
              <div className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 rounded-2xl p-8 shadow-lg">
                <h3 className="heading-3 text-xl mb-6 flex items-center space-x-2">
                  <ArrowRight className="w-6 h-6 text-primary-600" />
                  <span>A. Full Funeral Workflow</span>
                </h3>
                <div className="bg-white rounded-xl p-6 border border-primary-200">
                  <div className="font-mono text-sm text-neutral-700 space-y-2 leading-relaxed">
                    <div className="font-semibold text-primary-700">Death Occurs</div>
                    <div className="text-center">↓</div>
                    <div>Verification → Activate Committee → Stop Fund Collection (12 hrs)</div>
                    <div className="text-center">↓</div>
                    <div>Funeral Prep (Ghusl/Kafan/Janaza)</div>
                    <div className="text-center">↓</div>
                    <div>Burial (Plot Exception)</div>
                    <div className="text-center">↓</div>
                    <div>Remaining Funds → Family</div>
                    <div className="text-center">↓</div>
                    <div>40-Day Support (Meals + Visits)</div>
                    <div className="text-center">↓</div>
                    <div className="font-semibold text-primary-700">Case Closed → Memorial Honor List</div>
                  </div>
                </div>
              </div>

              {/* B. Fund Management Model */}
              <div className="bg-gradient-to-br from-accent-50 to-white border-2 border-accent-200 rounded-2xl p-8 shadow-lg">
                <h3 className="heading-3 text-xl mb-6 flex items-center space-x-2">
                  <DollarSign className="w-6 h-6 text-accent-600" />
                  <span>B. Fund Management Model</span>
                </h3>
                <div className="bg-white rounded-xl p-6 border border-accent-200">
                  <div className="font-mono text-sm text-neutral-700 space-y-2 leading-relaxed">
                    <div>Members Pay $100 → Welfare Standby Fund</div>
                    <div className="text-center">↓</div>
                    <div className="font-semibold text-accent-700">Death Happens → Lock 12 Hours</div>
                    <div className="text-center">↓</div>
                    <div>Expenses Paid → Family Gets Remaining</div>
                    <div className="text-center">↓</div>
                    <div className="font-semibold text-accent-700">Resume Collection</div>
                  </div>
                </div>
              </div>

              {/* C. Multiple Deaths Exception */}
              <div className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 rounded-2xl p-8 shadow-lg">
                <h3 className="heading-3 text-xl mb-6 flex items-center space-x-2">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <span>C. Multiple Deaths Exception</span>
                </h3>
                <div className="bg-white rounded-xl p-6 border border-red-200">
                  <div className="font-mono text-sm text-neutral-700 space-y-2 leading-relaxed">
                    <div className="font-semibold text-red-700">Two Deaths Occur</div>
                    <div className="text-center">↓</div>
                    <div>Steering Committee Releases Emergency Funds</div>
                    <div className="text-center">↓</div>
                    <div>Funerals Proceed Immediately</div>
                    <div className="text-center">↓</div>
                    <div className="font-semibold text-red-700">Members Pay $100 → Fund Replenished</div>
                  </div>
                </div>
              </div>

              {/* D. Life Insurance Process */}
              <div className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 rounded-2xl p-8 shadow-lg">
                <h3 className="heading-3 text-xl mb-6 flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-primary-600" />
                  <span>D. Life Insurance Process</span>
                </h3>
                <div className="bg-white rounded-xl p-6 border border-primary-200">
                  <div className="font-mono text-sm text-neutral-700 space-y-2 leading-relaxed">
                    <div>Member Applies</div>
                    <div className="text-center">↓</div>
                    <div>Insurer Reviews</div>
                    <div className="text-center">↓</div>
                    <div className="font-semibold text-primary-700">Eligible → Member Pays Premium</div>
                    <div className="text-center">OR</div>
                    <div className="font-semibold text-primary-700">Not Eligible → Still Gets Full Funeral Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Charter */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
                <BookOpen className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="heading-2 mb-4">COMMITTEE CHARTER — WLIBSC</h2>
              <p className="text-body text-lg text-neutral-600 max-w-2xl mx-auto">
                Legal Governance Document — Official committee structure and responsibilities
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  article: 'ARTICLE 1',
                  title: 'NAME',
                  content: 'Welfare, Life Insurance & Bereavement Support Committee.'
                },
                {
                  article: 'ARTICLE 2',
                  title: 'AUTHORITY',
                  content: 'Authorized under Article 9.2 of the HJFF bylaws by the Steering Committee.'
                },
                {
                  article: 'ARTICLE 3',
                  title: 'PURPOSE',
                  content: 'The Committee exists to manage all welfare funds, ensure proper funeral & burial support, oversee life insurance enrollment, manage 40-day support system, train and mobilize volunteers, provide family assistance, serve as community support pillar, and maintain transparency and justice.',
                  list: [
                    'Manage all welfare funds',
                    'Ensure proper funeral & burial support',
                    'Oversee life insurance enrollment',
                    'Manage 40-day support system',
                    'Train and mobilize volunteers',
                    'Provide family assistance',
                    'Serve as community support pillar',
                    'Maintain transparency and justice'
                  ]
                },
                {
                  article: 'ARTICLE 4',
                  title: 'MEMBERSHIP',
                  content: 'The Committee shall consist of:',
                  list: [
                    '1 Chair',
                    '1 Vice-Chair',
                    '1 Treasurer Liaison',
                    '1 Funeral Logistics Manager',
                    '1 Meal Coordination Manager',
                    '1 Insurance Coordinator',
                    '1 Digital System Coordinator',
                    '3–7 General Committee Members'
                  ]
                },
                {
                  article: 'ARTICLE 5',
                  title: 'MEETINGS',
                  content: '',
                  list: [
                    'Monthly meetings required',
                    'Emergency meetings as needed',
                    'Records kept by Secretary of Committee'
                  ]
                },
                {
                  article: 'ARTICLE 6',
                  title: 'DUTIES',
                  content: '',
                  list: [
                    'Chair: Oversees all operations, reports to Steering Committee',
                    'Treasurer Liaison: Manages fund collection, tracks expenses',
                    'Funeral Logistics Manager: Handles body preparation, Janaza & graveyard coordination',
                    'Meal Coordination Manager: Creates 40-day food schedule',
                    'Insurance Coordinator: Helps members enroll, assists families in claims',
                    'Digital Coordinator: Manages digital portal, ensures online data accuracy'
                  ]
                },
                {
                  article: 'ARTICLE 7',
                  title: 'TRANSPARENCY',
                  content: 'Committee must publish:',
                  list: [
                    'Annual financial report',
                    'Monthly updates to Steering Committee'
                  ]
                },
                {
                  article: 'ARTICLE 8',
                  title: 'TERMINATION',
                  content: 'Committee may be dissolved by Steering Committee majority vote.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white border-2 border-primary-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{item.article.split(' ')[1]}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-3 text-2xl mb-2">{item.title}</h3>
                      {item.content && <p className="text-body mb-4">{item.content}</p>}
                      {item.list && (
                        <ul className="space-y-2">
                          {item.list.map((listItem, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <ArrowRight className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                              <span className="text-body">{listItem}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="heading-2 text-white mb-6">Need Support or Have Questions?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our Welfare, Life Insurance & Bereavement Support Committee is here to help. Contact us for more information or assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Contact Us</span>
            </Link>
            <Link href="/membership" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Learn About Membership</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
