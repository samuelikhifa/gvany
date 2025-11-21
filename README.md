# GVANY Sales and Distribution Company Limited

**Production website built with Vite + React 19 + TypeScript + Tailwind CSS + Framer Motion**

## 🚀 Tech Stack

- **Vite 5.4+** - Fast build tool
- **React 19** - Latest React with modern features
- **TypeScript** - Type safety
- **Tailwind CSS v3.4+** - Utility-first CSS
- **Framer Motion 12** - Smooth animations
- **React Router DOM v6.26+** - Client-side routing
- **Lucide React** - Beautiful icons
- **vite-plugin-image-optimizer** - Optimized images

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── main.tsx                 # React entry point
├── App.tsx                  # Main app with routing
├── index.css                # Global styles with Tailwind
├── vite-env.d.ts           # Vite TypeScript definitions
├── routes/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── MarketingSales.tsx
│   ├── HaulageLogistics.tsx
│   ├── CustomClearing.tsx
│   ├── AgroAllied.tsx
│   ├── RealEstate.tsx
│   ├── Consultancy.tsx
│   ├── Contact.tsx
│   └── Gallery.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── ServiceHero.tsx
│   ├── WhoWeHelp.tsx
│   ├── PhotoGallery.tsx
│   ├── InteractiveMap.tsx
│   └── CTASection.tsx
└── lib/
    └── utils.ts             # Utility functions
```

## 🎨 Adding Images

Place your images in:
- `public/images/` - For publicly accessible images
- `src/assets/images/` - For imported images

Update image paths in the components to match your actual image files.

## 🌐 Routes

- `/` - Home page
- `/about` - About Us
- `/services` - Services overview
- `/services/marketing-sales-distribution` - Marketing & Sales
- `/services/haulage-logistics` - Haulage & Logistics
- `/services/custom-clearing` - Custom Clearing
- `/services/agro-allied` - Agro-Allied Services
- `/services/real-estate` - Real Estate
- `/services/consultancy` - Consultancy Services
- `/contact` - Contact Us
- `/gallery` - Photo Gallery

## 🚢 Deployment

Ready to deploy to:
- **Vercel** - `vercel deploy`
- **Netlify** - Drag & drop `dist/` folder
- Any static hosting service

## 📝 Notes

- All TypeScript errors will resolve after running `npm install`
- Tailwind CSS warnings in IDE are expected and work correctly
- Update contact information in `Footer.tsx` and `Contact.tsx`
- Add your actual company images to replace placeholders

## 🎯 Features

- ✅ Fully responsive design
- ✅ Modern UI with animations
- ✅ SEO-ready meta tags
- ✅ Fast page loads with code splitting
- ✅ TypeScript for type safety
- ✅ Production-optimized build
- ✅ Interactive Africa map
- ✅ Contact form
- ✅ Photo gallery with lightbox effects

---

**Built for GVANY Sales and Distribution Company Limited**
*Adding Value Across Africa*
