$(document).ready(function () {
  const $scrollToTopBtn = $("#scrollToTopBtn");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $scrollToTopBtn.fadeIn();
    } else {
      $scrollToTopBtn.fadeOut();
    }
  });

  $scrollToTopBtn.click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  new WOW({
    boxClass: "wow",
    animateClass: "animate__animated",
    offset: 100,
    mobile: false,
    live: true,
  }).init();

  $("#icon-carousel").owlCarousel({
    loop: false,
    margin: 24,
    nav: false,
    dots: true,
    autoplayTimeout: 10000,
    responsive: {
      0: { items: 2 },
      576: { items: 3 },
      992: { items: 4 },
      1200: { items: 5 },
      1400: { items: 6 },
    },
  });

  $("#SingleCarousel").owlCarousel({
    margin: 40,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout:10000,
    items: 1,
  });
  $("#SingleCarousel2").owlCarousel({
    margin: 40,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 10000,
    items: 1,
  });

  $("#test").owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      nav: false,
      autoplayTimeout: 10000,
    });
  
    // Move the dots outside
    $("#customDots").html($("#test .owl-dots"));

});

document.addEventListener("DOMContentLoaded", function () {
  let faqs = document.querySelectorAll(".accordion-item");
  let showMoreBtn = document.getElementById("showMoreBtn");

  // Hide all FAQs except the first 5
  faqs.forEach((faq, index) => {
    if (index >= 5) {
      faq.classList.add("d-none");
    }
  });

  showMoreBtn.addEventListener("click", function () {
    let hiddenFaqs = document.querySelectorAll(".accordion-item.d-none");
    let spanElement = this.querySelector("span"); // Target the span inside the button

    if (hiddenFaqs.length > 0) {
      hiddenFaqs.forEach((faq) => faq.classList.remove("d-none"));
      spanElement.textContent = "Show Less"; // Update span text
    } else {
      faqs.forEach((faq, index) => {
        if (index >= 5) {
          faq.classList.add("d-none");
        }
      });
      spanElement.textContent = "Show More"; // Update span text
    }
  });
});


