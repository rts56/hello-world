var mymap = L.map('mapid');
/* MAPBOX tile layer
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  maxZoom: 18,
  id: 'mapbox.mapbox-traffic-v1',
  accessToken: mapbox_access_token
}).addTo(mymap);*/
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
}).addTo(mymap)
var icon1 = L.icon({
  iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBHUvfDh_T_eUNuSS0vlVRTgO7C5_2leQXQ_vafH5KFGNiTcj',
  iconSize: [30,30],});
var icon2 = L.icon({
  iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8iA83BIgP6ag7kFXUYKyJayjNIBHoRXORO1oFPz8WtZQ-L0DTVg',
  iconSize: [30,30],});
var icon3 = L.icon({
  iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtb0nSPP1oZUPAtOEr-Ys0o8CSrYE4zMjy2MRiwFTzJ2zFuU3Vzg',
  iconSize: [30,30],});
var icon4 = L.icon({
  iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk0Nt3E48NSkvQmlQ91bGqu7vjaH1m0mZiHeUtwCyBAgiK30wLvA',
  iconSize: [30,30],});
var icon5 = L.icon({
  iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLsQs1NPCKyktRHg6Xmpg73ZyORn82fq78QuSOnN36x6Ahu9wy',
  iconSize: [30,30],});
var icon6 = L.icon({
  iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHxtGmdciXK1GscoLESdde95ONfKhYzsbxnQ2Rx8jyz2kmjBBT',
  iconSize: [30,30],});
var marker1 = L.marker([27.174961, 78.042385], {icon: icon1}).addTo(mymap);
var marker2 = L.marker([40.334245, 116.477652], {icon: icon2}).addTo(mymap);
var marker3 = L.marker([30.328611, 35.441944], {icon: icon3}).addTo(mymap);
var marker4 = L.marker([-22.951389, -43.2108334], {icon: icon4}).addTo(mymap);
var marker5 = L.marker([-13.163056, -72.545556], {icon: icon5}).addTo(mymap);
var marker6 = L.marker([20.682778, -88.569167], {icon: icon6}).addTo(mymap);
var marker7 = L.marker([41.890169, 12.492269]).addTo(mymap);
marker1.bindPopup("<b>Taj Mahal</b><br>The Taj Mahal is a mausoleum on the south bank of the Yamuna river in India.<br><a href=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKiOBO2dDhWO0-ktZuy45Xp8u8laW5DBLwAIGXNip5QYcEF06SA>Display Image</a>");
marker2.bindPopup("<b>Great Wall of China</b><br>The Great Wall of China is a series of fortification systems build across the northern borders of China.<br><a href=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VvHXnxbpW5mKUan38dyEL7uh8ixQjlYydaabhYSppJ3Z-2hd>Display Image</a>");
marker3.bindPopup("<b>Petra</b><br>Petra is a historical archaeological city in Jordan.<br><a href=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiRtaHZ46-bk47cCO4M1EZgFv0zid3nfMoF-loN9SJpu42r50clw>Display Image</a>");
marker4.bindPopup("<b>Christ the Redeemer</b><br>Christ the Redeemer is a statue of Jesus Christ in Brazil.<br><a href=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvmhrWfIp4hvc-wR-exgvykD-MGfM02zr3G4F5WLHRcGt5euZw>Display Image</a>");
marker5.bindPopup("<b>Machu Picchu</b><br>Machu Picchu is a 15th century Inca citadel located in Peru.<br><a href=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQ5IlL1JMXzEPXOfhy13RZdt0gCvqPxM3BV789MZwofOMFiXe>Display Image</a>");
marker6.bindPopup("<b>Chichen Itza</b><br>Chichen Itza was a pre-Columbian city built by the Maya, located in Mexico.<br><a href=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWGTxX-43YRDNLloM8tbbN6rb5x3F7LbUKqT_S0G6O99H_vvj>Display Image</a>");
marker7.bindPopup("<b>The Colosseum</b><br>The Colosseum is an oval amphitheatre located in the center of Rome, Italy.<br><a href=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJ_Ban2NSg_Q626VHq4RxlvaOC9AycN498WuZ0Sif4NpcXqZg-A>Display Image<a/>");
/*
var marker = L.marker([51.5, -0.09]).addTo(mymap);
var circle = L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);
var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(mymap);
var polyline = L.polyline([
  [51.506, -0.08],
  [51.502, -0.06],
  [51.507, -0.047]
]).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>I am popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");
marker.on('click', function(e){
  mymap.setView(e.latlng, 14);
});
circle.on('click', function(e){
  mymap.setView(e.latlng, 13);
});
polygon.on('click', function(e){
  mymap.setView(e.latlng, 13);
});
var ZoomViewer = L.Control.extend({
  onAdd: function(){
    var gauge = L.DomUtil.create('div');
    gauge.style.width = '200px';
    gauge.style.background = 'rgba(255,255,255,0.5)';
    gauge.style.textAlign = 'left';
    mymap.on('zoomstart zoom zoomend', function(ev){
      gauge.innerHTML = 'Zoom level: ' + mymap.getZoom();
    })
    return gauge;
  }
});
(new ZoomViewer).addTo(mymap);*/
mymap.setView([0,0],1);
