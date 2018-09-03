document.addEventListener("DOMContentLoaded", function(event) { 
    console.log ("JS Loaded");

    // Query Selectors
    var toTop = document.getElementById("toTop");
    var pageBody = document.getElementsByTagName("body");

    // Click Handlers
    var onToTopClick = function(event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    // Click Listeners
    toTop.addEventListener("click", onToTopClick);

});


