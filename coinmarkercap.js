const rp = require('request-promise');
const config = require('./config')
  //*** Call check Current Price Coinmarketcap RVN  */
  const loadCoinmarker = async () => {
    return new Promise(async(resolver,reject) => {
      const requestOptions = {
        method: 'GET',
        uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=RVN,BTC,ETH',
        qs: {
          'convert': 'THB'
        },
        headers: {
          'X-CMC_PRO_API_KEY': config.Tokencoinmarkercap
        },
        json: true,
        gzip: true
      };
    
      await rp(requestOptions).then(response => {
          resolver(response.data.RVN.quote.THB.price);
        }).catch((err) => {
          reject(err.message);
        });
    })
  }
  module.exports = {
    loadCoinmarker
  }