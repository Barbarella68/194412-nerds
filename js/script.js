var link = document.querySelector(".callback-button"); 
var open = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close"); 

link.addEventListener("click", function(event) {
  event.preventDefault();
  open.classList.add("modal-content-show");  
});
close.addEventListener("click", function(event) {        
  event.preventDefault();         
  open.classList.remove("modal-content-show");
});  
function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(59.939, 30.320)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var image = "img/index/marker-logotype.png";
  var myLatLng = new google.maps.LatLng(59.93865, 30.32365);
  var nerdsMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
  });
}
google.maps.event.addDomListener(window, "load", initialize);
    
