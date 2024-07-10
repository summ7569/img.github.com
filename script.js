var mapContainer = document.getElementById('map'),
    mapOption = {
        center: new kakao.maps.LatLng(37.499590490909185, 127.0263723554437),
        level: 5
    };

var map = new kakao.maps.Map(mapContainer, mapOption);ㅁvar map;
var category = 'all';

var coffeePositions = [
    new kakao.maps.LatLng(37.500084330229125, 127.02349979681403),
    new kakao.maps.LatLng(37.49902147099658, 127.02180376260086),
    new kakao.maps.LatLng(37.49771225785824, 127.02262358252465),
    new kakao.maps.LatLng(37.496835745817276, 127.0234976542297),
    new kakao.maps.LatLng(37.495438272926, 127.0239323365019),
    new kakao.maps.LatLng(37.49421957503221, 127.02531498452557),
    new kakao.maps.LatLng(37.4930408311846, 127.02676452038947)
];

var coffeeInfo = [
    { number: "001", address: "부림동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "002", address: "부림동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "003", address: "부림동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "004", address: "부림동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "005", address: "부림동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "006", address: "부림동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "007", address: "부림동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" }
];

var storePositions = [
    new kakao.maps.LatLng(37.49807233112997, 127.02447016573967),
    new kakao.maps.LatLng(37.49961569896558, 127.02389151223865),
    new kakao.maps.LatLng(37.49899086880841, 127.02599292313527),
    new kakao.maps.LatLng(37.49715418725397, 127.02428388887983),
    new kakao.maps.LatLng(37.49672220373571, 127.02743867003344),
    new kakao.maps.LatLng(37.49770578917236, 127.02657085044461),
    new kakao.maps.LatLng(37.49728361598822, 127.02877515013555)
];

var storeInfo = [
    { number: "1444-1", address: "부림동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "1411-1", address: "부림동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "2404-1", address: "부림동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "1401-1", address: "부림동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "2005-1", address: "부림동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "1041-1", address: "부림동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "1114-1", address: "부림동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" }
];

var carparkPositions = [
    new kakao.maps.LatLng(37.4998857680214, 127.021287272477),
    new kakao.maps.LatLng(37.49880015958654, 127.02122611454576),
    new kakao.maps.LatLng(37.49762466008294, 127.02107468584305),
    new kakao.maps.LatLng(37.49633282179459, 127.02109732970026),
    new kakao.maps.LatLng(37.49508967592646, 127.02107849758757),
    new kakao.maps.LatLng(37.49393825496738, 127.02115485242933),
    new kakao.maps.LatLng(37.49287470905657, 127.02116225679035)
];

var carparkInfo = [
    { number: "503", address: "부림동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "511", address: "부림동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "413", address: "부림동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "306", address: "부림동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "304", address: "부림동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "203", address: "부림동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "101", address: "부림동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" }
];

var coffeeMarkers = [];
var storeMarkers = [];
var carparkMarkers = [];

function initMap() {
    var mapContainer = document.getElementById('map');
    var mapOption = {
        center: new kakao.maps.LatLng(37.498040, 127.024542),
        level: 5
    };
    map = new kakao.maps.Map(mapContainer, mapOption);

    displayMarkers();
}

function initMarkers() {
    coffeeMarkers = createMarkers(coffeePositions, 'coffee');
    storeMarkers = createMarkers(storePositions, 'store');
    carparkMarkers = createMarkers(carparkPositions, 'carpark');
}

function createMarkers(positions, type) {
    return positions.map(function(position, index) {
        var marker = new kakao.maps.Marker({
            position: position,
            clickable: true
        });

        kakao.maps.event.addListener(marker, 'click', function() {
            var info = getInfo(type, index);
            displayOverlay(marker, info);
        });

        return marker;
    });
}

function getInfo(type, index) {
    switch (type) {
        case 'coffee':
            return coffeeInfo[index];
        case 'store':
            return storeInfo[index];
        case 'carpark':
            return carparkInfo[index];
        default:
            return {};
    }
}

function setMarkers(map, markers) {
    markers.forEach(function(marker) {
        marker.setMap(map);
    });
}

function changeMarker(type) {
    category = type;
    displayMarkers();
}

function displayMarkers() {
    closeAllInfoWindows();
    setMarkers(null, coffeeMarkers);
    setMarkers(null, storeMarkers);
    setMarkers(null, carparkMarkers);

    switch (category) {
        case 'coffee':
            setMarkers(map, coffeeMarkers);
            break;
        case 'store':
            setMarkers(map, storeMarkers);
            break;
        case 'carpark':
            setMarkers(map, carparkMarkers);
            break;
        case 'all':
            setMarkers(map, coffeeMarkers);
            setMarkers(map, storeMarkers);
            setMarkers(map, carparkMarkers);
            break;
        default:
            break;
    }
}

