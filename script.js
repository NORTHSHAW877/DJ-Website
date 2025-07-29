.// script.js
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const tabLinks = document.querySelector('.tab-links');

  if (hamburger && tabLinks) {
    hamburger.addEventListener('click', () => {
      tabLinks.classList.toggle('active');
    });
  }

  // OPTIONAL: if you're using Formspree, keep this part
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = form.getAttribute("action");

      const response = await fetch(action, {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        alert("🎉 Thank you! Your booking request was sent successfully.");
        form.reset();
      } else {
        alert("⚠️ Oops! Something went wrong. Please try again.");
      }
    });
  }
});

