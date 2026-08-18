const revealElements = document.querySelectorAll("[data-reveal]");
const header = document.querySelector(".site-header");
const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
const sections = document.querySelectorAll("main section[id]");
const progressBar = document.querySelector(".scroll-progress span");
const systemConsole = document.querySelector(".system-console");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -48px 0px",
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

const setActiveNav = (id) => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("is-active", isActive);
  });
};

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveNav(entry.target.id);
      }
    });
  },
  {
    threshold: 0.35,
    rootMargin: "-20% 0px -55% 0px",
  }
);

sections.forEach((section) => sectionObserver.observe(section));

const syncHeaderState = () => {
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 24);

  if (progressBar) {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }
};

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });

const footerYear = document.querySelector("#footer-year");

if (footerYear) {
  footerYear.textContent = `© ${new Date().getFullYear()}`;
}

if (systemConsole) {
  systemConsole.addEventListener("pointermove", (event) => {
    const bounds = systemConsole.getBoundingClientRect();
    systemConsole.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
    systemConsole.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
  });
}
