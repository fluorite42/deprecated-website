// Show button when scrolling down 100px
window.onscroll = function() {
    const upButton = document.getElementById("upButton");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      upButton.style.display = "block";
    } else {
      upButton.style.display = "none";
    }
};
  
  // Scroll to the top when the button is clicked
  document.getElementById("upButton").onclick = function(event) {
    event.preventDefault(); // Prevents default anchor behavior
    window.scrollTo({ top: 0, behavior: "smooth" });
};