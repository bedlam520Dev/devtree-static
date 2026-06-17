# Getting Started with DevTree Static

## Quick Setup (2 minutes)

### 1. Edit Your Profile
Open `config/profile.json` and update:
- `name`: Your name
- `title`: Your title/role
- `bio`: Your bio
- `avatar`: Path to your avatar image
- `email`: Your email address

### 2. Add Your Links
Open `config/links.json` and customize:

**Primary Links** - Featured links that appear with descriptions:
```json
{
  "id": "github",
  "title": "GitHub",
  "url": "https://github.com/yourprofile",
  "icon": "github",
  "color": "#333333",
  "description": "Check out my code"
}
```

**Social Links** - Compact social media links:
```json
{
  "id": "twitter",
  "title": "Twitter",
  "url": "https://twitter.com/yourhandle",
  "icon": "twitter",
  "color": "#1DA1F2"
}
```

### 3. Customize Colors (Optional)
Edit `config/theme.json` to change:
- Primary color
- Secondary color
- Accent color
- Font families
- Dark mode colors

### 4. Add Your Avatar and Banner
Place images in `assets/` directory and reference them in config files.

## Available Icons

Emoji icons are used by default:
- `github` → 👉
- `twitter` → 𝑯
- `linkedin` → 💼
- `email` → ✉️
- `discord` → 💬
- `globe` → 🌐
- `youtube` → ▶️
- `instagram` → 📷
- `tiktok` → 🎵
- `twitch` → 👾
- `paypal` → 💳
- `patreon` → ❤️
- `kofi` → ☕

## Local Testing

```bash
# Using Python
python -m http.server 8000

# Using Node
npx http-server

# Using npm (if installed)
npm run dev
```

Then open `http://localhost:8000`

## Deployment

### GitHub Pages
1. Go to Settings → Pages
2. Set source to "Deploy from a branch"
3. Select `main` branch
4. Save
5. Your site is now live at `https://your-username.github.io/devtree-static`

### Netlify
1. Connect your GitHub repo
2. Build command: (leave empty)
3. Publish directory: `.` (or root)
4. Deploy!

### Vercel
1. Import your GitHub repo
2. Click Deploy
3. Your site is live!

## Customization Tips

### Change Colors
Edit CSS variables in `src/styles/main.css`:
```css
:root {
  --primary: #0066cc;
  --secondary: #00d4ff;
  --accent: #ff6b6b;
}
```

### Modify Link Styles
Edit `.link-item` class in `src/styles/main.css`

### Add Analytics
1. Open `config/analytics.json`
2. Set `enabled: true`
3. Add your tracking ID
4. Supported: Google Analytics, Plausible, Fathom

### Custom Sections
Add to `links.json` under `custom` array:
```json
"custom": [
  {
    "id": "projects",
    "title": "My Latest Project",
    "url": "https://project.com",
    "icon": "globe",
    "description": "Check out my latest work"
  }
]
```

## Next Steps

- 📖 [Configuration Guide](./configuration.md)
- 🎨 [Customization Guide](./customization.md)
- 🚀 [Deployment Guides](./deployment.md)
- 🐛 [Troubleshooting](./troubleshooting.md)