function displayOverlay(marker, info) {
    var overlayContent = document.getElementById('overlayContent');
    var overlayClose = document.getElementById('overlayClose');
    var overlayInfo = document.getElementById('overlayInfo');

    overlayInfo.innerHTML = `
        <h4>${info.number}</h4>
        <p>주소: ${info.address}</p>
        <p>회전형: ${info.rotation}</p>
        <p>고정형: ${info.fixed}</p>
        <p>${info.description}</p>
        <img src="${info.image}" alt="이미지">
    `;

    var overlay = new kakao.maps.CustomOverlay({
        content: overlayContent,
        map: map,
        position: marker.getPosition()
    });

    marker.overlay = overlay;

    overlayClose.onclick = function() {
        closeOverlay();
    };

    overlay.setMap(map);

    map.panTo(marker.getPosition());
}

function closeOverlay() {
    coffeeMarkers.forEach(function(marker) {
        if (marker.overlay) {
            marker.overlay.setMap(null);
            marker.overlay = null;
        }
    });

    storeMarkers.forEach(function(marker) {
        if (marker.overlay) {
            marker.overlay.setMap(null);
            marker.overlay = null;
        }
    });

    carparkMarkers.forEach(function(marker) {
        if (marker.overlay) {
            marker.overlay.setMap(null);
            marker.overlay = null;
        }
    });
}

function toggleUI() {
    var categoryUI = document.querySelector('.category');
    var searchForm = document.querySelector('#searchForm');
    var customOverlay = document.querySelector('.customoverlay');

    if (categoryUI.style.display !== 'none') {
        categoryUI.style.display = 'none';
        searchForm.style.display = 'none';
        customOverlay.style.display = 'none';
        document.getElementById('toggleUI').textContent = 'UI 보이기';
    } else {
        categoryUI.style.display = 'block';
        searchForm.style.display = 'block';
        document.getElementById('toggleUI').textContent = 'UI 숨기기';
    }
}

function addMarker() {
    var latitude = document.getElementById('latitude').value;
    var longitude = document.getElementById('longitude').value;
    var category = document.getElementById('category').value;
    var info = document.getElementById('info').value;

    var position = new kakao.maps.LatLng(latitude, longitude);

    var marker = new kakao.maps.Marker({
        position: position,
        clickable: true
    });

    switch (category) {
        case 'coffee':
            coffeeMarkers.push(marker);
            break;
        case 'store':
            storeMarkers.push(marker);
            break;
        case 'carpark':
            carparkMarkers.push(marker);
            break;
        default:
            return;
    }

    kakao.maps.event.addListener(marker, 'click', function() {
        var dummyInfo = {
            number: "0000",
            address: "지정하지 않음",
            rotation: "지정하지 않음",
            fixed: "지정하지 않음",
            description: "지정하지 않음",
            image: "https://via.placeholder.com/150"
        };
        displayOverlay(marker, dummyInfo);
    });

    setMarkers(map, [marker]);
}

function moveToCoordinates() {
    var latitude = document.getElementById('latitude').value;
    var longitude = document.getElementById('longitude').value;

    var moveLatLng = new kakao.maps.LatLng(latitude, longitude);

    map.panTo(moveLatLng);
}

function clearMarkers() {
    closeAllInfoWindows();
    setMarkers(null, coffeeMarkers);
    setMarkers(null, storeMarkers);
    setMarkers(null, carparkMarkers);

    coffeeMarkers = [];
    storeMarkers = [];
    carparkMarkers = [];
}

function closeAllInfoWindows() {
    coffeeMarkers.forEach(function(marker) {
        if (marker.overlay) {
            marker.overlay.setMap(null);
            marker.overlay = null;
        }
    });

    storeMarkers.forEach(function(marker) {
        if (marker.overlay) {
            marker.overlay.setMap(null);
            marker.overlay = null;
        }
    });

    carparkMarkers.forEach(function(marker) {
        if (marker.overlay) {
            marker.overlay.setMap(null);
            marker.overlay = null;
        }
    });
}

initMarkers();


var coffeePositions = [
    new kakao.maps.LatLng(37.499590490909185, 127.0263723554437),
    new kakao.maps.LatLng(37.499427948430814, 127.02794423197847),
    new kakao.maps.LatLng(37.498553760499505, 127.02882598822454),
    new kakao.maps.LatLng(37.497625593121384, 127.02935713582038),
    new kakao.maps.LatLng(37.49646391248451, 127.02675574250912),
    new kakao.maps.LatLng(37.49629291770947, 127.02587362608637),
    new kakao.maps.LatLng(37.49754540521486, 127.02546694890695)
];

var coffeeInfo = [
    { number: "52-1", address: "부림동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "110-1", address: "부림동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "140-1", address: "부림동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "120-1", address: "부림동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "122-221", address: "부림동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "540-1", address: "부림동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "1340-1", address: "부림동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" }
];

