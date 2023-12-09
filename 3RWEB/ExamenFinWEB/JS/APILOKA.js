var request = new XMLHttpRequest();
request.open("GET", "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/italy?unitGroup=us&key=C679MTDW8BDBB2VNVB6BCBGCF&contentType=json");
request.send();
request.onload = () => {
    if (request.status == 200) {
        var json = JSON.parse(request.response);
        console.log(json);
        var element = document.getElementById("clima");
        element.innerHTML = json.address + "<br>El clima de hoy: <br> La temperatura mínima es: " + json.days[0].tempmin + "°F<br> La temperatura máxima es: " + json.days[0].tempmax + "°F";
    }
}

var requestCorona = new XMLHttpRequest();
requestCorona.open("GET","https://mahabub81.github.io/covid-19-api/api/v1/world-summary.json");
requestCorona.send();
requestCorona.onload = () => {
    if (requestCorona.status == 200) {
        var json = JSON.parse(requestCorona.response);
        console.log(json);
        var element = document.getElementById("Corona-tracs");
        element.innerHTML = "Casos curados de covid: <br>" + "Número de casos curados: " + json.recovered;
    }
}

var requestNews = new XMLHttpRequest();
requestNews.open("GET","https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=dbd44593c8a64b06b96547f02f56d22f");
requestNews.send();
requestNews.onload = () => {
    if (requestNews.status == 200) {
        var json = JSON.parse(requestNews.response);
        console.log(json);
        var element = document.getElementById("NewsTesla");
        element.innerHTML = json.articles[0].title;
    }
}