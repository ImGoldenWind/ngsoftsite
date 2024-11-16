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
    tgX = event.pageX;
    tgY = event.pageY;
  });

  move();
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

window.addEventListener("scroll", function () {
  const arrow = document.querySelector(".arrow");
  if (window.scrollY > 300) {
    arrow.classList.add("visible");
  } else {
    arrow.classList.remove("visible");
  }
});



const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


document.addEventListener("DOMContentLoaded", function () {
  const scrollElements = document.querySelectorAll(".menu, .arrow");

  scrollElements.forEach(item => {
    item.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
