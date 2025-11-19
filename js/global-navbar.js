class GlobalNavbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Determine if we are in a subdirectory (like /events/)
        // This allows the navbar to work with both absolute and relative path setups (e.g. local file system)
        const path = window.location.pathname;
        // Check for 'events/' in path, but be careful not to match 'events.html' at root
        // A simple heuristic: if path contains '/events/' followed by something, or ends in '/events/' (unlikely for file)
        // Actually, checking if we are NOT in root is safer. 
        // But for this specific project structure, we know 'events/' is the main subdirectory.
        // Let's check if the document is in the events folder.
        const isEventsDir = path.includes('/events/') || path.includes('\\events\\');

        const base = isEventsDir ? '../' : '';
        // For home, if we are in root, 'index.html' or './' or '/' works. 
        // If we are in events, '../index.html' works.
        // Using 'index.html' for root to be file-system friendly.
        const home = isEventsDir ? '../index.html' : 'index.html';

        this.innerHTML = `
    <!-- Navbar -->
    <nav class="bg-purple-950 shadow-lg sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <!-- Logo + Brand -->
        <a href="${home}" class="flex items-center gap-2 focus-outline">
          <img src="https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/262379dc-7d7f-4f73-bbf9-fb5c7b3e8b18.png"
               alt="PurpleWave logo" class="h-10 w-auto" loading="lazy"/>
          <span class="text-2xl font-bold text-purple-200">PurpleWave</span>
        </a>
        
        <!-- Navigation links -->
        <ul class="flex space-x-6 text-purple-200">
          <li><a href="${home}" class="hover:text-white transition focus-outline">Home</a></li>
          <li><a href="${base}aboutus.html"  class="hover:text-white transition focus-outline">About</a></li>
          <li><a href="${base}services.html" class="hover:text-white transition focus-outline">Services</a></li>
          <li><a href="${base}events.html"   class="hover:text-white transition focus-outline">Events</a></li>
          <li><a href="${base}contact.html"  class="hover:text-white transition focus-outline">Contact</a></li>
        </ul>
      </div>
    </nav>
    `;
    }
}

customElements.define('global-navbar', GlobalNavbar);
