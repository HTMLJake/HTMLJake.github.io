/* Variables */
let infoWindow = new google.maps.InfoWindow();
let mapScript = document.getElementsByTagName('script');
let ulElem = window.document.getElementById("list");
let locations = [];
let markers = [];
let prevSelection;
let map;



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
            ShowSelectedListings(ulElem.childNodes);
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

