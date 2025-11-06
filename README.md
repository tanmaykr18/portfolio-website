# Tanmay Kumar's Portfolio

A modern, responsive personal portfolio website built with React + Vite, showcasing MERN stack development expertise and AI integration skills.

## 🚀 Features

- ✨ Modern and responsive design
- 🎨 Smooth animations with Framer Motion
- 📱 Mobile-first approach
- 🎯 Project filtering by technology stack
- 📧 Working contact form with EmailJS integration
- ⚡ Fast loading with Vite
- 🎭 SEO optimized

## 🛠️ Technologies Used

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Email Service:** EmailJS
- **Scroll Animations:** React Intersection Observer

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tanmay-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Configure EmailJS (Optional):
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create an email service and template
   - Update the credentials in `src/components/contact/ContactForm.jsx`:
     ```javascript
     const serviceId = 'YOUR_SERVICE_ID';
     const templateId = 'YOUR_TEMPLATE_ID';
     const userId = 'YOUR_USER_ID';
     ```

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

6. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
  ├── components/
  │   ├── common/          # Reusable components (Header, Footer, etc.)
  │   ├── home/            # Home page components
  │   ├── projects/        # Project-related components
  │   ├── experience/      # Experience-related components
  │   └── contact/         # Contact form component
  ├── pages/               # Page components
  ├── data/                # Portfolio data (JSON)
  ├── hooks/               # Custom React hooks
  ├── utils/               # Utility functions and animations
  └── styles/              # Global styles
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/portfolio.json` to update:
- Personal details (name, email, phone, etc.)
- Skills and expertise
- Work experience
- Projects
- Education
- Certifications
- Achievements

### Update Colors

Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: '#2563EB',    // Your primary color
  secondary: '#1E40AF',  // Your secondary color
  accent: '#F59E0B',     // Your accent color
}
```

### Add Images

Place your images in the `public/images/` directory and update the paths in `portfolio.json`:
- Profile picture: `/images/profile.jpg`
- Project images: `/images/projects/[project-name].jpg`


## 📄 Pages

1. **Home** - Hero section, brief about, featured projects, skills preview
2. **About** - Detailed bio, education, certifications, achievements
3. **Projects** - All projects with filtering and detailed modals
4. **Experience** - Work timeline with detailed job descriptions
5. **Contact** - Contact form, social links, and location

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance Optimizations

- Lazy loading for images
- Code splitting for routes
- Optimized bundle size
- Fast loading times
- SEO meta tags

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Contact

**Tanmay Kumar**
- Email: tanmaykumar18102002@gmail.com
- LinkedIn: [linkedin.com/in/tanmay-kumar](https://linkedin.com/in/tanmay-kumar)
- GitHub: [github.com/tanmay-kumar](https://github.com/tanmay-kumar)

---

Built with ❤️ using React + Vite
