/* global google */

var gmap = document.getElementById('map');
var arrGmap = {};
arrGmap['name'] = gmap.dataset.name;
arrGmap['coords'] = gmap.dataset.coords;
arrGmap['zoom'] = gmap.dataset.zoom;

// var coords = arrGmap.dataset.coords;

var cx = parseFloat(arrGmap['coords'].split(',')[0]);
var cy = parseFloat(arrGmap['coords'].split(',')[1]);
var zoom = parseInt(arrGmap['zoom'], 10);
var name = arrGmap['name'];

var locations = [[name, cx, cy, 1]];

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: zoom,
  center: new google.maps.LatLng(cx, cy),
  mapTypeId: google.maps.MapTypeId.ROADMAP,
});
var infowindow = new google.maps.InfoWindow();
var marker, i;
for (i = 0; i < locations.length; i++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map,
  });
  google.maps.event.addListener(
    marker,
    'click',
    (function (marker, i) {
      return function () {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      };
    })(marker, i),
  );
}
