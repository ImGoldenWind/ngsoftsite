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
  var projectsButton = document.getElementById("our-projects-button");
  var targetProjectslement = document.getElementById("our-project-info-id");

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
