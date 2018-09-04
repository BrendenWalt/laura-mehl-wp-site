document.addEventListener("DOMContentLoaded", function(event) { 
    console.log ("JS Loaded");

    // Query Selectors
    var hamburger = document.getElementById("mobile-nav");
    var links = document.getElementById("nav-links");
    var toTop = document.getElementById("toTop");
    var pageBody = document.getElementsByTagName("body");

    // Click Handlers
    var onHamburgerClick = function(event) {
      event.preventDefault();
      console.log("Hamburger clicked");
      console.log(links);
      links.classList.add("mobile-menu");
    }

    var onToTopClick = function(event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    // Click Listeners
    hamburger.addEventListener("click", onHamburgerClick);
    toTop.addEventListener("click", onToTopClick);

});


