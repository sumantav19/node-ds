const yargs = require("yargs");
const axios = require("axios");

var argv = yargs.options({
    currencyFrom: {
        demand: true,
        alias: "cf",
        describe: "Currency From",
        String: true
    },
    currencyTo: {
        demand: true,
        alias: "ct",
        describe: "Currency To",
        String: true
    },
    amount: {
        demand: true,
        alias: "a",
        describe: "Amount",
        Number: true
    }

}).help()
    .argv;
const getExchangeRates = (from, to, amount) => {
    return axios.get(`http://api.fixer.io/latest?base=${from}`)
        .then(response =>
            response.data.rates[to]
        ).catch(error =>
            error
        );
}

const convertCurrency = async (from, to , amount) => {
    const exchangeRate =await getExchangeRates(from,to);
    const countriesCurrencyToUse = await getCountries(to);
    const exchangeAmount =  exchangeRate * amount;

    return `${amount} ${from} is worth ${exchangeAmount} ${to}. ${to} can be used in following countries ${countriesCurrencyToUse}  `

}


function getCountries(currencyCode) {
    return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
        .then((response) => {
            return response.data.map((country) =>  country.name )
        })
        .catch();
}


convertCurrency(argv.currencyFrom,argv.currencyTo,argv.amount).then((output) => process.stdout.write(output));