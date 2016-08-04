// TODO: Put your JS code in here

$(document).ready(function() {
  $(".btn").on("click", function(event) {
    event.preventDefault();
    getAdress();
  });
});


function getAdress() {
  $.ajax({
    type: "GET",
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + $('#locationID').val(),
    success: function(data) {
      console.log(data);
      var longitude = data.results[0].geometry.location.lng;
      console.log(longitude);
      var latitude = data.results[0].geometry.location.lat;
      console.log(latitude);
      $( ".coordonnates" ).append("<p>Longitude: " + longitude + ", Latitude: " + latitude +"</p>");

      var myLatlng = {lng: longitude, lat: latitude}
      var myOptions = {
        zoom: 15,
        center: myLatlng,
        scrollwheel: false,
        styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#9ea7b2"}]}] // TODO: replace [] by array from https://snazzymaps.com/
      };
      var map = new google.maps.Map(document.getElementById('map'), myOptions);
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "You are here!"
      });
    },
    error: function(jqXHR) {
      console.error(jqXHR.responseText);
    }
  });
};





