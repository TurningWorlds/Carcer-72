<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Navbar - Carcer '72</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background-color: #0d0d0d;
      color: #fff;
      min-height: 200vh;
    }

    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
      transition: all 0.3s;
    }

    nav.scrolled {
      background-color: rgba(0, 0, 0, 0.9);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .nav-container {
      max-width: 80rem;
      margin: 0 auto;
      padding: 1rem 1.5rem;
      position: relative;
    }

    .nav-gradient {
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent);
      pointer-events: none;
    }

    .nav-content {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      font-size: 1.25rem;
      font-weight: bold;
      color: white;
      text-decoration: none;
      z-index: 10;
    }

    .logo .highlight {
      color: #f59e0b;
      font-weight: 300;
    }

    .desktop-nav {
      display: none;
      align-items: center;
      gap: 1.5rem;
    }

    .nav-link {
      font-size: 0.875rem;
      letter-spacing: 0.05em;
      color: #d1d5db;
      text-decoration: none;
      transition: color 0.3s;
    }

    .nav-link:hover,
    .nav-link.active {
      color: #f59e0b;
    }

    .dropdown {
      position: relative;
    }

    .dropdown-btn {
      font-size: 0.875rem;
      letter-spacing: 0.05em;
      color: #d1d5db;
      background: none;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.25rem;
      transition: color 0.3s;
      padding: 0;
    }

    .dropdown-btn:hover {
      color: white;
    }

    .dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 0.5rem;
      width: 12rem;
      background-color: rgba(0, 0, 0, 0.95);
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(12px);
      display: none;
    }

    .dropdown-menu.show {
      display: block;
    }

    .dropdown-menu a,
    .dropdown-menu button {
      display: block;
      width: 100%;
      padding: 0.75rem 1rem;
      font-size: 0.875rem;
      color: #d1d5db;
      text-decoration: none;
      text-align: left;
      background: none;
      border: none;
      cursor: pointer;
      transition: all 0.3s;
    }

    .dropdown-menu a:hover,
    .dropdown-menu button:hover {
      color: white;
      background-color: rgba(255, 255, 255, 0.05);
    }

    .dropdown-menu button.active {
      color: #f59e0b;
      background-color: rgba(255, 255, 255, 0.05);
    }

    .right-actions {
      display: none;
      align-items: center;
      gap: 1rem;
    }

    .lang-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
      color: #d1d5db;
      background: none;
      border: none;
      cursor: pointer;
      transition: color 0.3s;
    }

    .lang-btn:hover {
      color: white;
    }

    .login-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: white;
      font-size: 0.875rem;
      font-weight: 500;
      letter-spacing: 0.05em;
      background: none;
      cursor: pointer;
      transition: all 0.3s;
    }

    .login-btn:hover {
      border-color: rgba(245, 158, 11, 0.5);
    }

    .login-menu {
      position: absolute;
      top: 100%;
      right: 0;
      margin-top: 0.5rem;
      width: 16rem;
      background-color: rgba(0, 0, 0, 0.95);
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(12px);
      padding: 1rem;
      display: none;
    }

    .login-menu.show {
      display: block;
    }

    .login-menu p {
      color: #9ca3af;
      font-size: 0.75rem;
      margin-bottom: 1rem;
    }

    .login-menu button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      border: none;
      color: white;
      cursor: pointer;
      transition: all 0.3s;
      margin-bottom: 0.5rem;
    }

    .discord-btn {
      background-color: #5865F2;
    }

    .discord-btn:hover {
      background-color: #4752C4;
    }

    .email-btn {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .email-btn:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }

    .mobile-menu-btn {
      display: block;
      color: white;
      background: none;
      border: none;
      padding: 0.5rem;
      cursor: pointer;
      z-index: 10;
    }

    .mobile-menu {
      position: fixed;
      inset: 0;
      z-index: 40;
      background-color: rgba(0, 0, 0, 0.95);
      display: none;
      overflow-y: auto;
    }

    .mobile-menu.show {
      display: flex;
    }

    .mobile-menu-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      gap: 1.5rem;
      padding: 6rem 1.5rem;
    }

    .mobile-menu-content a {
      font-size: 1.25rem;
      color: white;
      text-decoration: none;
      transition: color 0.3s;
    }

    .mobile-menu-content a:hover {
      color: #f59e0b;
    }

    .mobile-section {
      width: 100%;
      max-width: 20rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 1.5rem;
      margin-top: 1rem;
    }

    .mobile-section-title {
      color: #6b7280;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 1rem;
      text-align: center;
    }

    .mobile-section a {
      display: block;
      text-align: center;
      color: white;
      text-decoration: none;
      padding: 0.5rem;
      font-size: 1rem;
    }

    .mobile-section button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      border: none;
      color: white;
      cursor: pointer;
      transition: all 0.3s;
      margin-bottom: 0.75rem;
    }

    .lang-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem;
    }

    .lang-grid button {
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background-color: rgba(255, 255, 255, 0.05);
      border: none;
      color: #d1d5db;
      cursor: pointer;
      transition: all 0.3s;
    }

    .lang-grid button:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .lang-grid button.active {
      background-color: #f59e0b;
      color: white;
    }

    .icon {
      width: 1rem;
      height: 1rem;
      stroke: currentColor;
      fill: none;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .icon-lg {
      width: 1.5rem;
      height: 1.5rem;
    }

    @media (min-width: 1024px) {
      .desktop-nav,
      .right-actions {
        display: flex;
      }

      .mobile-menu-btn {
        display: none;
      }

      .dropdown-menu.right {
        left: auto;
        right: 0;
      }

      .dropdown-menu.lang {
        max-height: 16rem;
        overflow-y: auto;
      }
    }
  </style>
</head>
<body>
  <nav id="navbar">
    <div class="nav-container">
      <div class="nav-gradient"></div>
      
      <div class="nav-content">
        <!-- Logo -->
        <a href="index.html" class="logo">
          CARCER <span class="highlight">'72</span>
        </a>
        
        <!-- Desktop Navigation -->
        <div class="desktop-nav">
          <a href="index.html" class="nav-link">Home</a>
          <a href="about.html" class="nav-link">About</a>
          <a href="features.html" class="nav-link">Features</a>
          <a href="factions.html" class="nav-link">Factions</a>
          <a href="media.html" class="nav-link">Media</a>
          <a href="rules.html" class="nav-link">Rules</a>
          
          <!-- Get Started Dropdown -->
          <div class="dropdown" id="getStartedDropdown">
            <button class="dropdown-btn">
              Get Started
              <svg class="icon" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="dropdown-menu">
              <a href="how-to-join.html">How to Join</a>
              <a href="applications.html">Applications</a>
              <a href="wiki.html">Wiki</a>
            </div>
          </div>
          
          <!-- Community Dropdown -->
          <div class="dropdown" id="communityDropdown">
            <button class="dropdown-btn">
              Community
              <svg class="icon" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="dropdown-menu">
              <a href="community.html">Community</a>
              <a href="support.html">Support</a>
              <a href="contact.html">Contact Us</a>
            </div>
          </div>
        </div>
        
        <!-- Right Side Actions -->
        <div class="right-actions">
          <!-- Language Selector -->
          <div class="dropdown" id="languageDropdown">
            <button class="lang-btn">
              <svg class="icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span id="selectedFlag">🇺🇸</span>
              <span id="selectedLang">English</span>
              <svg class="icon" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="dropdown-menu right lang">
              <button data-lang="en" data-flag="🇺🇸" data-name="English" class="active">🇺🇸 English</button>
              <button data-lang="es" data-flag="🇪🇸" data-name="Español">🇪🇸 Español</button>
              <button data-lang="fr" data-flag="🇫🇷" data-name="Français">🇫🇷 Français</button>
              <button data-lang="de" data-flag="🇩🇪" data-name="Deutsch">🇩🇪 Deutsch</button>
              <button data-lang="pt" data-flag="🇵🇹" data-name="Português">🇵🇹 Português</button>
              <button data-lang="ru" data-flag="🇷🇺" data-name="Русский">🇷🇺 Русский</button>
            </div>
          </div>
          
          <!-- Login Button -->
          <div class="dropdown" id="loginDropdown">
            <button class="login-btn">
              <svg class="icon" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Login
            </button>
            <div class="login-menu">
              <p>Choose your login method:</p>
              <button class="discord-btn">
                <svg class="icon" viewBox="0 0 24 24">
                  <rect x="3" y="8" width="18" height="12" rx="2"></rect>
                  <path d="M7 8V6a5 5 0 0 1 10 0v2"></path>
                </svg>
                Login with Discord
              </button>
              <button class="email-btn">
                <svg class="icon" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Login with Email
              </button>
            </div>
          </div>
        </div>
        
        <!-- Mobile Menu Button -->
        <button class="mobile-menu-btn" id="mobileMenuBtn">
          <svg class="icon icon-lg" id="menuIcon" viewBox="0 0 24 24">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg class="icon icon-lg" id="closeIcon" viewBox="0 0 24 24" style="display: none;">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  </nav>
  
  <!-- Mobile Menu -->
  <div class="mobile-menu" id="mobileMenu">
    <div class="mobile-menu-content">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="features.html">Features</a>
      <a href="factions.html">Factions</a>
      <a href="media.html">Media</a>
      <a href="rules.html">Rules</a>
      
      <div class="mobile-section">
        <p class="mobile-section-title">Get Started</p>
        <a href="how-to-join.html">How to Join</a>
        <a href="applications.html">Applications</a>
        <a href="wiki.html">Wiki</a>
      </div>
      
      <div class="mobile-section">
        <p class="mobile-section-title">Community</p>
        <a href="community.html">Community</a>
        <a href="support.html">Support</a>
        <a href="contact.html">Contact Us</a>
      </div>
      
      <div class="mobile-section">
        <button class="discord-btn">
          <svg class="icon" viewBox="0 0 24 24">
            <rect x="3" y="8" width="18" height="12" rx="2"></rect>
            <path d="M7 8V6a5 5 0 0 1 10 0v2"></path>
          </svg>
          Login with Discord
        </button>
        <button class="email-btn">
          <svg class="icon" viewBox="0 0 24 24">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          Login with Email
        </button>
      </div>
      
      <div class="mobile-section">
        <p class="mobile-section-title">Language</p>
        <div class="lang-grid" id="mobileLangGrid">
          <button class="active" data-lang="en" data-flag="🇺🇸" data-name="English">🇺🇸 English</button>
          <button data-lang="es" data-flag="🇪🇸" data-name="Español">🇪🇸 Español</button>
          <button data-lang="fr" data-flag="🇫🇷" data-name="Français">🇫🇷 Français</button>
          <button data-lang="de" data-flag="🇩🇪" data-name="Deutsch">🇩🇪 Deutsch</button>
          <button data-lang="pt" data-flag="🇵🇹" data-name="Português">🇵🇹 Português</button>
          <button data-lang="ru" data-flag="🇷🇺" data-name="Русский">🇷🇺 Русский</button>
        </div>
      </div>
    </div>
  </div>

  <script>
    // Scroll effect
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Dropdown functionality
    function setupDropdown(dropdownId) {
      const dropdown = document.getElementById(dropdownId);
      const btn = dropdown.querySelector('button');
      const menu = dropdown.querySelector('.dropdown-menu, .login-menu');
      
      dropdown.addEventListener('mouseenter', () => {
        menu.classList.add('show');
      });
      
      dropdown.addEventListener('mouseleave', () => {
        menu.classList.remove('show');
      });
    }

    setupDropdown('getStartedDropdown');
    setupDropdown('communityDropdown');
    setupDropdown('languageDropdown');
    setupDropdown('loginDropdown');

    // Language selector
    const langButtons = document.querySelectorAll('[data-lang]');
    langButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = e.currentTarget.dataset.lang;
        const flag = e.currentTarget.dataset.flag;
        const name = e.currentTarget.dataset.name;
        
        document.getElementById('selectedFlag').textContent = flag;
        document.getElementById('selectedLang').textContent = name;
        
        langButtons.forEach(b => b.classList.remove('active'));
        document.querySelectorAll(`[data-lang="${lang}"]`).forEach(b => b.classList.add('active'));
        
        console.log('Language changed to:', lang);
      });
    });

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');

    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
      if (mobileMenu.classList.contains('show')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
      } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      });
    });
  </script>
</body>
</html>
