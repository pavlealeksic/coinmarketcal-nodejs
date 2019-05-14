const request = require("request");
const querystring = require("querystring");

class CoinMarketCal {
    constructor(api_key) {
        this.api_key = api_key;
        this.generateAccessToken = this.generateAccessToken.bind(this);
    }

    generateApiPath(queryObj, endpoint) {
        return `https://developers.coinmarketcal.com/${endpoint}?${querystring.stringify(queryObj)}`;
    }

    sendRequest(path, cb) {
        return new Promise((resolve, reject) => {
            const options = { method: 'GET',
            url: path,
            headers: { Accept: 'application/json',
              'Accept-Encoding': 'deflate, gzip',
              'x-api-key': this.api_key } 
            };
            request(options, (err, res, body) => {
                if(res.statusCode === 400) {
                    throw new Error();
                } else if(res.statusCode === 401) {
                    throw new Error();
                } else {
                    resolve(cb(JSON.parse(body)));
                }
            });
        });
    }


    getCoins(cb) {
        const queryObj = {};

        const path = this.generateApiPath(queryObj, "v1/coins");
        this.sendRequest(path, cb);
    }

    getCategories(cb) {
        const queryObj = {};

        const path = this.generateApiPath(queryObj, "v1/categories");
        this.sendRequest(path, cb);
    }

    getEvents(eventQuery, cb) {
        const queryObj = {
            ...eventQuery
        };

        const path = this.generateApiPath(queryObj, "v1/events");
        this.sendRequest(path, cb);
    }
}

module.exports = CoinMarketCal;
