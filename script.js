// 초기 설정
const allPositions = Apositions.concat(Bpositions, Cpositions, Dpositions, Epositions, Fpositions, Gpositions, Hpositions);
const allInfo = AInfo.concat(BInfo, CInfo, DInfo, EInfo, FInfo, GInfo, HInfo);

var mapContainer = document.getElementById('map');
var mapOption = {
    center: new kakao.maps.LatLng(37.429504, 126.988322),
    level: 5
};
var map = new kakao.maps.Map(mapContainer, mapOption);

// 로드뷰 컨테이너와 객체 초기화
var roadviewContainer = document.getElementById('roadview'); 
var roadview = new kakao.maps.Roadview(roadviewContainer); 
var roadviewClient = new kakao.maps.RoadviewClient(); 

// 초기 로드뷰 위치 설정
var position = new kakao.maps.LatLng(37.429504, 126.988322);
roadviewClient.getNearestPanoId(position, 50, function(panoId) {
    if (panoId !== null) {
        roadview.setPanoId(panoId, position);
    } else {
        console.error('해당 위치에 로드뷰가 없습니다.');
    }
});

// 작은 지도 컨테이너와 지도 객체 초기화
var miniMapContainer = document.getElementById('miniMap');
var miniMap = new kakao.maps.Map(miniMapContainer, {
    center: map.getCenter(),
    level: 5
});

// 이벤트 리스너 추가
kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
    if (roadviewVisible) { // 로드뷰가 활성화된 경우
        var clickedPosition = mouseEvent.latLng;
        roadviewClient.getNearestPanoId(clickedPosition, 50, function(panoId) {
            if (panoId !== null) {
                roadview.setPanoId(panoId, clickedPosition);
            } else {
                alert('해당 위치에 로드뷰가 없습니다.');
            }
        });
    }
    if (isLatLngClickMode) {
        var latlng = mouseEvent.latLng; 
        closeTempOverlay();
        var tempOverlayContent =
            '<div class="customOverlay">' +
            '    <span class="closeBtn" onclick="closeTempOverlay()">×</span>' +
            '    클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, 경도는 ' + latlng.getLng() + ' 입니다' +
            '</div>';
        tempOverlay = new kakao.maps.CustomOverlay({
            content: tempOverlayContent,
            map: map,
            position: latlng,
            yAnchor: 2.0
        });
    }
});

// 로드뷰 가시성 토글 버튼 기능
var roadviewVisible = false;
var toggleRoadviewBtn = document.getElementById('toggleRoadviewBtn');
toggleRoadviewBtn.addEventListener('click', function() {
    roadviewVisible = !roadviewVisible;
    if (roadviewVisible) {
        mapContainer.classList.add('minimized');
        roadviewContainer.style.display = 'block';
        toggleRoadviewBtn.textContent = '지도 보기';
    } else {
        mapContainer.classList.remove('minimized');
        roadviewContainer.style.display = 'none';
        toggleRoadviewBtn.textContent = '로드뷰 보기';
    }
});

// 로드뷰와 작은 지도 연동
kakao.maps.event.addListener(roadview, 'position_changed', function() {
    const panoPosition = roadview.getPosition();
    miniMap.setCenter(panoPosition);
});
kakao.maps.event.addListener(roadview, 'viewpoint_changed', function() {
    const panoPosition = roadview.getPosition();
    miniMap.setCenter(panoPosition);
});

// 마커와 오버레이 생성
var markers = [];
var currentOverlay = null;
var isLatLngClickMode = false; // 위도/경도 모드 플래그
var tempOverlay = null; // 임시 오버레이 변수

function createMarkersAndOverlays(category) {
    closeCustomOverlay(); 
    markers.forEach(function(marker) {
        marker.setMap(null);
    });
    markers = [];

    allPositions.forEach(function(position, index) {
        var showMarker = true;
        if (category === '회전형') {
            if (allInfo[index].rotation < 1) {
                showMarker = false;
            }
        }
        else if (category === '고정형') {
            if (allInfo[index].fixed < 1) {
                showMarker = false;
            }
        }
        if (category === '전부' || position.category === category) {
            if (showMarker) {
                var markerPosition = new kakao.maps.LatLng(position.lat, position.lng);
                var markerImage = 'http://t1.daumcdn.net/localimg/localimages/07/2018/pc/img/marker_spot.png'; 
                var marker = new kakao.maps.Marker({
                    position: markerPosition,
                    image: new kakao.maps.MarkerImage(markerImage, new kakao.maps.Size(30, 40))
                });
                markers.push(marker);
                kakao.maps.event.addListener(marker, 'click', function() {
                    showCustomOverlay(position, index);
                });
                kakao.maps.event.addListener(marker, 'touchstart', function() {
                    showCustomOverlay(position, index);
                });
                marker.setMap(map);
            }
        }
    });
}

