var mapContainer = document.getElementById('map'),
    mapOption = {
        center: new kakao.maps.LatLng(37.499590490909185, 127.0263723554437),
        level: 5
    };
var mapContainer = document.getElementById('map');
var mapOption = {
    center: new kakao.maps.LatLng(37.499590490909185, 127.0263723554437),
    level: 5
};

var map = new kakao.maps.Map(mapContainer, mapOption);

var coffeePositions = [
    { 
        position: new kakao.maps.LatLng(37.499590490909185, 127.0263723554437),
        content: '<div class="customOverlay">' +
                 '    <h3>커피 위치 정보</h3>' +
                 '    <p>주소: 부림동 52-1</p>' +
                 '    <p>상세내용: 커피 맛집입니다.</p>' +
                 '    <button class="close" onclick="closeOverlay(' + markerList.length + ')">닫기</button>' +
                 '</div>'
    },
    {
        position: new kakao.maps.LatLng(37.499427948430814, 127.02794423197847),
        content: '<div class="customOverlay">' +
                 '    <h3>커피 위치 정보</h3>' +
                 '    <p>주소: 부림동 110-1</p>' +
                 '    <p>상세내용: 한 잔의 휴식을 찾을 수 있는 곳입니다.</p>' +
                 '    <button class="close" onclick="closeOverlay(' + markerList.length + ')">닫기</button>' +
                 '</div>'
    }
];

var storePositions = [
    {
        position: new kakao.maps.LatLng(37.497535461505684, 127.02948149502778),
        content: '<div class="customOverlay">' +
                 '    <h3>가게 위치 정보</h3>' +
                 '    <p>주소: 중앙동 52-1</p>' +
                 '    <p>상세내용: 다양한 상품을 즐길 수 있는 가게입니다.</p>' +
                 '    <button class="close" onclick="closeOverlay(' + markerList.length + ')">닫기</button>' +
                 '</div>'
    }
];

var carparkPositions = [
    {
        position: new kakao.maps.LatLng(37.49966168796031, 127.03007039430118),
        content: '<div class="customOverlay">' +
                 '    <h3>주차장 위치 정보</h3>' +
                 '    <p>주소: 공원동 52-1</p>' +
                 '    <p>상세내용: 중앙공원 내 물놀이터에 위치한 주차장입니다.</p>' +
                 '    <p>회전형: 1대 (비알인포텍), 고정형: 7대 (레스큐)</p>' +
                 '    <button class="close" onclick="closeOverlay(' + markerList.length + ')">닫기</button>' +
                 '</div>'
    }
];

var markerImageSrc = 'https://github.com/summ7569/summ7569.github.io/blob/master/category.png?raw=true';

var markerList = [];
var overlayList = [];

function displayMarkers() {
    displayMarker(coffeePositions, 'coffee', 'ico_coffee');
    displayMarker(storePositions, 'store', 'ico_store');
    displayMarker(carparkPositions, 'carpark', 'ico_carpark');
}

function displayMarker(locations, category, imgSrc) {
    for (var i = 0; i < locations.length; i++) {
        var imageSize = new kakao.maps.Size(22, 26),
            imgOptions = {
                spriteSize: new kakao.maps.Size(36, 98),
                spriteOrigin: new kakao.maps.Point(10, imgSrc === 'ico_coffee' ? 0 : imgSrc === 'ico_store' ? 36 : 72),
                offset: new kakao.maps.Point(11, 26)
            },
            markerImage = new kakao.maps.MarkerImage(markerImageSrc, imageSize, imgOptions),
            marker = new kakao.maps.Marker({
                position: locations[i].position,
                image: markerImage,
                category: category
            });

        var customOverlay = new kakao.maps.CustomOverlay({
            content: locations[i].content,
            map: map,
            position: locations[i].position,
            yAnchor: 1
        });

        kakao.maps.event.addListener(marker, 'click', function(customOverlay) {
            return function() {
                closeAllOverlays();
                customOverlay.setMap(map);
            };
        }(customOverlay));

        marker.setMap(map);
        markerList.push(marker);
        overlayList.push(customOverlay);
    }
}

function closeOverlay(index) {
    overlayList[index].setMap(null);
}

function closeAllOverlays() {
    for (var i = 0; i < overlayList.length; i++) {
        overlayList[i].setMap(null);
    }
}

function clearMarkers() {
    for (var i = 0; i < markerList.length; i++) {
        markerList[i].setMap(null);
    }
    markerList = [];
    overlayList = [];
}

// 초기화 함수
function initMap() {
    displayMarkers();
}

// UI 토글 함수
function toggleUI() {
    var category = document.querySelector('.category');
    var searchForm = document.getElementById('searchForm');
    var toggleButton = document.getElementById('toggleUI');

    if (category.style.display === 'none') {
        category.style.display = 'block';
        searchForm.style.display = 'block';
        toggleButton.innerHTML = 'UI 숨기기';
    } else {
        category.style.display = 'none';
        searchForm.style.display = 'none';
        toggleButton.innerHTML = 'UI 보이기';
    }
}

// 지도 초기화
initMap();

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
    "부림동 52-1",
    "부림동 110-1",
    "부림동 140-1",
    "부림동 120-1",
    "부림동 122-221",
    "부림동 540-1",
    "부림동 1340-1"
];

