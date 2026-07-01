const storyCards = document.querySelectorAll(".story-card");
const modal = document.getElementById("story-modal");
const modalImg = document.getElementById("story-modal-img");
const modalLabel = document.getElementById("story-modal-label");
const modalCaption = document.getElementById("story-modal-caption");
const closeBtn = document.getElementById("story-modal-close");

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

  document.querySelectorAll(".story-card").forEach((el, index) => {
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

function openStory(card) {
  modalImg.src = card.dataset.img;
  modalImg.alt = card.dataset.label;
  modalLabel.textContent = card.dataset.label;
  modalCaption.textContent = card.dataset.caption;
  modal.classList.add("is-open");
  document.body.classList.add("modal-open");
  document.body.style.overflow = "hidden";
  closeBtn.focus();
}

function closeStory() {
  modal.classList.remove("is-open");
  document.body.classList.remove("modal-open");
  document.body.style.overflow = "";
}

storyCards.forEach((card) => {
  card.addEventListener("click", () => openStory(card));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openStory(card);
    }
  });
});

closeBtn.addEventListener("click", closeStory);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeStory();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) {
    closeStory();
  }
});

let touchStartY = 0;

modal.addEventListener(
  "touchstart",
  (e) => {
    if (e.touches.length === 1) {
      touchStartY = e.touches[0].clientY;
    }
  },
  { passive: true }
);

modal.addEventListener(
  "touchend",
  (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    if (touchEndY - touchStartY > 80) {
      closeStory();
    }
  },
  { passive: true }
);

initScrollReveal();
