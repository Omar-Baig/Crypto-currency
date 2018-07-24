var COIN_MARKET_CAP = new XMLHttpRequest();

var COIN_MARKET_API = "https://api.coinmarketcap.com/v2/ticker/?start=1&limit=20&sort=rank&structure=array";

COIN_MARKET_CAP.open("GET", COIN_MARKET_API, true);


COIN_MARKET_CAP.onload = function () {
    //Access JSON data here
    var data = JSON.parse(this.response);

    function cCurrencyTemplate(coin) {
        var Name = coin.name;
        var Rank = coin.rank;
        var Price = coin.quotes.USD.price;
        var OneHourChange = coin.quotes.USD.percent_change_1h;
        var TwentyFourHourChange = coin.quotes.USD.percent_change_24h;
        var SevenDayChange = coin.quotes.USD.percent_change_7d;

        return `<div class="col-sm-6">
                    <div class="card">
                        <div class="coin-name text-center"><strong>${Name}</strong></div>
                        <div class="coin-info text-center">
                            <p><strong>Rank: </strong>${Rank}</p>
                            <p><strong>Price: </strong>${Price}</p>
                            <p><strong>% change 1h: </strong>${OneHourChange}</p>
                            <p><strong>% change 24h: </strong>${TwentyFourHourChange}</p>
                            <p><strong>% change 7d: </strong>${SevenDayChange}</p>
                        </div>
                    </div>
                </div>`
    }

    /* Bind to ID coins*/
    document.getElementById("coins").innerHTML =
        `${data.data.map(cCurrencyTemplate).join("")}`
}


COIN_MARKET_CAP.send();
