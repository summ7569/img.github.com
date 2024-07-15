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
    { category: '갈현동', lat: 37.4249270000, lng: 126.9897680000 },
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
        address: "갈현동 336-5",
        rotation: 1,
        fixed: 2,
        description: "이운정 가든 ",
        image: "https://via.placeholder.com/150"
    },
        {
        number: "A-GH-19",
        address: "갈현동 399",
        rotation: 0,
        fixed: 2,
        description: "",
        image: "https://via.placeholder.com/150"
    },
        {
        number: "A-GH-20",
        address: "갈현동 274-4",
        rotation: 1,
        fixed: 1,
        description: "엘라이트 근처",
        image: "https://via.placeholder.com/150"
    },
        {
        number: "A-GH-21",
        address: "갈현동 297-9",
        rotation: 1,
        fixed: 2,
        description: "",
        image: "https://via.placeholder.com/150"
    },
        {
        number: "SPD-028",
        address: "",
        rotation: 1,
        fixed: 3,
        description: "지식정보타운",
        image: "https://via.placeholder.com/150"
    }
];

var Bpositions = [
    { category: '과천동', lat: 37.4464177858 , lng: 126.9919198623 },
    { category: '과천동', lat: 37.447129, lng: 126.993063 },
            { category: '과천동', lat: 37.447912, lng: 126.99447 },
            { category: '과천동', lat: 37.452616, lng: 126.992914 },
            { category: '과천동', lat: 37.451995, lng: 126.993999 },
            { category: '과천동', lat: 37.451393, lng: 126.995546 },
            { category: '과천동', lat: 37.450036, lng: 126.993925 },
            { category: '과천동', lat: 37.450653, lng: 126.995592 },
            { category: '과천동', lat: 37.449715, lng: 126.993935 },
            { category: '과천동', lat: 37.450283, lng: 126.996933 },
            { category: '과천동', lat: 37.449201019, lng: 126.9965516876 },
            { category: '과천동', lat: 37.44983, lng: 126.998151 },
            { category: '과천동', lat: 37.445258, lng: 126.996232 },
            { category: '과천동', lat: 37.447403, lng: 126.996467 },
            { category: '과천동', lat: 37.4491, lng: 127.0 },
            { category: '과천동', lat: 37.451954, lng:126.998685 },
            { category: '과천동', lat: 37.460261, lng: 127.000528 },
            { category: '과천동', lat: 37.458219, lng: 127.000875 },
            { category: '과천동', lat: 37.457861, lng: 127.000972 },
            { category: '과천동', lat: 37.4575275578, lng: 127.0002712615 },
            { category: '과천동', lat: 37.457, lng: 127.0013 },
            { category: '과천동', lat: 37.456674, lng: 127.000721 },
            { category: '과천동', lat: 37.456241, lng: 126.999979 },
            { category: '과천동', lat: 37.455527, lng: 127.001146 },
            { category: '과천동', lat: 37.454827, lng: 127.000535 },
            { category: '과천동', lat: 37.453237, lng: 127.00198 },
            { category: '과천동', lat: 37.454223, lng: 127.001211 },
            { category: '과천동', lat: 37.4532499971, lng: 127.0006894171 },
            { category: '과천동', lat: 37.453237, lng: 127.00198 },
            { category: '과천동', lat: 37.460261, lng: 127.000528 },
            { category: '과천동', lat: 37.4560788551, lng: 127.0087649689 },
            { category: '과천동', lat: 37.445104, lng: 126.99639 },
            { category: '과천동', lat: 37.450157, lng: 127.003311 },
            { category: '과천동', lat: 37.4482616707, lng: 127.0046532564 },
            { category: '과천동', lat: 37.447323, lng: 127.004574 },
            { category: '과천동', lat: 37.44804, lng: 127.004527 },
            { category: '과천동', lat: 37.439256, lng: 126.999597 },
            { category: '과천동', lat: 37.441026, lng: 127.004854 },
            { category: '과천동', lat: 37.443752, lng: 127.007824 },
            { category: '과천동', lat: 37.43956, lng: 127.008493 },
            { category: '과천동', lat: 37.441028, lng: 127.009682 },
            { category: '과천동', lat: 37.44851, lng: 127.006456 },
            { category: '과천동', lat: 37.450067, lng: 127.008205 },
            { category: '과천동', lat: 37.448432, lng: 127.009646 },
            { category: '과천동', lat: 37.448561, lng: 127.01035 },
            { category: '과천동', lat: 37.450355, lng: 127.011507 },
            { category: '과천동', lat: 37.446525, lng: 127.008959 },
            { category: '과천동', lat: 37.447378, lng: 127.0106 },
            { category: '과천동', lat: 37.449135, lng: 127.012021 },
            { category: '과천동', lat: 37.450355, lng: 127.011507 },
            { category: '과천동', lat: 37.446456, lng: 127.022929 },
            { category: '과천동', lat: 37.445846, lng: 127.023325 },
            { category: '과천동', lat: 37.445065, lng: 127.023495 },
            { category: '과천동', lat: 37.444922, lng: 127.024851 },
             { category: '과천동', lat: 37.4518, lng: 127.0281 },
            { category: '과천동', lat: 37.453182, lng: 127.028728 },
            { category: '과천동', lat: 37.457066, lng: 127.032175 },
            { category: '과천동', lat: 37.45945, lng: 127.032566 },
            { category: '과천동', lat: 37.459163, lng: 127.034043 },
            { category: '과천동', lat: 37.4573645744, lng: 127.0354150922 },
            { category: '과천동', lat: 37.4601629648, lng: 127.0328280342 },
            { category: '과천동', lat: 37.461074, lng: 127.033251 },
            { category: '과천동', lat: 37.4632288725, lng: 127.0320466127 },
            { category: '과천동', lat: 37.4628669675, lng: 127.0333972105 },
            { category: '과천동', lat: 37.463468, lng: 127.033571 },
            { category: '과천동', lat: 37.462343, lng: 127.031574 },
            { category: '과천동', lat: 37.462042, lng: 127.0331 },
            { category: '과천동', lat: 37.460926, lng: 127.031914 }
];
var BInfo = [
    {
        number: "A-GC-14",
        address: "과천동 513-64",
        rotation: 1,
        fixed: 0,
        description: "",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-GC-15",
        address: "과천동 513-152",
        rotation: 1,
        fixed: 0,
        description: "",
        image: "https://via.placeholder.com/150"
    },
                        {
                number: "A-GC-17",
                address: "과천동 485-6",
                rotation: 1,
                fixed: 4,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-18",
                address: "과천동 485-14",
                rotation: 1,
                fixed: 4,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-19",
                address: "과천동 475-9",
                rotation: 0,
                fixed: 2,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-20",
                address: "과천동 464",
                rotation: 1,
                fixed: 6,
                description: "열리는어린이집",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-21",
                address: "과천동 461-10(답)",
                rotation: 1,
                fixed: 6,
                description: "열리는어린이집",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-22",
                address: "과천동 517-40",
                rotation: 1,
                fixed: 1,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-23",
                address: "JA-8",
                rotation: 1,
                fixed: 6,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-24",
                address: "과천동 521-4",
                rotation: 1,
                fixed: 1,
                description: "스토리아툼 맞은편(주차장 근처)",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-25",
                address: "과천동 520-3",
                rotation: 1,
                fixed: 0,
                description: "양지마을길 75 양지슈퍼앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-26",
                address: "과천동 535-68",
                rotation: 0,
                fixed: 4,
                description: "관문지하보도",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-27",
                address: "과천동 535-66",
                rotation: 1,
                fixed: 1,
                description: "관문지하보도 입구 본수원갈비쪽",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-28",
                address: "과천동 524-5",
                rotation: 1,
                fixed: 4,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-29",
                address: "무네미길 36",
                rotation: 1,
                fixed: 0,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-30",
                address: "과천동 391-22",
                rotation: 0,
                fixed: 2,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-31",
                address: "과천동 386-7",
                rotation: 1,
                fixed: 2,
                description: "뒷골공원(이상음원 시스템)",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-32",
                address: "과천동 382-15",
                rotation: 1,
                fixed: 1,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-33",
                address: "과천동 382-1",
                rotation: 1,
                fixed: 3,
                description: "뒷골로 62-3",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-34",
                address: "과천동 380-2",
                rotation: 1,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-35",
                address: "과천동 379-9",
                rotation: 1,
                fixed: 5,
                description: "뒷골",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-36",
                address: "과천동 378-40",
                rotation: 0,
                fixed: 2,
                description: "뒷골",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-37",
                address: "과천동 376-9",
                rotation: 1,
                fixed: 2,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-38",
                address: "과천동 372",
                rotation: 1,
                fixed: 3,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-39",
                address: "과천동 373-3",
                rotation: 1,
                fixed: 1,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-40",
                address: "뒷골로 22-11",
                rotation: 1,
                fixed: 4,
                description: "뒷골로 22-11",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-41",
                address: "과천동 366-6",
                rotation: 1,
                fixed: 3,
                description: "선바위역 3번 출구 뒤",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-42",
                address: "과천동 362-4",
                rotation: 0,
                fixed: 2,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-43",
                address: "과천동 17",
                rotation: 0,
                fixed: 2,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-44",
                address: "과천동 16-16",
                rotation: 1,
                fixed: 2,
                description: "한성칼국수 맞은편",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-45",
                address: "과천동 605-1",
                rotation: 1,
                fixed: 3,
                description: "남태령지하보도",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-46",
                address: "과천동 247-7",
                rotation: 1,
                fixed: 5,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-47",
                address: "과천동 242-7",
                rotation: 1,
                fixed: 5,
                description: "광창마을 사거리",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-48",
                address: "과천동 245-13",
                rotation: 1,
                fixed: 3,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-49",
                address: "상하벌로 50",
                rotation: 1,
                fixed: 0,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-50",
                address: "과천동 592-2",
                rotation: 0,
                fixed: 4,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-51",
                address: "과천동 303-1",
                rotation: 0,
                fixed: 1,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-52",
                address: "과천동 189-22",
                rotation: 1,
                fixed: 1,
                description: "경마공원역 삼거리",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-53",
                address: "과천동 750-4",
                rotation: 1,
                fixed: 0,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-54",
                address: "과천동 645-9",
                rotation: 1,
                fixed: 0,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-55",
                address: "과천동 140-67",
                rotation: 1,
                fixed: 0,
                description: "광창마을 사거리",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-56",
                address: "과천동 95-7",
                rotation: 1,
                fixed: 0,
                description: "광창마을",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-57",
                address: "과천동 141-6",
                rotation: 1,
                fixed: 5,
                description: "광창마을,놀이터",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-58",
                address: "과천동 133-2",
                rotation: 1,
                fixed: 3,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-59",
                address: "광창3로 16",
                rotation: 0,
                fixed: 2,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-60",
                address: "과천동 140-98",
                rotation: 1,
                fixed: 2,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-61",
                address: "과천동 142-34",
                rotation: 1,
                fixed: 2,
                description: "광창마을",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-62",
                address: "과천동 152-3",
                rotation: 1,
                fixed: 0,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-63",
                address: "주암동 415-2",
                rotation: 1,
                fixed: 3,
                description: "삼포마을입구",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-64",
                address: "주암동 442-2",
                rotation: 1,
                fixed: 3,
                description: "도로(삼포마을)",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-65",
                address: "주암동 444-18",
                rotation: 1,
                fixed: 1,
                description: "삼포마을",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-66",
                address: "주암동 450-20",
                rotation: 1,
                fixed: 3,
                description: "삼포마을을",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-67",
                address: "주암동 458",
                rotation: 1,
                fixed: 3,
                description: "삼포마",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-68",
                address: "주암동 691-63",
                rotation: 1,
                fixed: 4,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-69",
                address: "추사로78",
                rotation: 1,
                fixed: 3,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-70",
                address: "주암동 105-16",
                rotation: 1,
                fixed: 3,
                description: "시립원주암어린이집",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-71",
                address: "주암동 44-8",
                rotation: 1,
                fixed: 1,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-72",
                address: "주암동 18-13",
                rotation: 1,
                fixed: 3,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-73",
                address: "주암동 27",
                rotation:1,
                fixed: 3,
                description: "죽바위로",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-74",
                address: "주암동 14-4",
                rotation: 1,
                fixed: 3,
                description: "양재동 지하보도 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-75",
                address: "주암동 69-19",
                rotation: 1,
                fixed: 3,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-40",
                address: "주암동 65-7",
                rotation: 1,
                fixed: 4,
                description: "(정보통신연구원) 한아름 빌라옆옆",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-41",
                address: "주암동 63-7",
                rotation: 1,
                fixed: 4,
                description: "우면우편취급국 맞은편",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-61",
                address: "주암동 62-16",
                rotation: 1,
                fixed: 1,
                description: "",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-123",
                address: "주암동 66-6",
                rotation: 1,
                fixed: 4,
                description: "장군마을",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-124",
                address: "주암동 69-8",
                rotation: 1,
                fixed: 3,
                description: "장군마을",
                image: "https://via.placeholder.com/150"
            },
            {
                number: "A-GC-40",
                address: "주암동 53",
                rotation: 1,
                fixed: 0,
                description: "",
                image: "https://via.placeholder.com/150"
            }
];

