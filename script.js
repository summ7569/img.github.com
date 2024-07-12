var mapContainer = document.getElementById('map');
var mapOption = {
    center: new kakao.maps.LatLng(37.4295040000, 126.9883220000),
    level: 5
};
var map = new kakao.maps.Map(mapContainer, mapOption);

var categories = ['갈현동', '과천동', '문원동', '별양동', '부림동', '주암동', '중앙동', '기타', '회전형', '고정형', '전부'];

var categoryData = {
    '갈현동': { name: '갈현동' },
    '과천동': { name: '과천동' },
    '문원동': { name: '문원동' },
    '별양동': { name: '별양동' },
    '부림동': { name: '부림동' },
    '주암동': { name: '주암동' },
    '중앙동': { name: '중앙동' },
    '기타': { name: '기타' },
    '회전형': { name: '회전형', filter: 'rotation', minCount: 1},
    '고정형': { name: '고정형', filter: 'fixed', minCount: 1},
    '전부': { name: '전부', includeAll: true }
};

var Apositions = [
    { category: '갈현동', lat: 37.4249270000, lng:126.9897680000 },
    { category: '갈현동', lat: 37.423681, lng: 126.9929 } // 새로운 위치 정보 추가
];

var AInfo = [
    {
        number: "A-GH-3",
        address: "원문동 1",
        rotation: 1,
        fixed: 4,
        description: "원문동1 소공원 지하철역 5번 출구",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-GH-4", // 새로운 관리번호 추가
        address: "원문동 2-1",
        rotation: 1,
        fixed: 4,
        description: "우체국사거리 2단지 소공원",
        image: "https://via.placeholder.com/150"
    }
];

var Bpositions = [
    { category: '과천동', lat: 37.4464177858 , lng: 126.9919198623 },
    { category: '과천동', lat: 37.447129, lng: 126.993063 }
];
var BInfo = [
    {
        number: "A-GC-14",
        address: "과천동 513-64",
        rotation: 2,
        fixed: 3,
        description: "과천동 어린이집 앞",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-GC-15",
        address: "과천동 513-152",
        rotation: 2,
        fixed: 3,
        description: "과천동 어린이집 앞",
        image: "https://via.placeholder.com/150"
    }
];

var Cpositions = [
    { category: '문원동', lat: 37.428, lng: 127.008 }
];
var CInfo = [
    {
        number: "HP-113",
        address: "문원동",
        rotation: 3,
        fixed: 2,
        description: "문원동 어린이집 앞",
        image: "https://via.placeholder.com/150"
    }
];

var Dpositions = [
    { category: '별양동', lat: 37.426, lng: 126.994 }
];
var DInfo = [
    {
        number: "HP-114",
        address: "별양동",
        rotation: 1,
        fixed: 4,
        description: "별양동 어린이집 앞",
        image: "https://via.placeholder.com/150"
    }
];

var Epositions = [
    { category: '부림동', lat: 37.429, lng: 127.000 }
];
var EInfo = [
    {
        number: "HP-115",
        address: "부림동",
        rotation: 1,
        fixed: 3,
        description: "부림동 어린이집 앞",
        image: "https://via.placeholder.com/150"
    }
];

var Fpositions = [
    { category: '주암동', lat: 37.430, lng: 127.013 }
];
var FInfo = [
    {
        number: "HP-116",
        address: "주암동",
        rotation: 0,
        fixed: 2,
        description: "주암동 어린이집 앞",
        image: "https://via.placeholder.com/150"
    }
];

var Gpositions = [
    { category: '중앙동', lat: 37.433, lng: 126.999 }
];
var GInfo = [
    {
        number: "HP-117",
        address: "중앙동",
        rotation: 2,
        fixed: 1,
        description: "중앙동 어린이집 앞",
        image: "https://via.placeholder.com/150"
    }
];

var Hpositions = [
    { category: '기타', lat: 37.440, lng: 127.002 }
];
var HInfo = [
    {
        number: "HP-118",
        address: "기타",
        rotation: 1,
        fixed: 0,
        description: "기타 어린이집 앞",
        image: "https://via.placeholder.com/150"
    }
];

var Ipositions = [
    { category: '전부', lat: 37.446, lng: 127.003 }
];
var IInfo = [
    {
        number: "A-GC-14",
        address: "전부",
        rotation: 1,
        fixed: 2,
        description: "전부 어린이집 앞",
        image: "https://via.placeholder.com/150"
    }
];

var positions = Apositions.concat(Bpositions, Cpositions, Dpositions, Epositions, Fpositions, Gpositions, Hpositions, Ipositions);
var info = AInfo.concat(BInfo, CInfo, DInfo, EInfo, FInfo, GInfo, HInfo, IInfo);

var markers = [];
var currentOverlay = null;

// 모든 마커와 오버레이를 표시합니다.
createMarkersAndOverlays('전부');

