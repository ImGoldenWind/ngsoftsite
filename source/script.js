document.addEventListener("DOMContentLoaded", () => {
  const interBubble = document.querySelector(".interactive");
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  const move = () => {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(
      curX
    )}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(move);
  };

  window.addEventListener("mousemove", (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();
});

document.addEventListener("DOMContentLoaded", function () {
  var contactButton = document.getElementById("contact-us-button");
  var contactMenuItem = document.getElementById("contact-us-link");
  var servicesButton = document.getElementById("services-button");
  var targetContactElement = document.getElementById("contact-us");
  var targetServicesElement = document.getElementById("services-info-id");
  var aboutusButton = document.getElementById("about-us-button");
  var aboutusectslement = document.getElementById("about-us-link");
  var projectsButton = document.getElementById("our-projects-button");
  var targetProjectslement = document.getElementById("our-project-info-id");

  aboutusButton.addEventListener("click", function () {
    aboutusectslement.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  servicesButton.addEventListener("click", function () {
    targetServicesElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });

  contactButton.addEventListener("click", function () {
    targetContactElement.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  contactMenuItem.addEventListener("click", function () {
    targetContactElement.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  projectsButton.addEventListener("click", function () {
    targetProjectslement.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });

  console.log("Swiper initialized:", swiper);
});

document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".editor-line");
  let typingStarted = false;

  function typeWriter(element, charIndex, callback) {
    const text = element.getAttribute("data-text");
    if (charIndex < text.length) {
      element.textContent = text.substring(0, charIndex + 1);
      setTimeout(() => typeWriter(element, charIndex + 1, callback), 50);
    } else if (callback) {
      callback();
    }
  }

  function startTypingEffect(index) {
    if (index >= lines.length) return;

    const element = lines[index];
    element.style.opacity = 1;

    typeWriter(element, 0, () => {
      startTypingEffect(index + 1);
    });
  }

  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !typingStarted) {
        typingStarted = true;
        startTypingEffect(0);
        observer.disconnect();
      }
    });
  }

  // Создаем объект Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: "0px",
    threshold: 1.0, 
  });

  observer.observe(lines[0]);

  lines.forEach((line) => {
    line.setAttribute("data-text", line.textContent);
    line.textContent = ""; 
  });
});
