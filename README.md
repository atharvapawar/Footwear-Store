# 🛍️ Modern Shoe Store

A beautiful, responsive, and high-performance e-commerce application built with React and Vite. Features modern UI/UX design, optimized performance, and accessibility best practices.

## ✨ Features

- 🎨 **Modern Design**: Clean, professional UI with smooth animations
- 📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- ⚡ **High Performance**: Optimized with React.memo, useCallback, and lazy loading
- 🔍 **Advanced Search**: Real-time search with filtering capabilities
- 🎯 **Accessibility**: WCAG compliant with proper ARIA labels
- 🛒 **Interactive Shopping**: Wishlist, cart, and product filtering
- 🎨 **Custom Styling**: CSS custom properties and modern design system
- 📦 **Optimized Bundle**: Code splitting and tree shaking

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd modern-shoe-store

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run optimize-images # Optimize images
npm run analyze      # Analyze bundle size
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Card.jsx        # Product card component
│   └── Input.jsx       # Form input component
├── Navigation/         # Navigation components
│   ├── Nav.jsx        # Main navigation
│   └── Navigation.jsx  # Navigation wrapper
├── Products/          # Product listing
│   ├── Products.jsx   # Product grid
│   └── Products.css   # Product styles
├── Recommended/        # Filter section
│   ├── Recommended.jsx
│   └── Recommended.css
├── Sidebar/           # Filter sidebar
│   ├── Category/      # Category filters
│   ├── Colors/        # Color filters
│   ├── Price/         # Price filters
│   └── Sidebar.jsx    # Sidebar wrapper
├── db/               # Data layer
│   └── data.jsx      # Product data
├── App.jsx           # Main app component
├── index.css         # Global styles
└── main.jsx          # App entry point
```

## 🎨 Design System

The project uses a comprehensive design system with:

- **CSS Custom Properties**: Consistent colors, spacing, and typography
- **Modern Color Palette**: Professional blue and gray tones
- **Responsive Grid**: CSS Grid and Flexbox layouts
- **Smooth Animations**: CSS transitions and keyframe animations
- **Accessibility**: Focus states, ARIA labels, and semantic HTML

## ⚡ Performance Optimizations

- **React.memo**: Prevents unnecessary re-renders
- **useCallback**: Optimizes event handlers
- **useMemo**: Memoizes expensive calculations
- **Lazy Loading**: Images load only when needed
- **Code Splitting**: Separate chunks for vendor libraries
- **Bundle Optimization**: Tree shaking and minification

## 🔧 Technologies Used

- **React 19** - Latest React with concurrent features
- **Vite** - Fast build tool and dev server
- **React Icons** - Beautiful icon library
- **CSS3** - Modern styling with custom properties
- **ESLint** - Code quality and consistency

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Color contrast compliance

## 🚀 Deployment

The project is optimized for deployment on:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

```bash
npm run build
# Deploy the 'dist' folder
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the excellent build tool
- React Icons for the beautiful icons
- Modern CSS for the styling capabilities

---

**Built with ❤️ using React and Vite**
