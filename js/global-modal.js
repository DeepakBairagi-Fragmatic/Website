class GlobalModal extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <!-- Demo Modal -->
    <div id="demoModal" class="fixed inset-0 z-50 hidden">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity opacity-0" id="modalBackdrop"></div>
  
      <!-- Modal Content -->
      <div class="absolute inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <div
            class="relative transform overflow-hidden rounded-2xl glass-panel text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl scale-95 opacity-0"
            id="modalPanel">
  
            <!-- Close Button -->
            <button type="button" id="closeModalBtn"
              class="absolute top-4 right-4 text-purple-400 hover:text-white transition">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
  
            <div class="px-8 py-8">
              <div class="text-center mb-8">
                <h3 class="text-2xl font-bold text-white mb-2">Schedule a Product Demo</h3>
                <p class="text-purple-200/70 text-sm">See how PurpleWave can transform your digital infrastructure.</p>
              </div>
  
              <form id="demoForm" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Name -->
                  <div>
                    <label for="demoName"
                      class="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Full Name</label>
                    <input type="text" id="demoName" required
                      class="w-full bg-[#0b0115] border border-purple-800 rounded-lg px-4 py-3 text-white text-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition"
                      placeholder="John Doe">
                  </div>
  
                  <!-- Email -->
                  <div>
                    <label for="demoEmail"
                      class="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Work Email</label>
                    <input type="email" id="demoEmail" required
                      class="w-full bg-[#0b0115] border border-purple-800 rounded-lg px-4 py-3 text-white text-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition"
                      placeholder="john@company.com">
                  </div>
  
                  <!-- Company -->
                  <div>
                    <label for="demoCompany"
                      class="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Company Name</label>
                    <input type="text" id="demoCompany" required
                      class="w-full bg-[#0b0115] border border-purple-800 rounded-lg px-4 py-3 text-white text-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition"
                      placeholder="Acme Inc.">
                  </div>
  
                  <!-- Role -->
                  <div>
                    <label for="demoRole"
                      class="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Job Role</label>
                    <select id="demoRole" required
                      class="w-full bg-[#0b0115] border border-purple-800 rounded-lg px-4 py-3 text-white text-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition appearance-none">
                      <option value="" disabled selected>Select your role</option>
                      <option value="executive">C-Suite / Executive</option>
                      <option value="vp">VP / Director</option>
                      <option value="manager">Manager</option>
                      <option value="developer">Developer / Engineer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
  
                  <!-- Phone -->
                  <div>
                    <label for="demoPhone"
                      class="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Phone Number</label>
                    <input type="tel" id="demoPhone" required
                      class="w-full bg-[#0b0115] border border-purple-800 rounded-lg px-4 py-3 text-white text-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition"
                      placeholder="+1 (555) 000-0000">
                  </div>
  
                  <!-- Website -->
                  <div>
                    <label for="demoWebsite"
                      class="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Company
                      Website</label>
                    <input type="url" id="demoWebsite" required
                      class="w-full bg-[#0b0115] border border-purple-800 rounded-lg px-4 py-3 text-white text-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition"
                      placeholder="https://company.com">
                  </div>
                </div>
  
                <!-- Preferred Time -->
                <div>
                  <label for="demoTime"
                    class="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Preferred Time for
                    Demo</label>
                  <select id="demoTime" required
                    class="w-full bg-[#0b0115] border border-purple-800 rounded-lg px-4 py-3 text-white text-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition appearance-none">
                    <option value="" disabled selected>Select a time slot</option>
                    <option value="morning">Morning (9AM - 12PM EST)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM EST)</option>
                    <option value="evening">Evening (4PM - 8PM EST)</option>
                  </select>
                </div>
  
                <!-- Message -->
                <div>
                  <label for="demoMessage"
                    class="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Anything specific you'd
                    like to see?</label>
                  <textarea id="demoMessage" rows="3"
                    class="w-full bg-[#0b0115] border border-purple-800 rounded-lg px-4 py-3 text-white text-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition"
                    placeholder="Tell us about your project needs..."></textarea>
                </div>
  
                <button type="submit"
                  class="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 rounded-xl transition transform hover:scale-[1.02] shadow-lg">
                  Schedule Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;

        this.initializeModal();
    }

    initializeModal() {
        this.modal = this.querySelector('#demoModal');
        this.closeBtn = this.querySelector('#closeModalBtn');
        this.backdrop = this.querySelector('#modalBackdrop');
        this.panel = this.querySelector('#modalPanel');
        this.form = this.querySelector('#demoForm');

        this.closeBtn.addEventListener('click', () => this.close());

        // Close on backdrop click
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.backdrop || e.target.closest('.flex') === e.target) {
                this.close();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
                this.close();
            }
        });

        // Handle Form Submit
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically send the data to a server
            const formData = new FormData(this.form);
            const data = Object.fromEntries(formData.entries());
            console.log('Demo Request:', data);

            // Show success state (simplified)
            const btn = this.form.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Request Sent! 🚀';
            btn.classList.add('bg-green-600');

            setTimeout(() => {
                this.close();
                this.form.reset();
                btn.textContent = originalText;
                btn.classList.remove('bg-green-600');
            }, 2000);
        });
    }

    open() {
        this.modal.classList.remove('hidden');
        // Small delay to allow display:block to apply before opacity transition
        setTimeout(() => {
            this.backdrop.classList.remove('opacity-0');
            this.panel.classList.remove('scale-95', 'opacity-0');
            this.panel.classList.add('scale-100', 'opacity-100');
        }, 10);
    }

    close() {
        this.backdrop.classList.add('opacity-0');
        this.panel.classList.remove('scale-100', 'opacity-100');
        this.panel.classList.add('scale-95', 'opacity-0');

        setTimeout(() => {
            this.modal.classList.add('hidden');
        }, 300); // Match transition duration
    }
}

customElements.define('global-modal', GlobalModal);
