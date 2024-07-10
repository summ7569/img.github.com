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
    new kakao.maps.LatLng(37.49620122629613, 127.03141908844448),
    new kakao.maps.LatLng(37.49506206199214, 127.02919187070657),
    new kakao.maps.LatLng(37.4965242051896, 127.03149620903078),
    new kakao.maps.LatLng(37.49742840503673, 127.03177253712302),
    new kakao.maps.LatLng(37.49745359267896, 127.03153027510157),
    new kakao.maps.LatLng(37.49806644079785, 127.03091049777478),
    new kakao.maps.LatLng(37.49781530814202, 127.03068260140514)
];

var storeInfo = [
    { number: "123", address: "보라매동", rotation: "고정형", fixed: "회전형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "122", address: "동작동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "142-1", address: "범일동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "190-1", address: "문성동", rotation: "고정형", fixed: "회전형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "222-1", address: "문성동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "120-1", address: "상도동", rotation: "회전형", fixed: "회전형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "1240-1", address: "상도동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" }
];

var carparkPositions = [
    new kakao.maps.LatLng(37.50016885388174, 127.02310979934937),
    new kakao.maps.LatLng(37.49785310342978, 127.0245738569353),
    new kakao.maps.LatLng(37.49591989919177, 127.0261293704345),
    new kakao.maps.LatLng(37.49493764572686, 127.02731313284473),
    new kakao.maps.LatLng(37.49441963525159, 127.0276811308133),
    new kakao.maps.LatLng(37.493414368616625, 127.02876505526703),
    new kakao.maps.LatLng(37.49267166487598, 127.02840224178008)
];

var carparkInfo = [
    { number: "52-1", address: "행운동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "110-1", address: "행운동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "140-1", address: "행운동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "120-1", address: "행운동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "122-221", address: "행운동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "540-1", address: "행운동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "1340-1", address: "행운동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" }
];

var markerImageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

var markers = [];
var overlay = document.getElementById('customOverlay');
var overlayContent = document.getElementById('overlayContent');
var overlayClose = document.getElementById('overlayClose');

function addMarker() {
    var category = document.getElementById('category').value;
    var info = document.getElementById('info').value;

    var markerPosition;
    var markerInfo;

    switch (category) {
        case 'coffee':
            markerPosition = coffeePositions[Math.floor(Math.random() * coffeePositions.length)];
            markerInfo = coffeeInfo[Math.floor(Math.random() * coffeeInfo.length)];
            break;
        case 'store':
            markerPosition = storePositions[Math.floor(Math.random() * storePositions.length)];
            markerInfo = storeInfo[Math.floor(Math.random() * storeInfo.length)];
            break;
        case 'carpark':
            markerPosition = carparkPositions[Math.floor(Math.random() * carparkPositions.length)];
            markerInfo = carparkInfo[Math.floor(Math.random() * carparkInfo.length)];
            break;
        default:
            markerPosition = new kakao.maps.LatLng(37.499590490909185, 127.0263723554437);
            markerInfo = { number: "123", address: "영등포구 당산동", rotation: "고정형", fixed: "회전형", description: "상세설명", image: "https://via.placeholder.com/150" };
    }

    var markerImage = new kakao.maps.MarkerImage(markerImageSrc, new kakao.maps.Size(24, 35), {
        offset: new kakao.maps.Point(13, 33),
        alt: "마커 이미지"
    });

    var marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage
    });

    marker.info = markerInfo;

    kakao.maps.event.addListener(marker, 'click', function () {
        var content = '<div style="padding:5px;">' +
            '<img src="' + marker.info.image + '" style="width:150px; height:150px; margin-right:5px; float:left;">' +
            '<div style="width:150px; padding-top:10px; float:left;">' +
            '<p>' + marker.info.number + '</p>' +
            '<p>' + marker.info.address + '</p>' +
            '<p>' + marker.info.rotation + '</p>' +
            '<p>' + marker.info.fixed + '</p>' +
            '<p>' + marker.info.description + '</p>' +
            '</div>' +
            '</div>';

        overlayContent.innerHTML = content;
        overlay.style.display = 'block';
    });

    markers.push(marker);
    showMarkers();
}

