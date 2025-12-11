# Hollis Jamaica Friends and Family Inc. Website

A modern, accessible website for Hollis Jamaica Friends and Family Inc., a charitable nonprofit organization dedicated to raising awareness about safety, social, and constitutional rights while improving quality of life in New York.

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (body) & Playfair Display (headings)

## Design System

### Colors
- **Primary**: Blue (#0ea5e9 to #0c4a6e) - Trust, professionalism, community
- **Accent**: Yellow (#facc15 to #713f12) - Energy, positivity, hope
- **Neutral**: Gray scale - Clean, modern foundation

### Typography
- **Display Font**: Playfair Display (headings) - Elegant, trustworthy
- **Body Font**: Inter (body text) - Clean, readable, modern

### Design Principles
- Clean, modern, and professional
- Accessible and user-friendly
- Responsive across all devices
- Focused on community engagement

## Pages

### Main Pages
- **Home** (`/`) - Hero section, mission, core values, programs overview
- **About** (`/about`) - Organization story, mission, values, leadership
- **Programs** (`/programs`) - Overview of all programs
  - Community Support (`/programs/community`)
  - Job Training (`/programs/job-training`)
  - Educational Seminars (`/programs/education`)
  - Social Services (`/programs/social-services`)
- **Events** (`/events`) - Upcoming and past community events
- **Membership** (`/membership`) - Membership benefits and levels
- **Contact** (`/contact`) - Contact form and information

### Legal Pages
- **Privacy Policy** (`/legal/privacy`)
- **Terms of Service** (`/legal/terms`)
- **Accessibility Statement** (`/legal/accessibility`)

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Deploy to GitHub Pages

This site is configured for automatic deployment to GitHub Pages via GitHub Actions.

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "GitHub Actions" as the source

2. **Custom Domain Setup** (optional):
   - Edit the `CNAME` file and add your domain
   - Update `next.config.mjs` to set `basePath: ''` and `assetPrefix: ''`
   - Configure DNS records with your domain provider

3. **Automatic Deployment**:
   - Push to `master` branch triggers automatic build and deployment
   - Or manually trigger from Actions → Deploy to GitHub Pages

See `DEPLOYMENT.md` for detailed deployment instructions.

## Project Structure

```
hjff-website/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── events/            # Events page
│   ├── legal/             # Legal pages
│   ├── membership/        # Membership page
│   ├── programs/          # Programs pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Footer.tsx        # Site footer
│   └── Header.tsx        # Site header with navigation
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## Features

- ✅ Fully responsive design
- ✅ Accessible (WCAG 2.1 Level AA compliant)
- ✅ Modern UI with smooth animations
- ✅ SEO optimized
- ✅ Contact form
- ✅ Legal pages (Privacy, Terms, Accessibility)
- ✅ Multi-level navigation with dropdown menus
- ✅ Mobile-friendly navigation

## Customization

### Update Contact Information
Edit contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

### Update Colors
Modify the color palette in `tailwind.config.ts`

### Update Content
All page content can be edited in their respective files in the `app/` directory.

## License

This project is proprietary and belongs to Hollis Jamaica Friends and Family Inc.

## Support

For questions or support, please contact:
- Email: info@hjffinc.org
- Phone: (212) 555-1234
