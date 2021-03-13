const config = require('./config')
const lineNotify = require('line-notify-nodejs')(config.Tokenlinenotify);

const loadLinenotify = async (payload) => {
  return new Promise((resolver,reject) => {
      /*** Linenotify send  */
      lineNotify.notify({
        message: `Monitor BOT: Ravencoin(RVN)  \RX 470 4GB\ ${parseFloat(Number(payload.est_rvn)).toFixed(6)} RVN => ${parseFloat(Number(payload.total_rvn)).toFixed(2)} บาท\               ค่าไฟ 1.6 ต่อ unit`,
      }).then(() => {
        resolver('send completed!');
      }).catch(err => {
        reject(err)
      });
  })
}

module.exports = {
  loadLinenotify
}