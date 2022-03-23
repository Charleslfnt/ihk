// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    scrollFunction()
};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;


//Get the button:
mybutton = document.getElementById("myBtn");


function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
    header.classList.add("sticky");
  } else {
    mybutton.style.display = "none";
    header.classList.remove("sticky");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}