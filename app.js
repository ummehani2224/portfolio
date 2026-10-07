/**
 * ==========================================================================
 * UMMEHANI BURHANUDDIN — PORTFOLIO CONTROLLER
 * Architecture: Modular, performant, zero-dependency, highly accessible.
 * ==========================================================================
 */

(function () {
  'use strict';

  // 1. CENTRALIZED CONFIGURATION (Single Source of Truth)
  const PORTFOLIO_CONFIG = {
    personal: {
      name: 'Ummehani Burhanuddin',
      titles: ['Software Engineer', 'AI/ML Engineer'],
      email: 'ummehanib22@gmail.com',
      phone: '+91-8462914843',
      location: 'Bhopal, Madhya Pradesh, India',
      education: 'B.Tech — Computer Science Engineering (AI & ML), LNCT Bhopal (2027)'
    },
    socials: {
      linkedinUrl: 'https://linkedin.com/in/ummehani-burhanuddin-954975253',
      githubUrl: 'https://github.com/ummehani2224',
      leetcodeUrl: 'https://leetcode.com/u/ummehani0202/',
      email: 'mailto:ummehanib22@gmail.com'
    },
    assets: {
      resumePdf: 'assets/Ummehani_Burhanuddin_Resume.pdf',
      portrait: 'assets/portrait.jpg'
    },
    projects: {
      project1Github: 'https://github.com/ummehani2224/Quantum-AI-stock-research',
      project2Github: 'https://github.com/ummehani2224/Real-time-AI-meeting-asistant',
      project3Github: 'https://github.com/ummehani2224/AI-course-recommendation-system'
    }
  };

  // 2. BIND CONFIGURATION TO DOM
  function applyConfiguration() {
    // LinkedIn links
    document.querySelectorAll('.config-linkedin').forEach(el => {
      el.href = PORTFOLIO_CONFIG.socials.linkedinUrl;
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    });

    // GitHub links
    document.querySelectorAll('.config-github').forEach(el => {
      el.href = PORTFOLIO_CONFIG.socials.githubUrl;
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    });

    // LeetCode links
    document.querySelectorAll('.config-leetcode').forEach(el => {
      el.href = PORTFOLIO_CONFIG.socials.leetcodeUrl;
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    });

    // Email links
    document.querySelectorAll('.config-email').forEach(el => {
      el.href = PORTFOLIO_CONFIG.socials.email;
    });

    // Specific Project Code buttons
    const projectBindings = [
      { sel: '.config-project1-github', url: PORTFOLIO_CONFIG.projects.project1Github },
      { sel: '.config-project2-github', url: PORTFOLIO_CONFIG.projects.project2Github },
      { sel: '.config-project3-github', url: PORTFOLIO_CONFIG.projects.project3Github }
    ];

    projectBindings.forEach(({ sel, url }) => {
      const btn = document.querySelector(sel);
      if (btn) {
        btn.href = url;
        btn.target = '_blank';
        btn.rel = 'noopener noreferrer';
        btn.classList.remove('disabled-link');
        btn.removeAttribute('title');
      }
    });
  }

  // 3. READING PROGRESS INDICATOR & ACTIVE NAVBAR SCROLL SPY
  const progressBar = document.getElementById('scroll-progress');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function handleScroll() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    // Scroll spy for active navbar state
    let currentSection = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSection = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // 4. MOBILE HAMBURGER MENU
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close on navigation link click
    navMenu.querySelectorAll('.nav-link, .social-icon-btn').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 5. PROJECT TECHNICAL DECISIONS EXPANSION TOGGLE
  document.querySelectorAll('.btn-expand-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      const textSpan = btn.querySelector('.toggle-text');

      if (!targetEl) return;

      const isExpanded = targetEl.classList.toggle('expanded');
      btn.setAttribute('aria-expanded', isExpanded);

      if (textSpan) {
        textSpan.textContent = isExpanded ? 'Hide Technical Decisions' : 'View Technical Decisions';
      }
    });
  });

  // 6. CUSTOM DESKTOP CURSOR ACCENT GLOW
  const cursorGlow = document.getElementById('cursor-glow');
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (cursorGlow && !isTouchDevice && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorGlow.style.opacity = '1';
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      cursorGlow.style.opacity = '0';
    });

    // Smooth lerp follower for cursor glow
    function animateCursor() {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      cursorGlow.style.transform = `translate(${currentX - 200}px, ${currentY - 200}px)`;
      requestAnimationFrame(animateCursor);
    }
    animateCursor();
  }

  // 7. ACCESSIBLE CONTACT FORM WITH VALIDATION & MAILTO FALLBACK
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const msgInput = document.getElementById('contact-message');
      const feedback = document.getElementById('form-feedback');

      let isValid = true;

      // Validate name
      if (!nameInput.value.trim()) {
        nameInput.parentElement.classList.add('has-error');
        isValid = false;
      } else {
        nameInput.parentElement.classList.remove('has-error');
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.parentElement.classList.add('has-error');
        isValid = false;
      } else {
        emailInput.parentElement.classList.remove('has-error');
      }

      // Validate message
      if (!msgInput.value.trim()) {
        msgInput.parentElement.classList.add('has-error');
        isValid = false;
      } else {
        msgInput.parentElement.classList.remove('has-error');
      }

      if (!isValid) return;

      // Compose mailto fallback
      const subject = encodeURIComponent(`Engineering Inquiry from ${nameInput.value.trim()}`);
      const body = encodeURIComponent(
        `Hi Ummehani,\n\n${msgInput.value.trim()}\n\nBest regards,\n${nameInput.value.trim()}\n${emailInput.value.trim()}`
      );

      const mailtoUrl = `mailto:${PORTFOLIO_CONFIG.personal.email}?subject=${subject}&body=${body}`;

      if (feedback) {
        feedback.innerHTML = `<span style="color: #10b981;">Opening your email client to send your message...</span>`;
      }

      // Trigger mail client
      window.location.href = mailtoUrl;

      // Clear form after brief delay
      setTimeout(() => {
        contactForm.reset();
      }, 1000);
    });

    // Clear validation error on input
    ['contact-name', 'contact-email', 'contact-message'].forEach(id => {
      const input = document.getElementById(id);
      if (input) {
        input.addEventListener('input', () => {
          input.parentElement.classList.remove('has-error');
        });
      }
    });
  }

  // 8. HORIZONTAL ANIMATED CERTIFICATE SHOWCASE & LIGHTBOX
  function initCertificateShowcase() {
    const track = document.getElementById('cert-marquee-track');
    const container = document.getElementById('cert-marquee-container');
    const prevBtn = document.getElementById('cert-prev-btn');
    const nextBtn = document.getElementById('cert-next-btn');

    const lightbox = document.getElementById('cert-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxIssuer = document.getElementById('lightbox-issuer');
    const lightboxDate = document.getElementById('lightbox-date');
    const lightboxId = document.getElementById('lightbox-id');
    const lightboxPdfLink = document.getElementById('lightbox-pdf-link');
    const lightboxDownloadLink = document.getElementById('lightbox-download-link');
    const closeBtn = document.getElementById('lightbox-close-btn');
    const overlay = document.getElementById('lightbox-overlay');

    if (!track || !container) return;

    // Clone cards for seamless infinite horizontal loop
    const originalCards = Array.from(track.children);
    originalCards.forEach(card => {
      const clone = card.cloneNode(true);
      track.appendChild(clone);
    });

    // Prev / Next button navigation
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        container.classList.add('is-paused');
        container.scrollBy({ left: -420, behavior: 'smooth' });
        setTimeout(() => container.classList.remove('is-paused'), 4000);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        container.classList.add('is-paused');
        container.scrollBy({ left: 420, behavior: 'smooth' });
        setTimeout(() => container.classList.remove('is-paused'), 4000);
      });
    }

    // Interactive Drag to Scroll on desktop
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    container.addEventListener('mousedown', (e) => {
      isDown = true;
      container.classList.add('is-paused');
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
      isDown = false;
      container.classList.remove('is-paused');
    });

    container.addEventListener('mouseup', () => {
      isDown = false;
      setTimeout(() => container.classList.remove('is-paused'), 2500);
    });

    container.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeft - walk;
    });

    // Lightbox modal handling
    function openLightbox(card) {
      const img = card.getAttribute('data-img');
      if (!img || !lightbox) return;

      const title = card.getAttribute('data-title') || 'Certificate of Recognition';
      const issuer = card.getAttribute('data-issuer') || 'Issuer';
      const date = card.getAttribute('data-date') || '';
      const certId = card.getAttribute('data-certid') || '';
      const pdf = card.getAttribute('data-pdf') || '';

      if (lightboxImg) {
        lightboxImg.src = img;
        lightboxImg.alt = title;
      }
      if (lightboxTitle) lightboxTitle.textContent = title;
      if (lightboxIssuer) lightboxIssuer.textContent = issuer;
      if (lightboxDate) lightboxDate.textContent = date ? `Date: ${date}` : '';
      if (lightboxId) lightboxId.textContent = certId ? `Verification: ${certId}` : '';
      
      if (lightboxPdfLink) {
        lightboxPdfLink.href = pdf;
        lightboxPdfLink.style.display = pdf ? 'inline-flex' : 'none';
      }
      if (lightboxDownloadLink) {
        lightboxDownloadLink.href = pdf;
        lightboxDownloadLink.style.display = pdf ? 'inline-flex' : 'none';
      }

      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      if (!lightbox) return;
      lightbox.classList.remove('active');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    // Global delegation for opening lightbox on any interactive certificate or spotlight trigger
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('.cert-card-interactive, [data-open-lightbox]');
      if (trigger && trigger.hasAttribute('data-img')) {
        openLightbox(trigger);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const trigger = e.target.closest('.cert-card-interactive, [data-open-lightbox]');
        if (trigger && trigger.hasAttribute('data-img')) {
          openLightbox(trigger);
        }
      }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (overlay) overlay.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // 9. TECHNICAL STACK ARCHITECTURAL MATRIX & TERMINAL INSPECTOR
  function initTechStackMatrix() {
    const filterPills = document.querySelectorAll('.tech-filter-pill');
    const cards = document.querySelectorAll('.tech-matrix-card');
    const terminalCmd = document.getElementById('terminal-cmd');
    const terminalTarget = document.getElementById('terminal-target');
    const terminalStatusTag = document.getElementById('terminal-status-tag');
    const terminalRole = document.getElementById('terminal-role');
    const terminalLibs = document.getElementById('terminal-libs');
    const terminalProjects = document.getElementById('terminal-projects');
    const terminalRationale = document.getElementById('terminal-rationale');
    const terminalCode = document.getElementById('terminal-code');
    const terminalOutput = document.querySelector('.terminal-output-container');

    if (!filterPills.length || !cards.length) return;

    // Filter pill tabs click handling
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const filter = pill.getAttribute('data-filter');
        filterPills.forEach(p => {
          p.classList.remove('active');
          p.setAttribute('aria-selected', 'false');
        });
        pill.classList.add('active');
        pill.setAttribute('aria-selected', 'true');

        cards.forEach(card => {
          const domains = (card.getAttribute('data-domain') || '').split(' ');
          if (filter === 'all' || domains.includes(filter)) {
            card.classList.remove('is-hidden');
          } else {
            card.classList.add('is-hidden');
          }
        });
      });
    });

    // Update terminal HUD when inspecting a card
    function inspectCard(card) {
      if (!card) return;
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const tech = card.getAttribute('data-tech') || '';
      const role = card.getAttribute('data-role') || '';
      const libs = card.getAttribute('data-libs') || '';
      const projects = card.getAttribute('data-projects') || '';
      const rationale = card.getAttribute('data-rationale') || '';
      const code = card.getAttribute('data-code') || '';
      const status = card.querySelector('.tech-status-label')?.textContent || 'PRODUCTION READY';

      if (terminalOutput) terminalOutput.classList.add('updating');

      setTimeout(() => {
        if (terminalCmd) terminalCmd.textContent = `inspect-tech --target "${tech}"`;
        if (terminalTarget) terminalTarget.textContent = tech;
        if (terminalStatusTag) terminalStatusTag.textContent = status;
        if (terminalRole) terminalRole.textContent = role;
        if (terminalLibs) terminalLibs.textContent = libs;
        if (terminalProjects) terminalProjects.textContent = projects;
        if (terminalRationale) terminalRationale.textContent = rationale;
        if (terminalCode) terminalCode.textContent = code;
        if (terminalOutput) terminalOutput.classList.remove('updating');
      }, 90);
    }

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => inspectCard(card));
      card.addEventListener('click', () => inspectCard(card));
      card.addEventListener('focus', () => inspectCard(card));
    });
  }

  // 10. SCROLL-REVEAL SYSTEM
  function initScrollReveal() {
    const revealTargets = document.querySelectorAll('.reveal, .reveal-up');
    if (!revealTargets.length) return;

    if (!('IntersectionObserver' in window)) {
      revealTargets.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    revealTargets.forEach(el => observer.observe(el));
  }

  // 11. HERO NETWORK PARTICLE CANVAS
  function initHeroNetworkCanvas() {
    const canvas = document.getElementById('hero-network-canvas');
    if (!canvas) return;

    // Respect reduced motion and skip on mobile screens under 720px
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || window.innerWidth < 720) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId = null;
    let isHeroVisible = true;

    const heroSection = document.getElementById('hero');

    // Pause animation when hero is offscreen for optimal performance
    if ('IntersectionObserver' in window && heroSection) {
      const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isHeroVisible = entry.isIntersecting;
          if (isHeroVisible && !animationFrameId && window.innerWidth >= 720) {
            loop();
          }
        });
      }, { threshold: 0.05 });
      heroObserver.observe(heroSection);
    }

    function resize() {
      if (window.innerWidth < 720) {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
        return;
      }
      const rect = heroSection ? heroSection.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight };
      width = canvas.width = rect.width || window.innerWidth;
      height = canvas.height = rect.height || window.innerHeight;
    }

    resize();
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    });

    // Particle nodes configuration
    const count = 38;
    const particles = [];
    const maxDistance = 115;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * (width || window.innerWidth),
        y: Math.random() * (height || window.innerHeight),
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.2 + 0.9,
        color: i % 2 === 0 ? 'rgba(139, 92, 246, 0.45)' : 'rgba(56, 189, 248, 0.35)'
      });
    }

    function loop() {
      if (!isHeroVisible || window.innerWidth < 720) {
        animationFrameId = null;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges seamlessly
        if (p.x < -10) p.x = width + 10;
        else if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        else if (p.y > height + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    }

    loop();
  }

  // 12. HERO LIVE METRICS COUNT-UP
  function initHeroMetricsCountUp() {
    const strip = document.getElementById('hero-metrics-strip');
    if (!strip) return;

    const countEls = strip.querySelectorAll('.metric-count');
    if (!countEls.length) return;

    let hasAnimated = false;

    function animateMetrics() {
      if (hasAnimated) return;
      hasAnimated = true;

      const duration = 1600;
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth easeOutExpo curve
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

        countEls.forEach(el => {
          const target = parseInt(el.getAttribute('data-target'), 10) || 0;
          const suffix = el.getAttribute('data-suffix') || '';
          const current = Math.round(target * ease);
          el.textContent = current + suffix;
        });

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          // Ensure exact target numbers with suffixes at completion
          countEls.forEach(el => {
            const target = el.getAttribute('data-target') || '0';
            const suffix = el.getAttribute('data-suffix') || '';
            el.textContent = target + suffix;
          });
        }
      }

      requestAnimationFrame(update);
    }

    if (!('IntersectionObserver' in window)) {
      animateMetrics();
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateMetrics();
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    observer.observe(strip);
  }

  // 13. INITIALIZE
  applyConfiguration();
  handleScroll();
  initCertificateShowcase();
  initTechStackMatrix();
  initScrollReveal();
  initHeroNetworkCanvas();
  initHeroMetricsCountUp();
})();

