var link = document.querySelector(".callback-button"); 
var open = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
      
link.addEventListener("click", function(event) {
  event.preventDefault();
  open.classList.add("modal-content-show"); 
});
close.addEventListener("click", function(event) {        
  event.preventDefault();         
  open.classList.remove("modal-content-show")
});
      
