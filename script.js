// 카테고리 배열 수정
var categories = ['갈현동', '과천동', '문원동', '별양동', '부림동', '주암동', '중앙동', '기타', '회전형', '고정형', '전부'];

// 모든 마커와 오버레이를 표시할 데이터 설정
const allPositions = Apositions.concat(Bpositions, Cpositions, Dpositions, Epositions, Fpositions, Gpositions, Hpositions);
const allInfo = AInfo.concat(BInfo, CInfo, DInfo, EInfo, FInfo, GInfo, HInfo);

var mapContainer = document.getElementById('map');
var mapOption = {
    center: new kakao.maps.LatLng(37.4295040000, 126.9883220000),
    level: 5
};
var map = new kakao.maps.Map(mapContainer, mapOption);

var markers = [];
var currentOverlay = null;

// 모든 마커와 오버레이를 표시하는 함수 호출
createMarkersAndOverlays('전부');

function createMarkersAndOverlays(category) {
    closeCustomOverlay(); // 현재 열려 있는 커스텀 오버레이 닫기
    markers.forEach(function(marker) {
        marker.setMap(null); // 지도에서 마커 제거
    });
    markers = []; // 마커 배열 초기화

    allPositions.forEach(function(position, index) {
        var showMarker = true;

        // 회전형 카테고리 조건 설정
        if (category === '회전형') {
            if (allInfo[index].rotation < 1) {
                showMarker = false;
            }
        }
        // 고정형 카테고리 조건 설정
        else if (category === '고정형') {
            if (allInfo[index].fixed < 1) {
                showMarker = false;
            }
        }

        // 선택된 카테고리 또는 전체 카테고리인 경우 마커 생성
        if (category === '전부' || position.category === category) {
            if (showMarker) {
                var markerPosition = new kakao.maps.LatLng(position.lat, position.lng);
                var markerImage = 'http://t1.daumcdn.net/localimg/localimages/07/2018/pc/img/marker_spot.png'; // 기본 마커 이미지

                var marker = new kakao.maps.Marker({
                    position: markerPosition,
                    image: new kakao.maps.MarkerImage(markerImage, new kakao.maps.Size(30, 40)) // 기본 마커 이미지 크기 설정
                });
                markers.push(marker);

                kakao.maps.event.addListener(marker, 'click', function() {
                    showCustomOverlay(position, index);
                });

                marker.setMap(map); // 마커 지도에 표시
            }
        }
    });
}

function closeCustomOverlay() {
    if (currentOverlay) {
        currentOverlay.setMap(null); // 오버레이 지도에서 제거
        currentOverlay = null;
    }
}

function showCustomOverlay(position, index) {
    closeCustomOverlay(); // 현재 열려 있는 커스텀 오버레이 닫기

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
        yAnchor: 1.1 // 중앙 정렬(0.5) 위쪽 오버레이 (1.5)
    });
}

var categoryDropdown = document.getElementById('categoryDropdown');

// 드롭다운 형식의 카테고리 목록 생성 및 클릭 이벤트 추가
categoryDropdown.innerHTML = ''; // 기존 옵션 초기화

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

// 새로운 검색창 요소들 가져오기
var newSearchForm = document.getElementById('newSearchForm');
var newSearchInput = document.getElementById('newSearchInput');
var newSearchBtn = document.getElementById('newSearchBtn');

// 검색 이벤트 리스너 추가
newSearchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var userInput = newSearchInput.value.trim();

    var position = null;
    var category = '전부';
    var markerIndex = -1;

    // 위도/경도 형식 확인
    var latLngPattern = /(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)/;
    if (latLngPattern.test(userInput)) {
        var match = userInput.match(latLngPattern);
        var lat = parseFloat(match[1]);
        var lng = parseFloat(match[3]);
        position = new kakao.maps.LatLng(lat, lng);
    } else {
        // 관리번호 검색
        var filtered = allInfo.filter(function(item) {
            return item.number.toLowerCase() === userInput.toLowerCase();
        });
        if (filtered.length > 0) {
            var foundItem = filtered[0];
            var index = allInfo.indexOf(foundItem);
            position = new kakao.maps.LatLng(allPositions[index].lat, allPositions[index].lng);
            category = foundItem.category;
            markerIndex = index;
        }
    }

    if (position) {
        map.setCenter(position);
        map.setLevel(4); // 필요에 따라 줌 레벨을 조정
        createMarkersAndOverlays(category);

        // 검색된 위치의 마커가 클릭된 것처럼 커스텀 오버레이 표시
        if (markerIndex !== -1) {
            kakao.maps.event.trigger(markers[markerIndex], 'click');
        }
    } else {
        alert('유효한 위도/경도 또는 관리번호를 입력하세요.');
    }
});

// 검색 버튼 클릭 시 검색 이벤트 실행
newSearchBtn.addEventListener('click', function() {
    newSearchForm.dispatchEvent(new Event('submit'));
});
