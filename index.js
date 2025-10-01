const toggleMenuBtn = document.querySelector("#toggle-nav-menu-btn");
const responsiveMenu = document.querySelector("#responsive-nav-menu");
const contactHeaderBtn = document.querySelector("#contact-us-btn");

let menuTimeout = null; // Store timeout reference

toggleMenuBtn.onclick = () => {
  const hamburgerSpan = toggleMenuBtn.querySelector("span");
  const isMenuHidden = responsiveMenu.classList.contains("hidden");

  // Clear any pending timeout
  if (menuTimeout) {
    clearTimeout(menuTimeout);
  }

  // Toggle hamburger animation
  hamburgerSpan.classList.toggle("h-0");
  hamburgerSpan.classList.toggle("bg-white");
  hamburgerSpan.classList.toggle("before:-translate-y-1.5");
  hamburgerSpan.classList.toggle("before:translate-y-0");
  hamburgerSpan.classList.toggle("before:rotate-45");
  hamburgerSpan.classList.toggle("after:translate-y-1.5");
  hamburgerSpan.classList.toggle("after:translate-y-0");
  hamburgerSpan.classList.toggle("after:-rotate-45");

  // Toggle contact button visibility
  contactHeaderBtn.classList.toggle("sm:max-md:opacity-1");
  contactHeaderBtn.classList.toggle("sm:max-md:opacity-0");

  if (isMenuHidden) {
    // Opening menu
    responsiveMenu.classList.remove("hidden");
    responsiveMenu.classList.add("flex");

    // Trigger animation on next frame
    menuTimeout = setTimeout(() => {
      responsiveMenu.classList.remove("opacity-0");
      responsiveMenu.classList.add("opacity-1");
    }, 10);
  } else {
    // Closing menu
    responsiveMenu.classList.remove("opacity-1");
    responsiveMenu.classList.add("opacity-0");

    // Wait for animation to complete before hiding
    menuTimeout = setTimeout(() => {
      responsiveMenu.classList.remove("flex");
      responsiveMenu.classList.add("hidden");
    }, 200); // Match transition duration
  }
};