function createMarkersAndOverlays(category) {
    closeCustomOverlay(); // 현재 열려 있는 커스텀 오버레이 닫기
    markers.forEach(function(marker) {
        marker.setMap(null);
    });
    markers = [];

    positions.forEach(function(position, index) {
        var showMarker = true;
        if (category === '회전형') {
            if (info[index].rotation < 1) { // 회전형 카테고리 조건 변경
                showMarker = false;
            }
        } else if (category === '고정형') {
            if (info[index].fixed < 1) { // 고정형 카테고리 조건 변경
                showMarker = false;
            }
        }

        if (category === '전부' || position.category === category) {
            if (showMarker) {
                var markerPosition = new kakao.maps.LatLng(position.lat, position.lng);

                var markerImage = 'http://t1.daumcdn.net/localimg/localimages/07/2018/pc/img/marker_spot.png'; // 기본 마커 이미지

                var marker = new kakao.maps.Marker({
                    position: markerPosition,
                    image: new kakao.maps.MarkerImage(markerImage, new kakao.maps.Size(30, 30)) // 기본 마커 이미지 크기 설정
                });
                markers.push(marker);

                kakao.maps.event.addListener(marker, 'click', function() {
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
    // 기존의 커스텀 오버레이를 닫습니다.
    closeCustomOverlay();

    var overlayContent =
        '<div class="customOverlay">' +
        '    <span class="closeBtn" onclick="closeCustomOverlay()">×</span>' +
        '    <div class="title">' + position.category + '</div>' +
        '    <div class="desc">' +
        '        <div class="desc-content">' +
        '            <img src="' + info[index].image + '" width="50" height="50">' +
        '            <div>' +
        '                <p>관리번호 : ' + info[index].number + '</p>' +
        '                <p>주소 : ' + info[index].address + '</p>' +
        '                <p>회전형 : ' + info[index].rotation + '</p>' +
        '                <p>고정형 : ' + info[index].fixed + '</p>' +
        '                <p>상세설명 : ' + info[index].description + '</p>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>';

    currentOverlay = new kakao.maps.CustomOverlay({
        content: overlayContent,
        map: map,
        position: new kakao.maps.LatLng(position.lat, position.lng),
        yAnchor: 0.5 // 중앙 정렬
    });
}

var categoryDropdown = document.getElementById('categoryDropdown');
var toggleUIBtn = document.getElementById('toggleUIBtn');

// 드롭다운 형식의 카테고리 목록 생성 및 클릭 이벤트 추가
Object.keys(categoryData).forEach(function(categoryKey) {
    var option = document.createElement('option');
    option.value = categoryKey;
    option.textContent = categoryData[categoryKey].name;
    categoryDropdown.appendChild(option);
});

categoryDropdown.addEventListener('change', function() {
    var selectedCategory = categoryDropdown.value;
    createMarkersAndOverlays(selectedCategory);
});

// UI 토글 버튼 클릭 이벤트 추가
toggleUIBtn.addEventListener('click', function() {
    var mapWrapper = document.getElementById('mapWrapper');
    if (mapWrapper.classList.contains('hideUI')) {
        mapWrapper.classList.remove('hideUI');
        toggleUIBtn.textContent = 'UI 숨기기';
    } else {
        mapWrapper.classList.add('hideUI');
        toggleUIBtn.textContent = 'UI 보이기';
    }
});

// 검색창을 추가하여 위도/경도/관리번호로 위치 검색 가능하도록 설정
var searchForm = document.createElement('form');
searchForm.id = 'searchForm';
searchForm.innerHTML = `
    <input type="text" id="searchInput" placeholder="위도/경도 또는 관리번호 입력" required>
    <button type="submit">검색</button>
`;
map.controls[kakao.maps.ControlPosition.TOP_LEFT].push(searchForm);

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var userInput = document.getElementById('searchInput').value.trim();

    // 위도/경도 입력인지 관리번호 입력인지 확인 후 처리
    var position = null;
    var category = '전부'; // 기본적으로 전체 카테고리에서 검색

    // 위도/경도 형식인지 확인
    var latLngPattern = /(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)/;
    if (latLngPattern.test(userInput)) {
        var match = userInput.match(latLngPattern);
        var lat = parseFloat(match[1]);
        var lng = parseFloat(match[3]);
        position = new kakao.maps.LatLng(lat, lng);
    } else {
        // 관리번호 검색
        var filtered = info.filter(function(item) {
            return item.number.toLowerCase() === userInput.toLowerCase();
        });
        if (filtered.length > 0) {
            position = new kakao.maps.LatLng(filtered[0].lat, filtered[0].lng);
            category = filtered[0].category;
        }
    }

    if (position) {
        map.setCenter(position);
        map.setLevel(4);
        createMarkersAndOverlays(category);
    } else {
        alert('유효한 위도/경도 또는 관리번호를 입력하세요.');
    }

});
