const rp = require('request-promise');
const config = require('./config')

var estimated_RVN;
var total_RVN;
const loadWhattomine = async (payload) => {
  return new Promise(async(resolver,reject) => {
    /* Call whattomine check estimated_rewards /**** */
    const requestwhattomineOptions = {
      method: 'GET',
      uri: `https://whattomine.com/coins/234.json?hr=${config.hasrat_rvn}&p=120&fee=0.0&cost=${config.cost_rvn}&hcost=0.0&commit=Calculate`,
      json: true,
      gzip: true
    };
    
   await rp(requestwhattomineOptions).then(response => {
      estimated_RVN = response.estimated_rewards;
      //*** Calculatetor rvn * currentprice_rvn */
      total_RVN = estimated_RVN * payload.currentprice_RVN
      const Allitem = {
        est_rvn: estimated_RVN,
        total_rvn: total_RVN
      }
      resolver(Allitem)
    }).catch((err) => {
      reject(err.message)
    });
  })

}
module.exports = {
  loadWhattomine
}