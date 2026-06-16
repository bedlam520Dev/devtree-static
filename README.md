# DevTree Static

A fully modular, developer-friendly static link tree for developers. Host it anywhere—GitHub Pages, Netlify, Vercel, or any static host.

## Features

✨ **Fully Modular Architecture**
- Component-based structure for easy customization
- Separated concerns (config, styles, components, assets)
- No build dependencies required (vanilla HTML/CSS/JS)
- Optional build tools for advanced workflows

🎨 **Developer-Friendly**
- Minimal configuration needed
- Simple JSON-based content management
- Themeable with CSS custom properties
- Responsive design out of the box
- Dark mode support

🚀 **Production Ready**
- Optimized for performance
- SEO-friendly markup
- Accessibility standards (WCAG 2.1 AA)
- Mobile-first design
- Analytics-ready

## Quick Start

### 1. Clone and Setup
```bash
git clone https://github.com/bedlam520Dev/devtree-static.git
cd devtree-static
```

### 2. Customize Your Profile
Edit `config/profile.json` with your information:
```json
{
  "name": "Your Name",
  "title": "Developer | Designer",
  "bio": "Your bio here",
  "avatar": "assets/avatar.jpg"
}
```

### 3. Add Your Links
Edit `config/links.json`:
```json
{
  "primary": [
    {
      "title": "GitHub",
      "url": "https://github.com/yourprofile",
      "icon": "github",
      "color": "#333"
    }
  ]
}
```

### 4. Deploy
- **GitHub Pages**: Push to repo, enable Pages in settings
- **Netlify**: Connect repo, auto-deploys on push
- **Vercel**: Import repo, instant deployment

## Project Structure

```
devtree-static/
├── index.html              # Main entry point
├── config/
│   ├── profile.json       # Your profile data
│   ├── links.json         # All your links
│   ├── theme.json         # Theme customization
│   └── analytics.json     # Analytics configuration
├── src/
│   ├── styles/
│   │   ├── main.css       # Main stylesheet
│   │   ├── themes/        # Theme variations
│   │   └── components/    # Component styles
│   ├── js/
│   │   ├── main.js        # Entry point
│   │   ├── modules/       # Functional modules
│   │   └── utils/         # Utility functions
│   └── components/        # HTML components
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── dist/                  # Build output (if using build tools)
├── docs/                  # Documentation
└── package.json           # Dependencies and scripts
```

## Configuration

### Profile (`config/profile.json`)
Centralized user profile information:
- Name, title, bio
- Avatar and banner images
- Social links
- Contact information

### Links (`config/links.json`)
Organized link categories:
- Primary links (featured)
- Social links
- Projects
- Custom sections

### Theme (`config/theme.json`)
Brand customization:
- Color schemes
- Font families
- Spacing and sizing
- Dark mode preferences

## Development

### Without Build Tools
Just open `index.html` in your browser or serve with any HTTP server:
```bash
python -m http.server 8000
# or
npx http-server
```

### With Build Tools (Optional)
```bash
npm install
npm run dev    # Development server
npm run build  # Production build
npm run lint   # Code quality
```

## Customization

### Colors
Edit `src/styles/theme.css` or `config/theme.json`:
```css
:root {
  --primary: #your-color;
  --secondary: #your-color;
  --accent: #your-color;
}
```

### Components
Each component is in `src/components/` with matching styles in `src/styles/components/`.

### Fonts
Add custom fonts in `src/styles/main.css` and reference in `config/theme.json`.

## Features Deep Dive

### Analytics
Supports:
- Google Analytics
- Plausible
- Fathom
- Custom event tracking

### Social Links
Auto-detect and icon 100+ social platforms.

### Link Previews
Optional: Show preview when hovering/tapping links.

### Dark Mode
Automatic detection with manual toggle option.

### Mobile Optimized
- Touch-friendly tap targets
- Optimized for small screens
- Swipe gestures support

## Deployment Guides

- [GitHub Pages](docs/deploy-github-pages.md)
- [Netlify](docs/deploy-netlify.md)
- [Vercel](docs/deploy-vercel.md)
- [Self-Hosted](docs/deploy-self-hosted.md)

## Performance

- Lighthouse score: 95+
- Page load: < 1s
- No external dependencies in core build
- Optimized assets
- Gzip compression ready

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest versions

## Contributing

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

MIT License - see [LICENSE](LICENSE)

## Support

- 📖 [Documentation](docs/)
- 🐛 [Issues](https://github.com/bedlam520Dev/devtree-static/issues)
- 💬 [Discussions](https://github.com/bedlam520Dev/devtree-static/discussions)

---

**Made with ❤️ for developers**
