# coinmarketcal-nodejs
A node.js wrapper for the coinmarketcal API.

## Installation
```sh
$ npm install coinmarketcal-node
```

## Quick Start 

Get API keys from https://developers.coinmarketcal.com.

Initialize client with api_key.

```
const coinmarketcal = new CoinMarketCal(api_key);
```

## Detailed Example

```
const CoinMarketCal = require("coinmarketcal-nodejs");

// Get API keys @ https://coinmarketcal.com/en/api
const optionsObj = {
    api_key: ""
};


const coinmarketcal = new CoinMarketCal(authObj.api_key);

// Uncomment the console.log()'s below to view response data. 

    const listCategories = (categories) => {
        // console.log(categories);
    };

    const listCoins = (coins) => {
        // console.log(coins);
    };

    const listEvents = (events) => {
        // console.log(events);
    };

    // These resources only require a valid access token to return data.
    coinmarketcal.getCategories(listCategories);
    coinmarketcal.getCoins(listCoins);

    /*
    The event resource takes additional query params for filtering events. Please review the 
    the additional parameters for the events resource @ https://coinmarketcal.com/en/doc/redoc#/paths/~1events/get
    */

    const eventQuery = {
        page: 1, // integer? - Default value: 1
        max: 5, // integer? - Default value: 16 Max: 300
        // dateRangeStart?: string - Default Value: Today - Format - "MM/DD/YYYY",
        // dateRangeEnd?: string - Default Value: Most recent event - Format - "MM/DD/YYYY",
        // coins?: string - "bitcoin,ethereum,ripple",
        // categories?: string - "1,2,3",
        // sortBy?: string - "created_desc" || "hot_events",
        // showOnly?: string - "hot_events",
    };

    coinmarketcal.getEvents(eventQuery, listEvents);

```
