// 기존 카카오 지도 코드 유지
var mapContainer = document.getElementById('map');
var mapOption = {
    center: new kakao.maps.LatLng(37.4295040000, 126.9883220000),
    level: 5
};
var map = new kakao.maps.Map(mapContainer, mapOption);

// 로드뷰 컨테이너와 로드뷰 객체 초기화
var roadviewContainer = document.getElementById('roadview'); 
var roadview = new kakao.maps.Roadview(roadviewContainer); 
var roadviewClient = new kakao.maps.RoadviewClient(); 

// 특정 위치의 로드뷰 파노라마 ID를 얻어 로드뷰를 표시합니다
var position = new kakao.maps.LatLng(37.4295040000, 126.9883220000);
roadviewClient.getNearestPanoId(position, 50, function(panoId) {
    roadview.setPanoId(panoId, position);
});

// 지도의 특정 위치를 클릭하면 로드뷰 위치를 변경하는 기능 추가
kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
    var clickedPosition = mouseEvent.latLng;

    // 로드뷰 파노라마 ID 얻기
    roadviewClient.getNearestPanoId(clickedPosition, 50, function(panoId) {
        if (panoId !== null) {
            roadview.setPanoId(panoId, clickedPosition);
        } else {
            alert('해당 위치에 로드뷰가 없습니다.');
        }
    });
});

// 지도에 마커 표시
var marker = new kakao.maps.Marker({
    position: position,
    map: map
});

// 로드뷰 토글 버튼 기능 추가
var roadviewVisible = false;
var toggleRoadviewBtn = document.getElementById('toggleRoadviewBtn');

toggleRoadviewBtn.addEventListener('click', function() {
    roadviewVisible = !roadviewVisible;
    if (roadviewVisible) {
        mapContainer.style.display = 'none';
        roadviewContainer.style.display = 'block';
        toggleRoadviewBtn.textContent = '지도 보기';
    } else {
        mapContainer.style.display = 'block';
        roadviewContainer.style.display = 'none';
        toggleRoadviewBtn.textContent = '로드뷰 보기';
    }
});

// 추가된 기능 유지
var categories = ['갈현동', '과천동', '문원동', '별양동', '부림동', '주암동', '중앙동', '기타', '회전형', '고정형', '전부'];

var markers = [];
var currentOverlay = null;

createMarkersAndOverlays('전부');

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
        } else if (category === '고정형') {
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
        position: new kakao.maps.LatLng(position.lat, position.lng),
        map: map
    });
}

// 검색 기능 추가
var searchForm = document.getElementById('newSearchForm');
var searchInput = document.getElementById('newSearchInput');
searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var query = searchInput.value.trim();
    if (query) {
        searchLocation(query);
    }
});

function searchLocation(query) {
    var parts = query.split('/');
    if (parts.length === 2) {
        var lat = parseFloat(parts[0]);
        var lng = parseFloat(parts[1]);
        if (!isNaN(lat) && !isNaN(lng)) {
            var position = new kakao.maps.LatLng(lat, lng);
            map.setCenter(position);
            roadviewClient.getNearestPanoId(position, 50, function(panoId) {
                if (panoId !== null) {
                    roadview.setPanoId(panoId, position);
                } else {
                    alert('해당 위치에 로드뷰가 없습니다.');
                }
            });
        } else {
            alert('유효한 위도/경도를 입력하세요.');
        }
    } else {
        var found = false;
        allInfo.forEach(function(info, index) {
            if (info.number === query) {
                var position = new kakao.maps.LatLng(allPositions[index].lat, allPositions[index].lng);
                map.setCenter(position);
                showCustomOverlay(allPositions[index], index);
                found = true;
            }
        });
        if (!found) {
            alert('해당 관리번호를 찾을 수 없습니다.');
        }
    }
}
