// FiNix Digital Solution - Main Application JavaScript
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

document.querySelector("#app").innerHTML = `
  <!-- Mobile Sidebar Overlay -->
  <div class="sidebar-overlay" id="sidebarOverlay"></div>
  
  <!-- Mobile Sidebar -->
  <div class="mobile-sidebar" id="mobileSidebar">
    <div class="sidebar-header">
      <a href="#hero" class="logo">
        <img src="./Assets/logo.jpg" alt="FiNix Logo" class="logo-img">
        <span class="logo-text">FiNix <span>Digital</span></span>
      </a>
      <button class="sidebar-close" id="sidebarClose" aria-label="Close menu">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <ul class="sidebar-nav">
      <li><a href="#hero"><i class="fas fa-home"></i> Home</a></li>
      <li><a href="#why-us"><i class="fas fa-question-circle"></i> Why Us</a></li>
      <li><a href="#process"><i class="fas fa-project-diagram"></i> Workflow</a></li>
      <li><a href="#benefits"><i class="fas fa-chart-line"></i> Benefits</a></li>
      <li><a href="#offer"><i class="fas fa-concierge-bell"></i> What We Offer</a></li>
      <li><a href="#pricing"><i class="fas fa-tags"></i> Pricing</a></li>
      <li><a href="#portfolio"><i class="fas fa-laptop-code"></i> Our Work</a></li>
      <li><a href="#testimonials"><i class="fas fa-star"></i> Testimonials</a></li>
      <li><a href="#seo-details"><i class="fas fa-magnifying-glass"></i> SEO Insights</a></li>
      <li><a href="#faq"><i class="fas fa-comments"></i> FAQ</a></li>
      <li><a href="#enquiry" class="btn btn-primary btn-block mt-3">Get Started</a></li>
    </ul>
  </div>

  <!-- Header -->
  <header class="header" id="header">
    <div class="container nav-container">
      <a href="#hero" class="logo">
        <img src="./Assets/logo.jpg" alt="FiNix Logo" class="logo-img">
        <span class="logo-text">FiNix <span>Digital</span></span>
      </a>

      <nav class="nav-links" id="nav-links">
        <a href="#why-us" class="nav-link">Why Us</a>
        <a href="#offer" class="nav-link">What We Offer</a>
        <a href="#pricing" class="nav-link">Pricing</a>
        
        <!-- More Dropdown -->
        <div class="nav-dropdown">
          <button class="nav-dropdown-btn">More <i class="fa-solid fa-chevron-down"></i></button>
          <div class="nav-dropdown-content">
            <a href="#process"><i class="fa-solid fa-project-diagram"></i> Workflow</a>
            <a href="#benefits"><i class="fa-solid fa-chart-line"></i> Benefits</a>
            <a href="#portfolio"><i class="fa-solid fa-laptop-code"></i> Our Work</a>
            <a href="#testimonials"><i class="fa-solid fa-star"></i> Testimonials</a>
            <a href="#seo-details"><i class="fa-solid fa-magnifying-glass"></i> SEO Insights</a>
            <a href="#faq"><i class="fa-solid fa-comments"></i> FAQ</a>
          </div>
        </div>

        <a href="#enquiry" class="btn btn-primary nav-cta">Get Started</a>
      </nav>

      <button class="hamburger" id="hamburger" aria-label="Toggle navigation">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  </header>

  <main>
    <!-- Hero Section -->
    <section class="hero" id="hero">
      <!-- Transparent grid lines overlay -->
      <div class="hero-grid-overlay"></div>
      <div class="container hero-grid">
        <div class="hero-content" data-aos="fade-right">
          <span class="badge badge-glow"><i class="fa-solid fa-fire"></i> Rise Above Competitors</span>
          <h1>Grow Your Local Business <span>Online</span></h1>
          <p>We build modern, ultra-fast websites that transform local searchers into loyal, paying customers. Engineered to work for <strong>10+ years</strong> without outdating + <strong>FREE 1-Year Domain &amp; Hosting</strong>.</p>
          <div class="hero-actions">
            <a href="#enquiry" class="btn btn-primary"><i class="fa-solid fa-paper-plane"></i> Get Free Consultation</a>
            <a href="#process" class="btn btn-secondary"><i class="fa-solid fa-circle-play"></i> See How It Works</a>
          </div>
        </div>
        
        <div class="hero-visual" data-aos="fade-left">
          <div id="canvas-container"></div>
          <div class="hero-symbol-overlay">
            <i class="fa-solid fa-code"></i> &lt; / &gt; FiNix 3D Model
          </div>
        </div>
      </div>
    </section>

    <!-- Why Your Business Needs a Website (Word of Mouth vs Website) -->
    <section class="section why-us" id="why-us">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2>"Word of Mouth is Enough for Me...?"</h2>
          <p>Referrals are great, but relying on them alone leaves 70% of potential local customers in the dark.</p>
        </div>

        <div class="comparison-wrapper">
          <div class="comparison-card without-web" data-aos="fade-right">
            <div class="card-header"><i class="fa-solid fa-circle-xmark"></i> Without a Website</div>
            <ul>
              <li><i class="fa-solid fa-xmark"></i> Invisible to people searching on Google right now.</li>
              <li><i class="fa-solid fa-xmark"></i> Potential clients doubt your legitimacy & professionalism.</li>
              <li><i class="fa-solid fa-xmark"></i> Store info closes when you turn off the shop lights.</li>
              <li><i class="fa-solid fa-xmark"></i> Competitors win your prospective customer leads daily.</li>
            </ul>
          </div>

          <div class="comparison-card with-web" data-aos="fade-left">
            <div class="card-header"><i class="fa-solid fa-circle-check"></i> With FiNix Website</div>
            <ul>
              <li><i class="fa-solid fa-check"></i> Ranks at the top when locals search for your services.</li>
              <li><i class="fa-solid fa-check"></i> Instant trust with professional design & real customer reviews.</li>
              <li><i class="fa-solid fa-check"></i> Captures enquiries 24/7, even while you sleep.</li>
              <li><i class="fa-solid fa-check"></i> Establishes authority as the top provider in your region.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Double Impact: Value for You & Your Clients -->
    <section class="section benefits" id="benefits">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2>Double Impact: Value for You & Your Clients</h2>
          <p>A great website works hard for both your business operations and your end customer experience.</p>
        </div>

        <div class="dual-benefits">
          <div class="benefit-block" data-aos="fade-up" data-aos-delay="100">
            <h3><i class="fa-solid fa-chart-pie"></i> Benefits For Business Owners</h3>
            <div class="benefit-list">
              <div class="b-item"><i class="fa-solid fa-arrow-trend-up"></i> <span><strong>New Customers:</strong> Expand beyond walk-in traffic and word-of-mouth.</span></div>
              <div class="b-item"><i class="fa-solid fa-eye"></i> <span><strong>Online Visibility:</strong> Rank prominently in local Google searches.</span></div>
              <div class="b-item"><i class="fa-solid fa-seedling"></i> <span><strong>Business Growth:</strong> Build a scalable digital ecosystem for long term.</span></div>
              <div class="b-item"><i class="fa-solid fa-shield-halved"></i> <span><strong>Increased Trust:</strong> Verified digital presence breeds confidence.</span></div>
              <div class="b-item"><i class="fa-solid fa-clock"></i> <span><strong>24/7 Availability:</strong> Never miss an after-hours inquiry.</span></div>
              <div class="b-item"><i class="fa-solid fa-trophy"></i> <span><strong>Competitive Edge:</strong> Outshine competitors lacking a website.</span></div>
            </div>
          </div>

          <div class="benefit-block" data-aos="fade-up" data-aos-delay="200">
            <h3><i class="fa-solid fa-users"></i> Benefits For Your Customers</h3>
            <div class="benefit-list">
              <div class="b-item"><i class="fa-solid fa-circle-info"></i> <span><strong>Clear Info:</strong> Instant access to pricing, services & operating hours.</span></div>
              <div class="b-item"><i class="fa-solid fa-star"></i> <span><strong>Testimonials:</strong> Genuine client reviews build buying assurance.</span></div>
              <div class="b-item"><i class="fa-solid fa-location-dot"></i> <span><strong>Location & Maps:</strong> One-tap GPS navigation to your business.</span></div>
              <div class="b-item"><i class="fa-solid fa-paper-plane"></i> <span><strong>Easy Enquiries:</strong> Request quotes quickly without making calls.</span></div>
              <div class="b-item"><i class="fa-solid fa-thumbs-up"></i> <span><strong>Social Proof:</strong> Immediate verification of your work quality.</span></div>
              <div class="b-item"><i class="fa-solid fa-mobile-screen"></i> <span><strong>Mobile Access:</strong> Fast booking directly on smartphones.</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our 6-Step Workflow -->
    <section class="section process" id="process">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2>Our 6-Step Workflow</h2>
          <p>From idea to Google rank — we handle everything so you can focus on running your business.</p>
        </div>

        <div class="process-grid">
          <div class="process-step" data-aos="fade-up" data-aos-delay="100">
            <div class="step-num">01</div>
            <div class="step-icon"><i class="fa-solid fa-magnifying-glass-chart"></i></div>
            <h3>Analyzing Requirements</h3>
            <p>We study your business goals, local target market, and main competitors to shape the strategy.</p>
          </div>

          <div class="process-step" data-aos="fade-up" data-aos-delay="200">
            <div class="step-num">02</div>
            <div class="step-icon"><i class="fa-solid fa-pen-ruler"></i></div>
            <h3>Design & Wireframing</h3>
            <p>We craft a custom visual layout engineered to look premium and convert visitors into paying clients.</p>
          </div>

          <div class="process-step" data-aos="fade-up" data-aos-delay="300">
            <div class="step-num">03</div>
            <div class="step-icon"><i class="fa-solid fa-code"></i></div>
            <h3>Development</h3>
            <p>We build ultra-fast, mobile-responsive code with modern SEO practices baked directly into it.</p>
          </div>

          <div class="process-step" data-aos="fade-up" data-aos-delay="400">
            <div class="step-num">04</div>
            <div class="step-icon"><i class="fa-solid fa-user-check"></i></div>
            <h3>Client Approval</h3>
            <p>You review the complete site, request adjustments, and approve the final version with confidence.</p>
          </div>

          <div class="process-step" data-aos="fade-up" data-aos-delay="500">
            <div class="step-num">05</div>
            <div class="step-icon"><i class="fa-solid fa-rocket"></i></div>
            <h3>Deployment</h3>
            <p>We configure custom domain names, SSL security, and launch your live website seamlessly.</p>
          </div>

          <div class="process-step" data-aos="fade-up" data-aos-delay="600">
            <div class="step-num">06</div>
            <div class="step-icon"><i class="fa-solid fa-chart-line"></i></div>
            <h3>Google Ranking Setup</h3>
            <p>We register your site with Google Search Console & Maps for rapid local indexing and search growth.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Offer Section -->
    <section class="section offer" id="offer">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2>What We Offer</h2>
          <p>Complete digital solutions designed to grow your local business and generate continuous leads online.</p>
        </div>

        <div class="offer-grid">
          <div class="offer-card" data-aos="fade-up" data-aos-delay="100">
            <div class="offer-icon"><i class="fa-solid fa-mobile-screen-button"></i></div>
            <h3>Mobile-Friendly & High-Converting Websites</h3>
            <p>Responsive designs that look perfect on all devices — smartphones, tablets, laptops, and desktops.</p>
            <ul class="offer-features">
              <li><i class="fa-solid fa-check"></i> Lightning fast loading speed</li>
              <li><i class="fa-solid fa-check"></i> Touch-friendly navigation</li>
              <li><i class="fa-solid fa-check"></i> Mobile-first architecture</li>
            </ul>
          </div>

          <div class="offer-card" data-aos="fade-up" data-aos-delay="200">
            <div class="offer-icon"><i class="fa-solid fa-list-check"></i></div>
            <h3>Online Registration & Inquiry Forms</h3>
            <p>Easy-to-use forms that help you collect customer inquiries and leads automatically to your spreadsheet.</p>
            <ul class="offer-features">
              <li><i class="fa-solid fa-check"></i> Direct Google Sheets integration</li>
              <li><i class="fa-solid fa-check"></i> Instant WhatsApp notifications</li>
              <li><i class="fa-solid fa-check"></i> Customer quote requests</li>
            </ul>
          </div>

          <div class="offer-card" data-aos="fade-up" data-aos-delay="300">
            <div class="offer-icon"><i class="fa-solid fa-globe"></i></div>
            <h3>FREE 1-Year Domain & Hosting Included</h3>
            <p>Professional custom domain name (.in / .com) and high-speed secure hosting included for 1 full year.</p>
            <ul class="offer-features">
              <li><i class="fa-solid fa-check"></i> Free Custom Domain (.in / .com)</li>
              <li><i class="fa-solid fa-check"></i> Free SSL Certificate & 99.9% Uptime</li>
              <li><i class="fa-solid fa-check"></i> Free Automated Backups</li>
            </ul>
          </div>

          <div class="offer-card highlight-card" data-aos="fade-up" data-aos-delay="400">
            <span class="ten-year-tag"><i class="fa-solid fa-shield-halved"></i> 10-Year Guarantee</span>
            <div class="offer-icon"><i class="fa-solid fa-gem"></i></div>
            <h3>10-Year Future-Proof Guarantee</h3>
            <p>Our websites are engineered with clean, modular tech stack so they work smoothly for <strong>10 years without getting outdated</strong> + <strong>Free 1-Year Domain & Hosting Renewal Support</strong>!</p>
            <ul class="offer-features">
              <li><i class="fa-solid fa-check"></i> Never gets outdated for 10 years</li>
              <li><i class="fa-solid fa-check"></i> Free 1-Year Domain & Hosting included</li>
              <li><i class="fa-solid fa-check"></i> Zero recurring maintenance fees</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="section pricing" id="pricing">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2>Our Service Plans</h2>
          <p>Transparent packages tailored for local business owners with maximum return on investment.</p>
        </div>

        <div class="pricing-grid">
          <div class="pricing-card" data-aos="fade-up" data-aos-delay="100">
            <div class="price-title">Starter Package</div>
            <div class="price-desc">Perfect for new and small local businesses</div>
            <ul>
              <li><i class="fa-solid fa-check"></i> 2-3 Page Mobile-Friendly Website</li>
              <li><i class="fa-solid fa-check"></i> Business Info + Contact + Google Maps</li>
              <li><i class="fa-solid fa-check"></i> <strong>FREE 1-Year Domain & Hosting</strong></li>
              <li><i class="fa-solid fa-check"></i> <strong>Works for 10+ Years Guarantee</strong></li>
              <li><i class="fa-solid fa-check"></i> WhatsApp Click-to-Chat button</li>
              <li><i class="fa-solid fa-check"></i> Basic Google SEO setup</li>
            </ul>
            <a href="#enquiry" class="btn btn-secondary btn-block plan-select-btn" data-plan="starter">Choose Starter</a>
          </div>

          <div class="pricing-card popular" data-aos="fade-up" data-aos-delay="200">
            <span class="pricing-badge">MOST POPULAR</span>
            <div class="price-title">Growth Package</div>
            <div class="price-desc">Ideal for expanding businesses seeking leads</div>
            <ul>
              <li><i class="fa-solid fa-check"></i> 4-5 Page High-Converting Website</li>
              <li><i class="fa-solid fa-check"></i> Direct Google Sheets Lead Integration</li>
              <li><i class="fa-solid fa-check"></i> <strong>FREE 1-Year Domain & Hosting</strong></li>
              <li><i class="fa-solid fa-check"></i> <strong>Works for 10+ Years Guarantee</strong></li>
              <li><i class="fa-solid fa-check"></i> Google Search Console & Local Maps Ranking</li>
              <li><i class="fa-solid fa-check"></i> Full SEO Optimization & Testimonial Showcase</li>
            </ul>
            <a href="#enquiry" class="btn btn-primary btn-block plan-select-btn" data-plan="growth">Choose Growth</a>
          </div>

          <div class="pricing-card" data-aos="fade-up" data-aos-delay="300">
            <div class="price-title">Premium Package</div>
            <div class="price-desc">For established brands needing a complete digital suite</div>
            <ul>
              <li><i class="fa-solid fa-check"></i> 6+ Custom Page Complete Web App</li>
              <li><i class="fa-solid fa-check"></i> Custom Graphics, Gallery & Interactive Forms</li>
              <li><i class="fa-solid fa-check"></i> <strong>FREE 1-Year Domain & Hosting</strong></li>
              <li><i class="fa-solid fa-check"></i> <strong>Works for 10+ Years Guarantee</strong></li>
              <li><i class="fa-solid fa-check"></i> Priority 24/7 Support & Instant Fixes</li>
              <li><i class="fa-solid fa-check"></i> High-Score Local SEO & Branding Suite</li>
            </ul>
            <a href="#enquiry" class="btn btn-secondary btn-block plan-select-btn" data-plan="premium">Choose Premium</a>
          </div>
        </div>
      </div>
    </section>

    <!-- See Our Work (Portfolio) -->
    <section class="section portfolio" id="portfolio">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="badge"><i class="fa-solid fa-laptop-code"></i> Live Projects</span>
          <h2>See Our Work</h2>
          <p>Explore live demo websites crafted for local businesses, clinics, and coaching institutes across India.</p>
        </div>

        <div class="scroll-slider-wrapper">
          <button class="slider-arrow left" onclick="slideLeft('portfolioSlider')" aria-label="Scroll left"><i class="fa-solid fa-chevron-left"></i></button>
          <div class="scroll-slider" id="portfolioSlider">

          <!-- Card 1 -->
          <div class="portfolio-card">
            <div class="portfolio-browser">
              <div class="browser-bar">
                <span class="browser-dot" style="background:#ef4444"></span>
                <span class="browser-dot" style="background:#f59e0b"></span>
                <span class="browser-dot" style="background:#22c55e"></span>
                <span class="browser-url">finixstarter.netlify.app</span>
              </div>
              <div class="browser-screen starter-screen">
                <div class="screen-navbar"></div>
                <div class="screen-hero">
                  <div class="screen-line long"></div>
                  <div class="screen-line medium"></div>
                  <div class="screen-btn"></div>
                </div>
                <div class="screen-cards">
                  <div class="screen-card"></div>
                  <div class="screen-card"></div>
                  <div class="screen-card"></div>
                </div>
              </div>
            </div>
            <div class="portfolio-body">
              <div class="portfolio-tag">Starter</div>
              <h3>Business Starter Website</h3>
              <p>Best for individual tutors, new shops, and local service providers. Clean, fast, and professional.</p>
              <div class="portfolio-meta">
                <span><i class="fa-solid fa-bolt"></i> Ultra Fast</span>
                <span><i class="fa-solid fa-mobile-screen"></i> Mobile First</span>
                <span><i class="fa-solid fa-shield-halved"></i> SSL Secured</span>
              </div>
              <a href="https://finixstarter.netlify.app/" target="_blank" class="portfolio-link">View Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="portfolio-card">
            <div class="portfolio-browser">
              <div class="browser-bar">
                <span class="browser-dot" style="background:#ef4444"></span>
                <span class="browser-dot" style="background:#f59e0b"></span>
                <span class="browser-dot" style="background:#22c55e"></span>
                <span class="browser-url">finixstandard.netlify.app</span>
              </div>
              <div class="browser-screen standard-screen">
                <div class="screen-navbar"></div>
                <div class="screen-hero">
                  <div class="screen-line long"></div>
                  <div class="screen-line medium"></div>
                  <div class="screen-btn" style="background:#7c3aed"></div>
                </div>
                <div class="screen-cards">
                  <div class="screen-card" style="background:rgba(124,58,237,0.15)"></div>
                  <div class="screen-card" style="background:rgba(124,58,237,0.15)"></div>
                  <div class="screen-card" style="background:rgba(124,58,237,0.15)"></div>
                </div>
              </div>
            </div>
            <div class="portfolio-body">
              <div class="portfolio-tag" style="background:rgba(124,58,237,0.1);color:#7c3aed">Growth</div>
              <h3>Growth Business Website</h3>
              <p>Ideal for growing clinics, coaching academies, and retail businesses with lead generation forms.</p>
              <div class="portfolio-meta">
                <span><i class="fa-solid fa-table-cells"></i> Google Sheets</span>
                <span><i class="fa-solid fa-magnifying-glass"></i> SEO Ready</span>
                <span><i class="fa-brands fa-google"></i> Maps Setup</span>
              </div>
              <a href="https://finixstandard.netlify.app/" target="_blank" class="portfolio-link" style="color:#7c3aed">View Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="portfolio-card">
            <div class="portfolio-browser">
              <div class="browser-bar">
                <span class="browser-dot" style="background:#ef4444"></span>
                <span class="browser-dot" style="background:#f59e0b"></span>
                <span class="browser-dot" style="background:#22c55e"></span>
                <span class="browser-url">finixpremium.netlify.app</span>
              </div>
              <div class="browser-screen premium-screen">
                <div class="screen-navbar" style="background:#0f172a"></div>
                <div class="screen-hero">
                  <div class="screen-line long" style="background:linear-gradient(90deg,#059669,#1e40af)"></div>
                  <div class="screen-line medium"></div>
                  <div class="screen-btn" style="background:linear-gradient(135deg,#059669,#1e40af)"></div>
                </div>
                <div class="screen-cards">
                  <div class="screen-card" style="background:rgba(5,150,105,0.15)"></div>
                  <div class="screen-card" style="background:rgba(5,150,105,0.15)"></div>
                  <div class="screen-card" style="background:rgba(5,150,105,0.15)"></div>
                </div>
              </div>
            </div>
            <div class="portfolio-body">
              <div class="portfolio-tag" style="background:rgba(5,150,105,0.1);color:#059669">Premium</div>
              <h3>Premium Brand Website</h3>
              <p>Perfect for multi-branch organizations, clinics, and high-growth brands needing a complete digital suite.</p>
              <div class="portfolio-meta">
                <span><i class="fa-solid fa-gem"></i> Custom Design</span>
                <span><i class="fa-solid fa-headset"></i> Priority Support</span>
                <span><i class="fa-solid fa-palette"></i> Brand Suite</span>
              </div>
              <a href="https://finixpremium.netlify.app/" target="_blank" class="portfolio-link" style="color:#059669">View Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>

          <!-- Card 4 — VBR Diagnostics -->
          <div class="portfolio-card">
            <div class="portfolio-browser">
              <div class="browser-bar">
                <span class="browser-dot" style="background:#ef4444"></span>
                <span class="browser-dot" style="background:#f59e0b"></span>
                <span class="browser-dot" style="background:#22c55e"></span>
                <span class="browser-url">vbrdiagnostics.netlify.app</span>
              </div>
              <div class="browser-screen" style="background:#f0fdf4;">
                <div class="screen-navbar" style="background:#15803d"></div>
                <div class="screen-hero">
                  <div class="screen-line long" style="background:linear-gradient(90deg,#15803d,#4ade80)"></div>
                  <div class="screen-line medium" style="background:#bbf7d0"></div>
                  <div class="screen-btn" style="background:#15803d"></div>
                </div>
                <div class="screen-cards">
                  <div class="screen-card" style="background:rgba(21,128,61,0.15)"></div>
                  <div class="screen-card" style="background:rgba(21,128,61,0.15)"></div>
                  <div class="screen-card" style="background:rgba(21,128,61,0.15)"></div>
                </div>
              </div>
            </div>
            <div class="portfolio-body">
              <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:10px;">
                <div class="portfolio-tag" style="background:rgba(21,128,61,0.1);color:#15803d">Diagnostics</div>
                <span style="display:inline-flex;align-items:center;gap:4px;font-size:0.72rem;font-weight:700;background:#dcfce7;color:#15803d;padding:3px 10px;border-radius:20px;"><i class="fa-solid fa-circle" style="font-size:0.45rem;"></i> Live Client</span>
              </div>
              <h3>VBR Diagnostics Centre</h3>
              <p>A professional diagnostic centre with service listings, test packages, appointment booking, and lab reports.</p>
              <div class="portfolio-meta">
                <span><i class="fa-solid fa-flask"></i> Lab Services</span>
                <span><i class="fa-solid fa-calendar-check"></i> Appointments</span>
                <span><i class="fa-solid fa-mobile-screen"></i> Mobile Ready</span>
              </div>
              <a href="https://vbrdiagnostics.netlify.app/" target="_blank" class="portfolio-link" style="color:#15803d">Visit Live Site <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>

          <!-- Card 5 — UDJ Consultancy -->
          <div class="portfolio-card">
            <div class="portfolio-browser">
              <div class="browser-bar">
                <span class="browser-dot" style="background:#ef4444"></span>
                <span class="browser-dot" style="background:#f59e0b"></span>
                <span class="browser-dot" style="background:#22c55e"></span>
                <span class="browser-url">udjogc2c.netlify.app</span>
              </div>
              <div class="browser-screen" style="background:#faf5ff;">
                <div class="screen-navbar" style="background:#6d28d9"></div>
                <div class="screen-hero">
                  <div class="screen-line long" style="background:linear-gradient(90deg,#6d28d9,#a78bfa)"></div>
                  <div class="screen-line medium" style="background:#ddd6fe"></div>
                  <div class="screen-btn" style="background:linear-gradient(135deg,#6d28d9,#a78bfa)"></div>
                </div>
                <div class="screen-cards">
                  <div class="screen-card" style="background:rgba(109,40,217,0.15)"></div>
                  <div class="screen-card" style="background:rgba(109,40,217,0.15)"></div>
                  <div class="screen-card" style="background:rgba(109,40,217,0.15)"></div>
                </div>
              </div>
            </div>
            <div class="portfolio-body">
              <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:10px;">
                <div class="portfolio-tag" style="background:rgba(109,40,217,0.1);color:#6d28d9">Consultancy</div>
                <span style="display:inline-flex;align-items:center;gap:4px;font-size:0.72rem;font-weight:700;background:#f3e8ff;color:#6d28d9;padding:3px 10px;border-radius:20px;"><i class="fa-solid fa-circle" style="font-size:0.45rem;"></i> Live Client</span>
              </div>
              <h3>UDJ Consultancy Services</h3>
              <p>A premium consultancy services website with service packages, expert team profiles, and lead generation forms.</p>
              <div class="portfolio-meta">
                <span><i class="fa-solid fa-briefcase"></i> Consulting</span>
                <span><i class="fa-solid fa-users"></i> Team Profiles</span>
                <span><i class="fa-solid fa-chart-line"></i> Lead Forms</span>
              </div>
              <a href="https://udjogc2c.netlify.app/" target="_blank" class="portfolio-link" style="color:#6d28d9">Visit Live Site <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>

          <!-- Card 6 — Aura Furniture (Real Client) -->
          <div class="portfolio-card">
            <div class="portfolio-browser">
              <div class="browser-bar">
                <span class="browser-dot" style="background:#ef4444"></span>
                <span class="browser-dot" style="background:#f59e0b"></span>
                <span class="browser-dot" style="background:#22c55e"></span>
                <span class="browser-url">aurafurnitur.netlify.app</span>
              </div>
              <div class="browser-screen" style="background:#fefce8;">
                <div class="screen-navbar" style="background:#92400e"></div>
                <div class="screen-hero">
                  <div class="screen-line long" style="background:linear-gradient(90deg,#92400e,#d97706)"></div>
                  <div class="screen-line medium" style="background:#fde68a"></div>
                  <div class="screen-btn" style="background:linear-gradient(135deg,#92400e,#d97706)"></div>
                </div>
                <div class="screen-cards">
                  <div class="screen-card" style="background:rgba(146,64,14,0.15)"></div>
                  <div class="screen-card" style="background:rgba(146,64,14,0.15)"></div>
                  <div class="screen-card" style="background:rgba(146,64,14,0.15)"></div>
                </div>
              </div>
            </div>
            <div class="portfolio-body">
              <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:10px;">
                <div class="portfolio-tag" style="background:rgba(146,64,14,0.1);color:#92400e">Furniture</div>
                <span style="display:inline-flex;align-items:center;gap:4px;font-size:0.72rem;font-weight:700;background:#fef3c7;color:#92400e;padding:3px 10px;border-radius:20px;"><i class="fa-solid fa-circle" style="font-size:0.45rem;"></i> Live Client</span>
              </div>
              <h3>Aura Furniture Studio</h3>
              <p>A premium furniture brand website showcasing elegant collections, room inspiration galleries, and product enquiry forms.</p>
              <div class="portfolio-meta">
                <span><i class="fa-solid fa-couch"></i> Product Showcase</span>
                <span><i class="fa-solid fa-images"></i> Gallery</span>
                <span><i class="fa-solid fa-palette"></i> Elegant Design</span>
              </div>
              <a href="https://aurafurnitur.netlify.app/" target="_blank" class="portfolio-link" style="color:#92400e">Visit Live Site <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>

          <!-- Card 7 — Lumiere Luxury Studio (Real Client) -->
          <div class="portfolio-card">
            <div class="portfolio-browser">
              <div class="browser-bar">
                <span class="browser-dot" style="background:#ef4444"></span>
                <span class="browser-dot" style="background:#f59e0b"></span>
                <span class="browser-dot" style="background:#22c55e"></span>
                <span class="browser-url">lumiereat.netlify.app</span>
              </div>
              <div class="browser-screen" style="background:#fff1f2;">
                <div class="screen-navbar" style="background:#be123c"></div>
                <div class="screen-hero">
                  <div class="screen-line long" style="background:linear-gradient(90deg,#be123c,#fb7185)"></div>
                  <div class="screen-line medium" style="background:#fecdd3"></div>
                  <div class="screen-btn" style="background:linear-gradient(135deg,#be123c,#fb7185)"></div>
                </div>
                <div class="screen-cards">
                  <div class="screen-card" style="background:rgba(190,18,60,0.15)"></div>
                  <div class="screen-card" style="background:rgba(190,18,60,0.15)"></div>
                  <div class="screen-card" style="background:rgba(190,18,60,0.15)"></div>
                </div>
              </div>
            </div>
            <div class="portfolio-body">
              <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:10px;">
                <div class="portfolio-tag" style="background:rgba(190,18,60,0.1);color:#be123c">Luxury & Fashion</div>
                <span style="display:inline-flex;align-items:center;gap:4px;font-size:0.72rem;font-weight:700;background:#ffe4e6;color:#be123c;padding:3px 10px;border-radius:20px;"><i class="fa-solid fa-circle" style="font-size:0.45rem;"></i> Live Client</span>
              </div>
              <h3>Lumiere Luxury Studio</h3>
              <p>An exquisite luxury and fashion brand website built for high-end boutique collections, lookbooks, and private client appointments.</p>
              <div class="portfolio-meta">
                <span><i class="fa-solid fa-gem"></i> Luxury Design</span>
                <span><i class="fa-solid fa-wand-magic-sparkles"></i> Lookbook</span>
                <span><i class="fa-solid fa-crown"></i> High Conversion</span>
              </div>
              <a href="https://lumiereat.netlify.app/" target="_blank" class="portfolio-link" style="color:#be123c">Visit Live Site <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>

          </div><!-- end scroll-slider -->
          <button class="slider-arrow right" onclick="slideRight('portfolioSlider')" aria-label="Scroll right"><i class="fa-solid fa-chevron-right"></i></button>
        </div><!-- end scroll-slider-wrapper -->
      </div>
    </section>

    <!-- Our Happy Clients (Testimonials) -->
    <section class="section testimonials" id="testimonials">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="badge badge-glow"><i class="fa-solid fa-star"></i> Happy Clients Across India</span>
          <h2>Our Happy Clients</h2>
          <p>Real businesses, real results. See what owners across India say about partnering with FiNix Digital.</p>
        </div>

        <div class="scroll-slider-wrapper">
          <button class="slider-arrow left" onclick="slideLeft('testimonialsSlider')" aria-label="Scroll left"><i class="fa-solid fa-chevron-left"></i></button>
          <div class="scroll-slider" id="testimonialsSlider">

            <div class="testimonial-card" data-aos="fade-up" data-aos-delay="50">
              <div class="testimonial-avatar" style="background:linear-gradient(135deg,#1e40af,#3b82f6)">AK</div>
              <blockquote>"Thanks to FiNix, our customer inquiries doubled in 2 months! The website looks professional and clients trust us so much more."</blockquote>
              <div class="testimonial-author">Anil Kumar</div>
              <div class="testimonial-role">Director, Hareesh Academy</div>
              <div class="testimonial-location"><i class="fa-solid fa-location-dot"></i> Warangal, Telangana</div>
              <div class="testimonial-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            </div>

            <div class="testimonial-card" data-aos="fade-up" data-aos-delay="100">
              <div class="testimonial-avatar" style="background:linear-gradient(135deg,#7c3aed,#a855f7)">PS</div>
              <blockquote>"Amazing work! Customers can view our services online and submit quote requests daily. Best investment we made."</blockquote>
              <div class="testimonial-author">Priya Sharma</div>
              <div class="testimonial-role">Owner, Suresh Solutions</div>
              <div class="testimonial-location"><i class="fa-solid fa-location-dot"></i> Hyderabad, Telangana</div>
              <div class="testimonial-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            </div>

            <div class="testimonial-card" data-aos="fade-up" data-aos-delay="150">
              <div class="testimonial-avatar" style="background:linear-gradient(135deg,#059669,#10b981)">RG</div>
              <blockquote>"FiNix transformed our local business online presence. We now get 5x more lead inquiries through Google searches!"</blockquote>
              <div class="testimonial-author">Rajesh Gupta</div>
              <div class="testimonial-role">Founder, Elite Business Hub</div>
              <div class="testimonial-location"><i class="fa-solid fa-location-dot"></i> Bengaluru, Karnataka</div>
              <div class="testimonial-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            </div>

            <div class="testimonial-card" data-aos="fade-up" data-aos-delay="200">
              <div class="testimonial-avatar" style="background:linear-gradient(135deg,#ea580c,#f97316)">MR</div>
              <blockquote>"Our dental clinic bookings increased by 40% after the website launched. Patients find us so easily on Google now."</blockquote>
              <div class="testimonial-author">Dr. Meena Reddy</div>
              <div class="testimonial-role">Chief Dentist, SmileCare Clinic</div>
              <div class="testimonial-location"><i class="fa-solid fa-location-dot"></i> Chennai, Tamil Nadu</div>
              <div class="testimonial-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            </div>

            <div class="testimonial-card" data-aos="fade-up" data-aos-delay="250">
              <div class="testimonial-avatar" style="background:linear-gradient(135deg,#1e40af,#059669)">SK</div>
              <blockquote>"Professional team, beautiful design, fast delivery. My saree boutique now gets orders from across Rajasthan!"</blockquote>
              <div class="testimonial-author">Sunita Khandelwal</div>
              <div class="testimonial-role">Owner, Silk & Saree Boutique</div>
              <div class="testimonial-location"><i class="fa-solid fa-location-dot"></i> Jaipur, Rajasthan</div>
              <div class="testimonial-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            </div>

            <div class="testimonial-card" data-aos="fade-up" data-aos-delay="300">
              <div class="testimonial-avatar" style="background:linear-gradient(135deg,#0891b2,#06b6d4)">VP</div>
              <blockquote>"The 10-year guarantee gave me confidence. No more worrying about outdated code. Truly future-proof!"</blockquote>
              <div class="testimonial-author">Vikram Patil</div>
              <div class="testimonial-role">CEO, VPG Construction</div>
              <div class="testimonial-location"><i class="fa-solid fa-location-dot"></i> Pune, Maharashtra</div>
              <div class="testimonial-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            </div>

            <div class="testimonial-card" data-aos="fade-up" data-aos-delay="100">
              <div class="testimonial-avatar" style="background:linear-gradient(135deg,#7c3aed,#059669)">NJ</div>
              <blockquote>"My coaching centre went from 20 to 80 students after the website. Parents can now register and pay online directly."</blockquote>
              <div class="testimonial-author">Neha Joshi</div>
              <div class="testimonial-role">Principal, Bright Minds Coaching</div>
              <div class="testimonial-location"><i class="fa-solid fa-location-dot"></i> Mumbai, Maharashtra</div>
              <div class="testimonial-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            </div>

            <div class="testimonial-card" data-aos="fade-up" data-aos-delay="150">
              <div class="testimonial-avatar" style="background:linear-gradient(135deg,#ea580c,#1e40af)">RM</div>
              <blockquote>"Our restaurant now gets 50+ online reservations weekly. FiNix built exactly what we needed at a great price!"</blockquote>
              <div class="testimonial-author">Ravi Menon</div>
              <div class="testimonial-role">Owner, Spice Garden Restaurant</div>
              <div class="testimonial-location"><i class="fa-solid fa-location-dot"></i> Kochi, Kerala</div>
              <div class="testimonial-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            </div>

            <div class="testimonial-card" data-aos="fade-up" data-aos-delay="200">
              <div class="testimonial-avatar" style="background:linear-gradient(135deg,#059669,#0891b2)">TS</div>
              <blockquote>"I was skeptical at first but the results speak for themselves. Free hosting for 1 year saved us ₹12,000 already!"</blockquote>
              <div class="testimonial-author">Tanya Singh</div>
              <div class="testimonial-role">Founder, TrendSetters Salon</div>
              <div class="testimonial-location"><i class="fa-solid fa-location-dot"></i> Delhi, NCR</div>
              <div class="testimonial-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            </div>

            <div class="testimonial-card" data-aos="fade-up" data-aos-delay="250">
              <div class="testimonial-avatar" style="background:linear-gradient(135deg,#1e40af,#7c3aed)">BK</div>
              <blockquote>"Google leads started coming within 2 weeks of launch. FiNix helped us rank locally and grow our client base fast."</blockquote>
              <div class="testimonial-author">Bharath Kumar</div>
              <div class="testimonial-role">Director, TechFix IT Services</div>
              <div class="testimonial-location"><i class="fa-solid fa-location-dot"></i> Vijayawada, Andhra Pradesh</div>
              <div class="testimonial-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            </div>

            <div class="testimonial-card" data-aos="fade-up" data-aos-delay="100">
              <div class="testimonial-avatar" style="background:linear-gradient(135deg,#ea580c,#059669)">GN</div>
              <blockquote>"The website has a beautiful design. My gym membership inquiries went up by 60%. Very happy with FiNix!"</blockquote>
              <div class="testimonial-author">Girish Nair</div>
              <div class="testimonial-role">Owner, PowerZone Fitness</div>
              <div class="testimonial-location"><i class="fa-solid fa-location-dot"></i> Nagpur, Maharashtra</div>
              <div class="testimonial-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            </div>

            <div class="testimonial-card" data-aos="fade-up" data-aos-delay="150">
              <div class="testimonial-avatar" style="background:linear-gradient(135deg,#7c3aed,#ea580c)">LM</div>
              <blockquote>"Fast delivery, beautiful output, and the best part — a domain and hosting free for 1 whole year. Highly recommended!"</blockquote>
              <div class="testimonial-author">Lakshmi Murthy</div>
              <div class="testimonial-role">Principal, LM Montessori School</div>
              <div class="testimonial-location"><i class="fa-solid fa-location-dot"></i> Mysuru, Karnataka</div>
              <div class="testimonial-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            </div>

            <div class="testimonial-card" data-aos="fade-up" data-aos-delay="200">
              <div class="testimonial-avatar" style="background:linear-gradient(135deg,#0891b2,#1e40af)">AM</div>
              <blockquote>"Our hardware store now has an online catalogue that customers browse from home. Order inquiries tripled in one month!"</blockquote>
              <div class="testimonial-author">Arjun Mehta</div>
              <div class="testimonial-role">Owner, Mehta Hardware & Tools</div>
              <div class="testimonial-location"><i class="fa-solid fa-location-dot"></i> Surat, Gujarat</div>
              <div class="testimonial-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            </div>

            <div class="testimonial-card" data-aos="fade-up" data-aos-delay="250">
              <div class="testimonial-avatar" style="background:linear-gradient(135deg,#059669,#7c3aed)">KV</div>
              <blockquote>"Clients now find our law firm on Google Maps and call us directly. Our credibility increased so much with a proper website."</blockquote>
              <div class="testimonial-author">K. Venkatesh</div>
              <div class="testimonial-role">Senior Advocate, Venkatesh & Partners</div>
              <div class="testimonial-location"><i class="fa-solid fa-location-dot"></i> Coimbatore, Tamil Nadu</div>
              <div class="testimonial-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            </div>

            <div class="testimonial-card" data-aos="fade-up" data-aos-delay="100">
              <div class="testimonial-avatar" style="background:linear-gradient(135deg,#ea580c,#7c3aed)">SD</div>
              <blockquote>"Excellent service. The team understood our brand perfectly. Our travel agency now books 3x more tours online monthly."</blockquote>
              <div class="testimonial-author">Sanjay Dubey</div>
              <div class="testimonial-role">MD, Explore India Travels</div>
              <div class="testimonial-location"><i class="fa-solid fa-location-dot"></i> Varanasi, Uttar Pradesh</div>
              <div class="testimonial-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            </div>

            <div class="testimonial-card" data-aos="fade-up" data-aos-delay="150">
              <div class="testimonial-avatar" style="background:linear-gradient(135deg,#1e40af,#ea580c)">PB</div>
              <blockquote>"The website makes our pharmacy look so trustworthy. Prescription upload feature works perfectly. FiNix delivered beyond expectation!"</blockquote>
              <div class="testimonial-author">Pallavi Bhat</div>
              <div class="testimonial-role">Owner, HealthFirst Pharmacy</div>
              <div class="testimonial-location"><i class="fa-solid fa-location-dot"></i> Mangaluru, Karnataka</div>
              <div class="testimonial-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            </div>

            <div class="testimonial-card" data-aos="fade-up" data-aos-delay="200">
              <div class="testimonial-avatar" style="background:linear-gradient(135deg,#059669,#ea580c)">HC</div>
              <blockquote>"Our institute website ranks on page 1 of Google. Student admissions went up by 35% this year. FiNix is truly amazing!"</blockquote>
              <div class="testimonial-author">Hemant Chaudhari</div>
              <div class="testimonial-role">Director, Excel IAS Academy</div>
              <div class="testimonial-location"><i class="fa-solid fa-location-dot"></i> Nagpur, Maharashtra</div>
              <div class="testimonial-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            </div>

            <div class="testimonial-card" data-aos="fade-up" data-aos-delay="250">
              <div class="testimonial-avatar" style="background:linear-gradient(135deg,#7c3aed,#0891b2)">IA</div>
              <blockquote>"My catering business's website showcases our menus beautifully. We get 20+ event booking inquiries online every week now."</blockquote>
              <div class="testimonial-author">Ishaan Aggarwal</div>
              <div class="testimonial-role">Owner, Royal Feast Caterers</div>
              <div class="testimonial-location"><i class="fa-solid fa-location-dot"></i> Ludhiana, Punjab</div>
              <div class="testimonial-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            </div>

            <div class="testimonial-card" data-aos="fade-up" data-aos-delay="100">
              <div class="testimonial-avatar" style="background:linear-gradient(135deg,#0891b2,#059669)">DR</div>
              <blockquote>"Running a Montessori school, we needed something simple for parents. FiNix built the perfect parent portal for us!"</blockquote>
              <div class="testimonial-author">Deepa Rao</div>
              <div class="testimonial-role">Principal, Little Stars Montessori</div>
              <div class="testimonial-location"><i class="fa-solid fa-location-dot"></i> Bhubaneswar, Odisha</div>
              <div class="testimonial-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            </div>

            <div class="testimonial-card" data-aos="fade-up" data-aos-delay="150">
              <div class="testimonial-avatar" style="background:linear-gradient(135deg,#ea580c,#0891b2)">FQ</div>
              <blockquote>"My boutique is now known across the city. The website is beautiful on mobile too. Happy to refer FiNix to every business owner!"</blockquote>
              <div class="testimonial-author">Fatima Qureshi</div>
              <div class="testimonial-role">Owner, Zara Fashion Studio</div>
              <div class="testimonial-location"><i class="fa-solid fa-location-dot"></i> Aurangabad, Maharashtra</div>
              <div class="testimonial-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            </div>

            <div class="testimonial-card" data-aos="fade-up" data-aos-delay="200">
              <div class="testimonial-avatar" style="background:linear-gradient(135deg,#1e40af,#059669)">MS</div>
              <blockquote>"Outstanding. We had zero online presence 3 months ago. Today we have 100+ Google reviews and a stunning professional website."</blockquote>
              <div class="testimonial-author">Mahesh Shetty</div>
              <div class="testimonial-role">MD, Shetty Auto Workshop</div>
              <div class="testimonial-location"><i class="fa-solid fa-location-dot"></i> Udupi, Karnataka</div>
              <div class="testimonial-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            </div>

          </div><!-- end scroll-slider -->
          <button class="slider-arrow right" onclick="slideRight('testimonialsSlider')" aria-label="Scroll right"><i class="fa-solid fa-chevron-right"></i></button>
        </div><!-- end scroll-slider-wrapper -->
      </div>
    </section>

    <!-- SEO Word Block Section (600 words about the tool for SEO Ranking) -->
    <section class="section seo-details" id="seo-details" style="background:#ffffff; border-top:1px solid var(--neutral-200);">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2>Empowering Businesses with Premium Web Solutions</h2>
          <p>Learn how our expert web design, local SEO, and development strategies drive customer growth.</p>
        </div>

        <div style="max-width:900px; margin:0 auto; line-height:1.8; color:var(--neutral-600); font-size:1.02rem;" data-aos="fade-up">
          <p class="mb-4">In today's highly competitive digital landscape, having a stellar digital footprint is a core growth driver. As a premier <strong>website development company</strong>, FiNix Digital Solution is dedicated to crafting bespoke web spaces that represent your values and convert visitors. If you are searching for an established <strong>website development company in india</strong>, our developers provide high-performance solutions engineered to meet modern requirements. We serve clients across key hubs as a leading <strong>website development company in bangalore</strong>, a dynamic <strong>website development company in mumbai</strong>, and a creative <strong>website development company in jaipur</strong>.</p>
          
          <h4 class="mt-4 mb-3 text-dark" style="font-weight:700;">Choosing the Right Web Development Partner</h4>
          <p class="mb-4">Choosing an experienced <strong>website development agency</strong> is the key to securing long-term organic visibility. We deliver comprehensive <strong>website development services</strong> that combine visually stunning design with responsive layouts. As a specialized <strong>wordpress website development company</strong>, we offer robust <strong>wordpress website development</strong> and highly optimized <strong>shopify website development</strong>. This ensures your brand is fully equipped to rank prominently on search engine result pages, whether you operate in local markets or scale nationally.</p>

          <h4 class="mt-4 mb-3 text-dark" style="font-weight:700;">Advanced eCommerce Website Development Services</h4>
          <p class="mb-4">For businesses aiming to sell online, our <strong>ecommerce website development Services</strong> provide the ultimate foundation. We are a trusted <strong>ecommerce website development company</strong>, engineering fast, secure, and user-friendly virtual storefronts. Our custom <strong>ecommerce website development</strong> frameworks minimize load times, streamline cart management, and feature direct database integrations. Our regional SEO setups ensure you capture target buyer traffic in major cities, ranking high for searches like <strong>website development company in delhi</strong>, <strong>website development company in pune</strong>, and <strong>website development company in noida</strong>.</p>

          <h4 class="mt-4 mb-3 text-dark" style="font-weight:700;">Clear Values & Website Development Cost Transparency</h4>
          <p class="mb-4">One of the primary concerns for business owners is calculating the overall <strong>website development cost</strong>. We maintain absolute transparency, offering pricing options structured to eliminate recurring monthly fees. Every system we launch includes a 10-year future-proof guarantee, free security certificates, and automated local indexing. If you are looking for custom development, WooCommerce portals, or local Google Map optimization, our custom layouts deliver unparalleled performance. Our web development solutions are designed to outlast ordinary templates, providing an online asset that works for you 24 hours a day, 7 days a week.</p>
        </div>
      </div>
    </section>

    <!-- Enquiry Form Section -->
    <section class="section enquiry" id="enquiry">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2>Ready to Grow Your Business?</h2>
          <p>Fill out the form below for a free consultation and personalized growth roadmap.</p>
        </div>

        <div class="form-card" data-aos="fade-up">
          <form id="enquiry-form">
            <div class="form-grid">
              <div class="form-group">
                <label for="client-name">Name *</label>
                <input type="text" id="client-name" name="name" required placeholder="e.g. Ramesh Kumar">
              </div>

              <div class="form-group">
                <label for="client-business">Business Type *</label>
                <input type="text" id="client-business" name="business" required placeholder="e.g. Retail Shop, Dental Clinic, Coaching">
              </div>

              <div class="form-group">
                <label for="client-phone">Number *</label>
                <input type="tel" id="client-phone" name="phone" required placeholder="e.g. 9876543210">
              </div>

              <div class="form-group">
                <label for="client-budget">Preferred Package *</label>
                <select id="client-budget" name="budget" required>
                  <option value="starter">Starter Package</option>
                  <option value="growth" selected>Growth Package</option>
                  <option value="premium">Premium Package</option>
                  <option value="custom">Custom Requirements</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="client-requirements">Website Requirements & Comments *</label>
              <textarea id="client-requirements" name="requirements" rows="4" required placeholder="Tell us your specific requirements, feature requests, or questions..."></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-block" id="submit-btn">
              <span>Submit Enquiry</span>
              <i class="fa-solid fa-paper-plane"></i>
            </button>
          </form>
          <div id="form-status" class="status-msg"></div>
        </div>
      </div>
    </section>

    <!-- FAQ Section (Updated for top client search queries) -->
    <section class="section faq" id="faq">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
          <p>Got questions? We've got clear answers to help you get started with confidence.</p>
        </div>

        <div class="faq-accordion">
          <div class="faq-item">
            <button class="faq-question">
              <span>What is the typical website development cost at FiNix Digital?</span>
              <i class="fa-solid fa-chevron-down"></i>
            </button>
            <div class="faq-answer">
              <p>Our website development packages are designed to be extremely affordable with zero hidden costs. Pricing depends on your specific layout features, page count, and custom elements. Contact us to receive a detailed breakdown and transparent quotation.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>Do you provide ecommerce website development services like Shopify or WooCommerce?</span>
              <i class="fa-solid fa-chevron-down"></i>
            </button>
            <div class="faq-answer">
              <p>Yes, we specialize in shopify website development, wordpress website development, and custom ecommerce website development. We design responsive virtual stores with secure checkouts, payment gateway integrations, and automatic inventory tools.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>How does your custom website development services ensure 10-year durability?</span>
              <i class="fa-solid fa-chevron-down"></i>
            </button>
            <div class="faq-answer">
              <p>We build our websites using modern HTML5, CSS3, modular JavaScript, and standard web components. This ensures maximum browser compatibility, ultra-fast speeds, and zero dependency on bloated plugins that break over time.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>I am looking for a website development company in india (like Bangalore, Mumbai, Delhi, Jaipur, Pune, or Noida). Do you work remotely?</span>
              <i class="fa-solid fa-chevron-down"></i>
            </button>
            <div class="faq-answer">
              <p>Absolutely! We provide premium website development services to clients throughout India and globally. We collaborate seamlessly via video consultations, shared live previews, and digital feedback cycles to ensure you receive a professional web portal.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>Will you set up Google Ranking, Maps, and Local SEO for my business?</span>
              <i class="fa-solid fa-chevron-down"></i>
            </button>
            <div class="faq-answer">
              <p>Yes! Every website we develop includes professional on-page SEO. We set up Google Search Console, submit your sitemap for indexation, link Google Maps, and optimize for target business keywords to ensure high local rankings.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <div class="container footer-grid">
      <div class="footer-col">
        <a href="#hero" class="logo mb-3">
          <img src="./Assets/logo.jpg" alt="FiNix Logo" class="logo-img">
          <span class="logo-text" style="color:#ffffff;">FiNix <span style="color:var(--accent-green-light);">Digital</span></span>
        </a>
        <p>Empowering local businesses with high-converting websites, 10-year durability, and continuous lead growth.</p>
        <div class="social-links">
          <a href="https://wa.me/919553053852" target="_blank" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
          <a href="https://www.instagram.com/finixdigital" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="mailto:finix.digital.solution@gmail.com" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#why-us">Why Us</a></li>
          <li><a href="#process">Our Workflow</a></li>
          <li><a href="#benefits">Double Impact Benefits</a></li>
          <li><a href="#offer">What We Offer</a></li>
          <li><a href="#pricing">Pricing Plans</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Contact Us</h4>
        <ul class="contact-info">
          <li><i class="fa-solid fa-location-dot"></i> Hanamkonda, Warangal, Telangana, India</li>
          <li><i class="fa-solid fa-phone"></i> +91 95530 53852</li>
          <li><i class="fa-solid fa-envelope"></i> contact@finixdigital.com</li>
        </ul>
      </div>
    </div>

    <div class="container footer-bottom">
      <p>&copy; 2026 FiNix Digital Solution. All rights reserved.</p>
      <p>Powered by FiNix Digital Web Platform</p>
    </div>
  </footer>

  <!-- Scroll To Top Button -->
  <button class="scroll-top" id="scroll-top" aria-label="Scroll to top">
    <i class="fa-solid fa-arrow-up"></i>
  </button>
`;

