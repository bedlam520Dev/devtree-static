/**
 * DevTree Static - Main Application
 * Loads profile and links from JSON config files
 */

const app = {
  config: {
    profile: null,
    links: null,
    theme: null,
    analytics: null
  },

  /**
   * Initialize the application
   */
  async init() {
    try {
      await this.loadConfig();
      this.setupTheme();
      this.renderProfile();
      this.renderLinks();
      this.setupAnalytics();
      console.log('DevTree Static initialized');
    } catch (error) {
      console.error('Failed to initialize app:', error);
      this.showError('Failed to load configuration');
    }
  },

  /**
   * Load all configuration files
   */
  async loadConfig() {
    const configs = ['profile', 'links', 'theme', 'analytics'];
    
    for (const config of configs) {
      try {
        const response = await fetch(`config/${config}.json`);
        if (!response.ok) throw new Error(`Failed to load ${config}.json`);
        this.config[config] = await response.json();
      } catch (error) {
        console.error(`Error loading ${config}.json:`, error);
        // Continue with default values
      }
    }
  },

  /**
   * Setup theme from configuration
   */
  setupTheme() {
    if (!this.config.theme) return;

    const theme = this.config.theme;
    const root = document.documentElement;

    // Set color variables
    if (theme.colors) {
      Object.entries(theme.colors).forEach(([key, value]) => {
        root.style.setProperty(`--${this.camelToKebab(key)}`, value);
      });
    }

    // Set font variables
    if (theme.fonts) {
      Object.entries(theme.fonts).forEach(([key, value]) => {
        root.style.setProperty(`--font-${key}`, value);
      });
    }

    // Setup dark mode toggle
    if (theme.darkMode?.enabled) {
      this.setupDarkModeToggle();
    }
  },

  /**
   * Render profile section
   */
  renderProfile() {
    if (!this.config.profile) return;

    const profile = this.config.profile;
    const elements = {
      name: document.getElementById('name'),
      title: document.getElementById('title'),
      bio: document.getElementById('bio'),
      avatar: document.getElementById('avatar')
    };

    if (elements.name) elements.name.textContent = profile.name || 'Your Name';
    if (elements.title) elements.title.textContent = profile.title || 'Developer';
    if (elements.bio) elements.bio.textContent = profile.bio || '';
    if (elements.avatar) {
      elements.avatar.src = profile.avatar || 'assets/avatar.jpg';
      elements.avatar.alt = profile.name || 'Avatar';
    }

    // Update page title
    document.title = `${profile.name || 'DevTree'} - My Links`;
  },

  /**
   * Render links sections
   */
  renderLinks() {
    if (!this.config.links) return;

    const links = this.config.links;

    // Render primary links
    if (links.primary && links.primary.length > 0) {
      const container = document.getElementById('primary-links');
      container.innerHTML = links.primary
        .map(link => this.createLinkElement(link))
        .join('');
    }

    // Render social links
    if (links.social && links.social.length > 0) {
      const container = document.getElementById('social-links');
      container.innerHTML = links.social
        .map(link => this.createSocialLinkElement(link))
        .join('');
    }

    // Render custom links
    if (links.custom && links.custom.length > 0) {
      const container = document.getElementById('custom-links');
      container.innerHTML = links.custom
        .map(link => this.createLinkElement(link))
        .join('');
    }

    // Add click handlers
    this.setupLinkHandlers();
  },

  /**
   * Create a link element
   */
  createLinkElement(link) {
    const description = link.description 
      ? `<p class="link-description">${this.escapeHtml(link.description)}</p>`
      : '';

    return `
      <a href="${link.url}" class="link-item" target="_blank" rel="noopener noreferrer" data-id="${link.id}">
        <div class="link-icon">${this.getIcon(link.icon)}</div>
        <div class="link-content">
          <p class="link-title">${this.escapeHtml(link.title)}</p>
          ${description}
        </div>
      </a>
    `;
  },

  /**
   * Create a social link element (grid layout)
   */
  createSocialLinkElement(link) {
    return `
      <a href="${link.url}" class="link-item" target="_blank" rel="noopener noreferrer" data-id="${link.id}">
        <div class="link-icon">${this.getIcon(link.icon)}</div>
        <p class="link-title">${this.escapeHtml(link.title)}</p>
      </a>
    `;
  },

  /**
   * Setup link event handlers
   */
  setupLinkHandlers() {
    document.querySelectorAll('.link-item').forEach(link => {
      link.addEventListener('click', (e) => {
        const id = link.dataset.id;
        this.trackEvent('link_click', { link_id: id });
      });
    });
  },

  /**
   * Get icon for link (using emoji)
   */
  getIcon(iconName) {
    const icons = {
      github: '👉',
      twitter: '𝑯',
      linkedin: '💼',
      email: '✉️',
      discord: '💬',
      globe: '🌐',
      youtube: '▶️',
      instagram: '📷',
      tiktok: '🎵',
      twitch: '👾',
      paypal: '💳',
      patreon: '❤️',
      kofi: '☕',
      buymeacoffee: '☕'
    };

    return icons[iconName] || '🔗';
  },

  /**
   * Setup dark mode toggle
   */
  setupDarkModeToggle() {
    // Check for saved preference
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode !== null) {
      document.documentElement.setAttribute('data-theme', darkMode);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  },

  /**
   * Setup analytics
   */
  setupAnalytics() {
    if (!this.config.analytics?.enabled) return;

    const analytics = this.config.analytics;

    if (analytics.googleAnalytics?.enabled) {
      this.loadGoogleAnalytics(analytics.googleAnalytics.id);
    }

    if (analytics.plausible?.enabled) {
      this.loadPlausible(analytics.plausible.domain);
    }

    if (analytics.fathom?.enabled) {
      this.loadFathom(analytics.fathom.siteId);
    }
  },

  /**
   * Load Google Analytics
   */
  loadGoogleAnalytics(id) {
    if (!id) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', id);
  },

  /**
   * Load Plausible Analytics
   */
  loadPlausible(domain) {
    if (!domain) return;
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.setAttribute('data-domain', domain);
    script.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(script);
  },

  /**
   * Load Fathom Analytics
   */
  loadFathom(siteId) {
    if (!siteId) return;
    const script = document.createElement('script');
    script.src = 'https://cdn.usefathom.com/script.js';
    script.setAttribute('data-site', siteId);
    script.async = true;
    document.head.appendChild(script);
  },

  /**
   * Track custom event
   */
  trackEvent(eventName, data = {}) {
    if (!this.config.analytics?.trackEvents) return;

    if (window.gtag) {
      gtag('event', eventName, data);
    }

    if (window.plausible) {
      plausible(eventName, { props: data });
    }
  },

  /**
   * Show error message
   */
  showError(message) {
    const app = document.getElementById('app');
    if (app) {
      app.innerHTML = `<div style="text-align: center; padding: 2rem;"><p style="color: red;">${message}</p></div>`;
    }
  },

  /**
   * Escape HTML special characters
   */
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  },

  /**
   * Convert camelCase to kebab-case
   */
  camelToKebab(str) {
    return str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
  }
};

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => app.init());
} else {
  app.init();
}