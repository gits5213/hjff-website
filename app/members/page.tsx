import { Users, Award, Heart, Star, CheckCircle } from 'lucide-react';
import Link from 'next/link';

// Members data - updated from form submissions and manual additions
interface Member {
  id: number;
  name: string;
  membershipType: 'General' | 'Life' | 'Founding' | 'Honorary' | 'Advisory Board';
  joinDate: string;
  role?: string;
  active: boolean;
}

// Load members from localStorage (for demo) or use your backend API
const loadMembers = (): Member[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    // Check if there are any pending applications in localStorage
    const application = localStorage.getItem('membershipApplication');
    if (application) {
      const appData = JSON.parse(application);
      // In production, this would be handled by your backend after payment verification
      // For now, members need to be manually added after payment confirmation
    }

    // Load from localStorage or use static data
    const stored = localStorage.getItem('activeMembers');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading members:', error);
  }
  
  return [];
};

const sampleMembers: Member[] = loadMembers();

// Example structure - replace with your actual member data or API call
// In production, fetch from your backend/API:
// const sampleMembers: Member[] = await fetch('/api/members').then(res => res.json());

const membershipTypeColors = {
  General: 'bg-blue-100 text-blue-700',
  Life: 'bg-green-100 text-green-700',
  Founding: 'bg-purple-100 text-purple-700',
  Honorary: 'bg-yellow-100 text-yellow-700',
  'Advisory Board': 'bg-primary-100 text-primary-700',
};

export default function Members() {
  const activeMembers = sampleMembers.filter((member) => member.active);
  
  // Group members by type
  const membersByType = activeMembers.reduce((acc, member) => {
    if (!acc[member.membershipType]) {
      acc[member.membershipType] = [];
    }
    acc[member.membershipType].push(member);
    return acc;
  }, {} as Record<string, Member[]>);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <h1 className="heading-1 text-white mb-6">Active Members</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Our dedicated members are the heart of our organization. Meet the individuals who are making a difference in our community.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-neutral-50 rounded-xl">
              <Users className="w-12 h-12 text-primary-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-neutral-900 mb-1">{activeMembers.length}</div>
              <div className="text-neutral-600">Total Active</div>
            </div>
            <div className="text-center p-6 bg-neutral-50 rounded-xl">
              <Award className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-neutral-900 mb-1">
                {membersByType['Life']?.length || 0}
              </div>
              <div className="text-neutral-600">Life Members</div>
            </div>
            <div className="text-center p-6 bg-neutral-50 rounded-xl">
              <Star className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-neutral-900 mb-1">
                {membersByType['Founding']?.length || 0}
              </div>
              <div className="text-neutral-600">Founding</div>
            </div>
            <div className="text-center p-6 bg-neutral-50 rounded-xl">
              <Heart className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-neutral-900 mb-1">
                {membersByType['Honorary']?.length || 0}
              </div>
              <div className="text-neutral-600">Honorary</div>
            </div>
          </div>
        </div>
      </section>

      {/* Members List */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          {activeMembers.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center py-16">
              <Users className="w-16 h-16 text-neutral-400 mx-auto mb-6" />
              <h2 className="heading-2 mb-4">Member Directory Coming Soon</h2>
              <p className="text-body text-lg mb-8">
                Our active members directory is being compiled and will be available soon. We're working to provide you with information about our dedicated community members.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/membership" className="btn-primary">
                  Become a Member
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* Members by Type */}
              {Object.entries(membersByType).map(([type, members]) => (
                <div key={type} className="mb-12">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`px-4 py-2 rounded-lg font-semibold ${membershipTypeColors[type as keyof typeof membershipTypeColors]}`}>
                      {type} Members
                    </div>
                    <span className="text-neutral-600">({members.length})</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {members.map((member) => (
                      <div
                        key={member.id}
                        className="bg-white rounded-xl shadow-md border border-neutral-200 p-6 hover:shadow-lg transition-shadow duration-200"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="heading-3 text-xl mb-1">{member.name}</h3>
                            {member.role && (
                              <p className="text-primary-600 font-medium text-sm">{member.role}</p>
                            )}
                          </div>
                          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                        </div>
                        
                        <div className="space-y-2 pt-4 border-t border-neutral-200">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-neutral-600">Type:</span>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${membershipTypeColors[member.membershipType]}`}>
                              {member.membershipType}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-neutral-600">Member Since:</span>
                            <span className="text-neutral-900 font-medium">{member.joinDate}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </section>

      {/* Become a Member CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-6">Join Our Community</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Become part of our growing community of dedicated individuals working to make a positive impact in New York.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="btn-primary bg-white text-primary-600 hover:bg-neutral-100">
              Become a Member
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