var storePositions = [
    new kakao.maps.LatLng(37.49824563450009, 127.03038109512947),
    new kakao.maps.LatLng(37.4992406988721, 127.03074293107615),
    new kakao.maps.LatLng(37.50066190835543, 127.03036787225738),
    new kakao.maps.LatLng(37.500733430677865, 127.03125611376426),
    new kakao.maps.LatLng(37.49914519813063, 127.03359224430952),
    new kakao.maps.LatLng(37.49814954326297, 127.03113465642485),
    new kakao.maps.LatLng(37.49686318278541, 127.03121121182857)
];

var storeInfo = [
    { number: "52-1", address: "부림동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "110-1", address: "부림동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "140-1", address: "부림동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "120-1", address: "부림동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "122-221", address: "부림동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "540-1", address: "부림동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "1340-1", address: "부림동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" }
];

var carparkPositions = [
    new kakao.maps.LatLng(37.500323752984, 127.03207784979008),
    new kakao.maps.LatLng(37.50034003486949, 127.03326067446011),
    new kakao.maps.LatLng(37.50006460550699, 127.03264793107614),
    new kakao.maps.LatLng(37.49824675149486, 127.03441629449724),
    new kakao.maps.LatLng(37.49762168699192, 127.0324681061864),
    new kakao.maps.LatLng(37.49637228210332, 127.03227268815613),
    new kakao.maps.LatLng(37.49752999225132, 127.03106257769505)
];

var carparkInfo = [
    { number: "52-1", address: "부림동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "110-1", address: "부림동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "140-1", address: "부림동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "120-1", address: "부림동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "122-221", address: "부림동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "540-1", address: "부림동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "1340-1", address: "부림동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" }
];

var allPositions = coffeePositions.concat(storePositions, carparkPositions);
var allInfo = coffeeInfo.concat(storeInfo, carparkInfo);

var markers = [];

function addMarker() {
    var latitude = parseFloat(document.getElementById('latitude').value);
    var longitude = parseFloat(document.getElementById('longitude').value);
    var category = document.getElementById('category').value;
    var info = document.getElementById('info').value;

    var position = new kakao.maps.LatLng(latitude, longitude);

    var marker = new kakao.maps.Marker({
        map: map,
        position: position
    });

    markers.push(marker);

    var iwContent = '<div style="padding:5px;">' + info + '</div>';

    var infowindow = new kakao.maps.InfoWindow({
        content: iwContent
    });

    infowindow.open(map, marker);

    kakao.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
}

function changeMarker(category) {
    deleteMarkers();

    if (category === 'coffee') {
        displayMarkers(coffeePositions, coffeeInfo);
    } else if (category === 'store') {
        displayMarkers(storePositions, storeInfo);
    } else if (category === 'carpark') {
        displayMarkers(carparkPositions, carparkInfo);
    } else if (category === 'all') {
        displayMarkers(allPositions, allInfo);
    }
}

function displayMarkers(positions, info) {
    for (var i = 0; i < positions.length; i++) {
        var marker = new kakao.maps.Marker({
            map: map,
            position: positions[i]
        });

        markers.push(marker);

        var iwContent = '<div style="padding:5px;">' +
            '<div>' + info[i].number + '</div>' +
            '<div>' + info[i].address + '</div>' +
            '<div>' + info[i].rotation + '</div>' +
            '<div>' + info[i].fixed + '</div>' +
            '<div>' + info[i].description + '</div>' +
            '<div><img src="' + info[i].image + '" style="max-width:100%;height:auto;"></div>' +
            '</div>';

        var infowindow = new kakao.maps.InfoWindow({
            content: iwContent
        });

        kakao.maps.event.addListener(marker, 'click', makeOverListener(map, marker, infowindow));
    }
}

function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}

function deleteMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}

function moveToCoordinates() {
    var latitude = parseFloat(document.getElementById('latitude').value);
    var longitude = parseFloat(document.getElementById('longitude').value);

    var moveLatLng = new kakao.maps.LatLng(latitude, longitude);

    map.panTo(moveLatLng);
}

function clearMarkers() {
    deleteMarkers();
}

function toggleUI() {
    var ui = document.getElementsByClassName('category')[0];
    if (ui.style.display === 'none') {
        ui.style.display = 'block';
        document.getElementById('toggleUI').innerText = 'UI 숨기기';
    } else {
        ui.style.display = 'none';
        document.getElementById('toggleUI').innerText = 'UI 보이기';
    }
}

function closeOverlay() {
    document.getElementById('customOverlay').style.display = 'none';
}

function showOverlay() {
    document.getElementById('customOverlay').style.display = 'block';
}

function openOverlay(number) {
    showOverlay();

    document.getElementById('markerNumber').innerText = '마커 번호: ' + number;
    document.getElementById('address').innerText = '주소: ' + '부림동';
    document.getElementById('rotation').innerText = '회전: ' + '회전형';
    document.getElementById('fixed').innerText = '고정: ' + '고정형';
    document.getElementById('description').innerText = '설명: ' + '상세설명';
    document.getElementById('image').innerHTML = '<img src="https://via.placeholder.com/150" style="max-width:100%;height:auto;">';
}
