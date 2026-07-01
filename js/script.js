function initScrollReveal() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const profileItems = [
    document.querySelector(".profile__photo-wrap"),
    document.querySelector(".profile__name"),
    document.querySelector(".profile__handle"),
    document.querySelector(".profile__tagline"),
    document.querySelector(".profile__bio"),
  ];

  profileItems.forEach((el, index) => {
    if (!el) return;
    el.classList.add("reveal");
    el.style.setProperty("--reveal-delay", `${index * 0.1}s`);
  });

  document.querySelectorAll(".section__title").forEach((el) => {
    el.classList.add("reveal");
  });

  document.querySelectorAll(".link-btn").forEach((el, index) => {
    el.classList.add("reveal");
    el.style.setProperty("--reveal-delay", `${index * 0.08}s`);
  });

  document.querySelectorAll(".history, .video-wrap, .video-caption, .footer").forEach((el) => {
    el.classList.add("reveal");
  });

  document.querySelectorAll(".course-card").forEach((el, index) => {
    el.classList.add("reveal");
    el.style.setProperty("--reveal-delay", `${index * 0.1}s`);
  });

  const fab = document.querySelector(".whatsapp-fab");
  if (fab) {
    fab.classList.add("reveal");
    fab.style.setProperty("--reveal-delay", "0.55s");
  }

  const revealElements = document.querySelectorAll(".reveal");

  if (reducedMotion) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -5% 0px",
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

initScrollReveal();
