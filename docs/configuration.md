# Configuration Guide

## Profile Configuration (`config/profile.json`)

```json
{
  "name": "John Doe",
  "title": "Full Stack Developer",
  "bio": "Passionate about building things with JavaScript and Python",
  "avatar": "assets/avatar.jpg",
  "banner": "assets/banner.jpg",
  "email": "john@example.com",
  "location": "San Francisco, CA",
  "pronouns": "he/him"
}
```

### Fields
- `name` - Your display name
- `title` - Your professional title or role
- `bio` - Short biography or tagline
- `avatar` - Path to profile picture (120x120px recommended)
- `banner` - Optional banner image
- `email` - Your email address
- `location` - Your location
- `pronouns` - Your preferred pronouns

## Links Configuration (`config/links.json`)

### Primary Links
Featured links with descriptions and icons:

```json
{
  "id": "github",
  "title": "GitHub",
  "url": "https://github.com/username",
  "icon": "github",
  "color": "#333333",
  "description": "Check out my open source projects"
}
```

### Social Links
Compact social media links:

```json
{
  "id": "twitter",
  "title": "Twitter",
  "url": "https://twitter.com/handle",
  "icon": "twitter",
  "color": "#1DA1F2"
}
```

### Custom Links
Add any custom links:

```json
{
  "id": "newsletter",
  "title": "Subscribe to Newsletter",
  "url": "https://newsletter.com/subscribe",
  "icon": "envelope",
  "color": "#FF6B6B",
  "description": "Get weekly updates"
}
```

## Theme Configuration (`config/theme.json`)

```json
{
  "colors": {
    "primary": "#0066cc",
    "secondary": "#00d4ff",
    "accent": "#ff6b6b",
    "background": "#ffffff",
    "text": "#1a1a1a",
    "textSecondary": "#666666",
    "border": "#e0e0e0"
  },
  "fonts": {
    "primary": "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    "mono": "'JetBrains Mono', 'Courier New', monospace"
  },
  "spacing": {
    "base": 16,
    "small": 8,
    "medium": 24,
    "large": 32
  },
  "borderRadius": {
    "small": 4,
    "medium": 8,
    "large": 16
  },
  "darkMode": {
    "enabled": true,
    "autoDetect": true,
    "colors": {
      "background": "#1a1a1a",
      "text": "#ffffff",
      "textSecondary": "#999999",
      "border": "#333333"
    }
  }
}
```

### Color Schemes

**Light Mode (Default)**
- Primary: Brand color
- Secondary: Accent/highlight color
- Accent: Call-to-action color
- Background: Light white/off-white
- Text: Dark gray/black
- TextSecondary: Medium gray
- Border: Light gray

**Dark Mode**
- Automatically applied when system prefers dark mode
- Can be manually toggled
- Override colors in darkMode.colors

## Analytics Configuration (`config/analytics.json`)

```json
{
  "enabled": true,
  "provider": "google",
  "googleAnalytics": {
    "enabled": true,
    "id": "G-XXXXXXXXXX"
  },
  "plausible": {
    "enabled": false,
    "domain": "yoursite.com"
  },
  "fathom": {
    "enabled": false,
    "siteId": "XXXXXXXXX"
  },
  "trackEvents": true
}
```

### Supported Analytics
- **Google Analytics 4**: Set your G-XXXXXXXXXX ID
- **Plausible**: Privacy-focused alternative
- **Fathom**: GDPR-compliant analytics

### Event Tracking
When enabled, tracks:
- Link clicks with link ID
- Page views
- Custom events

## Environment Variables (Optional)

For advanced setups, you can create a `.env` file:

```
PUBLIC_URL=https://yourdomain.com
ANALYTICS_ID=G-XXXXXXXXXX
```

Note: In vanilla version, these need to be manually injected or loaded via script.