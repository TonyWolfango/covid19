const fetch = require('node-fetch');

var moment = require('moment');
const searchCountry= 'Portugal';

const now = moment().format('YYYY-MM-DD HH:MM.ss');

console.log(`Listagem produzida [${now}] - COVID19 [${searchCountry}]:`)
fetch("https://tonywolfango.github.io/covid19/timeseries.json")
  .then(response => response.json())
  .then(data => {
	  
	// padded
	/*
    data[searchCountry].forEach(({ date, confirmed, recovered, deaths }) => {
	  let _date = moment(date, 'YYYY-M-D').format('YYYY-MMM [[]DD[]]');
	  let _confirmed = confirmed.toString().padStart(4);
	  let _recovered = recovered.toString().padStart(4);
	  let _deaths = deaths.toString().padStart(4);
      console.log(`${_date}: [C]:${_confirmed} - [R]:${_recovered} - [M]:${_deaths}`)
    });
	*/
	// /padded
	
	console.table(
		data[searchCountry].map(v => {
		return {
		  "Data": moment(v.date, 'YYYY-M-D').format('YYYY-MMM [[]DD[]]'),
		  "Mês":  moment(v.date, 'YYYY-M-D').format('MMMM'),
		  "Semana":  moment(v.date, 'YYYY-M-D').format('ww'),
		  "Dia":  moment(v.date, 'YYYY-M-D').format('DD'),
		  "Confirmados": v.confirmed,
		  "Recuperados": v.recovered,
		  "Mortos": v.deaths
		};
	  })
	);
	
  });