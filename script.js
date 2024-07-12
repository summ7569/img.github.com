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
        // AInfo에 대한 추가된 정보
    ];

    var Bpositions = [
        { category: '과천동', lat: 37.4464177858, lng: 126.9919198623 },
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
        },
                        {
                number: "A-GC-16",
                address: "과천동 513-4",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-17",
                address: "과천동 485-6",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-18",
                address: "과천동 485-14",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-19",
                address: "과천동 475-9",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-20",
                address: "과천동 464",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-21",
                address: "과천동 461-10(답)",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-22",
                address: "과천동 517-40",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-23",
                address: "JA-8",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-24",
                address: "과천동 521-4",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-25",
                address: "과천동 520-3",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-26",
                address: "과천동 535-68",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-27",
                address: "과천동 535-66",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-28",
                address: "과천동 524-5",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-29",
                address: "무네미길 36",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-30",
                address: "과천동 391-22",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-31",
                address: "과천동 386-7",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-32",
                address: "과천동 382-15",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-33",
                address: "과천동 382-1",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-34",
                address: "과천동 380-2",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-35",
                address: "과천동 379-9",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-36",
                address: "과천동 378-40",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-37",
                address: "과천동 376-9",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-38",
                address: "과천동 372",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-39",
                address: "과천동 373-3",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-40",
                address: "뒷골로 22-11",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-41",
                address: "과천동 366-6",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-42",
                address: "과천동 362-4",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-43",
                address: "과천동 17",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-44",
                address: "과천동 16-16",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-45",
                address: "과천동 605-1",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-46",
                address: "과천동 247-7",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-47",
                address: "과천동 242-7",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-48",
                address: "과천동 245-13",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-49",
                address: "상하벌로 50",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-50",
                address: "과천동 592-2",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-51",
                address: "과천동 303-1",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-52",
                address: "과천동 189-22",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-53",
                address: "과천동 750-4",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-54",
                address: "과천동 645-9",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-55",
                address: "과천동 140-67",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-56",
                address: "과천동 95-7",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-57",
                address: "과천동 141-6",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-58",
                address: "과천동 133-2",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-59",
                address: "광창3로 16",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-60",
                address: "과천동 140-98",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-61",
                address: "과천동 142-34",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-62",
                address: "과천동 152-3",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-63",
                address: "주암동 415-2",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-64",
                address: "주암동 442-2",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-65",
                address: "주암동 444-18",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-66",
                address: "주암동 450-20",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-67",
                address: "주암동 458",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-68",
                address: "주암동 691-63",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-69",
                address: "추사로78",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-70",
                address: "주암동 105-16",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-71",
                address: "주암동 44-8",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-72",
                address: "주암동 18-13",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-73",
                address: "주암동 27",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-74",
                address: "주암동 14-4",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-GC-75",
                address: "주암동 69-19",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-40",
                address: "주암동 65-7",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-41",
                address: "주암동 63-7",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-61",
                address: "주암동 62-16",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-123",
                address: "주암동 66-6",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
                        {
                number: "A-124",
                address: "주암동 69-8",
                rotation: 2,
                fixed: 3,
                description: "과천동 어린이집 앞",
                image: "https://via.placeholder.com/150"
            },
            {
                number: "A-GC-40",
                address: "주암동 53",
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

    init(); // 초기화 함수 호출
});
