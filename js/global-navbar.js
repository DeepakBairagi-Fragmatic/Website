/**
 * GlobalNavbar - Professional responsive navbar component
 * Features: Mobile menu, active page highlighting, smooth animations
 */
class GlobalNavbar extends HTMLElement {
  constructor() {
    super();
    this.mobileMenuOpen = false;
  }

  connectedCallback() {
    const path = window.location.pathname;
    const isSubDir = path.includes('/events/') || path.includes('/case-study/') || path.includes('/resources/');
    const isLocal = window.location.protocol === 'file:';
    const ext = isLocal ? '.html' : '';
    const base = isSubDir ? '../' : '';
    const home = isSubDir ? `../index${ext}` : `index${ext}`;

    // Get current page for active state (handle both .html and clean URLs)
    const rawPage = path.split('/').pop().split('\\').pop() || 'index.html';
    const currentPage = rawPage.replace('.html', '').replace('index', '') || 'index';

    this.innerHTML = `
    <!-- Navbar -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-[#0b0115]/80 backdrop-blur-xl border-b border-purple-900/30 shadow-lg shadow-purple-900/10">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-20">
          
          <!-- Logo + Brand -->
          <a href="${home}" class="flex items-center gap-3 group">
            <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <span class="text-2xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">PurpleWave</span>
          </a>
          
          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center gap-8">
            <ul class="flex items-center gap-1">
              <li><a href="${home}" class="nav-link ${currentPage === 'index' ? 'active' : ''}">Home</a></li>
              <li><a href="${base}aboutus${ext}" class="nav-link ${currentPage === 'aboutus' ? 'active' : ''}">About</a></li>
              <li><a href="${base}services${ext}" class="nav-link ${currentPage === 'services' ? 'active' : ''}">Services</a></li>
              <li><a href="${base}events${ext}" class="nav-link ${currentPage === 'events' ? 'active' : ''}">Events</a></li>
              <li><a href="${base}resources${ext}" class="nav-link ${currentPage === 'resources' ? 'active' : ''}">Resources</a></li>
              <li><a href="${base}case-study${ext}" class="nav-link ${currentPage === 'case-study' ? 'active' : ''}">Case Studies</a></li>
              <li><a href="${base}contact${ext}" class="nav-link ${currentPage === 'contact' ? 'active' : ''}">Contact</a></li>
            </ul>
            
            <!-- CTA Button -->
            <a href="${base}contact${ext}" class="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-900/30">
              Get Started
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button id="mobileMenuBtn" class="lg:hidden text-purple-200 hover:text-white transition p-2" aria-label="Toggle menu">
            <svg id="menuIcon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg id="closeIcon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div id="mobileMenu" class="lg:hidden hidden border-t border-purple-900/30 bg-[#0b0115]/95 backdrop-blur-xl">
        <div class="container mx-auto px-4 py-6">
          <ul class="space-y-2">
            <li><a href="${home}" class="mobile-nav-link ${currentPage === 'index' ? 'active' : ''}">Home</a></li>
            <li><a href="${base}aboutus${ext}" class="mobile-nav-link ${currentPage === 'aboutus' ? 'active' : ''}">About</a></li>
            <li><a href="${base}services${ext}" class="mobile-nav-link ${currentPage === 'services' ? 'active' : ''}">Services</a></li>
            <li><a href="${base}events${ext}" class="mobile-nav-link ${currentPage === 'events' ? 'active' : ''}">Events</a></li>
            <li><a href="${base}resources${ext}" class="mobile-nav-link ${currentPage === 'resources' ? 'active' : ''}">Resources</a></li>
            <li><a href="${base}case-study${ext}" class="mobile-nav-link ${currentPage === 'case-study' ? 'active' : ''}">Case Studies</a></li>
            <li><a href="${base}contact${ext}" class="mobile-nav-link ${currentPage === 'contact' ? 'active' : ''}">Contact</a></li>
          </ul>
          <div class="mt-6 pt-6 border-t border-purple-900/30">
            <a href="${base}contact${ext}" class="block text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-full transition-all duration-300">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Spacer to prevent content from going under fixed navbar -->
    <div class="h-20"></div>

    <style>
      /* Desktop Navigation Links */
      .nav-link {
        position: relative;
        display: inline-block;
        padding: 0.5rem 1rem;
        color: rgb(216 180 254); /* purple-200 */
        font-weight: 500;
        transition: all 0.3s ease;
        border-radius: 0.5rem;
      }

      .nav-link:hover {
        color: white;
        background: rgba(139, 92, 246, 0.1);
      }

      .nav-link.active {
        color: white;
        background: rgba(139, 92, 246, 0.2);
      }

      .nav-link.active::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 1rem;
        right: 1rem;
        height: 2px;
        background: linear-gradient(to right, rgb(168 85 247), rgb(236 72 153));
        border-radius: 2px;
      }

      /* Mobile Navigation Links */
      .mobile-nav-link {
        display: block;
        padding: 0.75rem 1rem;
        color: rgb(216 180 254);
        font-weight: 500;
        transition: all 0.3s ease;
        border-radius: 0.5rem;
      }

      .mobile-nav-link:hover {
        color: white;
        background: rgba(139, 92, 246, 0.1);
        transform: translateX(4px);
      }

      .mobile-nav-link.active {
        color: white;
        background: rgba(139, 92, 246, 0.2);
        border-left: 3px solid rgb(236 72 153);
      }

      /* Smooth mobile menu animation */
      #mobileMenu {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-in-out;
      }

      #mobileMenu:not(.hidden) {
        max-height: 500px;
      }
    </style>
    `;

    // Attach event listeners
    this.attachEventListeners();
  }

  attachEventListeners() {
    const mobileMenuBtn = this.querySelector('#mobileMenuBtn');
    const mobileMenu = this.querySelector('#mobileMenu');
    const menuIcon = this.querySelector('#menuIcon');
    const closeIcon = this.querySelector('#closeIcon');

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        this.mobileMenuOpen = !this.mobileMenuOpen;

        if (this.mobileMenuOpen) {
          mobileMenu.classList.remove('hidden');
          menuIcon.classList.add('hidden');
          closeIcon.classList.remove('hidden');
        } else {
          // Add a small delay to allow animation
          setTimeout(() => {
            mobileMenu.classList.add('hidden');
          }, 300);
          menuIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
        }
      });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (this.mobileMenuOpen && !this.contains(e.target)) {
        this.mobileMenuOpen = false;
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    });

    // Close mobile menu on window resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024 && this.mobileMenuOpen) {
        this.mobileMenuOpen = false;
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    });
  }
}

customElements.define('global-navbar', GlobalNavbar);
