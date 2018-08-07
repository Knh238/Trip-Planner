
const mapboxgl = require("mapbox-gl");
const buildMarker=require('./marker');

mapboxgl.accessToken = 'pk.eyJ1Ijoia25oMjM4IiwiYSI6ImNqa2s0dzQ4bDFuOHIza2t4c2p5eTlibHAifQ.EAoKDphTbAvkj-VI1MNpFA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

var pos1=buildMarker('activity',[-74.009, 40.705])
pos1.addTo(map);
var pos2=buildMarker('hotel',[-73.009, 41.705])
pos2.addTo(map);
var pos3=buildMarker('restaurant',[-75.009, 42.705])
pos3.addTo(map);
//new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

