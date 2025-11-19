class GlobalNavbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <!-- Navbar -->
    <nav class="bg-purple-950 shadow-lg sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <!-- Logo + Brand -->
        <a href="/" class="flex items-center gap-2 focus-outline">
          <img src="https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/262379dc-7d7f-4f73-bbf9-fb5c7b3e8b18.png"
               alt="PurpleWave logo" class="h-10 w-auto" loading="lazy"/>
          <span class="text-2xl font-bold text-purple-200">PurpleWave</span>
        </a>
        
        <!-- Navigation links -->
        <ul class="flex space-x-6 text-purple-200">
          <li><a href="/" class="hover:text-white transition focus-outline">Home</a></li>
          <li><a href="aboutus.html"  class="hover:text-white transition focus-outline">About</a></li>
          <li><a href="services.html" class="hover:text-white transition focus-outline">Services</a></li>
          <li><a href="events.html"   class="hover:text-white transition focus-outline">Events</a></li>
          <li><a href="contact.html"  class="hover:text-white transition focus-outline">Contact</a></li>
        </ul>
      </div>
    </nav>
    `;
    }
}

customElements.define('global-navbar', GlobalNavbar);