function showMarkers() {
    hideMarkers();

    var category = document.getElementById('category').value;

    if (category === 'all') {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }
    } else {
        for (var i = 0; i < markers.length; i++) {
            if (markers[i].info.address.indexOf(category) !== -1) {
                markers[i].setMap(map);
            }
        }
    }
}

function hideMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
}

function clearMarkers() {
    hideMarkers();
    markers = [];
}

function changeMarker(category) {
    document.getElementById('coffeeMenu').classList.remove('menu_selected');
    document.getElementById('storeMenu').classList.remove('menu_selected');
    document.getElementById('carparkMenu').classList.remove('menu_selected');
    document.getElementById('allMenu').classList.remove('menu_selected');

    switch (category) {
        case 'coffee':
            document.getElementById('coffeeMenu').classList.add('menu_selected');
            break;
        case 'store':
            document.getElementById('storeMenu').classList.add('menu_selected');
            break;
        case 'carpark':
            document.getElementById('carparkMenu').classList.add('menu_selected');
            break;
        case 'all':
            document.getElementById('allMenu').classList.add('menu_selected');
            break;
    }

    showMarkers();
}

function moveToCoordinates() {
    var lat = parseFloat(document.getElementById('lat').value);
    var lng = parseFloat(document.getElementById('lng').value);
    var moveLatLon = new kakao.maps.LatLng(lat, lng);
    map.panTo(moveLatLon);
}

function init() {
    var mapContainer = document.getElementById('map');
    var mapOption = {
        center: new kakao.maps.LatLng(37.49620122629613, 127.03141908844448),
        level: 4
    };

    map = new kakao.maps.Map(mapContainer, mapOption);

    var coffeeMenu = document.getElementById('coffeeMenu');
    var storeMenu = document.getElementById('storeMenu');
    var carparkMenu = document.getElementById('carparkMenu');
    var allMenu = document.getElementById('allMenu');

    coffeeMenu.onclick = function () {
        changeMarker('coffee');
    };
    storeMenu.onclick = function () {
        changeMarker('store');
    };
    carparkMenu.onclick = function () {
        changeMarker('carpark');
    };
    allMenu.onclick = function () {
        changeMarker('all');
    };

    overlayClose.onclick = function () {
        overlay.style.display = 'none';
    };

    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }

    map.relayout();
}

