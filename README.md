# Ahmed Faizul Haque Dhrubo - Academic Portfolio Website

A flagship-level academic portfolio website showcasing research excellence, publications, and professional achievements in AI, robotics, and machine learning.

## 🌟 Features

- **Immersive Hero Section** - Animated tagline with floating contact icons and particle background
- **Interactive Publications Gallery** - Glassmorphic cards with flip animations, filtering, and search
- **Smooth Animations** - Powered by Framer Motion with sophisticated transitions
- **Dark/Light Mode** - Fluid theme transitions with system preference detection
- **Responsive Design** - Optimized for all device sizes and screen orientations
- **SEO Optimized** - Meta tags, Open Graph, and semantic HTML structure
- **Accessible** - WCAG AA compliant with proper ARIA labels and keyboard navigation

## 🛠 Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Styling**: Tailwind CSS with custom glassmorphic components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Shadcn/ui
- **Theme**: Next-themes for dark/light mode
- **Deployment**: Optimized for GitHub Pages (static export)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd academic-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and theme variables
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Main page component
├── components/
│   ├── sections/          # Page sections
│   │   ├── hero.tsx       # Hero section with particle animation
│   │   ├── about.tsx      # About section with bio and research areas
│   │   ├── publications.tsx # Interactive publications gallery
│   │   ├── experience.tsx # Professional timeline
│   │   ├── skills.tsx     # Skills and expertise grid
│   │   ├── mentorship.tsx # Teaching and mentorship stats
│   │   ├── achievements.tsx # Awards carousel
│   │   ├── blog.tsx       # Blog posts with search/filter
│   │   └── contact.tsx    # Contact form and social links
│   ├── ui/               # Reusable UI components
│   ├── navigation.tsx    # Main navigation with mobile menu
│   ├── particle-background.tsx # Animated particle system
│   └── theme-provider.tsx # Theme context provider
├── data/
│   └── publications.json # Publications metadata
├── public/
│   └── papers/           # Publication thumbnail images
└── content/              # Blog posts (Markdown)
```

## 🎨 Design System

### Color Palette
- **Primary**: Teal (#00f5d4) and Blue (#00bbf9) gradients
- **Background**: White/Light gray with dark mode support
- **Accent**: Deep navy (#1e293b) with neon highlights
- **Glass**: Semi-transparent backgrounds with blur effects

### Typography
- **Headings**: Space Grotesk (bold, modern)
- **Body**: Inter (readable, professional)
- **Sizes**: Fluid typography with responsive scaling

### Components
- **Glass Cards**: Semi-transparent backgrounds with backdrop blur
- **Glow Effects**: Dynamic hover states with neon shadows
- **Animations**: Smooth transitions and micro-interactions

## 📝 Content Management

### Publications
Edit `data/publications.json` to add/modify publications:

```json
{
  "id": "paper-slug",
  "title": "Paper Title",
  "authors": ["Author 1", "Author 2"],
  "venue": "Conference/Journal Name",
  "year": 2024,
  "type": "Conference|Journal|Preprint",
  "link": "https://publication-url.com",
  "pdf": "https://pdf-url.com",
  "thumbnail": "/papers/paper-image.png",
  "abstract": "Paper abstract...",
  "tags": ["AI", "Machine Learning"],
  "featured": true
}
```

### Blog Posts
Create Markdown files in `content/blog/` directory:

```markdown
---
title: "Blog Post Title"
date: "2024-01-01"
excerpt: "Brief description..."
tags: ["AI", "Research"]
---

# Your blog content here...
```

### Publication Images
Add publication thumbnails to `public/papers/` directory:
- Use PNG format for best quality
- Recommended size: 400x300px
- Name files to match publication IDs

## 🚀 Deployment

### GitHub Pages

1. Update `next.config.js` for your repository:
```javascript
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name', // Add this if using a project page
  images: { unoptimized: true }
};
```

2. Build the site:
```bash
npm run build
```

3. Deploy to GitHub Pages:
   - Push to your repository
   - Enable Pages in repository settings
   - Select "GitHub Actions" as source
   - The site will automatically deploy on push to main branch

### Custom Domain
To use a custom domain:
1. Add `CNAME` file to `public/` directory with your domain
2. Configure DNS settings with your domain provider
3. Enable custom domain in GitHub Pages settings

## 🎯 Customization

### Personal Information
Update the following files with your information:
- `components/sections/hero.tsx` - Name, taglines, social links
- `components/sections/about.tsx` - Bio, education, research areas
- `components/sections/contact.tsx` - Contact information
- `app/layout.tsx` - Meta tags and site title

### Styling
- Modify `app/globals.css` for global styles and theme variables
- Update Tailwind config in `tailwind.config.ts`
- Customize component styles in individual section files

### Animations
- Adjust animation variants in component files
- Modify particle system in `components/particle-background.tsx`
- Customize hover effects and transitions

## 📊 Performance

The site is optimized for performance:
- Static site generation (SSG)
- Optimized images and assets
- Minimal JavaScript bundle
- Efficient CSS with Tailwind purging
- Smooth 60fps animations

## 🔧 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎉 Acknowledgments

- Design inspiration from top academic portfolios
- Icons by [Lucide](https://lucide.dev)
- UI components by [shadcn/ui](https://ui.shadcn.com)
- Animations powered by [Framer Motion](https://framer.com/motion)

---

**Built with ❤️ by Ahmed Faizul Haque Dhrubo**

For questions or support, please [open an issue](../../issues) or contact me directly.