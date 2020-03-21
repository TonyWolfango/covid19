const fetch = require('node-fetch');
//const Bluebird = require('bluebird');
 
//fetch.Promise = Bluebird;


fetch("https://pomber.github.io/covid19/timeseries.json")
  .then(response => response.json())
  .then(data => {
    data["Portugal"].forEach(({ date, confirmed, recovered, deaths }) =>
      console.log(`${date} casos ativos: ${confirmed - recovered - deaths}`)
    )
  });