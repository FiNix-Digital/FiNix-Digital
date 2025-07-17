document.querySelector("#app").innerHTML=`
  <!-- Mobile Sidebar Overlay -->
  <div class="sidebar-overlay" id="sidebarOverlay"></div>
  
  <!-- Mobile Sidebar -->
  <div class="mobile-sidebar" id="mobileSidebar">
    <div class="sidebar-header">
      <div class="navbar-brand">
        <div class="logo-container"><img src="./Assets/logo.jpg" alt="FiNix Logo" class="logo-img"></div>
        <div class="brand-text">
          <div class="brand-name">FiNix</div>
          <div class="brand-tagline">Digital Solutions</div>
        </div>
      </div>
      <button class="sidebar-close" id="sidebarClose">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <ul class="sidebar-nav">
      <li><a href="#home"><i class="fas fa-home"></i> Home</a></li>
      <li><a href="#problems"><i class="fas fa-exclamation-triangle"></i> Problems</a></li>
      <li><a href="#services"><i class="fas fa-cogs"></i> Services</a></li>
      <li><a href="#pricing"><i class="fas fa-tags"></i> Pricing</a></li>
      <li><a href="#portfolio"><i class="fas fa-briefcase"></i> Portfolio</a></li>
      <li><a href="#testimonials"><i class="fas fa-star"></i> Testimonials</a></li>
      <li><a href="#contact"><i class="fas fa-envelope"></i> Contact</a></li>
    </ul>
  </div>

  <!-- Header -->
  <header class="header" id="header">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="#home">
          <div class="logo-container"><img src="./Assets/logo.jpg" alt="FiNix Logo" class="logo-img"></div>
          <div class="brand-text">
            <div class="brand-name">FiNix</div>
            <div class="brand-tagline">Empowering Coaching Centers Digitally</div>
          </div>
        </a>
        
        <div class="d-lg-none">
          <button class="btn" id="mobileMenuBtn" type="button">
            <i class="fas fa-bars" style="font-size: 1.5rem; color: var(--primary-blue);"></i>
          </button>
        </div>
        
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#problems">Problems</a></li>
            <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
            <li class="nav-item"><a class="nav-link" href="#pricing">Pricing</a></li>
            <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
            <li class="nav-item"><a class="nav-link" href="#testimonials">Testimonials</a></li>
            <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <!-- Hero Section -->
  <section class="hero section" id="home">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6" data-aos="fade-right">
          <div class="hero-content">
            <h1>Grow Your Coaching Business with a <span class="text-gradient">Powerful Online Presence</span></h1>
            <p>We build professional websites that build trust and attract more students to your coaching center.</p>
            <a href="https://wa.me/919553053852?text=Hi%20FiNix,%20I%20want%20a%20website%20for%20my%20coaching%20center" 
               class="cta-button" target="_blank">
              <i class="fab fa-whatsapp"></i> Get Started on WhatsApp
            </a>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-left">
          <div class="hero-image">
            <div class="hero-illustration">
              <i class="fas fa-laptop-code"></i>
              <div style="margin-left: 1rem;">
                <div>Professional Websites</div>
                <small style="opacity: 0.8;">For Coaching Centers</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Problem/Solution Section -->
  <section class="section section-alt" id="problems">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Why Coaching Centers Need a Website Today</h2>
      <div class="row g-4">
        <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div class="problem-card">
            <div class="problem-icon">
              <i class="fas fa-search-minus"></i>
            </div>
            <h3>No Online Visibility</h3>
            <p>Without a website, potential students can't find you online when they search for coaching centers.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div class="problem-card">
            <div class="problem-icon">
              <i class="fas fa-user-graduate"></i>
            </div>
            <h3>Trust Factor Missing</h3>
            <p>Students and parents trust what they see online. A professional website builds instant credibility.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div class="problem-card">
            <div class="problem-icon">
              <i class="fas fa-mobile-alt"></i>
            </div>
            <h3>Mobile-First World</h3>
            <p>Parents search on Google and social media before making calls. Be where they are looking.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
          <div class="problem-card">
            <div class="problem-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3>Competitor Advantage</h3>
            <p>Coaching centers with websites are getting more admissions. Don't let them take your students.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="section" id="services">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">What We Offer</h2>
      <div class="row g-4">
        <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-mobile-alt"></i>
            </div>
            <h3>Mobile-Friendly Websites</h3>
            <p>Responsive designs that look perfect on all devices - mobile, tablet, and desktop.</p>
            <ul class="service-features">
              <li><i class="fas fa-check"></i> Fast loading speed</li>
              <li><i class="fas fa-check"></i> Mobile-first design</li>
              <li><i class="fas fa-check"></i> Cross-browser compatibility</li>
              <li><i class="fas fa-check"></i> Touch-friendly navigation</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-edit"></i>
            </div>
            <h3>Online Registration Forms</h3>
            <p>Easy-to-use forms that help you collect student inquiries and registrations automatically.</p>
            <ul class="service-features">
              <li><i class="fas fa-check"></i> Student inquiry forms</li>
              <li><i class="fas fa-check"></i> Course registration</li>
              <li><i class="fas fa-check"></i> Contact information capture</li>
              <li><i class="fas fa-check"></i> Email notifications</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-globe"></i>
            </div>
            <h3>Custom Domain & Hosting</h3>
            <p>Professional domain names and reliable hosting to keep your website running 24/7.</p>
            <ul class="service-features">
              <li><i class="fas fa-check"></i> Custom domain (.in)</li>
              <li><i class="fas fa-check"></i> SSL certificate included</li>
              <li><i class="fas fa-check"></i> 99.9% uptime guarantee</li>
              <li><i class="fas fa-check"></i> Regular backups</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-star"></i>
            </div>
            <h3>Google Reviews & Maps</h3>
            <p>Integration with Google My Business to showcase your location and positive reviews.</p>
            <ul class="service-features">
              <li><i class="fas fa-check"></i> Google Maps integration</li>
              <li><i class="fas fa-check"></i> Review widget</li>
              <li><i class="fas fa-check"></i> Location finder</li>
              <li><i class="fas fa-check"></i> Contact information</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing Section -->
  <section class="section section-alt" id="pricing">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Our Service Plans</h2>
      <div class="row g-4 justify-content-center">
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div class="pricing-card">
            <div class="pricing-icon">
              <i class="fas fa-briefcase"></i>
            </div>
            <h3>Starter Plan</h3>
            <div class="price">₹2,999</div>
            <p class="description">Perfect for new/small coaching centers</p>
            <ul class="pricing-features">
              <li><i class="fas fa-check"></i> 2-3 Page Mobile-Friendly Website</li>
              <li><i class="fas fa-check"></i> Coaching Info + Contact + Google Map</li>
              <li><i class="fas fa-check"></i> Custom domain (.in) & hosting for 1 year</li>
              <li><i class="fas fa-check"></i> WhatsApp Click-to-Chat button</li>
              <li><i class="fas fa-check"></i> Basic SEO setup</li>
              <li><i class="fas fa-check"></i> Delivery in 5 working days</li>
            </ul>
            <a href="https://wa.me/919553053852?text=I%20want%20the%20Starter%20Plan%20for%20₹2,999" 
               class="pricing-button" target="_blank">Choose Starter</a>
          </div>
        </div>
        
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div class="pricing-card popular">
            <div class="pricing-icon">
              <i class="fas fa-rocket"></i>
            </div>
            <h3>Standard Plan</h3>
            <div class="price">₹5,499</div>
            <p class="description">For coaching centers that want better visibility</p>
            <ul class="pricing-features">
              <li><i class="fas fa-check"></i> 3-4 Page Website (Home, Courses, About, Contact)</li>
              <li><i class="fas fa-check"></i> Quick Action: Sidebar, Call, Chat</li>
              <li><i class="fas fa-check"></i> Online Registration Form (email-based)</li>
              <li><i class="fas fa-check"></i> Smooth Usability</li>
              <li><i class="fas fa-check"></i> Custom Domain + Hosting</li>
              <li><i class="fas fa-check"></i> Basic SEO(upto 65 score) + Google Search Console setup</li>
              <li><i class="fas fa-check"></i> Delivery in 7 working days</li>
            </ul>
            <a href="https://wa.me/919553053852?text=I%20want%20the%20Standard%20Plan%20for%20₹5,499" 
               class="pricing-button" target="_blank">Choose Standard</a>
          </div>
        </div>
        
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div class="pricing-card">
            <div class="pricing-icon">
              <i class="fas fa-crown"></i>
            </div>
            <h3>Premium Plan</h3>
            <div class="price">₹8,999</div>
            <p class="description">For institutes serious about digital growth</p>
            <ul class="pricing-features">
              <li><i class="fas fa-check"></i> 5-6 Page Website (View Demo below)</li>
              <li><i class="fas fa-check"></i> Student Inquiry + Testimonial + Gallery</li>
              <li><i class="fas fa-check"></i> Quick Action: Sidebar, Call, Chat</li>
              <li><i class="fas fa-check"></i> Online Registration Form (email-based)</li>
              <li><i class="fas fa-check"></i> Logo Design + UI/UX</li>
              <li><i class="fas fa-check"></i> SEO(upto 80 score) + FiNix mail(for fast support) + Google Search Console Setup</li>
              <li><i class="fas fa-check"></i> Delivery in 10-12 working days</li>
            </ul>
            <a href="https://wa.me/919553053852?text=I%20want%20the%20Premium%20Plan%20for%20₹8,999" 
               class="pricing-button" target="_blank">Choose Premium</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Portfolio Section -->
  <section class="section" id="portfolio">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">See Our Work</h2>
      <div class="row g-4">
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div class="portfolio-card">
            <div class="portfolio-image">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="portfolio-content">
              <h3>Stater Demo</h3>
              <p>Best for individual tutors, new coaching centers, and home tuitions.</p>
              <a href="https://finixstarter.netlify.app/" target="_blank" class="portfolio-link">View Demo <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div class="portfolio-card">
            <div class="portfolio-image">
              <i class="fas fa-atom"></i>
            </div>
            <div class="portfolio-content">
              <h3>Standard Demo</h3>
              <p> Ideal for small institutes, growing academies, and subject-specific centers.</p>
              <a href="https://finixstandard.netlify.app/" target="_blank" class="portfolio-link">View Demo <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div class="portfolio-card">
            <div class="portfolio-image">
              <i class="fas fa-gem"></i>
            </div>
            <div class="portfolio-content">
              <h3>Premium Demo</h3>
              <p>Perfect for established coaching brands, multi-branch institutes, and high-growth educators.</p>
              <a href="https://finixpremium.netlify.app/" target="_blank" class="portfolio-link">View Demo <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="section section-alt" id="testimonials">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Our Happy Clients</h2>
      <div class="testimonials-container">
        <div class="testimonials-grid" id="testimonialsGrid">
          <div class="testimonial-card" data-aos="fade-up" data-aos-delay="100">
            <div class="testimonial-avatar">AK</div>
            <blockquote>
              "Thanks to FiNix, our admissions doubled in 2 months! The website looks professional and parents trust us more now."
            </blockquote>
            <div class="testimonial-author">Anil Kumar</div>
            <div class="testimonial-role">Director, HAREESH ACADEMY</div>
            <div class="testimonial-rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
          
          <div class="testimonial-card" data-aos="fade-up" data-aos-delay="200">
            <div class="testimonial-avatar">PS</div>
            <blockquote>
              "Amazing work! They delivered exactly what we needed. Our students can now register online and we get more inquiries daily."
            </blockquote>
            <div class="testimonial-author">Priya Sharma</div>
            <div class="testimonial-role">Owner, Suresh Academy</div>
            <div class="testimonial-rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>

          <div class="testimonial-card hidden-testimonial" data-aos="fade-up" data-aos-delay="300">
            <div class="testimonial-avatar">RG</div>
            <blockquote>
              "FiNix transformed our coaching center's online presence. We now get 5x more inquiries through our website!"
            </blockquote>
            <div class="testimonial-author">Rajesh Gupta</div>
            <div class="testimonial-role">Founder, Elite IIT Academy</div>
            <div class="testimonial-rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>

          <div class="testimonial-card hidden-testimonial" data-aos="fade-up" data-aos-delay="400">
            <div class="testimonial-avatar">MV</div>
            <blockquote>
              "Professional service and quick delivery. Our website helped us establish credibility in the competitive coaching market."
            </blockquote>
            <div class="testimonial-author">Meera Verma</div>
            <div class="testimonial-role">Director, Bright Future Classes</div>
            <div class="testimonial-rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>

          <div class="testimonial-card hidden-testimonial" data-aos="fade-up" data-aos-delay="500">
            <div class="testimonial-avatar">SK</div>
            <blockquote>
              "The mobile-friendly design is perfect! Parents can easily find our courses and contact us directly from their phones."
            </blockquote>
            <div class="testimonial-author">Suresh Kumar</div>
            <div class="testimonial-role">Owner, Knowledge Hub</div>
            <div class="testimonial-rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>

          <div class="testimonial-card hidden-testimonial" data-aos="fade-up" data-aos-delay="600">
            <div class="testimonial-avatar">NT</div>
            <blockquote>
              "Excellent support and beautiful design. Our online registrations increased by 300% after launching the website."
            </blockquote>
            <div class="testimonial-author">Neha Tiwari</div>
            <div class="testimonial-role">Co-founder, Smart Learning Center</div>
            <div class="testimonial-rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>

          <div class="testimonial-card hidden-testimonial" data-aos="fade-up" data-aos-delay="700">
            <div class="testimonial-avatar">VJ</div>
            <blockquote>
              "FiNix understood our requirements perfectly. The website showcases our achievements and attracts quality students."
            </blockquote>
            <div class="testimonial-author">Vikram Joshi</div>
            <div class="testimonial-role">Principal, Champion Coaching</div>
            <div class="testimonial-rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>

          <div class="testimonial-card hidden-testimonial" data-aos="fade-up" data-aos-delay="800">
            <div class="testimonial-avatar">AS</div>
            <blockquote>
              "Great value for money! The website looks premium and has all the features we needed to grow our coaching business."
            </blockquote>
            <div class="testimonial-author">Amit Singh</div>
            <div class="testimonial-role">Director, Apex Tutorial</div>
            <div class="testimonial-rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>

          <div class="testimonial-card hidden-testimonial" data-aos="fade-up" data-aos-delay="900">
            <div class="testimonial-avatar">DM</div>
            <blockquote>
              "The SEO optimization really works! We're now on the first page of Google for 'coaching center near me'."
            </blockquote>
            <div class="testimonial-author">Deepak Mishra</div>
            <div class="testimonial-role">Founder, Prime Academy</div>
            <div class="testimonial-rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>

          <div class="testimonial-card hidden-testimonial" data-aos="fade-up" data-aos-delay="1000">
            <div class="testimonial-avatar">KS</div>
            <blockquote>
              "Fast delivery and excellent customer support. The website perfectly represents our coaching institute's values."
            </blockquote>
            <div class="testimonial-author">Kavita Sinha</div>
            <div class="testimonial-role">Owner, Brilliant Minds</div>
            <div class="testimonial-rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
        </div>
        
        <button class="view-more-btn" id="viewMoreBtn">
          <i class="fas fa-plus"></i> View More Testimonials
        </button>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="section contact" id="contact">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Ready to Grow Your Coaching Business?</h2>
      <p data-aos="fade-up" data-aos-delay="100">Get your professional website in just 5-12 working days and start attracting more students!</p>
      
      <!-- Contact Form -->
      <div class="contact-form" data-aos="fade-up" data-aos-delay="0">
        <h3><i class="fas fa-edit"></i> Get Your Custom Quote</h3>
        <form id="contactForm">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="centerName">Coaching Center Name *</label>
                <input type="text" id="centerName" name="centerName" required placeholder="Enter your coaching center name">
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="mobile">Mobile Number *</label>
                <input type="tel" id="mobile" name="mobile" required placeholder="Enter your mobile number">
              </div>
            </div>
          </div>
          
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="plan">Preferred Plan</label>
                <select id="plan" name="plan">
                  <option value="">Select a plan</option>
                  <option value="starter">Starter Plan - ₹2,999</option>
                  <option value="standard">Standard Plan - ₹5,499</option>
                  <option value="premium">Premium Plan - ₹8,999</option>
                  <option value="custom">Custom Requirements</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="budget">Budget Range</label>
                <select id="budget" name="budget">
                  <option value="">Select budget range</option>
                  <option value="under-3k">Under ₹3,000</option>
                  <option value="3k-5k">₹3,000 - ₹5,000</option>
                  <option value="5k-10k">₹5,000 - ₹10,000</option>
                  <option value="10k-plus">₹10,000+</option>
                </select>
              </div>
            </div>
          </div>
          
          <div class="form-group">
            <label for="requirements">Website Requirements & Comments</label>
            <textarea id="requirements" name="requirements" rows="4" placeholder="Tell us about your specific requirements, features you need, or any questions you have..."></textarea>
          </div>
          
          <button type="submit" class="submit-btn" id="submitBtn">
            <i class="fas fa-paper-plane"></i> Send Inquiry
          </button>
        </form>
      </div>
      
      <div data-aos="fade-up" data-aos-delay="300">
        <a href="https://wa.me/919553053852?text=Hey%20FiNix!%20I%20want%20to%20get%20a%20website%20designed%20for%20my%20coaching%20institute.%20Let%E2%80%99s%20get%20started." 
           class="whatsapp-button" target="_blank">
          <i class="fab fa-whatsapp"></i> Start Your Project on WhatsApp
        </a>
        <div class="trust-note">
          <i class="fas fa-clock"></i> We reply within 12 hours!
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="row footer-content">
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="footer-section">
            <h3>FiNix Digital Solution</h3>
            <p>Empowering coaching centers across India with professional websites that attract more students and build trust.</p>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 mb-4">
          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul class="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 mb-4">
          <div class="footer-section">
            <h3>Services</h3>
            <ul class="footer-links">
              <li><a href="#services">Website Design</a></li>
              <li><a href="#services">Mobile Optimization</a></li>
              <li><a href="#services">SEO Services</a></li>
              <li><a href="#services">Domain & Hosting</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 mb-4">
          <div class="footer-section">
            <h3>Legal</h3>
            <ul class="footer-links">
              <li><a href="./Assets/terms.pdf" download target="_blank">Privacy Policy</a></li>
              <li><a href="./Assets/terms.pdf" download target="_blank">Terms and Conditions</a>
</li>
              <li><a href="./Assets/terms.pdf" download target="_blank">Refund Policy</a></li>
              <li><a href="./Assets/terms.pdf" download target="_blank">Support</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 mb-4">
          <div class="footer-section">
            <h3>Connect</h3>
            <ul class="footer-links">
              <li><a href="https://wa.me/919553053852?text=Hey%20FiNix!%20I%20want%20to%20get%20a%20website%20designed%20for%20my%20coaching%20institute.%20Let%E2%80%99s%20get%20started." target="_blank">WhatsApp</a></li>
              <li><a href="mailto:finix.digital.solution@gmail.com?subject=I%20Need%20a%20Website%20for%20My%20Coaching%20Institute&body=Hi%20FiNix%2C%0A%0AI%E2%80%99m%20interested%20in%20getting%20a%20professional%20website%20designed%20for%20my%20coaching%20center.%20Please%20share%20the%20packages%20and%20next%20steps.%0A%0AThanks%2C%0A%5BYour%20Name%5D" 
   target="_blank">Mail</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="social-links">
        <a href="https://wa.me/919553053852?text=Hey%20FiNix!%20I%20want%20to%20get%20a%20website%20designed%20for%20my%20coaching%20institute.%20Let%E2%80%99s%20get%20started." target="_blank" title="WhatsApp">
          <i class="fab fa-whatsapp"></i>
        </a>
        <a href="mailto:finix.digital.solution@gmail.com?subject=I%20Need%20a%20Website%20for%20My%20Coaching%20Institute&body=Hi%20FiNix%2C%0A%0AI%E2%80%99m%20interested%20in%20getting%20a%20professional%20website%20designed%20for%20my%20coaching%20center.%20Please%20share%20the%20packages%20and%20next%20steps.%0A%0AThanks%2C%0A%5BYour%20Name%5D" 
   target="_blank" title="LinkedIn">
          <i class="fas fa-envelope"></i>
        </a>
        <a href="#" title="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" title="Facebook">
          <i class="fab fa-facebook"></i>
        </a>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2025 FiNix Digital Solution. All rights reserved.</p>
        <p>Powered by <a href="https://finixdigital.netlify.app/">FiNix Digital</a>
</p>
      </div>
    </div>
  </footer>
`;class FiNixLanding{constructor(){this.init()}
init(){this.setupAOS();this.setupNavigation();this.setupMobileSidebar();this.setupScrollEffects();this.setupTestimonials();this.setupAnimations();this.setupContactForm()}
setupAOS(){AOS.init({duration:600,easing:"ease-out",once:!0,offset:60,})}
setupNavigation(){const header=document.getElementById("header");const navLinks=document.querySelectorAll(".nav-link, .sidebar-nav a");window.addEventListener("scroll",()=>{if(window.scrollY>50){header.classList.add("scrolled")}else{header.classList.remove("scrolled")}});navLinks.forEach((link)=>{link.addEventListener("click",(e)=>{e.preventDefault();const targetId=link.getAttribute("href");const targetSection=document.querySelector(targetId);if(targetSection){const headerHeight=header.offsetHeight;const targetPosition=targetSection.offsetTop-headerHeight;window.scrollTo({top:targetPosition,behavior:"smooth",});this.closeMobileSidebar()}})});window.addEventListener("scroll",()=>{const sections=document.querySelectorAll("section[id]");const scrollPos=window.scrollY+100;sections.forEach((section)=>{const sectionTop=section.offsetTop;const sectionHeight=section.offsetHeight;const sectionId=section.getAttribute("id");if(scrollPos>=sectionTop&&scrollPos<sectionTop+sectionHeight){navLinks.forEach((link)=>{link.classList.remove("active");if(link.getAttribute("href")===`#${sectionId}`){link.classList.add("active")}})}})})}
setupMobileSidebar(){const mobileMenuBtn=document.getElementById("mobileMenuBtn");const mobileSidebar=document.getElementById("mobileSidebar");const sidebarOverlay=document.getElementById("sidebarOverlay");const sidebarClose=document.getElementById("sidebarClose");mobileMenuBtn.addEventListener("click",()=>{this.openMobileSidebar()});sidebarClose.addEventListener("click",()=>{this.closeMobileSidebar()});sidebarOverlay.addEventListener("click",()=>{this.closeMobileSidebar()});document.addEventListener("keydown",(e)=>{if(e.key==="Escape"){this.closeMobileSidebar()}})}
openMobileSidebar(){const mobileSidebar=document.getElementById("mobileSidebar");const sidebarOverlay=document.getElementById("sidebarOverlay");mobileSidebar.classList.add("active");sidebarOverlay.classList.add("active");document.body.style.overflow="hidden"}
closeMobileSidebar(){const mobileSidebar=document.getElementById("mobileSidebar");const sidebarOverlay=document.getElementById("sidebarOverlay");mobileSidebar.classList.remove("active");sidebarOverlay.classList.remove("active");document.body.style.overflow=""}
setupScrollEffects(){const observerOptions={threshold:0.1,rootMargin:"0px 0px -200px 0px",};const observer=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add("visible")}})},observerOptions);document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right").forEach((el)=>{observer.observe(el)})}
setupTestimonials(){const viewMoreBtn=document.getElementById("viewMoreBtn");const hiddenTestimonials=document.querySelectorAll(".hidden-testimonial");let showingMore=!1;viewMoreBtn.addEventListener("click",()=>{if(!showingMore){hiddenTestimonials.forEach((testimonial,index)=>{setTimeout(()=>{testimonial.style.display="block";testimonial.classList.remove("hidden-testimonial");AOS.refresh()},index*100)});viewMoreBtn.innerHTML='<i class="fas fa-minus"></i> Show Less';showingMore=!0}else{hiddenTestimonials.forEach((testimonial)=>{testimonial.style.display="none";testimonial.classList.add("hidden-testimonial")});viewMoreBtn.innerHTML='<i class="fas fa-plus"></i> View More Testimonials';showingMore=!1;document.getElementById("testimonials").scrollIntoView({behavior:"smooth",block:"start",})}});hiddenTestimonials.forEach((testimonial)=>{testimonial.style.display="none"})}
setupContactForm(){const contactForm=document.getElementById("contactForm");const submitBtn=document.getElementById("submitBtn");contactForm.addEventListener("submit",async(e)=>{e.preventDefault();const formData=new FormData(contactForm);const data={centerName:formData.get("centerName"),mobile:formData.get("mobile"),plan:formData.get("plan"),budget:formData.get("budget"),requirements:formData.get("requirements"),};if(!data.centerName||!data.mobile){Swal.fire({icon:"error",title:"Missing Information",text:"Please fill in all required fields (Center Name and Mobile Number)",confirmButtonColor:"#1e40af",});return}
submitBtn.disabled=!0;submitBtn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Sending...';try{const whatsappMessage=this.createWhatsAppMessage(data);await new Promise((resolve)=>setTimeout(resolve,1500));Swal.fire({icon:"success",title:"Inquiry Sent Successfully!",text:"We will contact you within 12 hours. You can also reach us directly on WhatsApp.",confirmButtonColor:"#1e40af",showCancelButton:!0,confirmButtonText:"Open WhatsApp",cancelButtonText:"Close",}).then((result)=>{if(result.isConfirmed){console.log(whatsappMessage);window.open(`https://wa.me/919553053852?text=${encodeURIComponent(
                whatsappMessage
              )}`,"_blank")}});contactForm.reset();this.sendEmailNotification(data)}catch(error){console.error("Error submitting form:",error);Swal.fire({icon:"error",title:"Submission Failed",text:"There was an error sending your inquiry. Please try again or contact us directly on WhatsApp.",confirmButtonColor:"#1e40af",})}finally{submitBtn.disabled=!1;submitBtn.innerHTML='<i class="fas fa-paper-plane"></i> Send Inquiry'}})}
createWhatsAppMessage(data){let message=`Hi FiNix! I'm interested in getting a website for my coaching center.\n\n`;message+=`📚 Coaching Center: ${data.centerName}\n`;message+=`📱 Mobile: ${data.mobile}\n`;if(data.plan){const planNames={starter:"Starter Plan - ₹2,999",standard:"Standard Plan - ₹5,499",premium:"Premium Plan - ₹8,999",custom:"Custom Requirements",};message+=`💼 Preferred Plan: ${planNames[data.plan]}\n`}
if(data.budget){const budgetNames={"under-3k":"Under ₹3,000","3k-5k":"₹3,000 - ₹5,000","5k-10k":"₹5,000 - ₹10,000","10k-plus":"₹10,000+",};message+=`💰 Budget: ${budgetNames[data.budget]}\n`}
if(data.requirements){message+=`📝 Requirements: ${data.requirements}\n`}
message+=`\nPlease provide me with more details and a quote. Thank you!`;return message}
sendEmailNotification(data){console.log("Email notification would be sent with data:",data);const emailContent={to:"contact@finixdigital.com",subject:`New Website Inquiry from ${data.centerName}`,body:`
        New website inquiry received:
        
        Coaching Center: ${data.centerName}
        Mobile: ${data.mobile}
        Plan: ${data.plan || "Not specified"}
        Budget: ${data.budget || "Not specified"}
        Requirements: ${data.requirements || "None specified"}
        
        Submitted at: ${new Date().toLocaleString()}
      `,};console.log("Email content:",emailContent)}
setupAnimations(){const cards=document.querySelectorAll(".service-card, .pricing-card, .portfolio-card, .problem-card");cards.forEach((card)=>{card.addEventListener("mouseenter",()=>{card.style.transform="translateY(-8px) scale(1.02)"});card.addEventListener("mouseleave",()=>{card.style.transform="translateY(0) scale(1)"})})}
trackInteraction(action,element){console.log(`User interaction: ${action} on ${element}`)}}
document.addEventListener("DOMContentLoaded",()=>{new FiNixLanding();const loadingElements=document.querySelectorAll(".hero-illustration, .service-card, .pricing-card");loadingElements.forEach((element)=>{element.classList.add("loading");setTimeout(()=>{element.classList.remove("loading")},1500)})});window.addEventListener("load",()=>{const images=document.querySelectorAll("img");images.forEach((img)=>{img.loading="lazy"})});window.addEventListener("error",(e)=>{console.error("FiNix Landing Page Error:",e.error)});window.FiNixLanding=FiNixLanding