var Cpositions = [
    { category: '문원동', lat: 37.414653, lng: 126.992916 },
    { category: '문원동', lat: 37.413015, lng: 126.994072 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 },
    { category: '문원동', lat: 37.428, lng: 127.008 }
    
];

var CInfo = [
    {
        number: "A-MW-8",
        address: "문원동 902-11",
        rotation: 1,
        fixed: 0,
        description: "세곡마을 입구",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-9",
        address: "문원동 924-7번지",
        rotation: 1,
        fixed: 4,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-10",
        address: "문원동 994-2",
        rotation: 1,
        fixed: 0,
        description: "천궁수라상",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-11",
        address: "문원동 1058",
        rotation: 1,
        fixed: 0,
        description: "매봉 버스정류장",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-12",
        address: "문원동 475-5",
        rotation: 0,
        fixed: 3,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-13",
        address: "문원동 389",
        rotation: 1,
        fixed: 2,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-14",
        address: "문원동 311",
        rotation: 1,
        fixed: 1,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-15",
        address: "문원동 324-19",
        rotation: 1,
        fixed: 1,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-16",
        address: "문원동 365",
        rotation: 1,
        fixed: 2,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-17",
        address: "문원동 332-16",
        rotation: 1,
        fixed: 2,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-18",
        address: "문원동 348",
        rotation: 1,
        fixed: 1,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-19",
        address: "문원동 57-1",
        rotation: 1,
        fixed: 0,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-20",
        address: "문원동 57-1",
        rotation: 1,
        fixed: 0,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-21",
        address: "문원동 57-1",
        rotation: 1,
        fixed: 0,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-22",
        address: "문원동 301(227-1)",
        rotation: 0,
        fixed: 3,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-23",
        address: "문원동 227-2",
        rotation: 1,
        fixed: 2,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-24",
        address: "문원동 217",
        rotation: 1,
        fixed: 3,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-25",
        address: "문원동 199",
        rotation: 1,
        fixed: 1,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-26",
        address: "참마을로 10-6",
        rotation: 1,
        fixed: 3,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-27",
        address: "문원동 15-168",
        rotation: 1,
        fixed: 3,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-28",
        address: "문원동 도로방범(102번지)",
        rotation: 0,
        fixed: 4,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-29",
        address: "문원동 15-170",
        rotation: 0,
        fixed: 4,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-30",
        address: "문원동 15-96",
        rotation: 1,
        fixed: 1,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-31",
        address: "문원동 15-95",
        rotation: 1,
        fixed: 4,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-32",
        address: "문원동 15-83",
        rotation: 1,
        fixed: 5,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-33",
        address: "문원동 15-22,33",
        rotation: 1,
        fixed: 5,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-34",
        address: "문원동 15-39",
        rotation: 1,
        fixed: 5,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-35",
        address: "문원동 공원마을6길 21번지",
        rotation: 1,
        fixed: 5,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-36",
        address: "문원동 15-146",
        rotation: 1,
        fixed: 4,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-37",
        address: "문원동 142",
        rotation: 1,
        fixed: 2,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-38",
        address: "문원동 115-21",
        rotation: 1,
        fixed: 3,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-39",
        address: "문원동 115",
        rotation: 1,
        fixed: 3,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-40",
        address: "문원동 115-113",
        rotation: 1,
        fixed: 1,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-41",
        address: "문원동 115-81",
        rotation: 1,
        fixed: 4,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-42",
        address: "문원동 115-174",
        rotation: 1,
        fixed: 5,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-43",
        address: "문원동 115-214",
        rotation: 1,
        fixed: 2,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-44",
        address: "문원동 150-1 대로",
        rotation: 1,
        fixed: 2,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-45",
        address: "문원동 115-143",
        rotation: 1,
        fixed: 4,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-46",
        address: "문원동 115-232",
        rotation: 1,
        fixed: 3,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-47",
        address: "문원동 155-3",
        rotation: 1,
        fixed: 2,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-48",
        address: "문원동 115-363",
        rotation: 1,
        fixed: 5,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-49",
        address: "문원동 115-249",
        rotation: 1,
        fixed: 4,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-50",
        address: "문원동 115-387",
        rotation: 1,
        fixed: 3,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-51",
        address: "문원동 115-419",
        rotation: 1,
        fixed: 0,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-52",
        address: "막계동 1013-7",
        rotation: 1,
        fixed: 2,
        description: "어린이집",
        image: "https://via.placeholder.com/150"
    },
    {
        number: "A-MW-53",
        address: "막계동 324-22",
        rotation: 1,
        fixed: 0,
        description: "어린이집",
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
        fixed: 3,
        description: "어린이집",
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
        fixed: 2,
        description: "어린이집",
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
        rotation: 1,
        fixed: 2,
        description: "어린이집",
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
        rotation: 1,
        fixed: 2,
        description: "어린이집",
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

        // 회전형 카테고리 조건 설정
        if (category === '회전형') {
            if (info[index].rotation < 1) {
                showMarker = false;
            }
        }
        // 고정형 카테고리 조건 설정
        else if (category === '고정형') {
            if (info[index].fixed < 1) {
                showMarker = false;
            }
        }

        // 선택된 카테고리 또는 전체 카테고리인 경우 마커 생성
        if (category === '전부' || info[index].category === category) {
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
        yAnchor: 1.1 // 중앙 정렬(0.5) 위쪽 오버레이 (1.5)
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

// 검색창을 추가하여 위도/경도/관리번호로 위치 검색 가능하도록 설정
var searchForm = document.createElement('form');
searchForm.id = 'searchForm';
searchForm.innerHTML = 
    '<input type="text" id="searchInput" placeholder="위도/경도 또는 관리번호 입력" required>' +
    '<button type="submit">검색</button>';
map.controls[kakao.maps.ControlPosition.TOP_RIGHT].push(searchForm); // 지도 오른쪽 위에 위치하도록 수정

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var userInput = document.getElementById('searchInput').value.trim();

    var position = null;
    var category = '전부';

    // 위도/경도 형식 확인
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
