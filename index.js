const express = require('express');
const Coinmarker = require('./coinmarkercap')
const Whattomine = require('./whattomine')
const Linenotify = require('./lineNotify')
const config = require('./config')

const cron = require('node-cron');

cron.schedule(`0 0 */${config.run_every} * * *`, function(){
  console.log('Start Server........')
  Coinmarker.loadCoinmarker().then(resultcoinmarker => {
    const whattominearg ={
      currentprice_RVN: resultcoinmarker
    }
    console.log('resultcoinmarker',whattominearg)
    Whattomine.loadWhattomine(whattominearg).then(resultwhattomine => {
      console.log('resultwhattomine',resultwhattomine)
      Linenotify.loadLinenotify(resultwhattomine).catch(err => {
        console.log('err',err)
      })
    })
  });
});


