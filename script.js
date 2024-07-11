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
        address: "갈현동 369-4",
        rotation: 1,
        fixed: 3,
        description: "12단지 아파트 출입구",
        image: "https://via.placeholder.com/150"
    },
        {
        number: "A-GH-19",
        address: "갈현동 376-2",
        rotation: 1,
        fixed: 3,
        description: "",
        image: "https://via.placeholder.com/150"
    },
        {
        number: "A-GH-20",
        address: "갈현동 431-9",
        rotation: 1,
        fixed: 4,
        description: "",
        image: "https://via.placeholder.com/150"
    },
        {
        number: "A-GH-21",
        address: "갈현동 442-6",
        rotation: 1,
        fixed: 2,
        description: "",
        image: "https://via.placeholder.com/150"
    },
        {
        number: "A-GH-22",
        address: "갈현동 525-2",
        rotation: 1,
        fixed: 2,
        description: "",
        image: "https://via.placeholder.com/150"
    },
        {
        number: "A-GH-23",
        address: "갈현동 464-6",
        rotation: 1,
        fixed: 1,
        description: "",
        image: "https://via.placeholder.com/150"
    }
];

function displayMarker(position) {
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(position.lat, position.lng)
    });

    var info = AInfo.find(function(item) {
        return item.number === position.category;
    });

    var content = document.createElement('div');
    content.className = 'customOverlay';

    var title = document.createElement('div');
    title.className = 'title';
    title.innerText = info.number;
    content.appendChild(title);

    var address = document.createElement('div');
    address.innerText = info.address;
    content.appendChild(address);

    var rotation = document.createElement('div');
    rotation.innerText = '회전형: ' + info.rotation;
    content.appendChild(rotation);

    var fixed = document.createElement('div');
    fixed.innerText = '고정형: ' + info.fixed;
    content.appendChild(fixed);

    var description = document.createElement('div');
    description.className = 'desc-content';
    var image = document.createElement('img');
    image.src = info.image;
    image.width = 50;
    description.appendChild(image);
    var descText = document.createElement('div');
    descText.innerText = info.description;
    description.appendChild(descText);
    content.appendChild(description);

    var closeBtn = document.createElement('div');
    closeBtn.className = 'closeBtn';
    closeBtn.innerText = 'X';
    closeBtn.onclick = function() {
        overlay.setMap(null);
    };
    content.appendChild(closeBtn);

    var overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: marker.getPosition()
    });

    kakao.maps.event.addListener(marker, 'click', function() {
        overlay.setMap(map);
    });
}

function displayMarkers(category) {
    map.setLevel(5);

    map.setCenter(new kakao.maps.LatLng(37.4295040000, 126.9883220000));

    Apositions.forEach(function(position) {
        var isValid = category.includeAll ||
            (category.filter && category.minCount && info[category.filter] >= category.minCount) ||
            position.category === category.name;

        if (isValid) {
            displayMarker(position);
        }
    });
}

function createCategoryButtons() {
    var buttonsContainer = document.getElementById('categoryButtons');
    buttonsContainer.innerHTML = '';

    categories.forEach(function(category) {
        var button = document.createElement('button');
        button.innerText = categoryData[category].name;
        button.onclick = function() {
            displayMarkers(categoryData[category]);
        };
        buttonsContainer.appendChild(button);
    });
}

createCategoryButtons();
