/* Gisby Harrison Solicitors — shared chrome + interactions */
(function () {
  "use strict";

  // Relative-path prefix so the site works served from root, from a sub-path, or opened directly via file://
  var P = /\/services\//.test(window.location.pathname) ? "../" : "";

  var NAV = [
    { href: "about.html", label: "About", key: "about" },
    { href: "services/index.html", label: "Services", key: "services", children: [
      { href: "services/corporate.html", label: "Corporate" },
      { href: "services/commercial-property.html", label: "Commercial Property" },
      { href: "services/employment-law.html", label: "Employment Law" },
      { href: "services/litigation-and-dispute-resolution.html", label: "Litigation &amp; Dispute Resolution" },
      { href: "services/family-and-matrimonial.html", label: "Family &amp; Matrimonial" },
      { href: "services/residential-property.html", label: "Residential Property" },
      { href: "services/trusts-and-estates.html", label: "Trusts &amp; Estates" }
    ]},
    { href: "team.html", label: "Our Team", key: "team" },
    { href: "contact.html", label: "Contact", key: "contact" }
  ];

  function logo(id) {
    return '<a href="' + P + 'index.html" class="logo" aria-label="Gisby Harrison Solicitors home">' +
      '<svg class="mark" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<defs><linearGradient id="' + id + '" x1="12" y1="10" x2="108" y2="112" gradientUnits="userSpaceOnUse">' +
      '<stop offset="0" stop-color="#FF7D3B"/><stop offset="0.52" stop-color="#A74B39"/><stop offset="1" stop-color="#6B3A31"/>' +
      '</linearGradient></defs>' +
      '<rect width="120" height="120" rx="30" fill="url(#' + id + ')"/>' +
      '<text x="60" y="79" text-anchor="middle" font-family="Fraunces, Georgia, serif" font-size="60" font-weight="600" fill="#F8EFE6" letter-spacing="-4">GH</text>' +
      '</svg>' +
      '<span class="word"><span class="name">Gisby Harrison</span><span class="sub">Solicitors</span></span></a>';
  }

  function headerHTML(active) {
    var links = NAV.map(function (item) {
      var isActive = item.key === active ? " active" : "";
      if (item.children) {
        var sub = item.children.map(function (c) {
          return '<a href="' + P + c.href + '"><span class="dot"></span>' + c.label + "</a>";
        }).join("");
        return '<div class="nav-drop">' +
          '<a href="' + P + item.href + '" class="nav-drop-trigger' + isActive + '">' + item.label +
          ' <svg class="caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg></a>' +
          '<div class="nav-drop-menu">' + sub + "</div></div>";
      }
      return '<a href="' + P + item.href + '" class="' + (isActive ? "active" : "") + '">' + item.label + "</a>";
    }).join("");

    return '<div class="wrap nav">' +
      logo("lgH") +
      '<nav class="nav-links" id="navLinks">' + links + "</nav>" +
      '<div class="nav-cta">' +
      '<a href="tel:01707878300" class="nav-phone"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>01707 878 300</a>' +
      '<a href="' + P + 'contact.html" class="btn btn-primary">Get in touch</a>' +
      '<button class="menu-btn" id="menuBtn" aria-label="Toggle menu"><span></span><span></span><span></span></button>' +
      "</div></div>";
  }

  function footerHTML() {
    return '<div class="wrap"><div class="footer-grid">' +
      '<div class="footer-brand">' + logo("lgF") +
      '<p>Results-orientated legal advice for businesses and individuals across Hertfordshire, London and beyond.</p></div>' +
      '<div class="footer-col"><h5>Services</h5><ul>' +
      '<li><a href="' + P + 'services/corporate.html">Corporate</a></li>' +
      '<li><a href="' + P + 'services/commercial-property.html">Commercial Property</a></li>' +
      '<li><a href="' + P + 'services/employment-law.html">Employment Law</a></li>' +
      '<li><a href="' + P + 'services/litigation-and-dispute-resolution.html">Litigation</a></li>' +
      '<li><a href="' + P + 'services/family-and-matrimonial.html">Family &amp; Matrimonial</a></li>' +
      '<li><a href="' + P + 'services/residential-property.html">Residential Property</a></li>' +
      '<li><a href="' + P + 'services/trusts-and-estates.html">Trusts &amp; Estates</a></li></ul></div>' +
      '<div class="footer-col"><h5>Firm</h5><ul>' +
      '<li><a href="' + P + 'about.html">About &amp; approach</a></li>' +
      '<li><a href="' + P + 'team.html">Our team</a></li>' +
      '<li><a href="' + P + 'services/index.html">Services</a></li>' +
      '<li><a href="' + P + 'contact.html">Contact &amp; location</a></li></ul></div>' +
      '<div class="footer-col"><h5>Contact</h5><ul>' +
      '<li><a href="tel:01707878300">01707 878 300</a></li>' +
      '<li>Fax: 01707 876 185</li>' +
      '<li>Goffs Oak House, Goffs Lane,<br>Goffs Oak, Cheshunt,<br>Hertfordshire EN7 5HG</li></ul></div>' +
      "</div>" +
      '<div class="footer-bottom"><p>&copy; <span id="year"></span> Gisby Harrison Solicitors. A trading name of Myers Solicitors Ltd. Authorised &amp; regulated by the SRA, No. 482567.</p>' +
      '<div class="legal"><a href="' + P + 'about.html">Complaints</a><a href="' + P + 'contact.html">Privacy</a><a href="' + P + 'contact.html">Terms</a></div></div></div>';
  }

  // ---- Inject chrome ----
  var headerEl = document.getElementById("site-header");
  if (headerEl) {
    headerEl.className = "site-header";
    headerEl.innerHTML = headerHTML(document.body.getAttribute("data-page") || "");
  }
  var footerEl = document.getElementById("site-footer");
  if (footerEl) {
    footerEl.className = "site-footer";
    footerEl.innerHTML = footerHTML();
  }

  // ---- Sticky header ----
  var header = document.getElementById("site-header") || document.getElementById("header");
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 20) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- Mobile menu ----
  var menuBtn = document.getElementById("menuBtn");
  var navLinks = document.getElementById("navLinks");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      menuBtn.classList.toggle("open");
      navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menuBtn.classList.remove("open");
        navLinks.classList.remove("open");
      });
    });
  }

  // ---- Scroll reveal ----
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // ---- Contact form ----
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var success = document.getElementById("formSuccess");
      if (success) success.classList.add("show");
      form.reset();
      setTimeout(function () { if (success) success.classList.remove("show"); }, 6000);
    });
  }

  // ---- Footer year ----
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
