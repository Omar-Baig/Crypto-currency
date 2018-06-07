var request = new XMLHttpRequest();

request.open("GET", "https://api.coinmarketcap.com/v2/ticker/?start=1&limit=20&sort=rank&structure=array", true);
request.onload = function () {
    //Access JSON data here
    var data = JSON.parse(this.response);

    function cCurrencyTemplate(coin) {
        return `<tr>
                    <td class="text-center">${coin.rank}</td>
                    <td class="text-center">${coin.name}</td>
                    <td class="text-center">${coin.symbol}</td>
                    <td class="text-center">$ ${coin.quotes.USD.price}</td>
                <tr>
            `
    }
    document.getElementById("coins").innerHTML =
        `${data.data.map(cCurrencyTemplate).join("")}`
}
request.send();
