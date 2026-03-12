class SchedulingModal extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <!-- Scheduling Modal -->
    <div id="schedulingModal" class="fixed inset-0 z-[60] hidden">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity opacity-0" id="schedBackdrop"></div>
  
      <!-- Modal Content -->
      <div class="absolute inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <div
            class="relative transform overflow-hidden rounded-2xl glass-panel text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl scale-95 opacity-0"
            id="schedPanel">
  
            <!-- Close Button -->
            <button type="button" id="closeSchedBtn"
              class="absolute top-4 right-4 text-purple-400 hover:text-white transition">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
  
            <div class="px-8 py-8">
              <div class="text-center mb-8">
                <h3 class="text-3xl font-bold text-white mb-2 text-gradient">Schedule your call</h3>
                <p class="text-purple-200/70">Pick a time that works best for you.</p>
              </div>
  
              <form id="schedulingForm" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Name</label>
                    <input type="text" required name="name"
                      class="w-full bg-[#0b0115] border border-purple-800 rounded-lg px-4 py-3 text-white text-sm focus:border-pink-500 outline-none transition"
                      placeholder="Your Name">
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Email</label>
                    <input type="email" required name="email"
                      class="w-full bg-[#0b0115] border border-purple-800 rounded-lg px-4 py-3 text-white text-sm focus:border-pink-500 outline-none transition"
                      placeholder="your@email.com">
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Date</label>
                    <input type="date" required name="date"
                      class="w-full bg-[#0b0115] border border-purple-800 rounded-lg px-4 py-3 text-white text-sm focus:border-pink-500 outline-none transition">
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Time</label>
                    <select required name="time"
                      class="w-full bg-[#0b0115] border border-purple-800 rounded-lg px-4 py-3 text-white text-sm focus:border-pink-500 outline-none transition appearance-none">
                      <option value="" disabled selected>Select Time</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>02:00 PM</option>
                      <option>04:00 PM</option>
                    </select>
                  </div>
                </div>
  
                <div>
                  <label class="block text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">Topic</label>
                  <textarea rows="3" name="topic"
                    class="w-full bg-[#0b0115] border border-purple-800 rounded-lg px-4 py-3 text-white text-sm focus:border-pink-500 outline-none transition"
                    placeholder="Briefly describe what you'd like to discuss..."></textarea>
                </div>
  
                <button type="submit"
                  class="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 rounded-xl transition transform hover:scale-[1.02] shadow-lg">
                  Confirm Schedule
                </button>
              </form>
              
              <div id="schedSuccess" class="hidden text-center py-10">
                 <div class="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                 </div>
                 <h4 class="text-2xl font-bold text-white mb-2">Meeting Scheduled!</h4>
                 <p class="text-purple-200/70">We've sent a calendar invite to your email.</p>
                 <button type="button" id="finishedBtn" class="mt-8 text-purple-400 hover:text-white underline text-sm transition">Close Window</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style>
      #schedulingModal input[type="date"]::-webkit-calendar-picker-indicator {
        filter: invert(1);
      }
    </style>
    `;

        this.init();
    }

    init() {
        this.modal = this.querySelector('#schedulingModal');
        this.closeBtn = this.querySelector('#closeSchedBtn');
        this.backdrop = this.querySelector('#schedBackdrop');
        this.panel = this.querySelector('#schedPanel');
        this.form = this.querySelector('#schedulingForm');
        this.successState = this.querySelector('#schedSuccess');
        this.finishedBtn = this.querySelector('#finishedBtn');

        this.closeBtn.addEventListener('click', () => this.close());
        this.finishedBtn.addEventListener('click', () => this.close());

        this.modal.addEventListener('click', (e) => {
            if (e.target === this.backdrop || e.target.closest('.flex') === e.target && e.target !== this.panel && !this.panel.contains(e.target)) {
                this.close();
            }
        });

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.form.classList.add('hidden');
            this.successState.classList.remove('hidden');
            console.log('Meeting Scheduled:', Object.fromEntries(new FormData(this.form)));
            
            // Redirect to newsletter page
            setTimeout(() => {
                window.location.href = 'newsletter.html';
            }, 2500);
        });
    }

    open() {
        this.modal.classList.remove('hidden');
        this.form.classList.remove('hidden');
        this.successState.classList.add('hidden');
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
        }, 300);
    }
}

customElements.define('scheduling-modal', SchedulingModal);