// 커스텀 오버레이 함수
function closeCustomOverlay() {
    if (currentOverlay) {
        currentOverlay.setMap(null);
        currentOverlay = null;
    }
}

function showCustomOverlay(position, index) {
    closeCustomOverlay();
    var overlayContent =
        '<div class="customOverlay">' +
        '    <span class="closeBtn" onclick="closeCustomOverlay()">×</span>' +
        '    <div class="title">' + position.category + '</div>' +
        '    <div class="desc">' +
        '        <div class="desc-content">' +
        '            <img src="' + allInfo[index].image + '" width="50" height="50">' +
        '            <div>' +
        '                <p>관리번호 : ' + allInfo[index].number + '</p>' +
        '                <p>주소 : ' + allInfo[index].address + '</p>' +
        '                <p>회전형 : ' + allInfo[index].rotation + '</p>' +
        '                <p>고정형 : ' + allInfo[index].fixed + '</p>' +
        '                <p>상세설명 : ' + allInfo[index].description + '</p>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>';

    currentOverlay = new kakao.maps.CustomOverlay({
        content: overlayContent,
        map: map,
        position: new kakao.maps.LatLng(position.lat, position.lng),
        yAnchor: 1.1
    });
}

// 카테고리 드롭다운 생성 및 이벤트 리스너 추가
var categories = ['갈현동', '과천동', '문원동', '별양동', '부림동', '주암동', '중앙동', '기타', '회전형', '고정형', '전부'];
var categoryDropdown = document.getElementById('categoryDropdown');
categories.forEach(function(category) {
    var option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryDropdown.appendChild(option);
});
categoryDropdown.addEventListener('change', function() {
    var selectedCategory = categoryDropdown.value;
    createMarkersAndOverlays(selectedCategory);
});

// 검색 기능
var newSearchForm = document.getElementById('newSearchForm');
var newSearchInput = document.getElementById('newSearchInput');
var newSearchBtn = document.getElementById('newSearchBtn');

newSearchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var userInput = newSearchInput.value.trim();
    var position = null;
    var markerIndex = -1;

    var latLngPattern = /(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)/;
    if (latLngPattern.test(userInput)) {
        var match = userInput.match(latLngPattern);
        var lat = parseFloat(match[1]);
        var lng = parseFloat(match[3]);
        position = new kakao.maps.LatLng(lat, lng);
        allPositions.forEach(function(pos, index) {
            if (pos.lat === lat && pos.lng === lng) {
                markerIndex = index;
                return false;
            }
        });
    } else {
        var filtered = allInfo.filter(function(item) {
            return item.number.toLowerCase() === userInput.toLowerCase();
        });
        if (filtered.length > 0) {
            var foundItem = filtered[0];
            var index = allInfo.indexOf(foundItem);
            position = new kakao.maps.LatLng(allPositions[index].lat, allPositions[index].lng);
            markerIndex = index;
        }
    }

    if (position) {
        map.setCenter(position);
        map.setLevel(4);
        createMarkersAndOverlays('전부');
        if (markerIndex !== -1) {
            kakao.maps.event.trigger(markers[markerIndex], 'click');
        } else {
            var tempMarker = new kakao.maps.Marker({
                position: position,
                map: map
            });
            var tempOverlayContent =
                '<div class="customOverlay">' +
                '    <span class="closeBtn" onclick="closeTempOverlay()">×</span>' +
                '    해당 위치에 정보가 없습니다.' +
                '</div>';
            var tempOverlay = new kakao.maps.CustomOverlay({
                content: tempOverlayContent,
                map: map,
                position: position,
                yAnchor: 1.1
            });
            setTimeout(function() {
                tempMarker.setMap(null);
                tempOverlay.setMap(null);
            }, 3000);
        }
    } else {
        alert('유효한 위도/경도 또는 관리번호를 입력하세요.');
    }
});

newSearchBtn.addEventListener('click', function() {
    newSearchForm.dispatchEvent(new Event('submit'));
});

// 임시 오버레이 닫기 함수
function closeTempOverlay() {
    if (tempOverlay) {
        tempOverlay.setMap(null);
        tempOverlay = null;
    }
}

// 위도/경도 모드 버튼 추가
var latLngButton = document.createElement('button');
latLngButton.textContent = '위도/경도 찾기';
latLngButton.style.position = 'absolute';
latLngButton.style.top = '45px';
latLngButton.style.right = '10px';
latLngButton.style.zIndex = 1000;
document.body.appendChild(latLngButton);

latLngButton.addEventListener('click', function() {
    isLatLngClickMode = !isLatLngClickMode;
    latLngButton.textContent = isLatLngClickMode ? '위도/경도 끄기' : '위도/경도 찾기';
});


