# Photo Gallery Setup Guide

This guide explains how to add photos to the gallery and configure filtering.

## Adding Gallery Images

### 1. Add Images to Public Folder

1. Place your images in: `public/images/gallery/`
2. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
3. Recommended size: 1200x800px or similar aspect ratio
4. Name your images descriptively (e.g., `picnic-2024.jpg`, `seminar-nov-2024.jpg`)

### 2. Update Gallery Data

Open `app/gallery/page.tsx` and update the `galleryImages` array:

```typescript
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/gallery/picnic-2024.jpg',
    alt: 'Annual Community Picnic 2024',
    date: '2024-12',
    committee: 'Events',
    event: 'Annual Picnic',
  },
  {
    id: 2,
    src: '/images/gallery/rights-workshop.jpg',
    alt: 'Constitutional Rights Workshop',
    date: '2024-11',
    committee: 'Education',
    event: 'Rights Workshop',
  },
  // Add more images here
];
```

### 3. Image Properties

Each image should have:
- **id**: Unique number
- **src**: Path relative to public folder (starts with `/images/gallery/`)
- **alt**: Descriptive text for accessibility
- **date**: Format `YYYY-MM` (e.g., '2024-12')
- **committee** (optional): One of: 'Events', 'Education', 'Community Support', 'Job Training', 'Social Services', 'Executive Board', 'Steering Committee'
- **event** (optional): Name of the event or occasion

### 4. Filtering Options

The gallery supports filtering by:
- **Year**: Automatically generated from image dates
- **Committee**: Based on the `committee` field in image data

You can add more committees by updating the `committees` array in `app/gallery/page.tsx`.

## Features

- ✅ Filter by year
- ✅ Filter by committee
- ✅ Lightbox view with full-screen images
- ✅ Navigation arrows in lightbox
- ✅ Responsive grid layout
- ✅ Hover effects and animations
- ✅ Image metadata display

## Example Workflow

1. Take photos at an event
2. Optimize images (compress if needed)
3. Upload to `public/images/gallery/`
4. Add entry to `galleryImages` array in `app/gallery/page.tsx`
5. Commit and push changes
6. Images will appear in the gallery automatically
