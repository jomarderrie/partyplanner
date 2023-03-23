import uuid from 'react-native-uuid';

const users = [
    {
        id: uuid.v4(),
        username: 'henk',
        password: '$2b$10$LZXz8vzLFUv7UKlzDxYGK.6hdRl0kvKa/RI4vA3d7IpmyMHFDdkPq', //Henk!23
        email: 'henk@gmail.com',
        role: 'admin'
    },
    {
        id: uuid.v4(),
        username: 'admin',
        password: '$2b$10$ANS1YPhWrlL1l7NXE159aOzzbrsFk4kGcYEemqySBaB4WaQX3WRnW', //admin
        email: 'admin@gmail.com',
        role: 'user'
    },
    {
        id: uuid.v4(),
        username: 'henk3',
        password: '$2b$10$OMn/mTyHdSk6AW0hoknXi.7QY81efCdBbxzwLoH19Yi/k1V5JaBEO', //Henk!23
        email: 'henk3@gmail.com',
        role: 'user'
    }
];

module.exports = users;