window.onload = init;

    var map;

    var markerImageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

    var markers = [];
    var overlay = document.getElementById('customOverlay');
    var overlayContent = document.getElementById('overlayContent');
    var overlayClose = document.getElementById('overlayClose');

    function addMarker() {
        var category = document.getElementById('category').value;
        var info = document.getElementById('info').value;

        // 임시 위치 설정 (서울 시청 근처)
        var markerPosition = new kakao.maps.LatLng(37.5662952, 126.97794509999994);

        var markerImage = new kakao.maps.MarkerImage(markerImageSrc, new kakao.maps.Size(24, 35), {
            offset: new kakao.maps.Point(13, 33),
            alt: "마커 이미지"
        });

        var marker = new kakao.maps.Marker({
            position: markerPosition,
            image: markerImage
        });

        kakao.maps.event.addListener(marker, 'click', function () {
            var content = '<div style="padding:5px;">' +
                '<img src="https://via.placeholder.com/150" style="width:150px; height:150px; margin-right:5px; float:left;">' +
                '<div style="width:150px; padding-top:10px; float:left;">' +
                '<p>마커 정보</p>' +
                '<p>주소</p>' +
                '<p>회전형</p>' +
                '<p>고정형</p>' +
                '<p>상세 설명</p>' +
                '</div>' +
                '</div>';

            overlayContent.innerHTML = content;
            overlay.style.display = 'block';
        });

        markers.push(marker);
        showMarkers();
    }

    function showMarkers() {
        hideMarkers();

        var category = document.getElementById('category').value;

        if (category === 'all') {
            for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(map);
            }
        } else {
            for (var i = 0; i < markers.length; i++) {
                var markerCategory = markers[i].getPosition().equals(new kakao.maps.LatLng(37.5662952, 126.97794509999994)) ? 'store' : 'coffee';
                if (markerCategory === category) {
                    markers[i].setMap(map);
                }
            }
        }
    }

    function hideMarkers() {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
    }

    function toggleUI() {
        var ui = document.getElementById('searchForm');
        if (ui.style.display === 'none') {
            ui.style.display = 'block';
            document.getElementById('toggleUI').innerText = 'UI 숨기기';
        } else {
            ui.style.display = 'none';
            document.getElementById('toggleUI').innerText = 'UI 보이기';
        }
    }

    function moveToCoordinates() {
        var latitude = parseFloat(document.getElementById('latitude').value);
        var longitude = parseFloat(document.getElementById('longitude').value);

        if (isNaN(latitude) || isNaN(longitude)) {
            alert('유효한 위도 및 경도를 입력하세요.');
            return;
        }

        var moveLatLon = new kakao.maps.LatLng(latitude, longitude);

        map.panTo(moveLatLon);
    }

    function clearMarkers() {
        hideMarkers();
        markers = [];
    }

    function closeOverlay() {
        overlay.style.display = 'none';
    }

    window.onload = function () var map;
var markers = [];
var overlay = document.getElementById('customOverlay');
var overlayContent = document.getElementById('overlayContent');
var overlayClose = document.getElementById('overlayClose');

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
    new kakao.maps.LatLng(37.49620122629613, 127.03141908844448),
    new kakao.maps.LatLng(37.49506206199214, 127.02919187070657),
    new kakao.maps.LatLng(37.4965242051896, 127.03149620903078),
    new kakao.maps.LatLng(37.49742840503673, 127.03177253712302),
    new kakao.maps.LatLng(37.49745359267896, 127.03153027510157),
    new kakao.maps.LatLng(37.49806644079785, 127.03091049777478),
    new kakao.maps.LatLng(37.49781530814202, 127.03068260140514)
];

var storeInfo = [
    { number: "123", address: "보라매동", rotation: "고정형", fixed: "회전형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "122", address: "동작동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "142-1", address: "범일동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "190-1", address: "문성동", rotation: "고정형", fixed: "회전형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "222-1", address: "문성동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "120-1", address: "상도동", rotation: "회전형", fixed: "회전형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "1240-1", address: "상도동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" }
];

var carparkPositions = [
    new kakao.maps.LatLng(37.50016885388174, 127.02310979934937),
    new kakao.maps.LatLng(37.49785310342978, 127.0245738569353),
    new kakao.maps.LatLng(37.49591989919177, 127.0261293704345),
    new kakao.maps.LatLng(37.49493764572686, 127.02731313284473),
    new kakao.maps.LatLng(37.49441963525159, 127.0276811308133),
    new kakao.maps.LatLng(37.493414368616625, 127.02876505526703),
    new kakao.maps.LatLng(37.49267166487598, 127.02840224178008)
];

