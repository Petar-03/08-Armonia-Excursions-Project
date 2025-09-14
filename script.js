const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

//JS FOR SUPPORT SECTION FAQ
const faqs = document.querySelectorAll(".faq-item");

faqs.forEach((item) => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    // Close other items (only one open at a time)
    faqs.forEach((i) => {
      if (i !== item) i.classList.remove("active");
    });

    // Toggle current item
    item.classList.toggle("active");
  });
});

//CTA FORM
// Get elements
const openBtn = document.getElementById("openPopup");
const modal = document.getElementById("popupForm");
const closeBtn = document.querySelector(".close");

// Open popup
openBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "block";
});

// Close popup (X button)
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Close popup when clicking outside
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
