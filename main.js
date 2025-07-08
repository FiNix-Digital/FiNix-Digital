// FiNix Digital Solution Landing Page
document.querySelector("#app").innerHTML = ``;

// JavaScript functionality
class FiNixLanding {
  constructor() {
    this.init();
  }

  init() {
    this.setupAOS();
    this.setupNavigation();
    this.setupMobileSidebar();
    this.setupScrollEffects();
    this.setupTestimonials();
    this.setupAnimations();
    this.setupContactForm();
  }

  // Initialize AOS (Animate On Scroll)
  setupAOS() {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }

  // Navigation functionality
  setupNavigation() {
    const header = document.getElementById("header");
    const navLinks = document.querySelectorAll(".nav-link, .sidebar-nav a");

    // Header scroll effect
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });

    // Smooth scroll for navigation links
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          const headerHeight = header.offsetHeight;
          const targetPosition = targetSection.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });

          // Close mobile sidebar if open
          this.closeMobileSidebar();
        }
      });
    });

    // Active link highlighting
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active");
            }
          });
        }
      });
    });
  }

  // Mobile sidebar functionality
  setupMobileSidebar() {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileSidebar = document.getElementById("mobileSidebar");
    const sidebarOverlay = document.getElementById("sidebarOverlay");
    const sidebarClose = document.getElementById("sidebarClose");

    // Open sidebar
    mobileMenuBtn.addEventListener("click", () => {
      this.openMobileSidebar();
    });

    // Close sidebar
    sidebarClose.addEventListener("click", () => {
      this.closeMobileSidebar();
    });

    // Close sidebar when clicking overlay
    sidebarOverlay.addEventListener("click", () => {
      this.closeMobileSidebar();
    });

    // Close sidebar on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeMobileSidebar();
      }
    });
  }

  openMobileSidebar() {
    const mobileSidebar = document.getElementById("mobileSidebar");
    const sidebarOverlay = document.getElementById("sidebarOverlay");

    mobileSidebar.classList.add("active");
    sidebarOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  closeMobileSidebar() {
    const mobileSidebar = document.getElementById("mobileSidebar");
    const sidebarOverlay = document.getElementById("sidebarOverlay");

    mobileSidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Scroll effects
  setupScrollEffects() {
    // Add scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe elements for custom animations
    document
      .querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right")
      .forEach((el) => {
        observer.observe(el);
      });
  }

  // Testimonials functionality
  setupTestimonials() {
    const viewMoreBtn = document.getElementById("viewMoreBtn");
    const hiddenTestimonials = document.querySelectorAll(".hidden-testimonial");
    let showingMore = false;

    viewMoreBtn.addEventListener("click", () => {
      if (!showingMore) {
        // Show more testimonials
        hiddenTestimonials.forEach((testimonial, index) => {
          setTimeout(() => {
            testimonial.style.display = "block";
            testimonial.classList.remove("hidden-testimonial");
            AOS.refresh(); // Refresh AOS for new elements
          }, index * 100);
        });

        viewMoreBtn.innerHTML = '<i class="fas fa-minus"></i> Show Less';
        showingMore = true;
      } else {
        // Hide testimonials
        hiddenTestimonials.forEach((testimonial) => {
          testimonial.style.display = "none";
          testimonial.classList.add("hidden-testimonial");
        });

        viewMoreBtn.innerHTML =
          '<i class="fas fa-plus"></i> View More Testimonials';
        showingMore = false;

        // Scroll to testimonials section
        document.getElementById("testimonials").scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });

    // Initially hide testimonials
    hiddenTestimonials.forEach((testimonial) => {
      testimonial.style.display = "none";
    });
  }

  // Contact form functionality
  setupContactForm() {
    const contactForm = document.getElementById("contactForm");
    const submitBtn = document.getElementById("submitBtn");

    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Get form data
      const formData = new FormData(contactForm);
      const data = {
        centerName: formData.get("centerName"),
        mobile: formData.get("mobile"),
        plan: formData.get("plan"),
        budget: formData.get("budget"),
        requirements: formData.get("requirements"),
      };

      // Validate required fields
      if (!data.centerName || !data.mobile) {
        Swal.fire({
          icon: "error",
          title: "Missing Information",
          text: "Please fill in all required fields (Center Name and Mobile Number)",
          confirmButtonColor: "#1e40af",
        });
        return;
      }

      // Disable submit button
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

      try {
        // Create WhatsApp message
        const whatsappMessage = this.createWhatsAppMessage(data);

        // Simulate form submission delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Show success message
        Swal.fire({
          icon: "success",
          title: "Inquiry Sent Successfully!",
          text: "We will contact you within 12 hours. You can also reach us directly on WhatsApp.",
          confirmButtonColor: "#1e40af",
          showCancelButton: true,
          confirmButtonText: "Open WhatsApp",
          cancelButtonText: "Close",
        }).then((result) => {
          if (result.isConfirmed) {
            // Open WhatsApp with pre-filled message
            window.open(
              `https://wa.me/919553053852?text=${encodeURIComponent(
                whatsappMessage
              )}`,
              "_blank"
            );
          }
        });

        // Reset form
        contactForm.reset();

        // Send email (in a real application, this would be handled by a backend service)
        this.sendEmailNotification(data);
      } catch (error) {
        console.error("Error submitting form:", error);
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: "There was an error sending your inquiry. Please try again or contact us directly on WhatsApp.",
          confirmButtonColor: "#1e40af",
        });
      } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Inquiry';
      }
    });
  }

  // Create WhatsApp message from form data
  createWhatsAppMessage(data) {
    let message = `Hi FiNix! I'm interested in getting a website for my coaching center.\n\n`;
    message += `📚 Coaching Center: ${data.centerName}\n`;
    message += `📱 Mobile: ${data.mobile}\n`;

    if (data.plan) {
      const planNames = {
        starter: "Starter Plan - ₹2,999",
        standard: "Standard Plan - ₹5,499",
        premium: "Premium Plan - ₹8,999",
        custom: "Custom Requirements",
      };
      message += `💼 Preferred Plan: ${planNames[data.plan]}\n`;
    }

    if (data.budget) {
      const budgetNames = {
        "under-3k": "Under ₹3,000",
        "3k-5k": "₹3,000 - ₹5,000",
        "5k-10k": "₹5,000 - ₹10,000",
        "10k-plus": "₹10,000+",
      };
      message += `💰 Budget: ${budgetNames[data.budget]}\n`;
    }

    if (data.requirements) {
      message += `📝 Requirements: ${data.requirements}\n`;
    }

    message += `\nPlease provide me with more details and a quote. Thank you!`;

    return message;
  }

  // Send email notification (placeholder - would need backend implementation)
  sendEmailNotification(data) {
    // In a real application, this would send data to your backend
    console.log("Email notification would be sent with data:", data);

    // For demonstration, we'll just log the email content
    const emailContent = {
      to: "contact@finixdigital.com",
      subject: `New Website Inquiry from ${data.centerName}`,
      body: `
        New website inquiry received:
        
        Coaching Center: ${data.centerName}
        Mobile: ${data.mobile}
        Plan: ${data.plan || "Not specified"}
        Budget: ${data.budget || "Not specified"}
        Requirements: ${data.requirements || "None specified"}
        
        Submitted at: ${new Date().toLocaleString()}
      `,
    };

    console.log("Email content:", emailContent);
  }

  // Additional animations
  setupAnimations() {
    // Card hover animations
    const cards = document.querySelectorAll(
      ".service-card, .pricing-card, .portfolio-card, .problem-card"
    );

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px) scale(1.02)";
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
      });
    });
  }

  // Utility method for tracking interactions
  trackInteraction(action, element) {
    console.log(`User interaction: ${action} on ${element}`);
    // Add analytics tracking here
  }
}

// Initialize the landing page
document.addEventListener("DOMContentLoaded", () => {
  new FiNixLanding();

  // Add loading states
  const loadingElements = document.querySelectorAll(
    ".hero-illustration, .service-card, .pricing-card"
  );
  loadingElements.forEach((element) => {
    element.classList.add("loading");
    setTimeout(() => {
      element.classList.remove("loading");
    }, 1500);
  });
});

// Performance optimization
window.addEventListener("load", () => {
  // Optimize images and animations after page load
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.loading = "lazy";
  });
});

// Error handling
window.addEventListener("error", (e) => {
  console.error("FiNix Landing Page Error:", e.error);
});

// Export for potential external use
window.FiNixLanding = FiNixLanding;