var carparkInfo = [
    { number: "52-1", address: "행운동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "110-1", address: "행운동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "140-1", address: "행운동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "120-1", address: "행운동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "122-221", address: "행운동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "540-1", address: "행운동", rotation: "고정형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" },
    { number: "1340-1", address: "행운동", rotation: "회전형", fixed: "고정형", description: "상세설명", image: "https://via.placeholder.com/150" }
];

var markerImageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

function addMarker() {
    var category = document.getElementById('category').value;
    var markerPosition;
    var markerInfo;

    switch (category) {
        case 'coffee':
            markerPosition = coffeePositions[Math.floor(Math.random() * coffeePositions.length)];
            markerInfo = coffeeInfo[Math.floor(Math.random() * coffeeInfo.length)];
            break;
        case 'store':
            markerPosition = storePositions[Math.floor(Math.random() * storePositions.length)];
            markerInfo = storeInfo[Math.floor(Math.random() * storeInfo.length)];
            break;
        case 'carpark':
            markerPosition = carparkPositions[Math.floor(Math.random() * carparkPositions.length)];
            markerInfo = carparkInfo[Math.floor(Math.random() * carparkInfo.length)];
            break;
        default:
            // Default to coffee if category is unrecognized
            markerPosition = coffeePositions[Math.floor(Math.random() * coffeePositions.length)];
            markerInfo = coffeeInfo[Math.floor(Math.random() * coffeeInfo.length)];
    }

    var markerImage = new kakao.maps.MarkerImage(markerImageSrc, new kakao.maps.Size(24, 35), {
        offset: new kakao.maps.Point(13, 33),
        alt: "마커 이미지"
    });

    var marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage
    });

    marker.info = markerInfo;

    kakao.maps.event.addListener(marker, 'click', function () {
        var content = '<div style="padding:5px;">' +
            '<img src="' + marker.info.image + '" style="width:150px; height:150px; margin-right:5px; float:left;">' +
            '<div style="width:150px; padding-top:10px; float:left;">' +
            '<p>' + marker.info.number + '</p>' +
            '<p>' + marker.info.address + '</p>' +
            '<p>' + marker.info.rotation + '</p>' +
            '<p>' + marker.info.fixed + '</p>' +
            '<p>' + marker.info.description + '</p>' +
            '</div>' +
            '</div>';

        overlayContent.innerHTML = content;
        overlay.style.display = 'block';
    });

    markers.push(marker);
    showMarkers();
}

function showMarkers() {
    hideMarkers();

    var category = document.getElementById('category').value;

    if (category === 'all') {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }
    } else {
        for (var i = 0; i < markers.length; i++) {
            switch (category) {
                case 'coffee':
                    if (coffeePositions.includes(markers[i].getPosition())) {
                        markers[i].setMap(map);
                    }
                    break;
                case 'store':
                    if (storePositions.includes(markers[i].getPosition())) {
                        markers[i].setMap(map);
                    }
                    break;
                case 'carpark':
                    if (carparkPositions.includes(markers[i].getPosition())) {
                        markers[i].setMap(map);
                    }
                    break;
                default:
                    break;
            }
        }
    }
}

function hideMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
}

function changeMarker(category) {
    showMarkers();
}

function moveToCoordinates() {
    var lat = parseFloat(document.getElementById('lat').value);
    var lng = parseFloat(document.getElementById('lng').value);
    var moveLatLon = new kakao.maps.LatLng(lat, lng);
    map.panTo(moveLatLon);
}

function init() {
    var mapContainer = document.getElementById('map');
    var mapOption = {
        center: new kakao.maps.LatLng(37.49620122629613, 127.03141908844448),
        level: 4
    };

    map = new kakao.maps.Map(mapContainer, mapOption);

    var coffeeMenu = document.getElementById('coffeeMenu');
    var storeMenu = document.getElementById('storeMenu');
    var carparkMenu = document.getElementById('carparkMenu');
    var allMenu = document.getElementById('allMenu');

    coffeeMenu.onclick = function () {
        changeMarker('coffee');
    };
    storeMenu.onclick = function () {
        changeMarker('store');
    };
    carparkMenu.onclick = function () {
        changeMarker('carpark');
    };
    allMenu.onclick = function () {
        changeMarker('all');
    };

    overlayClose.onclick = function () {
        overlay.style.display = 'none';
    };

    // Show all markers by default
    showMarkers();
}

window.onload = init;

        var mapContainer = document.getElementById('map');
        var mapOption = {
            center: new kakao.maps.LatLng(37.5662952, 126.97794509999994),
            level: 5
        };

        map = new kakao.maps.Map(mapContainer, mapOption);

        // Show all markers by default
        showMarkers('all');
    };
