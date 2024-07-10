var mapContainer = document.getElementById('map'),
    mapOption = {
        center: new kakao.maps.LatLng(37.499590490909185, 127.0263723554437),
        level: 5
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

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
