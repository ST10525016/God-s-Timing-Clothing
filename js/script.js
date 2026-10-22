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
const gtProducts = [
  { name: "Hoodies", price: 350, img: "images/hoodies.png", desc: "Warm faith-based hoodies - R350" },
  { name: "T-Shirts", price: 200, img: "images/T-shirt.png", desc: "Soft cotton T-shirts - R200" },
  { name: "Faith Caps", price: 150, img: "images/cap.png", desc: "Stylish caps - R150" }
];

function loadProducts(list = gtProducts) {
  const container = document.getElementById("product-container");
  if (!container) return;
  container.innerHTML = "";
  list.forEach(p => {
    container.innerHTML += `<div class="card"><img src="${p.img}" alt="${p.name}"><h3>${p.name}</h3><p>${p.desc}</p><button>Buy Now</button></div>`;
  });
}

document.getElementById("searchInput")?.addEventListener("keyup", function() {
  const q = this.value.toLowerCase();
  const filtered = gtProducts.filter(p => p.name.toLowerCase().includes(q));
  loadProducts(filtered);
});

loadProducts();