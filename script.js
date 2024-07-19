// 카테고리별 데이터를 모두 불러옵니다.
const allPositions = Apositions.concat(Bpositions, Cpositions, Dpositions, Epositions, Fpositions, Gpositions, Hpositions);
const allInfo = AInfo.concat(BInfo, CInfo, DInfo, EInfo, FInfo, GInfo, HInfo);

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

var overlayOn = false, // 지도 위에 로드뷰 오버레이가 추가된 상태를 가지고 있을 변수
    container = document.getElementById('container'), // 지도와 로드뷰를 감싸고 있는 div 입니다
    mapWrapper = document.getElementById('mapWrapper'), // 지도를 감싸고 있는 div 입니다
    rvContainer = document.getElementById('roadview'); // 로드뷰를 표시할 div 입니다

var mapCenter = new kakao.maps.LatLng(33.45042 , 126.57091), // 지도의 중심좌표
    mapOption = {
        center: mapCenter, // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

// 지도를 표시할 div와 지도 옵션으로 지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

// 로드뷰 객체를 생성합니다 
var rv = new kakao.maps.Roadview(rvContainer); 

// 좌표로부터 로드뷰 파노라마 ID를 가져올 로드뷰 클라이언트 객체를 생성합니다 
var rvClient = new kakao.maps.RoadviewClient(); 

// 로드뷰에 좌표가 바뀌었을 때 발생하는 이벤트를 등록합니다 
kakao.maps.event.addListener(rv, 'position_changed', function() {
    var rvPosition = rv.getPosition();

    map.setCenter(rvPosition);

    if(overlayOn) {
        marker.setPosition(rvPosition);
    }
});

// 마커 이미지를 생성합니다
var markImage = new kakao.maps.MarkerImage(
    'https://t1.daumcdn.net/localimg/localimages/07/2018/pc/roadview_minimap_wk_2018.png',
    new kakao.maps.Size(26, 46),
    {
        spriteSize: new kakao.maps.Size(1666, 168),
        spriteOrigin: new kakao.maps.Point(705, 114),
        offset: new kakao.maps.Point(13, 46)
    }
);

// 드래그가 가능한 마커를 생성합니다
var marker = new kakao.maps.Marker({
    image : markImage,
    position: mapCenter,
    draggable: true
});

// 마커에 dragend 이벤트를 등록합니다
kakao.maps.event.addListener(marker, 'dragend', function(mouseEvent) {
    var position = marker.getPosition();
    toggleRoadview(position);
});

//지도에 클릭 이벤트를 등록합니다
kakao.maps.event.addListener(map, 'click', function(mouseEvent){
    if(!overlayOn) {
        return;
    }
    var position = mouseEvent.latLng;
    marker.setPosition(position);
    toggleRoadview(position);
});

// 전달받은 좌표(position)에 가까운 로드뷰의 파노라마 ID를 추출하여
// 로드뷰를 설정하는 함수입니다
function toggleRoadview(position){
    rvClient.getNearestPanoId(position, 50, function(panoId) {
        if (panoId === null) {
            toggleMapWrapper(true, position);
        } else {
            toggleMapWrapper(false, position);
            rv.setPanoId(panoId, position);
        }
    });
}

// 지도를 감싸고 있는 div의 크기를 조정하는 함수입니다
function toggleMapWrapper(active, position) {
    if (active) {
        container.className = '';
        map.relayout();
        map.setCenter(position);
    } else {
        if (container.className.indexOf('view_roadview') === -1) {
            container.className = 'view_roadview';
            map.relayout();
            map.setCenter(position);
        }
    }
}

// 지도 위의 로드뷰 도로 오버레이를 추가,제거하는 함수입니다
function toggleOverlay(active) {
    if (active) {
        overlayOn = true;
        map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);
        marker.setMap(map);
        marker.setPosition(map.getCenter());
        toggleRoadview(map.getCenter());
    } else {
        overlayOn = false;
        map.removeOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);
        marker.setMap(null);
    }
}

// 지도 위의 로드뷰 버튼을 눌렀을 때 호출되는 함수입니다
function setRoadviewRoad() {
    var control = document.getElementById('roadviewControl');
    if (control.className.indexOf('active') === -1) {
        control.className = 'active';
        toggleOverlay(true);
    } else {
        control.className = '';
        toggleOverlay(false);
    }
}

// 로드뷰에서 X버튼을 눌렀을 때 로드뷰를 지도 뒤로 숨기는 함수입니다
function closeRoadview() {
    var position = marker.getPosition();
    toggleMapWrapper(true, position);
}

