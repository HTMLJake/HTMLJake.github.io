function toggleSidebar(hamburger) {
    var sidebarElem = window.document.getElementById("sidebar");
    var mainElem = window.document.getElementsByClassName("main")[0];
    sidebarElem.classList.toggle("open");
    mainElem.classList.toggle("open");
    hamburger.classList.toggle("open")
}

var prevSelection;

function SidebarSelection(item) {
    if(prevSelection) {
        if(prevSelection === item) {
            item.classList.toggle("selected");
            prevSelection = undefined;
        } else {
            prevSelection.classList.toggle("selected");
            item.classList.toggle("selected");
            prevSelection = item;
        }
    } else {
        item.classList.toggle("selected");
        prevSelection = item;
    }
}

var listenedMap;
var mapScript = document.getElementsByTagName('script');

window.addEventListener("load", () => {
    console.log("load");
    initMap();
})

var map;
var markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat:47.60, lng:-122.15},
        zoom: 11
    });
    var bounds = new google.maps.LatLngBounds();
    fetch('http://jperrydev.com/locations.json').then((response) => {
        return response.json();
    }).then((json) => {
        var j = json
        for (const marker of j) {
            var m = new google.maps.Marker({
                position: marker.pos,
                title: marker.name,
                map: map,
                animation: google.maps.Animation.DROP
            })
            m.addListener('click' , function() {
                iWindow = new google.maps.InfoWindow({
                    content: marker.name
                });
                iWindow.open(map, m);
            })
            bounds.extend(m.position);
            pushMarker(m);
        }
    })
    map.fitBounds(bounds);
}

function pushMarker(m) {
    markers.push(m);
}