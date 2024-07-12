// Kakao Maps SDK 로드 후 실행되는 부분
kakao.maps.load(function() {
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
        '회전형': { name: '회전형', filter: 'rotation', minCount: 1 },
        '고정형': { name: '고정형', filter: 'fixed', minCount: 1 },
        '전부': { name: '전부', includeAll: true }
    };

    // 전체 위치 정보와 정보 리스트
    var Apositions = [
        { category: '갈현동', lat: 37.4249270000, lng: 126.9897680000 },
        { category: '갈현동', lat: 37.423681, lng: 126.9929 }
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
            number: "A-GH-4",
            address: "원문동 2-1",
            rotation: 1,
            fixed: 4,
            description: "우체국사거리 2단지 소공원",
            image: "https://via.placeholder.com/150"
        }
        // AInfo에 대한 추가된 정보
    ];

    var Bpositions = [
        { category: '과천동', lat: 37.4464177858, lng: 126.9919198623 },
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
            rotation: 0,
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

    var positions = Apositions.concat(Bpositions, Cpositions, Dpositions, Epositions, Fpositions, Gpositions, Hpositions);
    var info = AInfo.concat(BInfo, CInfo, DInfo, EInfo, FInfo, GInfo, HInfo);

    var markers = []; // 마커 배열
    var currentOverlay = null; // 현재 열려 있는 오버레이

    var rotationMarkerImage = {
        url: 'https://github.com/summ7569/summ7569.github.io/blob/master/category1.png?raw=true',
        size: new kakao.maps.Size(50, 50),
        origin: new kakao.maps.Point(0, 0),
        anchor: new kakao.maps.Point(25, 25)
    };

    var fixedMarkerImage = {
        url: 'https://github.com/summ7569/summ7569.github.io/blob/master/category2.png?raw=true',
        size: new kakao.maps.Size(50, 50),
        origin: new kakao.maps.Point(0, 0),
        anchor: new kakao.maps.Point(25, 25)
    };

    var defaultMarkerImage = {
        url: 'https://t1.daumcdn.net/localimg/localimages/07/2018/pc/img/marker_spot.png',
        size: new kakao.maps.Size(50, 50),
        origin: new kakao.maps.Point(0, 0),
        anchor: new kakao.maps.Point(25, 25)
    };

    // 마커를 생성하고 지도 위에 표시하는 함수
    function createMarkersAndOverlays(category) {
        clearOverlays(); // 기존 오버레이 제거

        var bounds = new kakao.maps.LatLngBounds();

        // 선택된 카테고리에 맞게 마커를 생성하여 지도에 표시
        positions.forEach(function(pos, index) {
            if (category === '전부' || pos.category === category) {
                var markerImage = defaultMarkerImage;
                if (pos.rotation > 0) {
                    markerImage = rotationMarkerImage;
                } else if (pos.fixed > 0) {
                    markerImage = fixedMarkerImage;
                }

                var markerPosition = new kakao.maps.LatLng(pos.lat, pos.lng);
                var marker = new kakao.maps.Marker({
                    position: markerPosition,
                    image: markerImage
                });

                marker.setMap(map);
                markers.push(marker);

                var overlayContent = '<div class="customOverlay">' +
                                        '<div class="title">' + info[index].number + '</div>' +
                                        '<div class="desc">' + info[index].address + '</div>' +
                                        '<div class="desc">' + info[index].description + '</div>' +
                                        '<div class="desc-content">' +
                                            '<img src="' + info[index].image + '">' +
                                            '<div>' + (info[index].rotation > 0 ? '회전형' : '고정형') + '</div>' +
                                        '</div>' +
                                        '<div class="closeBtn" onclick="closeOverlay()">닫기</div>' +
                                      '</div>';

                var overlay = new kakao.maps.CustomOverlay({
                    content: overlayContent,
                    map: map,
                    position: marker.getPosition()
                });

                kakao.maps.event.addListener(marker, 'click', function() {
                    if (currentOverlay) {
                        currentOverlay.setMap(null);
                    }
                    overlay.setMap(map);
                    currentOverlay = overlay;
                });

                bounds.extend(markerPosition);
            }
        });

        // 선택된 마커들이 모두 보이도록 지도의 중심과 레벨을 조정
        map.setBounds(bounds);
    }

    // 오버레이 닫기 함수
    function closeOverlay() {
        if (currentOverlay) {
            currentOverlay.setMap(null);
            currentOverlay = null;
        }
    }

    // 카테고리 선택 변경 시 호출되는 함수
    function updateCategory() {
        var selectedCategory = document.getElementById('categorySelect').value;
        createMarkersAndOverlays(selectedCategory);
    }

    // 검색 버튼 클릭 시 호출되는 함수
    function searchLocation() {
        var input = document.getElementById('searchInput').value.trim();
        if (input === '') {
            alert('위도, 경도 또는 관리번호를 입력하세요.');
            return;
        }

        // 입력 받은 위치 정보로 검색하여 지도 이동 및 마커 표시
        // 예시로만 구현하였으며, 실제 검색 기능은 상세히 구현되지 않았습니다.
        var latlng = new kakao.maps.LatLng(37.5, 127.0); // 예시 위치 정보
        map.panTo(latlng); // 예시로만 이동
        var marker = new kakao.maps.Marker({ position: latlng });
        marker.setMap(map); // 예시로만 마커 표시
    }

    // UI 숨기기/보이기 버튼 클릭 시 호출되는 함수
    function toggleUI() {
        var categorySelectContainer = document.getElementById('categorySelectContainer');
        var searchContainer = document.getElementById('searchContainer');
        var toggleButton = document.getElementById('toggleButton');

        if (categorySelectContainer.style.display !== 'none') {
            categorySelectContainer.style.display = 'none';
            searchContainer.style.display = 'none';
            toggleButton.textContent = '보이기';
        } else {
            categorySelectContainer.style.display = 'block';
            searchContainer.style.display = 'block';
            toggleButton.textContent = '숨기기';
        }
    }

    // 초기화 함수
    function init() {
        updateCategory(); // 초기 카테고리 설정
    }

    // 오버레이와 마커 제거 함수
    function clearOverlays() {
        markers.forEach(function(marker) {
            marker.setMap(null);
        });
        markers = [];

        if (currentOverlay) {
            currentOverlay.setMap(null);
            currentOverlay = null;
        }
    }

    init(); // 초기화 함수 호출
});
