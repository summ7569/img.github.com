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
    { category: '갈현동', lat: 37.423681, lng: 126.9929 },
    { category: '갈현동', lat: 37.422169, lng: 126.988136 },
    { category: '갈현동', lat: 37.421404, lng: 126.987475 },
    { category: '갈현동', lat: 37.419049, lng: 126.988793 },
    { category: '갈현동', lat: 37.4182, lng: 126.9853 },
    { category: '갈현동', lat: 37.417867, lng: 126.986083 },
    { category: '갈현동', lat: 37.417504, lng: 126.986298 },
    { category: '갈현동', lat: 37.416816, lng: 126.985189 },
    { category: '갈현동', lat: 37.416021, lng: 126.98396 },
    { category: '갈현동', lat: 37.415478, lng: 126.983951 },
    { category: '갈현동', lat: 37.416724, lng: 126.982755 },
    { category: '갈현동', lat: 37.416863, lng: 126.981945 },
    { category: '갈현동', lat: 37.4159214552, lng: 126.979858 },
    { category: '갈현동', lat: 37.417909, lng: 126.979304 },
    { category: '갈현동', lat: 37.4040083811, lng: 126.9843401485 },
    { category: '갈현동', lat: 37.404463, lng: 126.98082 },
    { category: '갈현동', lat: 37.412139, lng: 126.982804 } // 새로운 위치 정보 추가
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
    },
    {
        number: "A-GH-6",
        address: "갈현동 산121",
        rotation: 1,
        fixed: 2,
        description: "12단",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-GH-8",
        address: "갈현동 640-8",
        rotation: 1,
        fixed: 0,
        description: "모뎀말길 13 우정병원",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-GH-9",
        address: "갈현동 683-1",
        rotation: 1,
        fixed: 3,
        description: "정보과학도서관 입구",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-GH-10",
        address: "갈현동 4-3",
        rotation: 1,
        fixed: 5,
        description: "",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-GH-11",
        address: "갈현동 8-55",
        rotation: 1,
        fixed: 1,
        description: "놀이터 삼거",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-GH-12",
        address: "갈현동 8-5",
        rotation: 1,
        fixed: 0,
        description: "찬우물공원내",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-GH-13",
        address: "갈현동 8-26",
        rotation: 1,
        fixed: 4,
        description: "",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-GH-14",
        address: "갈현동 14-4",
        rotation: 1,
        fixed: 2,
        description: "가일길 한샘교회 앞",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-GH-15",
        address: "갈현동 산22-2",
        rotation: 1,
        fixed: 1,
        description: "",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-GH-16",
        address: "갈현동 산20-7",
        rotation: 1,
        fixed: 1,
        description: "",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-GH-17",
        address: "갈현동 357-5",
        rotation: 1,
        fixed: 2,
        description: "",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-GH-18",
        address: "갈현동 224-1",
        rotation: 1,
        fixed: 4,
        description: "",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-GH-19",
        address: "갈현동 338-10",
        rotation: 1,
        fixed: 4,
        description: "양지말길 삼거리",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-GH-20",
        address: "갈현동 280-1",
        rotation: 1,
        fixed: 4,
        description: "옥상정원",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-GH-21",
        address: "갈현동 4-9",
        rotation: 1,
        fixed: 4,
        description: "갈현동 4-9",
        image: "https://via.placeholder.com/150"
    }
];

var Bpositions = [
    { category: '과천동', lat: 37.4295040000, lng:126.9883220000 },
    { category: '과천동', lat: 37.4285040000, lng:126.9873220000 },
    { category: '과천동', lat: 37.4275040000, lng:126.9863220000 }
];

var BInfo = [
    {
        number: "B-GH-1",
        address: "과천동 1",
        rotation: 2,
        fixed: 3,
        description: "과천동 설명 1",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "B-GH-2",
        address: "과천동 2",
        rotation: 2,
        fixed: 4,
        description: "과천동 설명 2",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "B-GH-3",
        address: "과천동 3",
        rotation: 2,
        fixed: 5,
        description: "과천동 설명 3",
        image: "https://via.placeholder.com/150"
    }
];

