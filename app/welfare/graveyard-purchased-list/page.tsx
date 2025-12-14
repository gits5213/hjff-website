import { MapPin, Calendar, User, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function GraveyardPurchasedList() {
  // Sample data - this would typically come from a database or API
  const purchasedPlots = [
    {
      id: 1,
      memberName: 'John Doe',
      cemeteryName: 'Mount Hope Cemetery',
      plotNumber: 'A-123',
      purchaseDate: '2024-01-15',
      location: 'Bronx, NY',
      status: 'Active',
    },
    {
      id: 2,
      memberName: 'Jane Smith',
      cemeteryName: 'Cypress Hills Cemetery',
      plotNumber: 'B-456',
      purchaseDate: '2024-02-20',
      location: 'Brooklyn, NY',
      status: 'Active',
    },
    {
      id: 3,
      memberName: 'Robert Johnson',
      cemeteryName: 'Woodlawn Cemetery',
      plotNumber: 'C-789',
      purchaseDate: '2024-03-10',
      location: 'Bronx, NY',
      status: 'Active',
    },
  ];

  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h1 className="heading-1 text-white mb-6">Graveyard Purchased List</h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-4 max-w-3xl mx-auto">
              Record of Cemetery Plots Purchased by HJFF
            </p>
            <p className="text-lg text-primary-200 max-w-2xl mx-auto">
              This list documents all graveyard plots purchased by HJFF members.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Reference Section */}
      <section className="section-padding bg-white border-b border-neutral-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <FileText className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="heading-3 text-lg mb-2">Policy Reference</h3>
                  <p className="text-body text-neutral-700 mb-2">
                    According to Section 3.2 of our Welfare, Life Insurance & Bereavement Support policy:
                  </p>
                  <p className="text-body text-neutral-700 font-semibold">
                    &quot;HJFF pays graveyard-related costs ONLY IF the family does NOT already own a burial plot. If family owns a plot → HJFF does NOT purchase or contribute to plot cost.&quot;
                  </p>
                  <Link 
                    href="/welfare" 
                    className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold mt-4"
                  >
                    <span>View Full Welfare Policy</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purchased Plots List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="heading-2 mb-4">Purchased Cemetery Plots</h2>
              <p className="text-body text-neutral-600">
                Below is the complete list of graveyard plots purchased by HJFF for eligible members.
              </p>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary-600 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Member Name</th>
                    <th className="px-6 py-4 text-left font-semibold">Cemetery</th>
                    <th className="px-6 py-4 text-left font-semibold">Plot Number</th>
                    <th className="px-6 py-4 text-left font-semibold">Location</th>
                    <th className="px-6 py-4 text-left font-semibold">Purchase Date</th>
                    <th className="px-6 py-4 text-left font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {purchasedPlots.map((plot, index) => (
                    <tr 
                      key={plot.id} 
                      className={`border-b border-neutral-200 hover:bg-primary-50 transition-colors ${
                        index === purchasedPlots.length - 1 ? 'border-b-0' : ''
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-primary-600" />
                          <span className="font-medium text-neutral-900">{plot.memberName}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-neutral-700">{plot.cemeteryName}</td>
                      <td className="px-6 py-4">
                        <span className="font-mono text-sm bg-neutral-100 px-2 py-1 rounded text-neutral-800">
                          {plot.plotNumber}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-neutral-700">{plot.location}</td>
                      <td className="px-6 py-4 text-neutral-700">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-neutral-400" />
                          <span>{new Date(plot.purchaseDate).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          plot.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-neutral-100 text-neutral-800'
                        }`}>
                          {plot.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {purchasedPlots.map((plot) => (
                <div key={plot.id} className="bg-white border-2 border-neutral-200 rounded-xl p-6 shadow-md">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-5 h-5 text-primary-600" />
                      <h3 className="heading-3 text-lg">{plot.memberName}</h3>
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      plot.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-neutral-100 text-neutral-800'
                    }`}>
                      {plot.status}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-neutral-900">{plot.cemeteryName}</p>
                        <p className="text-sm text-neutral-600">{plot.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-neutral-600">Plot Number</p>
                        <p className="text-sm font-mono font-semibold text-neutral-900">{plot.plotNumber}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-neutral-600">Purchase Date</p>
                        <p className="text-sm font-semibold text-neutral-900">
                          {new Date(plot.purchaseDate).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {purchasedPlots.length === 0 && (
              <div className="bg-neutral-50 border-2 border-neutral-200 rounded-xl p-12 text-center">
                <MapPin className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                <h3 className="heading-3 text-xl mb-2">No Records Found</h3>
                <p className="text-body text-neutral-600">
                  There are currently no graveyard plots in our purchased list.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-2 border-primary-200 rounded-xl p-8 shadow-lg">
              <h2 className="heading-2 mb-6">Important Information</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-body font-semibold mb-1">Plot Ownership</p>
                    <p className="text-body text-neutral-600">
                      All plots listed here are owned by HJFF and are used exclusively for members who do not already own burial plots.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-body font-semibold mb-1">Eligibility</p>
                    <p className="text-body text-neutral-600">
                      Plots are purchased only when a member&apos;s family does not already own a burial plot, as per our Welfare & Support policy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-body font-semibold mb-1">Record Keeping</p>
                    <p className="text-body text-neutral-600">
                      This list is maintained by the Welfare, Life Insurance & Bereavement Support Committee and is updated as new plots are purchased.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="heading-2 text-white mb-6">Questions About Graveyard Purchases?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact our Welfare, Life Insurance & Bereavement Support Committee for more information about graveyard plot purchases and eligibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
            >
              <span>Contact Us</span>
            </Link>
            <Link 
              href="/welfare" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <span>View Welfare Policy</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
