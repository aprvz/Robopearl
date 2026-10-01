document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", links.classList.contains("open"));
    });
  }

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("visible"));
  }

  const mainShot = document.querySelector(".main-shot img");
  const thumbs = document.querySelectorAll(".detail-thumbs button");
  thumbs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const src = btn.dataset.src;
      if (mainShot && src) {
        mainShot.src = src;
        thumbs.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
      }
    });
  });

  const form = document.querySelector("#enquiry-form");
  if (form) {
    const params = new URLSearchParams(window.location.search);
    const robot = params.get("robot");
    const interest = form.querySelector("#interest");
    if (robot && interest) {
      const match = Array.from(interest.options).find((o) =>
        o.value.toLowerCase().includes(robot.toLowerCase())
      );
      if (match) interest.value = match.value;
    }
    form.addEventListener("submit", () => {
      const success = document.querySelector(".form-success");
      if (success) success.classList.add("show");
    });
  }
});
