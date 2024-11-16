import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

// Настройка CORS
const corsOptions = {
    origin: 'http://localhost:3000', // Разрешенный источник
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Разрешенные методы
    credentials: true, // Разрешить отправку куки
    optionsSuccessStatus: 204 // Для старых браузеров
};

// Используем CORS с заданными параметрами
app.use(cors(corsOptions));

app.get('/api/products', (req, res) => {
    const products = [
        { photoUrl: '/img/pug.jpg', name: 'Мопс 1', status: 'Уже забрали', age: '2' },
        { photoUrl: '/img/pug.jpg', name: 'Мопс 2', status: 'Доступен', age: '11' },
        { photoUrl: '/img/pug.jpg', name: 'Мопс 3', status: 'Доступен', age: '6' },
        { photoUrl: '/img/pug.jpg', name: 'Мопс 4', status: 'Доступен', age: '1' },
        { photoUrl: '/img/pug.jpg', name: 'Мопс 5', status: 'Уже забрали', age: '4' },
        { photoUrl: '/img/pug.jpg', name: 'Мопс 6', status: 'Доступен', age: '4' },
        { photoUrl: '/img/pug.jpg', name: 'Мопс 7', status: 'Уже забрали', age: '2' },
        { photoUrl: '/img/pug.jpg', name: 'Мопс 8', status: 'Доступен', age: '8' },
        { photoUrl: '/img/pug.jpg', name: 'Мопс 9', status: 'Доступен', age: '12' },
        { photoUrl: '/img/pug.jpg', name: 'Мопс 10', status: 'Доступен', age: '4' },
        { photoUrl: '/img/pug.jpg', name: 'Мопс 11', status: 'Уже забрали', age: '4' },
        { photoUrl: '/img/pug.jpg', name: 'Мопс 12', status: 'Доступен', age: '2' },
    ];
    res.json(products);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
