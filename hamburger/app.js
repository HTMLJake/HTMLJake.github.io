/* Variables */
let infoWindow = new google.maps.InfoWindow();
let markerJSON = [];
let prevSelection;
let listenedMap;
let mapScript = document.getElementsByTagName('script');
let map;
let markers = [];
let ulElem = window.document.getElementById("list");


/* Events */
window.addEventListener("load", () => {
    initMap();
});


function toggleSidebar(hamburger) {
    var sidebarElem = window.document.getElementById("sidebar");
    sidebarElem.classList.toggle("open");
    hamburger.classList.toggle("open");
}

function closeSidebar() {
    var sidebarElem = window.document.getElementById("sidebar");
    var hamburger = window.document.getElementById("hamburger");
    sidebarElem.classList.remove("open");
    hamburger.classList.remove("open");
}

function SidebarSelection(item) {
    if(prevSelection) {
        if(prevSelection === item) {
            item.classList.toggle("selected");
            prevSelection = undefined;
            ShowAllListings();
        } else {
            prevSelection.classList.toggle("selected");
            item.classList.toggle("selected");
            prevSelection = item;
            ShowSelectedListings(item);
        }
    } else {
        item.classList.toggle("selected");
        prevSelection = item;
        ShowSelectedListings(item);
    }
    
}

function getIndex(element) {
    let elementList = element.parentNode.childNodes;
    for (let eIndex = 0; eIndex < elementList.length; eIndex++) {
        const e = elementList[eIndex];
        if (e === element) {
            return eIndex;
        }
    }
}

function getMarkerIndex(elem) {
    let index = 0;
    for (let i = 0; i < markers.length; i++) {
        const m = markers[i];
        if (elem.textContent == m.title) {
            index = i;
        }
    }
    return index;
}

function ShowSelectedListings(item) {
    var _Bounds = new google.maps.LatLngBounds();
    
    //Set all markers map to none
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }

    
    //then only set the selected markers maps
    if (typeof item  === "object") {
        console.log("Array");
        for (const _item of item) {
            console.log(markers[getMarkerIndex(_item)]);
            markers[getMarkerIndex(_item)].setMap(map);
            _Bounds.extend(markers[getMarkerIndex(_item)].position)
        }
    } else {
        console.log("Not Array");
        markers[getMarkerIndex(item)].setMap(map);
        _Bounds.getMarkerIndex(markers[getIndex(item)].position);
        map.setZoom(13);
    }
    
    map.fitBounds(_Bounds);
}

function ShowAllListings(item) {
    var _Bounds = new google.maps.LatLngBounds();
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
        _Bounds.extend(markers[i].position);
    }
    map.fitBounds(_Bounds);
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat:47.649297, lng:-122.351629},
        zoom: 11
    });
    var bounds = new google.maps.LatLngBounds();
    fetch('http://jperrydev.com/locations.json').then((response) => {
        return response.json();
    }).then((json) => {
        markerJSON = json;
        for (let i = 0; i < markerJSON.length; i++) {
            const marker = markerJSON[i];
            var m = new google.maps.Marker({
                position: marker.pos,
                title: marker.name,
                map: map,
                animation: google.maps.Animation.DROP
            })
            bounds.extend(m.position);
            pushMarker(m);
        } 
    }).then(() => {
        map.fitBounds(bounds);
        fillSidebar("all");
    })
}

function pushMarker(m) {
    markers.push(m);
    m.addListener('click' , function() {
        populateInfoWindow(this, infoWindow);
    })
}

function fillSidebar(filter) {

    let newList = markerJSON;
    
    if (filter !== "all") {
        newList = markerJSON.filter(item => {
            return item.tags.includes(filter);
        })
    }

    
    let listParentElement = window.document.getElementById("list");    
    listParentElement.innerHTML = ' ';
    
    
    for (let i = 0; i < newList.length; i++) {
        markers[i].setMap(map);
        const marker = newList[i];
        let listItem = window.document.createElement("li");
        listItem.textContent = marker.name;
        listItem.classList.add("list-item");
        listItem.setAttribute("onclick", "SidebarSelection(this)")
        listParentElement.appendChild(listItem);
    }
    ShowSelectedListings(listParentElement.childNodes);
}

function populateInfoWindow(marker, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
      infowindow.marker = marker;
      infowindow.setContent('<p>' + marker.title + '</p>');
      infowindow.open(map, marker);
      // Make sure the marker property is cleared if the infowindow is closed.
      infowindow.addListener('closeclick',function(){
        infowindow.setMarker = null;
      });  
    }
  }