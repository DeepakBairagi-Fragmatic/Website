/**
 * JobApplicationModal - A reusable web component for job applications
 * Usage: <job-application-modal id="jobModal"></job-application-modal>
 * To open: document.getElementById('jobModal').open('Job Title');
 */

class JobApplicationModal extends HTMLElement {
  constructor() {
    super();
    this.isOpen = false;
    this.currentJobTitle = '';
  }

  connectedCallback() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    this.innerHTML = `
      <div id="jobApplicationModal" class="fixed inset-0 z-[100] hidden">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity opacity-0" id="jobModalBackdrop"></div>

        <!-- Modal Content -->
        <div class="absolute inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <div
              class="relative transform overflow-hidden rounded-2xl text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl scale-95 opacity-0"
              id="jobModalPanel"
              style="background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px); border: 1px solid rgba(139, 92, 246, 0.15);">

              <!-- Close Button -->
              <button type="button" id="closeJobModalBtn"
                class="absolute top-4 right-4 text-purple-400 hover:text-white transition z-10">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div class="px-8 py-8">
                <div class="text-center mb-8">
                  <h3 class="text-2xl font-bold text-white mb-2">Apply for <span id="jobTitleDisplay" class="text-gradient">Position</span></h3>
                  <p class="text-purple-200/70 text-sm">Join our team and help us build amazing digital experiences.</p>
                </div>

                <form id="jobApplicationForm" class="space-y-6">
                  <input type="hidden" id="jobPosition" name="position" value="">

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Full Name -->
                    <div>
                      <label for="applicantName"
                        class="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Full Name *</label>
                      <input type="text" id="applicantName" name="name" required
                        class="w-full bg-[#0b0115] border border-purple-800 rounded-lg px-4 py-3 text-white text-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition"
                        placeholder="John Doe">
                    </div>

                    <!-- Email -->
                    <div>
                      <label for="applicantEmail"
                        class="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Email *</label>
                      <input type="email" id="applicantEmail" name="email" required
                        class="w-full bg-[#0b0115] border border-purple-800 rounded-lg px-4 py-3 text-white text-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition"
                        placeholder="john@example.com">
                    </div>

                    <!-- Phone -->
                    <div>
                      <label for="applicantPhone"
                        class="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Phone Number *</label>
                      <input type="tel" id="applicantPhone" name="phone" required
                        class="w-full bg-[#0b0115] border border-purple-800 rounded-lg px-4 py-3 text-white text-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition"
                        placeholder="+1 (555) 000-0000">
                    </div>

                    <!-- Location -->
                    <div>
                      <label for="applicantLocation"
                        class="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Location</label>
                      <input type="text" id="applicantLocation" name="location"
                        class="w-full bg-[#0b0115] border border-purple-800 rounded-lg px-4 py-3 text-white text-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition"
                        placeholder="New York, USA">
                    </div>
                  </div>

                  <!-- LinkedIn/Portfolio -->
                  <div>
                    <label for="applicantLinkedIn"
                      class="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">LinkedIn / Portfolio URL</label>
                    <input type="url" id="applicantLinkedIn" name="linkedin"
                      class="w-full bg-[#0b0115] border border-purple-800 rounded-lg px-4 py-3 text-white text-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition"
                      placeholder="https://linkedin.com/in/yourprofile">
                  </div>

                  <!-- Resume Link -->
                  <div>
                    <label for="applicantResume"
                      class="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Resume URL *</label>
                    <input type="url" id="applicantResume" name="resume" required
                      class="w-full bg-[#0b0115] border border-purple-800 rounded-lg px-4 py-3 text-white text-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition"
                      placeholder="https://drive.google.com/... or https://dropbox.com/...">
                    <p class="text-purple-400/60 text-xs mt-1">Please provide a link to your resume (Google Drive, Dropbox, etc.)</p>
                  </div>

                  <!-- Cover Letter / Why You -->
                  <div>
                    <label for="applicantMessage"
                      class="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Why do you want to join PurpleWave? *</label>
                    <textarea id="applicantMessage" name="message" rows="4" required
                      class="w-full bg-[#0b0115] border border-purple-800 rounded-lg px-4 py-3 text-white text-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition"
                      placeholder="Tell us about your experience and why you'd be a great fit for this role..."></textarea>
                  </div>

                  <button type="submit"
                    class="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 rounded-xl transition transform hover:scale-[1.02] shadow-lg">
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  attachEventListeners() {
    const modal = this.querySelector('#jobApplicationModal');
    const closeBtn = this.querySelector('#closeJobModalBtn');
    const backdrop = this.querySelector('#jobModalBackdrop');
    const panel = this.querySelector('#jobModalPanel');
    const form = this.querySelector('#jobApplicationForm');

    // Close button
    closeBtn.addEventListener('click', () => this.close());

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
      if (e.target === backdrop || e.target === modal) {
        this.close();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    // Form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit(form);
    });
  }

  open(jobTitle = 'this Position') {
    this.currentJobTitle = jobTitle;
    const modal = this.querySelector('#jobApplicationModal');
    const backdrop = this.querySelector('#jobModalBackdrop');
    const panel = this.querySelector('#jobModalPanel');
    const jobTitleDisplay = this.querySelector('#jobTitleDisplay');
    const jobPositionInput = this.querySelector('#jobPosition');

    // Update job title in modal
    jobTitleDisplay.textContent = jobTitle;
    jobPositionInput.value = jobTitle;

    // Show modal
    modal.classList.remove('hidden');
    this.isOpen = true;

    // Animate in
    setTimeout(() => {
      backdrop.classList.remove('opacity-0');
      panel.classList.remove('scale-95', 'opacity-0');
      panel.classList.add('scale-100', 'opacity-100');
    }, 10);
  }

  close() {
    const modal = this.querySelector('#jobApplicationModal');
    const backdrop = this.querySelector('#jobModalBackdrop');
    const panel = this.querySelector('#jobModalPanel');

    backdrop.classList.add('opacity-0');
    panel.classList.remove('scale-100', 'opacity-100');
    panel.classList.add('scale-95', 'opacity-0');

    setTimeout(() => {
      modal.classList.add('hidden');
      this.isOpen = false;
    }, 300);
  }

  handleSubmit(form) {
    // Collect form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log('Job Application Submitted:', data);

    // Show success state
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Application Sent! 🚀';
    btn.classList.add('bg-green-600');
    btn.classList.remove('from-purple-600', 'to-pink-600');

    // In a real app, you would send this data to your server
    // For now, we'll just show success and close the modal
    setTimeout(() => {
      this.close();
      form.reset();
      btn.textContent = originalText;
      btn.classList.remove('bg-green-600');
      btn.classList.add('from-purple-600', 'to-pink-600');

      // Optional: Show a toast notification or redirect
      alert('Thank you for your application! We will review it and get back to you soon.');
    }, 2000);
  }
}

// Define the custom element
customElements.define('job-application-modal', JobApplicationModal);
