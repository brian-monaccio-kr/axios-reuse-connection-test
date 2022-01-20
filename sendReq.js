// axios usage
const axios = require('axios');
const http = require('http');
const https = require('https');

const axiosInst = axios.create({
  baseURL: 'http://localhost:10500',
  timeout: 2000,
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
  proxy: false
});

let cnt = 0;
const sendReq = function () {
  axiosInst
    .post('/move', {
      userId: 9999,
      moveState: {
        val: cnt++,
      },
    })
    .then((res) => {
      console.log('sent ok', cnt);
      setTimeout(() => {
        sendReq();
      }, 2000);
    })
    .catch((err) => {
      console.log('got error', err);
      setTimeout(() => {
        sendReq();
      }, 2000);
    });
};
sendReq();