var categories = ['갈현동', '과천동', '문원동', '별양동', '부림동', '주암동', '중앙동', '기타', '회전형', '고정형', '전부'];

var markers = [];
var currentOverlay = null;
var isLatLngClickMode = false; // 위도와 경도를 표시하는 모드인지 확인하는 플래그
var tempOverlay = null; // 임시 오버레이를 저장할 변수

// 전체 코드는 다음과 같이 수정됩니다.
// 기존 코드의 일부만 표시합니다. 전체 코드를 한 번에 통합하고 실행해야 합니다.

// 모든 마커와 오버레이를 표시합니다.
createMarkersAndOverlays('전부');

function createMarkersAndOverlays(category) {
    closeCustomOverlay(); // 현재 열려 있는 커스텀 오버레이 닫기
    markers.forEach(function(marker) {
        marker.setMap(null);
    });
    markers = [];

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

                // 모바일 터치 이벤트 처리 추가
                kakao.maps.event.addListener(marker, 'touchstart', function() {
                    showCustomOverlay(position, index);
                });

                marker.setMap(map);
            }
        }
    });
}

// 로드뷰 토글 버튼 기능 추가
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
        yAnchor: 1.1 // 중앙 정렬(0.5)에서 위쪽으로 조정하여 닫기 버튼이 가려지지 않게 함
    });
}

var categoryDropdown = document.getElementById('categoryDropdown');

// 드롭다운 형식의 카테고리 목록 생성 및 클릭 이벤트 추가
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
    var markerIndex = -1;

    // 위도/경도 형식 확인
    var latLngPattern = /(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)/;
    if (latLngPattern.test(userInput)) {
        var match = userInput.match(latLngPattern);
        var lat = parseFloat(match[1]);
        var lng = parseFloat(match[3]);
        position = new kakao.maps.LatLng(lat, lng);

        // 위도와 경도로 마커 찾기
        allPositions.forEach(function(pos, index) {
            if (pos.lat === lat && pos.lng === lng) {
                markerIndex = index;
                return false; // 루프 종료
            }
        });
    } else {
        // 관리번호 검색
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
        map.setLevel(4); // 필요에 따라 줌 레벨을 조정

        // 모든 마커를 다시 그리기
        createMarkersAndOverlays('전부');

        // 검색된 위치의 마커가 클릭된 것처럼 커스텀 오버레이 표시
        if (markerIndex !== -1) {
            kakao.maps.event.trigger(markers[markerIndex], 'click');
        } else {
            // 해당 위치에 마커가 없는 경우, 임시 마커 생성 및 오버레이 표시
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
                yAnchor: 1.1 // 중앙 정렬(0.5)에서 위쪽으로 조정하여 닫기 버튼이 가려지지 않게 함
            });

            // 3초 후에 임시 마커와 오버레이 제거
            setTimeout(function() {
                tempMarker.setMap(null);
                tempOverlay.setMap(null);
            }, 3000);
        }
    } else {
        alert('유효한 위도/경도 또는 관리번호를 입력하세요.');
    }
});

// 검색 버튼 클릭 시 검색 이벤트 실행
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

// 버튼 요소 가져오기
var latLngButton = document.createElement('button');
latLngButton.textContent = '위도/경도 찾기';
latLngButton.style.position = 'absolute';
latLngButton.style.top = '45px';
latLngButton.style.right = '10px';
latLngButton.style.zIndex = 1000; // 다른 요소들보다 위에 위치하도록 설정
document.body.appendChild(latLngButton);

// 버튼 클릭 시 위도/경도 표시 모드 전환
latLngButton.addEventListener('click', function() {
    isLatLngClickMode = !isLatLngClickMode;
    if (isLatLngClickMode) {
        latLngButton.textContent = '위도/경도 끄기';
    } else {
        latLngButton.textContent = '위도/경도 찾기';
    }
});

// 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
    if (isLatLngClickMode) {
        // 클릭한 위도, 경도 정보를 가져옵니다 
        var latlng = mouseEvent.latLng; 

        // 기존 임시 오버레이가 있으면 제거
        closeTempOverlay();

        // 클릭한 위치에 임시 오버레이 생성
        var tempOverlayContent =
            '<div class="customOverlay">' +
            '    <span class="closeBtn" onclick="closeTempOverlay()">×</span>' +
            '    클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, 경도는 ' + latlng.getLng() + ' 입니다' +
            '</div>';
        tempOverlay = new kakao.maps.CustomOverlay({
            content: tempOverlayContent,
            map: map,
            position: latlng,
            yAnchor: 2.0 // 중앙 정렬(0.5)에서 위쪽으로 조정하여 닫기 버튼이 가려지지 않게 함
        });
    }
});
