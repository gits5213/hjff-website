'use client';

import { useState } from 'react';
import { Users, Award, Heart, Star, CheckCircle, X, Phone, Mail, MapPin, User } from 'lucide-react';
import Link from 'next/link';

// Members data - updated from form submissions and manual additions
interface Member {
  id: number;
  name: string;
  membershipType: 'General' | 'Life' | 'Founding' | 'Honorary' | 'Advisory Board';
  joinDate: string;
  role?: string;
  active: boolean;
  // Contact information from membership form
  beneficiaryName?: string;
  currentAddress?: string;
  memberPhone?: string;
  beneficiaryPhone?: string;
  email?: string;
}

// Load members from localStorage (for demo) or use your backend API
const loadMembers = (): Member[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    // Load from localStorage
    const stored = localStorage.getItem('activeMembers');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading members:', error);
  }
  
  // Default sample data - replace with your actual member data
  return [
    // Example member structure with contact information:
    // {
    //   id: 1,
    //   name: 'John Doe',
    //   membershipType: 'General',
    //   joinDate: '2024-12',
    //   role: 'Member',
    //   active: true,
    //   beneficiaryName: 'Jane Doe',
    //   currentAddress: '123 Main St, Queens, NY 11412',
    //   memberPhone: '(212) 555-1234',
    //   beneficiaryPhone: '(212) 555-5678',
    //   email: 'john.doe@example.com',
    // },
  ];
};

