// Inicializar el mapa
var map1 = L.map('map1').setView([40.7128, -74.0060], 12); // Nueva York
var map2 = L.map('map2').setView([51.5074, -0.1278], 12); // Londres
var map3 = L.map('map3').setView([34.0522, -118.2437], 12); // Los Ángeles

// Capa de mapas
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map1);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map3);

// Marcadores para el primer mapa (Nueva York)
var marker1 = L.marker([40.7128, -74.0060]).addTo(map1)
    .bindPopup('<b>DronShop</b><br>Tu tienda de drones en el corazón de Nueva York.<br>Ofrecemos una amplia gama de drones y accesorios.<br><img src="assets/image/dron4.jpg" alt="DronShop" width="150"><br><a href="#">Más información</a>')
    .openPopup();

// Marcadores para el segundo mapa (Londres) - con video
var marker2 = L.marker([51.5074, -0.1278]).addTo(map2)
    .bindPopup('<b>Fly High Drones</b><br>Especialistas en drones de carrera y fotografía. Ven y descubre lo que tenemos para ti.<br><iframe width="250" height="150" src="https://www.youtube.com/embed/jcGJzdb9UVc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><a href="#">Más información</a>')
    .openPopup();

// Marcadores para el tercer mapa (Los Ángeles) - con imagen
var marker3 = L.marker([34.0522, -118.2437]).addTo(map3)
    .bindPopup('<b>Drone World</b><br>La mejor selección de drones en Londres. Ofrecemos asesoría personalizada para tu compra.<br><img src="assets/image/dron3.jpg" alt="Drone World" width="150"><br><a href="#">Más información</a>')
    .openPopup();
