document.addEventListener("DOMContentLoaded", function () {
  // Form handling - FIXED
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nameInput = document.querySelector("#name") || { value: "there" };
      const name = nameInput.value;
      alert("Thank you " + name + "! Enquiry received.");
      form.reset();
    });
  }

  // Accordion - jQuery
  $(".accordion-header").click(function () {
    $(this).next().slideToggle();
  });

  // Tabs
  $(".tab-link").on("click", function () {
    const tab = $(this).data("tab");
    $(".tab-content").hide();
    $("#" + tab).fadeIn();
    $(".tab-link").removeClass("active");
    $(this).addClass("active");
  });

  // Lightbox Gallery
  $(".gallery-img").on("click", function () {
    $("#lightbox").fadeIn().find("img").attr("src", $(this).attr("src"));
  });
  $("#close-lightbox").on("click", () => $("#lightbox").fadeOut());

  // Map - Leaflet
  if (document.getElementById("map")) {
    const map = L.map("map").setView([-26.2041, 28.0473], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap"
    }).addTo(map);
    L.marker([-26.2041, 28.0473]).addTo(map).bindPopup("We are here");
  }

  // Animations - advanced DOM
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  });
  document.querySelectorAll(".card, .gallery-img").forEach((el) => observer.observe(el));
});