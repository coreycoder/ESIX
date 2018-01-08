import {fetch} from './http.js';

function fetchWallet() {
    fetch('http://json.coinstasher.com/', true)
        .then((data) => {
            if (data === undefined || data === null || data === {}) {
                console.error('Bad data from server.');
            }
            if (data.id && data.accountData) {

            }
            else {
                console.error("No id or account data is available");
            }
        });
}

fetchWallet();