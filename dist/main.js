'use strict';

var _http = require('./http.js');

function fetchWallet() {
    (0, _http.fetch)('http://json.coinstasher.com/', true).then(function (data) {
        console.log(data + "hhhhhh");
    });
}

fetchWallet();