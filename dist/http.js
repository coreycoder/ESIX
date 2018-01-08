"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// function fetch(url, log) {
//     let xhr = new XMLHttpRequest();
//
//     xhr.onload = function() {
//         if (log) {
//             console.log(xhr.responseText);
//         }
//         return xhr.responseText;
//     };
//
//     xhr.open("GET", url);
//     xhr.send(null);
//     return xhr.onload();
// }

function fetch(url, log) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.onload = function () {
            if (log) {
                console.log(xhr.responseText);
                resolve(xhr.responseText);
            }
        };

        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };

        xhr.open("GET", url);
        xhr.send(null);
    });

    // return xhr.onload();
}

exports.fetch = fetch;