var Cpositions = [
    { category: '문원동', lat: 37.4295040000, lng:126.9883220000 },
    { category: '문원동', lat: 37.4285040000, lng:126.9873220000 },
    { category: '문원동', lat: 37.4275040000, lng:126.9863220000 }
];

var CInfo = [
    {
        number: "C-GH-1",
        address: "문원동 1",
        rotation: 3,
        fixed: 4,
        description: "문원동 설명 1",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "C-GH-2",
        address: "문원동 2",
        rotation: 3,
        fixed: 5,
        description: "문원동 설명 2",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "C-GH-3",
        address: "문원동 3",
        rotation: 3,
        fixed: 6,
        description: "문원동 설명 3",
        image: "https://via.placeholder.com/150"
    }
];

var Dpositions = [
    { category: '별양동', lat: 37.4295040000, lng:126.9883220000 },
    { category: '별양동', lat: 37.4285040000, lng:126.9873220000 },
    { category: '별양동', lat: 37.4275040000, lng:126.9863220000 }
];

var DInfo = [
    {
        number: "D-GH-1",
        address: "별양동 1",
        rotation: 4,
        fixed: 7,
        description: "별양동 설명 1",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "D-GH-2",
        address: "별양동 2",
        rotation: 4,
        fixed: 8,
        description: "별양동 설명 2",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "D-GH-3",
        address: "별양동 3",
        rotation: 4,
        fixed: 9,
        description: "별양동 설명 3",
        image: "https://via.placeholder.com/150"
    }
];

function displayCategoryButtons() {
    var categoryButtonsContainer = document.getElementById('categoryButtons');

    categories.forEach(function(category) {
        var button = document.createElement('button');
        button.innerText = categoryData[category].name;
        button.addEventListener('click', function() {
            filterMarkers(category);
        });
        categoryButtonsContainer.appendChild(button);
    });
}

function filterMarkers(category) {
    var filteredPositions = Apositions.concat(Bpositions, Cpositions, Dpositions).filter(function(position) {
        if (category === '전부') {
            return true;
        }
        return position.category === category;
    });

    removeMarkers();
    addMarkers(filteredPositions, category);
}

var markers = [];

function addMarkers(positions, category) {
    var infoData;
    switch(category) {
        case '갈현동':
            infoData = AInfo;
            break;
        case '과천동':
            infoData = BInfo;
            break;
        case '문원동':
            infoData = CInfo;
            break;
        case '별양동':
            infoData = DInfo;
            break;
        default:
            infoData = AInfo.concat(BInfo, CInfo, DInfo);
            break;
    }

    positions.forEach(function(position, index) {
        var marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(position.lat, position.lng)
        });

        var infoContent = createInfoContent(infoData[index]);
        var infoOverlay = new kakao.maps.CustomOverlay({
            content: infoContent,
            position: marker.getPosition()
        });

        kakao.maps.event.addListener(marker, 'click', function() {
            infoOverlay.setMap(map);
        });

        markers.push(marker);
    });
}

function createInfoContent(info) {
    var content = document.createElement('div');
    content.className = 'customOverlay';

    var closeBtn = document.createElement('div');
    closeBtn.className = 'closeBtn';
    closeBtn.innerHTML = 'X';
    closeBtn.onclick = function() {
        infoOverlay.setMap(null); // 닫기 버튼 클릭 시 오버레이 닫기
    };
    content.appendChild(closeBtn);

    var title = document.createElement('div');
    title.className = 'title';
    title.innerHTML = info.number + ' - ' + info.address;
    content.appendChild(title);

    var desc = document.createElement('div');
    desc.className = 'desc';
    var descContent = document.createElement('div');
    descContent.className = 'desc-content';

    var image = document.createElement('img');
    image.src = info.image;
    image.width = 50; // 이미지 크기 조정
    image.height = 50;

    var description = document.createElement('div');
    description.innerHTML = info.description;

    descContent.appendChild(image);
    descContent.appendChild(description);
    desc.appendChild(descContent);
    content.appendChild(desc);

    return content;
}

function removeMarkers() {
    markers.forEach(function(marker) {
        marker.setMap(null);
    });
    markers = [];
}

displayCategoryButtons();
filterMarkers('전부');