const sampleMembers: Member[] = typeof window !== 'undefined' ? loadMembers() : [];

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
  const [showMembersTable, setShowMembersTable] = useState(false);
  const [filterType, setFilterType] = useState<'All' | 'Life' | 'Founding' | 'Honorary'>('All');
  
  const activeMembers = sampleMembers.filter((member) => member.active);
  
  // Group members by type
  const membersByType = activeMembers.reduce((acc, member) => {
    if (!acc[member.membershipType]) {
      acc[member.membershipType] = [];
    }
    acc[member.membershipType].push(member);
    return acc;
  }, {} as Record<string, Member[]>);

  // Filter members based on selected type
  const getFilteredMembers = () => {
    if (filterType === 'All') return activeMembers;
    return activeMembers.filter((member) => member.membershipType === filterType);
  };

  const filteredMembers = getFilteredMembers();

  const openMembersTable = (type: 'All' | 'Life' | 'Founding' | 'Honorary') => {
    setFilterType(type);
    setShowMembersTable(true);
  };

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
            <button
              onClick={() => openMembersTable('All')}
              className="text-center p-6 bg-neutral-50 rounded-xl hover:bg-primary-50 transition-colors duration-200 cursor-pointer border-2 border-transparent hover:border-primary-200"
            >
              <Users className="w-12 h-12 text-primary-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-neutral-900 mb-1">{activeMembers.length}</div>
              <div className="text-neutral-600">Total Active</div>
              <div className="text-xs text-primary-600 mt-2">Click to view details</div>
            </button>
            <button
              onClick={() => openMembersTable('Life')}
              className="text-center p-6 bg-neutral-50 rounded-xl hover:bg-green-50 transition-colors duration-200 cursor-pointer border-2 border-transparent hover:border-green-200"
            >
              <Award className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-neutral-900 mb-1">
                {membersByType['Life']?.length || 0}
              </div>
              <div className="text-neutral-600">Life Members</div>
              <div className="text-xs text-green-600 mt-2">Click to view details</div>
            </button>
            <button
              onClick={() => openMembersTable('Founding')}
              className="text-center p-6 bg-neutral-50 rounded-xl hover:bg-purple-50 transition-colors duration-200 cursor-pointer border-2 border-transparent hover:border-purple-200"
            >
              <Star className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-neutral-900 mb-1">
                {membersByType['Founding']?.length || 0}
              </div>
              <div className="text-neutral-600">Founding</div>
              <div className="text-xs text-purple-600 mt-2">Click to view details</div>
            </button>
            <button
              onClick={() => openMembersTable('Honorary')}
              className="text-center p-6 bg-neutral-50 rounded-xl hover:bg-yellow-50 transition-colors duration-200 cursor-pointer border-2 border-transparent hover:border-yellow-200"
            >
              <Heart className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-neutral-900 mb-1">
                {membersByType['Honorary']?.length || 0}
              </div>
              <div className="text-neutral-600">Honorary</div>
              <div className="text-xs text-yellow-600 mt-2">Click to view details</div>
            </button>
          </div>
        </div>
      </section>

      {/* Members Contact Table Modal */}
      {showMembersTable && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowMembersTable(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-200">
              <div>
                <h2 className="heading-2">
                  {filterType === 'All' 
                    ? 'Active Members Contact Information' 
                    : `${filterType} Members Contact Information`}
                </h2>
                <p className="text-neutral-600 mt-1">
                  Showing: {filteredMembers.length} {filteredMembers.length === 1 ? 'member' : 'members'}
                  {filterType !== 'All' && ` (of ${activeMembers.length} total)`}
                </p>
              </div>
              <button
                onClick={() => setShowMembersTable(false)}
                className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6 text-neutral-600" />
              </button>
            </div>

            {/* Table */}
            <div className="overflow-auto flex-1">
              {filteredMembers.length === 0 ? (
                <div className="p-12 text-center">
                  <Users className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                  <p className="text-neutral-600">
                    {filterType === 'All' 
                      ? 'No active members yet.' 
                      : `No ${filterType} members found.`}
                  </p>
                </div>
              ) : (
                <table className="w-full">
                  <thead className="bg-neutral-50 sticky top-0">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-700">Name</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-700">Type</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-700">Email</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-700">Member Phone</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-700">Beneficiary</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-700">Beneficiary Phone</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-700">Address</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-700">Join Date</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-700">Role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    {filteredMembers.map((member) => (
                      <tr key={member.id} className="hover:bg-neutral-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4 text-neutral-400" />
                            <span className="font-medium text-neutral-900">{member.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${membershipTypeColors[member.membershipType]}`}>
                            {member.membershipType}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          {member.email ? (
                            <a
                              href={`mailto:${member.email}`}
                              className="flex items-center space-x-1 text-primary-600 hover:text-primary-700"
                            >
                              <Mail className="w-4 h-4" />
                              <span className="text-sm">{member.email}</span>
                            </a>
                          ) : (
                            <span className="text-neutral-400 text-sm">—</span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          {member.memberPhone ? (
                            <a
                              href={`tel:${member.memberPhone.replace(/\D/g, '')}`}
                              className="flex items-center space-x-1 text-primary-600 hover:text-primary-700"
                            >
                              <Phone className="w-4 h-4" />
                              <span className="text-sm">{member.memberPhone}</span>
                            </a>
                          ) : (
                            <span className="text-neutral-400 text-sm">—</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm text-neutral-700">
                          {member.beneficiaryName || <span className="text-neutral-400">—</span>}
                        </td>
                        <td className="px-6 py-4">
                          {member.beneficiaryPhone ? (
                            <a
                              href={`tel:${member.beneficiaryPhone.replace(/\D/g, '')}`}
                              className="flex items-center space-x-1 text-primary-600 hover:text-primary-700"
                            >
                              <Phone className="w-4 h-4" />
                              <span className="text-sm">{member.beneficiaryPhone}</span>
                            </a>
                          ) : (
                            <span className="text-neutral-400 text-sm">—</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm text-neutral-700 max-w-xs">
                          {member.currentAddress ? (
                            <div className="flex items-start space-x-1">
                              <MapPin className="w-4 h-4 text-neutral-400 mt-0.5 flex-shrink-0" />
                              <span className="line-clamp-2">{member.currentAddress}</span>
                            </div>
                          ) : (
                            <span className="text-neutral-400">—</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm text-neutral-700">
                          {member.joinDate || <span className="text-neutral-400">—</span>}
                        </td>
                        <td className="px-6 py-4 text-sm text-neutral-700">
                          {member.role || <span className="text-neutral-400">—</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-neutral-200 p-4 bg-neutral-50 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <p className="text-sm text-neutral-600">
                  Showing {filteredMembers.length} {filterType === 'All' ? 'active' : filterType.toLowerCase()} {filteredMembers.length === 1 ? 'member' : 'members'}
                </p>
                {filterType !== 'All' && (
                  <button
                    onClick={() => {
                      setFilterType('All');
                      filteredMembers.length === 0 && setShowMembersTable(false);
                    }}
                    className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Show All Members
                  </button>
                )}
              </div>
              <button
                onClick={() => setShowMembersTable(false)}
                className="btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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
