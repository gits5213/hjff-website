'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, Users, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Gallery images structure - update this with your actual images
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  date: string;
  committee?: string;
  event?: string;
}

// Sample gallery data - update with your actual images
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/gallery/image1.jpg',
    alt: 'Community Event 2024',
    date: '2024-12',
    committee: 'Events',
    event: 'Annual Picnic',
  },
  {
    id: 2,
    src: '/images/gallery/image2.jpg',
    alt: 'Educational Seminar',
    date: '2024-11',
    committee: 'Education',
    event: 'Rights Workshop',
  },
  // Add more images here following this structure
];

const committees = ['All', 'Events', 'Education', 'Community Support', 'Job Training', 'Social Services', 'Executive Board', 'Steering Committee'];
const years = ['All', '2024', '2023', '2022', '2021'];

export default function Gallery() {
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedCommittee, setSelectedCommittee] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filteredImages = galleryImages.filter((img) => {
    const yearMatch = selectedYear === 'All' || img.date.startsWith(selectedYear);
    const committeeMatch = selectedCommittee === 'All' || img.committee === selectedCommittee;
    return yearMatch && committeeMatch;
  });

  const openLightbox = (image: GalleryImage) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const goToNext = () => {
    if (!lightboxImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === lightboxImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setLightboxImage(filteredImages[nextIndex]);
  };

  const goToPrevious = () => {
    if (!lightboxImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === lightboxImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setLightboxImage(filteredImages[prevIndex]);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <h1 className="heading-1 text-white mb-6">Photo Gallery</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Explore our community events, programs, and activities through our photo gallery. Filter by year or committee to find specific moments.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="section-padding bg-white border-b border-neutral-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            {/* Year Filter */}
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-primary-600" />
              <label htmlFor="year-filter" className="text-sm font-medium text-neutral-700">
                Year:
              </label>
              <select
                id="year-filter"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Committee Filter */}
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-primary-600" />
              <label htmlFor="committee-filter" className="text-sm font-medium text-neutral-700">
                Committee:
              </label>
              <select
                id="committee-filter"
                value={selectedCommittee}
                onChange={(e) => setSelectedCommittee(e.target.value)}
                className="px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              >
                {committees.map((committee) => (
                  <option key={committee} value={committee}>
                    {committee}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p className="text-center text-neutral-600 mt-4">
            Showing {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          {filteredImages.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-neutral-600 mb-4">No images found for the selected filters.</p>
              <button
                onClick={() => {
                  setSelectedYear('All');
                  setSelectedCommittee('All');
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  onClick={() => openLightbox(image)}
                  className="relative aspect-square bg-neutral-200 rounded-xl overflow-hidden cursor-pointer group hover:shadow-xl transition-shadow duration-200"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-semibold">{image.event || image.alt}</p>
                      {image.committee && (
                        <p className="text-sm text-white/80">{image.committee}</p>
                      )}
                      <p className="text-xs text-white/70">{image.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-neutral-900 rounded-full p-2 shadow-lg"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-neutral-900 rounded-full p-3 shadow-lg"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-neutral-900 rounded-full p-3 shadow-lg"
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image */}
            <div
              className="relative w-full h-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                width={1200}
                height={800}
                className="object-contain w-full h-full rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <p className="text-white font-semibold text-lg">{lightboxImage.event || lightboxImage.alt}</p>
                <div className="flex items-center space-x-4 mt-2 text-white/80">
                  {lightboxImage.committee && (
                    <span className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{lightboxImage.committee}</span>
                    </span>
                  )}
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{lightboxImage.date}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Image Counter */}
            {filteredImages.length > 1 && (
              <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {filteredImages.findIndex((img) => img.id === lightboxImage.id) + 1} / {filteredImages.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
