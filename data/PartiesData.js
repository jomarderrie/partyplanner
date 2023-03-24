


const parties = [
    {
        id: 1,
        title: 'Dillon Boy',
        party_end: '2020-10-01',
        bids:[
            {
                bidder: 'henk',
                time: '14:03',
                amount: 20,
                date: '2020-04-09'
            }

        ],
        img: 'public/auction1.jpg',
        location: 'utrecht',
        technique: 'Bronze',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        id: 2,
        title: 'eye',
        party_end: '2020-12-09',
        party_start: '2023-12-09',
        bids:[
            {
                bidder: 'henk',
                time: '14:03',
                amount: 20,
                date: '2020-04-09'
            },
            {
                bidder: 'henk3',
                time: '14:03',
                amount: 30,
                date: '2020-04-09'
            },
        ],
        img: 'public/auction3.jpg',
        location: 'utrecht',
        technique: 'digital',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        id: 3,
        title: 'The human eye2',
        party_end: '2020-11-09',
        bids:[
            {
                bidder: 'henk3',
                time: '14:03',
                amount: 20,
                date: '2020-04-09'
            },
            {
                bidder: 'henk',
                time: '14:03',
                amount: 30,
                date: '2020-04-09'
            },
        ],
        img: 'public/auction3.jpg',
        location: 'Deventer',
        technique: 'Bronze',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        id: 4,
        title: 'The human eye3',
        party_end: '2020-12-09',
        party_start: '2023-12-09',
        bids:[
            {
                bidder: 'henk',
                time: '14:03',
                amount: 20,
                date: '2020-04-09'
            },
            {
                bidder: 'henk3',
                time: '14:03',
                amount: 30,
                date: '2020-04-09'
            },
        ],
        img: 'public/auction4.png',
        location: 'Deventer',
        technique: 'Bronze',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        id: 5,
        title: 'jungle demon',
        party_end: '2020-12-09',
        party_start: '2023-12-09',
        bids:[
            {
                bidder: 'henk',
                time: '14:03',
                amount: 20,
                date: '2020-04-09'
            },
            {
                bidder: 'henk3',
                time: '14:03',
                amount: 30,
                date: '2020-04-09'
            },
        ],
        img: 'public/auction4.png',
        location: 'Deventer',
        technique: 'Bronze',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        id: 6,
        title: 'socrates',
        party_end: '2020-12-09',
        party_start: '2023-12-09',
        bids:[
            {
                bidder: 'henk3',
                time: '14:03',
                amount: 20,
                date: '2020-04-09'
            },
            {
                bidder: 'henk',
                time: '14:03',
                amount: 30,
                date: '2020-04-09'
            },
        ],
        img: 'public/auction4.png',
        location: 'Deventer',
        technique: 'Bronze',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        id: 7,
        title: 'nietszche',
        party_end: '2020-12-09',
        party_start: '2023-12-09',
        bids:[
            {
                bidder: 'henk',
                time: '14:03',
                date: '2020-04-09',
                amount: 20
            },
            {
                bidder: 'henk3',
                time: '14:03',
                date: '2020-04-09',
                amount: 30
            },
        ],
        img: 'public/auction7.jpg',
        location: 'Deventer',
        technique: 'Bronze',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        id:8,
        title: 'locke',
        party_end: '2020-12-09',
        party_start: '2023-12-09',
        bids:[
            {
                bidder: 'henk',
                time: '14:03',
                amount: 20,
                date: '2020-04-09'
            },
            {
                bidder: 'henk3',
                time: '14:03',
                amount: 30,
                date: '2020-04-09'
            },
        ],
        img: 'public/auction8.jpg',
        location: 'Deventer',
        technique: 'digital',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        id: 9,
        title: 'The human eye5',
        party_end: '2020-12-09',
        party_start: '2023-12-09',
        bids:[
            {
                bidder: 'henk',
                time: '14:03',
                amount: 20,
                date: '2020-04-09'
            },
            {
                bidder: 'henk3',
                time: '14:03',
                amount: 30,
                date: '2020-04-09'
            },
        ],
        img: 'public/auction9.jpg',
        location: 'Deventer',
        technique: 'Metal',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        id: 10,
        title: 'socrates',
        party_end: '2020-12-09',
        party_start: '2023-12-09',
        bids:[
            {
                bidder: 'henk3',
                time: '14:03',
                amount: 20,
                date: '2020-04-09'
            },
            {
                bidder: 'henk',
                time: '14:03',
                amount: 30,
                date: '2020-04-09'
            },
        ],
        img: 'public/auction4.png',
        location: 'Deventer',
        technique: 'Bronze',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        id: 11,
        title: 'socrates',
        party_end: '2020-12-09',
        party_start: '2023-12-09',
        bids:[
            {
                bidder: 'henk3',
                time: '14:03',
                amount: 20,
                date: '2020-04-09'
            },
            {
                bidder: 'henk',
                time: '14:03',
                amount: 30,
                date: '2020-04-09'
            },
        ],
        img: 'public/auction4.png',
        location: 'Deventer',
        technique: 'Bronze',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        id: 12,
        title: 'socrates',
        party_end: '2020-12-09',
        party_start: '2023-12-09',
        bids:[
            {
                bidder: 'henk3',
                time: '14:03',
                amount: 20,
                date: '2020-04-09'
            },
            {
                bidder: 'henk',
                time: '14:03',
                amount: 10,
                date: '2020-04-09'
            },
        ],
        img: 'public/auction4.png',
        location: 'Deventer',
        technique: 'Bronze',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        id:13,
        title: 'socrates',
        party_end: '2020-12-09',
        party_start: '2023-12-09',
        bids:[
            {
                bidder: 'henk3',
                time: '14:03',
                amount: 20,
                date: '2020-04-09'
            },
            {
                bidder: 'henk',
                time: '14:03',
                amount: 30,
                date: '2020-04-09'
            },
        ],
        img: 'public/auction4.png',
        location: 'Deventer',
        technique: 'Bronze',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        id: 14,
        title: 'socrates',
        party_end: '2020-12-09',
        party_start: '2023-12-09',
        bids:[
            {
                bidder: 'henk3',
                time: '14:03',
                amount: 20,
                date: '2020-04-09'
            },
            {
                bidder: 'henk',
                time: '14:03',
                amount: 1000,
                date: '2020-04-09'
            },
        ],
        img: 'public/auction4.png',
        location: 'Deventer',
        technique: 'Bronze',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        id:15,
        title: 'socrates',
        party_end: '2020-12-09',
        party_start: '2023-12-09',
        bids:[
            {
                bidder: 'henk3',
                time: '14:03',
                amount: 20,
                date: '2020-04-09'
            },
            {
                bidder: 'henk',
                time: '14:03',
                amount: 30,
                date: '2020-04-09'
            },
        ],
        img: 'public/auction4.png',
        location: 'Deventer',
        technique: 'Bronze',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        id: 16,
        title: 'socrates',
        party_end: '2020-12-09',
        party_start: '2023-12-09',
        bids:[
            {
                bidder: 'henk3',
                time: '14:03',
                amount: 20,
                date: '2020-04-09'
            },
            {
                bidder: 'henk',
                time: '14:03',
                amount: 30,
                date: '2020-04-09'
            },
        ],
        img: 'public/auction4.png',
        location: 'Deventer',
        technique: 'Bronze',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    }
];

module.exports = parties;