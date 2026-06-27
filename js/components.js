// FaidaHQ Web Components — shared UI blocks across all pages.
// No Shadow DOM so Bootstrap classes work natively.
// Load this before main.js so WOW.js scans injected HTML on init.

class FaidahNavbar extends HTMLElement {
  connectedCallback() {
    const active = this.getAttribute('active') || 'home';
    const pages = [
      { key: 'home',     href: '/',             label: 'Home' },
      { key: 'about',    href: '/about/',       label: 'About' },
      { key: 'services', href: '/service/',     label: 'Services' },
      { key: 'projects', href: '/projects/',    label: 'Projects' },
      { key: 'contact',  href: '/contact/',     label: 'Contact' },
    ];

    const navLinks = pages.map(p => {
      const cls = p.key === active
        ? 'nav-item nav-link active text-secondary'
        : 'nav-item nav-link';
      return `<a href="${p.href}" class="${cls}">${p.label}</a>`;
    }).join('\n                     ');

    this.innerHTML = `
      <div class="container-fluid bg-dark py-2 d-none d-md-flex">
        <div class="container">
          <div class="d-flex justify-content-between topbar">
            <div class="top-info">
              <small class="me-3 text-white-50"><a href="#"><i class="fas fa-map-marker-alt me-2 text-secondary"></i></a>Nairobi, Kenya</small>
              <small class="me-3 text-white-50"><a href="#"><i class="fas fa-envelope me-2 text-secondary"></i></a>info@faidahq.com</small>
            </div>
            <div id="note" class="text-secondary d-none d-xl-flex"><small>Your business HQ. Every profit, every day.</small></div>
            <div class="top-link">
              <a href="" class="bg-light nav-fill btn btn-sm-square rounded-circle"><i class="fab fa-facebook-f text-primary"></i></a>
              <a href="" class="bg-light nav-fill btn btn-sm-square rounded-circle"><i class="fab fa-twitter text-primary"></i></a>
              <a href="" class="bg-light nav-fill btn btn-sm-square rounded-circle"><i class="fab fa-instagram text-primary"></i></a>
              <a href="" class="bg-light nav-fill btn btn-sm-square rounded-circle me-0"><i class="fab fa-linkedin-in text-primary"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid bg-primary">
        <div class="container">
          <nav class="navbar navbar-dark navbar-expand-lg py-0">
            <a href="/" class="navbar-brand">
              <img src="/img/logo-white.png" alt="FaidaHQ" style="height: 100px" />
            </a>
            <button type="button" class="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse bg-transparent" id="navbarCollapse">
              <div class="navbar-nav ms-auto mx-xl-auto p-0">
                ${navLinks}
              </div>
            </div>
            <div class="d-none d-xl-flex flex-shirink-0">
              <div id="phone-tada" class="d-flex align-items-center justify-content-center me-4">
                <a href="" class="position-relative animated tada infinite">
                  <i class="fa fa-phone-alt text-white fa-2x"></i>
                  <div class="position-absolute" style="top: -7px; left: 20px">
                    <span><i class="fa fa-comment-dots text-secondary"></i></span>
                  </div>
                </a>
              </div>
              <div class="d-flex flex-column pe-4 border-end">
                <span class="text-white-50">Got questions?</span>
                <span class="text-secondary">info@faidahq.com</span>
              </div>
              <div class="d-flex align-items-center justify-content-center ms-4">
                <a href="#"><i class="bi bi-search text-white fa-2x"></i></a>
              </div>
            </div>
          </nav>
        </div>
      </div>`;
  }
}

class FaidahFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="container-fluid footer bg-dark wow fadeIn" data-wow-delay=".3s">
        <div class="container pt-5 pb-4">
          <div class="row g-5">
            <div class="col-12 col-md-6 col-lg-3">
              <a href="/">
                <img src="/img/logo-white.png" alt="FaidaHQ" style="height: 100px" />
              </a>
              <p class="mt-4 text-light">Your business HQ. Every profit, every day. The all-in-one platform built for businesses that want to run smarter and grow faster.</p>
              <div class="d-flex hightech-link">
                <a href="" class="btn-light nav-fill btn btn-square rounded-circle me-2"><i class="fab fa-facebook-f text-primary"></i></a>
                <a href="" class="btn-light nav-fill btn btn-square rounded-circle me-2"><i class="fab fa-twitter text-primary"></i></a>
                <a href="" class="btn-light nav-fill btn btn-square rounded-circle me-2"><i class="fab fa-instagram text-primary"></i></a>
                <a href="" class="btn-light nav-fill btn btn-square rounded-circle me-0"><i class="fab fa-linkedin-in text-primary"></i></a>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <a href="#" class="h3 text-secondary">Quick Links</a>
              <div class="mt-4 d-flex flex-column short-link">
                <a href="/service/" class="mb-2 text-white"><i class="fas fa-angle-right text-secondary me-2"></i>Features</a>
                <a href="/contact/" class="mb-2 text-white"><i class="fas fa-angle-right text-secondary me-2"></i>Pricing</a>
                <a href="/about/" class="mb-2 text-white"><i class="fas fa-angle-right text-secondary me-2"></i>About Us</a>
                <a href="/blog/" class="mb-2 text-white"><i class="fas fa-angle-right text-secondary me-2"></i>Blog</a>
                <a href="/contact/" class="mb-2 text-white"><i class="fas fa-angle-right text-secondary me-2"></i>Contact</a>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <a href="#" class="h3 text-secondary">Support</a>
              <div class="mt-4 d-flex flex-column help-link">
                <a href="" class="mb-2 text-white"><i class="fas fa-angle-right text-secondary me-2"></i>Privacy Policy</a>
                <a href="" class="mb-2 text-white"><i class="fas fa-angle-right text-secondary me-2"></i>Terms of Use</a>
                <a href="" class="mb-2 text-white"><i class="fas fa-angle-right text-secondary me-2"></i>FAQs</a>
                <a href="/contact/" class="mb-2 text-white"><i class="fas fa-angle-right text-secondary me-2"></i>Contact Support</a>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <a href="#" class="h3 text-secondary">Contact Us</a>
              <div class="text-white mt-4 d-flex flex-column contact-link">
                <a href="#" class="pb-3 text-light border-bottom border-primary"><i class="fas fa-map-marker-alt text-secondary me-2"></i>Nairobi, Kenya</a>
                <a href="tel:+254741984517" class="py-3 text-light border-bottom border-primary"><i class="fas fa-phone-alt text-secondary me-2"></i>+254 741 984 517</a>
                <a href="mailto:info@faidahq.com" class="py-3 text-light border-bottom border-primary"><i class="fas fa-envelope text-secondary me-2"></i>info@faidahq.com</a>
              </div>
            </div>
          </div>
          <hr class="text-light mt-5 mb-4" />
          <div class="row">
            <div class="col-md-6 text-center text-md-start">
              <span class="text-light"><a href="/" class="text-secondary"><i class="fas fa-copyright text-secondary me-2"></i>FaidaHQ</a>, All rights reserved.</span>
            </div>
            <div class="col-md-6 text-center text-md-end">
              <span class="text-light">Designed By <a href="https://htmlcodex.com" class="text-secondary">HTML Codex</a></span>
            </div>
          </div>
        </div>
      </div>`;
  }
}

class FaidahFacts extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="container-fluid bg-secondary py-5">
        <div class="container">
          <div class="row">
            <div class="col-6 col-lg-3 wow fadeIn" data-wow-delay=".1s">
              <div class="d-flex counter">
                <h1 class="me-3 text-primary counter-value">99</h1>
                <h5 class="text-white mt-1">% of users report better business visibility</h5>
              </div>
            </div>
            <div class="col-6 col-lg-3 wow fadeIn" data-wow-delay=".3s">
              <div class="d-flex counter">
                <h1 class="me-3 text-primary counter-value">10</h1>
                <h5 class="text-white mt-1">Powerful tools in one platform</h5>
              </div>
            </div>
            <div class="col-6 col-lg-3 wow fadeIn" data-wow-delay=".5s">
              <div class="d-flex counter">
                <h1 class="me-3 text-primary counter-value">120</h1>
                <h5 class="text-white mt-1">Businesses already running on FaidaHQ</h5>
              </div>
            </div>
            <div class="col-6 col-lg-3 wow fadeIn" data-wow-delay=".7s">
              <div class="d-flex counter">
                <h1 class="me-3 text-primary counter-value">5</h1>
                <h5 class="text-white mt-1">Stars from founders who made the switch</h5>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }
}

class FaidahServiceCard extends HTMLElement {
  connectedCallback() {
    const icon  = this.getAttribute('icon')        || 'fas fa-star';
    const title = this.getAttribute('title')       || 'Service';
    const desc  = this.getAttribute('description') || '';
    const href  = this.getAttribute('href')        || '#';
    const delay = this.getAttribute('wow-delay')   || '.3s';

    this.className = 'col-12 col-md-6 col-lg-4 wow fadeIn';
    this.setAttribute('data-wow-delay', delay);
    this.style.display = 'block';
    this.innerHTML = `
      <div class="services-item bg-light">
        <div class="p-4 text-center services-content">
          <div class="services-content-icon">
            <i class="${icon} fa-7x mb-4 text-primary"></i>
            <h4 class="mb-3">${title}</h4>
            <p class="mb-4">${desc}</p>
            <a href="${href}" class="btn btn-secondary text-white px-5 py-3 rounded-pill">Learn More</a>
          </div>
        </div>
      </div>`;
  }
}

customElements.define('faidahq-navbar',       FaidahNavbar);
customElements.define('faidahq-footer',       FaidahFooter);
customElements.define('faidahq-facts',        FaidahFacts);
customElements.define('faidahq-service-card', FaidahServiceCard);
