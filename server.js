const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const LOGIN = 'annaborisevich';


// (A) текущая дата
app.get('/080526', (req, res) => {
    res.type('text/plain');
    res.send(LOGIN);
});


// (Б) сумма
app.get('/add/:x1/:x2', (req, res) => {
    const x1 = Number(req.params.x1);
    const x2 = Number(req.params.x2);

    res.type('text/plain');
    res.send(String(x1 + x2));
});


// (В) произведение
app.get('/mpy/:y1/:y2', (req, res) => {
    const y1 = Number(req.params.y1);
    const y2 = Number(req.params.y2);

    res.type('text/plain');
    res.send(String(y1 * y2));
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});