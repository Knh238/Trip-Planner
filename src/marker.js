const mapboxgl = require("mapbox-gl");

const buildMarker=function(type,cords){
const marker=document.createElement("div");
marker.classList.add("places");

if(type === 'hotel'){
marker.backgroundImage="url(http://i.imgur.com/D9574Cu.png)";
new mapboxgl.Marker(marker).setLngLat(cords);
}
if(type === 'restaurant'){
 marker.backgroundImage="url(http://i.imgur.com/cqR6pUI.png)";
 new mapboxgl.Marker(marker).setLngLat(cords);
}
if(type === 'activity'){
   marker.backgroundImage="url(http://i.imgur.com/WbMOfMl.png)"
    new mapboxgl.Marker(marker).setLngLat(cords);
}
return marker;
}
//new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
//buildMarker('activity',[-74.009, 40.705])
module.exports=buildMarker;





