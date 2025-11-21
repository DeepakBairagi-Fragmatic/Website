/**
 * ResumeUploadModal - A simple modal for uploading resumes
 * Usage: <resume-upload-modal id="resumeModal"></resume-upload-modal>
 * To open: document.getElementById('resumeModal').open();
 */

class ResumeUploadModal extends HTMLElement {
  constructor() {
    super();
    this.isOpen = false;
  }

  connectedCallback() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    this.innerHTML = `
      <div id="resumeUploadModal" class="fixed inset-0 z-[100] hidden">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity opacity-0" id="resumeModalBackdrop"></div>

        <!-- Modal Content -->
        <div class="absolute inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <div
              class="relative transform overflow-hidden rounded-2xl text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg scale-95 opacity-0"
              id="resumeModalPanel"
              style="background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px); border: 1px solid rgba(139, 92, 246, 0.15);">

              <!-- Close Button -->
              <button type="button" id="closeResumeModalBtn"
                class="absolute top-4 right-4 text-purple-400 hover:text-white transition z-10">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div class="px-8 py-8">
                <div class="text-center mb-8">
                  <div class="w-16 h-16 rounded-2xl bg-purple-900/30 flex items-center justify-center mx-auto mb-4 text-pink-400">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                  </div>
                  <h3 class="text-2xl font-bold text-white mb-2">Upload Your Resume</h3>
                  <p class="text-purple-200/70 text-sm">Share your resume with us and we'll be in touch if there's a fit.</p>
                </div>

                <form id="resumeUploadForm" class="space-y-6">
                  <!-- Full Name -->
                  <div>
                    <label for="resumeName"
                      class="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Full Name *</label>
                    <input type="text" id="resumeName" name="name" required
                      class="w-full bg-[#0b0115] border border-purple-800 rounded-lg px-4 py-3 text-white text-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition"
                      placeholder="John Doe">
                  </div>

                  <!-- Email -->
                  <div>
                    <label for="resumeEmail"
                      class="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Email *</label>
                    <input type="email" id="resumeEmail" name="email" required
                      class="w-full bg-[#0b0115] border border-purple-800 rounded-lg px-4 py-3 text-white text-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition"
                      placeholder="john@example.com">
                  </div>

                  <!-- Phone -->
                  <div>
                    <label for="resumePhone"
                      class="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Phone Number</label>
                    <input type="tel" id="resumePhone" name="phone"
                      class="w-full bg-[#0b0115] border border-purple-800 rounded-lg px-4 py-3 text-white text-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition"
                      placeholder="+1 (555) 000-0000">
                  </div>

                  <!-- Resume Upload -->
                  <div>
                    <label for="resumeFile"
                      class="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Resume / CV *</label>
                    <div class="relative">
                      <input type="file" id="resumeFile" name="resume" required accept=".pdf,.doc,.docx"
                        class="hidden">
                      <button type="button" onclick="document.getElementById('resumeFile').click()"
                        class="w-full bg-[#0b0115] border border-purple-800 rounded-lg px-4 py-3 text-left text-purple-400 text-sm hover:border-pink-500 transition flex items-center gap-3">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                        </svg>
                        <span id="fileNameDisplay">Choose file (PDF, DOC, DOCX)</span>
                      </button>
                    </div>
                    <p class="text-purple-400/60 text-xs mt-1">Max file size: 5MB</p>
                  </div>

                  <!-- Cover Note (Optional) -->
                  <div>
                    <label for="resumeNote"
                      class="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Quick Note (Optional)</label>
                    <textarea id="resumeNote" name="note" rows="3"
                      class="w-full bg-[#0b0115] border border-purple-800 rounded-lg px-4 py-3 text-white text-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none transition"
                      placeholder="Tell us a bit about yourself..."></textarea>
                  </div>

                  <button type="submit"
                    class="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 rounded-xl transition transform hover:scale-[1.02] shadow-lg">
                    Submit Resume
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
    const modal = this.querySelector('#resumeUploadModal');
    const closeBtn = this.querySelector('#closeResumeModalBtn');
    const backdrop = this.querySelector('#resumeModalBackdrop');
    const panel = this.querySelector('#resumeModalPanel');
    const form = this.querySelector('#resumeUploadForm');
    const fileInput = this.querySelector('#resumeFile');
    const fileNameDisplay = this.querySelector('#fileNameDisplay');

    // File input change handler
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        // Check file size (5MB limit)
        if (file.size > 5 * 1024 * 1024) {
          alert('File size exceeds 5MB. Please choose a smaller file.');
          fileInput.value = '';
          fileNameDisplay.textContent = 'Choose file (PDF, DOC, DOCX)';
          return;
        }
        fileNameDisplay.textContent = file.name;
        fileNameDisplay.classList.add('text-white');
      } else {
        fileNameDisplay.textContent = 'Choose file (PDF, DOC, DOCX)';
        fileNameDisplay.classList.remove('text-white');
      }
    });

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

  open() {
    const modal = this.querySelector('#resumeUploadModal');
    const backdrop = this.querySelector('#resumeModalBackdrop');
    const panel = this.querySelector('#resumeModalPanel');

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
    const modal = this.querySelector('#resumeUploadModal');
    const backdrop = this.querySelector('#resumeModalBackdrop');
    const panel = this.querySelector('#resumeModalPanel');

    backdrop.classList.add('opacity-0');
    panel.classList.remove('scale-100', 'opacity-100');
    panel.classList.add('scale-95', 'opacity-0');

    setTimeout(() => {
      modal.classList.add('hidden');
      this.isOpen = false;
    }, 300);
  }

  handleSubmit(form) {
    const formData = new FormData(form);
    const file = formData.get('resume');

    if (!file || file.size === 0) {
      alert('Please select a resume file to upload.');
      return;
    }

    // Collect data
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      note: formData.get('note'),
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type
    };

    console.log('Resume Upload:', data);
    console.log('File:', file);

    // Show success state
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Resume Received! 🎉';
    btn.classList.add('bg-green-600');
    btn.classList.remove('from-purple-600', 'to-pink-600');

    // In a real app, you would upload the file to your server here
    // Example with FormData:
    // fetch('/api/upload-resume', { method: 'POST', body: formData })

    setTimeout(() => {
      this.close();
      form.reset();
      const fileNameDisplay = this.querySelector('#fileNameDisplay');
      fileNameDisplay.textContent = 'Choose file (PDF, DOC, DOCX)';
      fileNameDisplay.classList.remove('text-white');
      btn.textContent = originalText;
      btn.classList.remove('bg-green-600');
      btn.classList.add('from-purple-600', 'to-pink-600');

      alert('Thank you for submitting your resume! We will review it and get back to you soon.');
    }, 2000);
  }
}

// Define the custom element
customElements.define('resume-upload-modal', ResumeUploadModal);
