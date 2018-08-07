const mapboxgl = require("mapbox-gl");

const buildMarker=function(type,cords){
const marker=document.createElement("div");
// marker.style.height="39px";
// marker.style.width="32px";
// marker.classList.add("places");
if(type === 'hotel'){
 //marker.style.backgroundImage="url(http://i.imgur.com/D9574Cu.png)";
 marker.classList.add("hotel");
 return new mapboxgl.Marker(marker).setLngLat(cords);
}
if(type === 'restaurant'){
    marker.classList.add("food");
 //marker.style.backgroundImage="url(http://i.imgur.com/cqR6pUI.png)";
 return new mapboxgl.Marker(marker).setLngLat(cords);
}
if(type === 'activity'){
    marker.classList.add("activity");
  //marker.style.backgroundImage="url(http://i.imgur.com/WbMOfMl.png)"
  return new mapboxgl.Marker(marker).setLngLat(cords);
}
}
//new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
//buildMarker('activity',[-74.009, 40.705])
module.exports=buildMarker;





