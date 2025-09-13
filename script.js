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
