import express from 'express';
import ic from '../lib/index.js';

let application = express();
let port = 80 || 443;

application.use(express.json());
application.use(express.urlencoded({
    extended: (true),
}));

application.get('/validate', function (request, result) {
    result.set('Content-Type', 'application/json');


    let param = {
        ic: (request.query.ic),
    };

    result.json({
        result: new ic(param['ic']).validate(),
    });
});

application.listen(port, function () {
    console.log(`Running.....`);
});