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
// === ENQUIRY.HTML - Product Enquiry (POE Section 4) ===
function handleEnquiry(event){
  event.preventDefault();
  let name = document.getElementById("eName").value;
  let email = document.getElementById("eEmail").value;
  let product = document.getElementById("product").value;
  let size = document.getElementById("size").value;
  let enquiryType = document.getElementById("enquiryType").value;

  if(name === "" || email === "" || product === ""){
    alert("Please fill in all required fields");
    return;
  }

  let price = "";
  let stock = "In Stock - 10 available";
  if(product === "Cap") price = "R150";
  if(product === "Hoodie") price = "R350";
  if(product === "T-Shirt") price = "R250";
  if(product === "Custom Order") price = "From R400";
  if(product === "Sponsorship") price = "Partnership packages from R1000";

  alert(`Hi ${name}!\n\nProduct: ${product} (${size})\nEnquiry: ${enquiryType}\nPrice: ${price}\nStatus: ${stock}\n\nWe will email you at ${email} with more details!`);
  document.getElementById("enquiryForm").reset();
}

// === CONTACT.HTML - General Contact (POE Section 4) ===
function handleContact(event){
  event.preventDefault();
  let name = document.getElementById("cName").value;
  let email = document.getElementById("cEmail").value;
  let type = document.getElementById("cType").value;
  let message = document.getElementById("cMessage").value;

  if(name === "" || email === "" || message === ""){
    alert("Please fill in all fields");
    return;
  }

  let subject = `${type} - Message from ${name}`;
  let body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AType: ${type}%0D%0A%0D%0AMessage:%0D%0A${message}`;
  
  window.location.href = `mailto:godstimingclothing@gmail.com?subject=${subject}&body=${body}`;
  alert("Thank you! Your email client will open now to send the message.");
}