var storePositions = [
    new kakao.maps.LatLng(37.497535461505684, 127.02948149502778),
    new kakao.maps.LatLng(37.49671536281186, 127.03020491448352),
    new kakao.maps.LatLng(37.496201943633714, 127.02959405469642),
    new kakao.maps.LatLng(37.49640072567703, 127.02726459882308),
    new kakao.maps.LatLng(37.49640098874988, 127.02609983175294),
    new kakao.maps.LatLng(37.49932849491523, 127.02935780247945),
    new kakao.maps.LatLng(37.49996818951873, 127.02943721562295)
];

var storeInfo = [
    "중앙동 52-1",
    "과천동 110-1",
    "중앙동 140-1",
    "과천동 120-1",
    "과천동 122-221",
    "과천동 540-1",
    "과천동 1340-1"
];

var carparkPositions = [
    new kakao.maps.LatLng(37.49966168796031, 127.03007039430118),
    new kakao.maps.LatLng(37.499463762912974, 127.0288828824399),
    new kakao.maps.LatLng(37.49896834100913, 127.02833986892401),
    new kakao.maps.LatLng(37.49893267508434, 127.02673400572665),
    new kakao.maps.LatLng(37.49872543597439, 127.02676785815386),
    new kakao.maps.LatLng(37.49813096097184, 127.02591949495914),
    new kakao.maps.LatLng(37.497680616783086, 127.02518427952202)
];

var carparkInfo = [
    "공원동 52-1",
    "공원동 110-1",
    "공원동 140-1",
    "공원동 120-1",
    "공원동 122-221",
    "공원동 540-1",
    "공원동 1340-1"
];

var markerImageSrc = 'https://github.com/summ7569/summ7569.github.io/blob/master/category.png?raw=true';

var markerList = [];

function changeMarker(type) {
    removeMarker();
    switch (type) {
        case 'coffee':
            displayMarker(coffeePositions, coffeeInfo, 'ico_coffee');
            break;
        case 'store':
            displayMarker(storePositions, storeInfo, 'ico_store');
            break;
        case 'carpark':
            displayMarker(carparkPositions, carparkInfo, 'ico_carpark');
            break;
        case 'all':
            displayMarker(coffeePositions, coffeeInfo, 'ico_coffee');
            displayMarker(storePositions, storeInfo, 'ico_store');
            displayMarker(carparkPositions, carparkInfo, 'ico_carpark');
            break;
    }
}

function displayMarker(locPositions, locInfo, imgSrc) {
    for (var i = 0; i < locPositions.length; i++) {
        var imageSize = new kakao.maps.Size(22, 26),
            imgOptions = {
                spriteSize: new kakao.maps.Size(36, 98),
                spriteOrigin: new kakao.maps.Point(10, imgSrc === 'ico_coffee' ? 0 : imgSrc === 'ico_store' ? 36 : 72),
                offset: new kakao.maps.Point(11, 26)
            },
            markerImage = new kakao.maps.MarkerImage(markerImageSrc, imageSize, imgOptions),
            marker = new kakao.maps.Marker({
                position: locPositions[i],
                image: markerImage
            });

        var infowindow = new kakao.maps.InfoWindow({
            content: locInfo[i]
        });

        kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
        kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));

        marker.setMap(map);
        markerList.push(marker);
    }
}

function removeMarker() {
    for (var i = 0; i < markerList.length; i++) {
        markerList[i].setMap(null);
    }
    markerList = [];
}

function makeOverListener(map, marker, infowindow) {
    return function () {
        infowindow.open(map, marker);
    };
}

function makeOutListener(infowindow) {
    return function () {
        infowindow.close();
    };
}

function addMarker() {
    var lat = document.getElementById('latitude').value;
    var lng = document.getElementById('longitude').value;
    var category = document.getElementById('category').value;
    var info = document.getElementById('info').value;

    var position = new kakao.maps.LatLng(lat, lng);

    var imageSize = new kakao.maps.Size(22, 26),
        imgOptions = {
            spriteSize: new kakao.maps.Size(36, 98),
            spriteOrigin: new kakao.maps.Point(10, category == 'coffee' ? 0 : category == 'store' ? 36 : 72),
            offset: new kakao.maps.Point(11, 26)
        },
        markerImage = new kakao.maps.MarkerImage(markerImageSrc, imageSize, imgOptions),
        marker = new kakao.maps.Marker({
            position: position,
            image: markerImage
        });

    var infowindow = new kakao.maps.InfoWindow({
        content: info
    });

    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));

    marker.setMap(map);
    markerList.push(marker);
}

function moveToCoordinates() {
    var lat = document.getElementById('latitude').value;
    var lng = document.getElementById('longitude').value;

    var moveLatLon = new kakao.maps.LatLng(lat, lng);
    map.setCenter(moveLatLon);
}

function clearMarkers() {
    removeMarker();
}

function toggleUI() {
    var category = document.querySelector('.category');
    var searchForm = document.getElementById('searchForm');
    var toggleButton = document.getElementById('toggleUI');

    if (category.style.display === 'none') {
        category.style.display = 'block';
        searchForm.style.display = 'block';
        toggleButton.innerHTML = 'UI 숨기기';
    } else {
        category.style.display = 'none';
        searchForm.style.display = 'none';
        toggleButton.innerHTML = 'UI 보이기';
    }
}