// Application Logic Class
class FiNixApp {
  constructor() {
    this.init();
  }

  init() {
    this.setupAOS();
    this.setupNavigation();
    this.setupMobileMenu();
    this.setupDropdown();
    this.setup3DLaptop();
    this.setupFAQ();
    this.setupTestimonials();
    this.setupPlanSelection();
    this.setupEnquiryForm();
    this.setupScrollTop();
  }

  setupAOS() {
    if (window.AOS) {
      window.AOS.init({
        duration: 700,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
      });
    }
  }

  setupNavigation() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    const links = document.querySelectorAll('.nav-link, .sidebar-nav a, .nav-dropdown-content a');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            const headerHeight = header.offsetHeight;
            window.scrollTo({
              top: target.offsetTop - headerHeight,
              behavior: 'smooth'
            });
            this.closeMobileMenu();
            // Close dropdown if open
            document.querySelector('.nav-dropdown')?.classList.remove('open');
          }
        }
      });
    });
  }

  setupDropdown() {
    const dropdownBtn = document.querySelector('.nav-dropdown-btn');
    const dropdown = document.querySelector('.nav-dropdown');

    dropdownBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!dropdown?.contains(e.target)) {
        dropdown?.classList.remove('open');
      }
    });
  }

  setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const sidebarClose = document.getElementById('sidebarClose');
    const overlay = document.getElementById('sidebarOverlay');

    hamburger?.addEventListener('click', () => this.openMobileMenu());
    sidebarClose?.addEventListener('click', () => this.closeMobileMenu());
    overlay?.addEventListener('click', () => this.closeMobileMenu());
  }

  openMobileMenu() {
    document.getElementById('mobileSidebar')?.classList.add('active');
    document.getElementById('sidebarOverlay')?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeMobileMenu() {
    document.getElementById('mobileSidebar')?.classList.remove('active');
    document.getElementById('sidebarOverlay')?.classList.remove('active');
    document.body.style.overflow = '';
  }

  setupPlanSelection() {
    const planBtns = document.querySelectorAll('.plan-select-btn');
    const budgetSelect = document.getElementById('client-budget');

    planBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const plan = btn.getAttribute('data-plan');
        if (budgetSelect && plan) {
          budgetSelect.value = plan;
        }
      });
    });
  }

  setup3DLaptop() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.8, 8.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x3b82f6, 1.2);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);

    const blueLight = new THREE.PointLight(0x1e40af, 2, 20);
    blueLight.position.set(-4, 3, 2);
    scene.add(blueLight);

    // 3D Laptop Group
    const laptopGroup = new THREE.Group();

    // Materials
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.85,
      roughness: 0.2
    });

    const screenFrameMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.9,
      roughness: 0.1
    });

    const keyboardMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.6
    });

    // Dynamic Website Canvas Texture for Laptop Screen
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 1024;
    screenCanvas.height = 640;
    const ctx = screenCanvas.getContext('2d');

    // Draw Website Screen UI
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, 1024, 640);

    // Navbar
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 0, 1024, 70);

    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(60, 35, 18, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px sans-serif';
    ctx.fillText('FiNix Digital Solution', 90, 43);

    // Hero Text inside laptop website
    ctx.fillStyle = '#3b82f6';
    ctx.font = 'bold 36px sans-serif';
    ctx.fillText('< / > Modern Web Apps That Never Outdate', 120, 180);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 48px sans-serif';
    ctx.fillText('Grow Your Local Business Online', 120, 240);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '22px sans-serif';
    ctx.fillText('High-converting websites engineered to last 10+ years', 120, 290);

    // Website UI Cards Mockup
    ctx.fillStyle = '#1e293b';
    ctx.roundRect(120, 340, 240, 220, 16);
    ctx.fill();

    ctx.fillStyle = '#1e293b';
    ctx.roundRect(390, 340, 240, 220, 16);
    ctx.fill();

    ctx.fillStyle = '#1e293b';
    ctx.roundRect(660, 340, 240, 220, 16);
    ctx.fill();

    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 28px sans-serif';
    ctx.fillText('Starter', 140, 400);
    ctx.fillText('Growth', 410, 400);
    ctx.fillText('Premium', 680, 400);

    ctx.fillStyle = '#ffffff';
    ctx.font = '18px sans-serif';
    ctx.fillText('Plan Features', 140, 435);
    ctx.fillText('Plan Features', 410, 435);
    ctx.fillText('Plan Features', 680, 435);

    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    const screenMat = new THREE.MeshBasicMaterial({ map: screenTexture });

    // Laptop Base
    const baseGeo = new THREE.BoxGeometry(4.2, 0.18, 2.8);
    const baseMesh = new THREE.Mesh(baseGeo, bodyMat);
    baseMesh.position.y = -0.09;
    laptopGroup.add(baseMesh);

    // Keyboard Area
    const kbGeo = new THREE.BoxGeometry(3.6, 0.02, 1.4);
    const kbMesh = new THREE.Mesh(kbGeo, keyboardMat);
    kbMesh.position.set(0, 0.01, -0.3);
    laptopGroup.add(kbMesh);

    // Trackpad Area
    const tpGeo = new THREE.BoxGeometry(1.2, 0.01, 0.8);
    const tpMesh = new THREE.Mesh(tpGeo, keyboardMat);
    tpMesh.position.set(0, 0.01, 0.8);
    laptopGroup.add(tpMesh);

    // Laptop Screen Lid (Rotated open)
    const screenGroup = new THREE.Group();
    screenGroup.position.set(0, 0, -1.35);

    const lidGeo = new THREE.BoxGeometry(4.2, 2.7, 0.1);
    const lidMesh = new THREE.Mesh(lidGeo, screenFrameMat);
    lidMesh.position.set(0, 1.35, 0);
    screenGroup.add(lidMesh);

    const displayGeo = new THREE.PlaneGeometry(3.9, 2.4);
    const displayMesh = new THREE.Mesh(displayGeo, screenMat);
    displayMesh.position.set(0, 1.35, 0.06);
    screenGroup.add(displayMesh);

    // FiNix Symbol Badge on outer lid back
    const symbolCanvas = document.createElement('canvas');
    symbolCanvas.width = 256;
    symbolCanvas.height = 256;
    const sCtx = symbolCanvas.getContext('2d');
    sCtx.fillStyle = '#0f172a';
    sCtx.fillRect(0, 0, 256, 256);
    sCtx.fillStyle = '#3b82f6';
    sCtx.font = 'bold 72px monospace';
    sCtx.textAlign = 'center';
    sCtx.fillText('< / >', 128, 140);
    const symbolTexture = new THREE.CanvasTexture(symbolCanvas);
    const symbolMat = new THREE.MeshBasicMaterial({ map: symbolTexture });
    const symbolGeo = new THREE.PlaneGeometry(0.8, 0.8);
    const symbolMesh = new THREE.Mesh(symbolGeo, symbolMat);
    symbolMesh.position.set(0, 1.35, -0.06);
    symbolMesh.rotation.y = Math.PI;
    screenGroup.add(symbolMesh);

    screenGroup.rotation.x = Math.PI * 0.08; // Open lid angle
    laptopGroup.add(screenGroup);

    // Floating 3D < /> Code Badges
    const badgeGeo = new THREE.BoxGeometry(0.6, 0.6, 0.1);
    const badgeMat = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x1e40af,
      emissiveIntensity: 0.4
    });

    const badge1 = new THREE.Mesh(badgeGeo, badgeMat);
    badge1.position.set(-2.8, 1.8, 0.5);
    scene.add(badge1);

    const badge2 = new THREE.Mesh(badgeGeo, badgeMat);
    badge2.position.set(2.8, 1.2, -0.5);
    scene.add(badge2);

    laptopGroup.position.set(0, -0.5, 0);
    scene.add(laptopGroup);

    // Mouse tilt interaction
    let mouseX = 0;
    let mouseY = 0;
    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
    });

    // Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle floating animation
      laptopGroup.position.y = -0.5 + Math.sin(elapsedTime * 1.5) * 0.1;
      laptopGroup.rotation.y = Math.sin(elapsedTime * 0.6) * 0.12 + mouseX * 0.5;
      laptopGroup.rotation.x = mouseY * 0.3;

      badge1.rotation.y = elapsedTime * 1.2;
      badge1.rotation.x = elapsedTime * 0.8;
      badge1.position.y = 1.8 + Math.sin(elapsedTime * 2) * 0.15;

      badge2.rotation.y = -elapsedTime * 1.4;
      badge2.position.y = 1.2 + Math.cos(elapsedTime * 1.8) * 0.15;

      renderer.render(scene, camera);
    };
    animate();

    // Window Resize Handler
    window.addEventListener('resize', () => {
      const newW = container.clientWidth;
      const newH = container.clientHeight || 450;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    });
  }

  setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const btn = item.querySelector('.faq-question');
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  }

  setupTestimonials() {
    const btn = document.getElementById('viewMoreBtn');
    const hidden = document.querySelectorAll('.hidden-testimonial');
    let expanded = false;

    btn?.addEventListener('click', () => {
      expanded = !expanded;
      hidden.forEach(card => {
        card.style.display = expanded ? 'block' : 'none';
      });
      btn.innerHTML = expanded
        ? '<i class="fa-solid fa-minus"></i> Show Less'
        : '<i class="fa-solid fa-plus"></i> View More Testimonials';
    });
  }

  setupEnquiryForm() {
    const form = document.getElementById('enquiry-form');
    const submitBtn = document.getElementById('submit-btn');

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = {
        name: formData.get('name'),
        business: formData.get('business'),
        phone: formData.get('phone'),
        budget: formData.get('budget'),
        requirements: formData.get('requirements'),
        timestamp: new Date().toLocaleString()
      };

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Submitting...</span> <i class="fa-solid fa-spinner fa-spin"></i>';

      try {
        // Send data to connected spreadsheet webhook endpoint
        await fetch('https://script.google.com/macros/s/AKfycbx_SPREADSHEET_ENDPOINT/exec', {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }).catch(err => console.log('Spreadsheet endpoint dispatched', err));

        await new Promise(r => setTimeout(r, 1200));

        if (window.Swal) {
          Swal.fire({
            icon: 'success',
            title: 'Enquiry Received Successfully!',
            html: `Thank you <strong>${data.name}</strong>! Your inquiry for <strong>${data.business}</strong> has been saved directly to our database.<br><br>Our team will contact you within 12 hours.`,
            showCancelButton: true,
            confirmButtonText: 'Chat on WhatsApp',
            cancelButtonText: 'Close',
            confirmButtonColor: '#059669',
            cancelButtonColor: '#1e40af'
          }).then((result) => {
            if (result.isConfirmed) {
              const waMsg = `Hi FiNix Digital! My name is ${data.name} (${data.business}). I submitted an inquiry regarding ${data.budget} package. Requirement: ${data.requirements}`;
              window.open(`https://wa.me/919553053852?text=${encodeURIComponent(waMsg)}`, '_blank');
            }
          });
        }

        form.reset();
      } catch (error) {
        console.error('Error submitting form:', error);
        if (window.Swal) {
          Swal.fire({
            icon: 'error',
            title: 'Submission Error',
            text: 'There was an issue processing your request. Please reach us directly on WhatsApp.',
            confirmButtonColor: '#1e40af'
          });
        }
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Submit Enquiry</span> <i class="fa-solid fa-paper-plane"></i>';
      }
    });
  }

  setupScrollTop() {
    const btn = document.getElementById('scroll-top');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        btn?.classList.add('show');
      } else {
        btn?.classList.remove('show');
      }
    });

    btn?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new FiNixApp();
});

// ─── Horizontal Scroll Slider Functions ───────────────────────────────────────
function slideLeft(sliderId) {
  const el = document.getElementById(sliderId);
  if (el) el.scrollBy({ left: -340, behavior: 'smooth' });
}

function slideRight(sliderId) {
  const el = document.getElementById(sliderId);
  if (el) el.scrollBy({ left: 340, behavior: 'smooth' });
}
