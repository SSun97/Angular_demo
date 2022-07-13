let express = require('express');
let axios = require('axios');

let app = express();
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', ['GET', 'PUT', 'POST', 'DELETE']);
  res.append('Access-Control-Allow-Headers', ['Content-Type', 'Authorization']);
  next();

})
app.get('/', (req, res) => {
  res.send('apiServer');
});


app.get('/api/index/quote', async(req, res) => {
  let options = {
    headers: {
      'Cookie': 'xq_a_token=fb258a8752383013c5b5b5492aea4de18508044c; xqat=fb258a8752383013c5b5b5492aea4de18508044c; xq_r_token=9a89a07d59400026c830b71209c77f8f44b2824e; xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTY1OTIyMzk0MiwiY3RtIjoxNjU3NTUxMDYzODY0LCJjaWQiOiJkOWQwbjRBWnVwIn0.nEx4L155NutF0vEOZxMr9TTjTj0dZ1F1Sxvf4VySfHHVmQVFFfnSm935pNcbMO-Cc-f24IbVzlt9V1N5vSi6799uqv-pXIrEBqmYMY68VK8kLoQVad-lBty3CbS3uEwnVl9hOgP4RilmOAN4OcfOD04Lvj1e2f2MKJjei18S6WeLLX3iDB4LNqJ0xeA30HNXWx_GH1WNDZS3N8dO1-jvKNVhgV-JWvMufXAnRPi358PBXDTXp0PTvBM-YO-Edo4oIci1CN8g3TxBOegLsr3JfuBAhNKfTSgN-mFHb-Iy2rGzK7NfafY3X657PrY4tc3FdGQaoLclsxa7SpXXhrOz2Q; u=481657551073397; device_id=fcf879452f4b22a1f971899fc411d613; Hm_lvt_1db88642e346389874251b5a1eded6e3=1657551077; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1657554749',
    }
  }
  let httpUrl = 'https://stock.xueqiu.com/v5/stock/batch/quote.json?symbol=SH000001,SZ399001,SZ399006,SH000688,HKHSI,HKHSCEI,HKHSCCI,.DJI,.IXIC,.INX'
  let result
  try {
    result = await axios.get(httpUrl,options);
  } catch (error) {
    console.log(error);
  }
  
  res.json(result.data);
})

app.get('/api/index/hotStock', async (req, res) => {
  // 10 global  12 Hushen 13 HongKong 11 US
  let index = req.query.index ? req.query.index : 12;
  let options = {
    headers: {
      'Cookie': 'xq_a_token=fb258a8752383013c5b5b5492aea4de18508044c; xqat=fb258a8752383013c5b5b5492aea4de18508044c; xq_r_token=9a89a07d59400026c830b71209c77f8f44b2824e; xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTY1OTIyMzk0MiwiY3RtIjoxNjU3NTUxMDYzODY0LCJjaWQiOiJkOWQwbjRBWnVwIn0.nEx4L155NutF0vEOZxMr9TTjTj0dZ1F1Sxvf4VySfHHVmQVFFfnSm935pNcbMO-Cc-f24IbVzlt9V1N5vSi6799uqv-pXIrEBqmYMY68VK8kLoQVad-lBty3CbS3uEwnVl9hOgP4RilmOAN4OcfOD04Lvj1e2f2MKJjei18S6WeLLX3iDB4LNqJ0xeA30HNXWx_GH1WNDZS3N8dO1-jvKNVhgV-JWvMufXAnRPi358PBXDTXp0PTvBM-YO-Edo4oIci1CN8g3TxBOegLsr3JfuBAhNKfTSgN-mFHb-Iy2rGzK7NfafY3X657PrY4tc3FdGQaoLclsxa7SpXXhrOz2Q; u=481657551073397; device_id=fcf879452f4b22a1f971899fc411d613; Hm_lvt_1db88642e346389874251b5a1eded6e3=1657551077; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1657554749',
    }
  }
  let httpUrl = `https://stock.xueqiu.com/v5/stock/hot_stock/list.json?size=8&_type=${index}&type=${index}`
  let result
  try {
    result = await axios.get(httpUrl,options);
  } catch (error) {
    console.log(error);
  }
  
  res.json(result.data);
})
app.get('/api/index/forum', async (req, res) => {
  let options = {
    headers: {
      'Cookie': 'xq_a_token=fb258a8752383013c5b5b5492aea4de18508044c; xqat=fb258a8752383013c5b5b5492aea4de18508044c; xq_r_token=9a89a07d59400026c830b71209c77f8f44b2824e; xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTY1OTIyMzk0MiwiY3RtIjoxNjU3NTUxMDYzODY0LCJjaWQiOiJkOWQwbjRBWnVwIn0.nEx4L155NutF0vEOZxMr9TTjTj0dZ1F1Sxvf4VySfHHVmQVFFfnSm935pNcbMO-Cc-f24IbVzlt9V1N5vSi6799uqv-pXIrEBqmYMY68VK8kLoQVad-lBty3CbS3uEwnVl9hOgP4RilmOAN4OcfOD04Lvj1e2f2MKJjei18S6WeLLX3iDB4LNqJ0xeA30HNXWx_GH1WNDZS3N8dO1-jvKNVhgV-JWvMufXAnRPi358PBXDTXp0PTvBM-YO-Edo4oIci1CN8g3TxBOegLsr3JfuBAhNKfTSgN-mFHb-Iy2rGzK7NfafY3X657PrY4tc3FdGQaoLclsxa7SpXXhrOz2Q; u=481657551073397; device_id=fcf879452f4b22a1f971899fc411d613; Hm_lvt_1db88642e346389874251b5a1eded6e3=1657551077; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1657554749',
    }
  }
  let httpUrl = `https://xueqiu.com/statuses/hot/listV2.json?since_id=-1&max_id=-1&size=15`
  let result
  try {
    result = await axios.get(httpUrl,options);
  } catch (error) {
    console.log(error);
  }
  
  res.json(result.data);
})
app.get('/api/index/livenews', async (req, res) => {
  let options = {
    headers: {
      'Cookie': 'xq_a_token=fb258a8752383013c5b5b5492aea4de18508044c; xqat=fb258a8752383013c5b5b5492aea4de18508044c; xq_r_token=9a89a07d59400026c830b71209c77f8f44b2824e; xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTY1OTIyMzk0MiwiY3RtIjoxNjU3NTUxMDYzODY0LCJjaWQiOiJkOWQwbjRBWnVwIn0.nEx4L155NutF0vEOZxMr9TTjTj0dZ1F1Sxvf4VySfHHVmQVFFfnSm935pNcbMO-Cc-f24IbVzlt9V1N5vSi6799uqv-pXIrEBqmYMY68VK8kLoQVad-lBty3CbS3uEwnVl9hOgP4RilmOAN4OcfOD04Lvj1e2f2MKJjei18S6WeLLX3iDB4LNqJ0xeA30HNXWx_GH1WNDZS3N8dO1-jvKNVhgV-JWvMufXAnRPi358PBXDTXp0PTvBM-YO-Edo4oIci1CN8g3TxBOegLsr3JfuBAhNKfTSgN-mFHb-Iy2rGzK7NfafY3X657PrY4tc3FdGQaoLclsxa7SpXXhrOz2Q; u=481657551073397; device_id=fcf879452f4b22a1f971899fc411d613; Hm_lvt_1db88642e346389874251b5a1eded6e3=1657551077; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1657554749',
    }
  }
  let httpUrl = `https://xueqiu.com/statuses/livenews/list.json?since_id=-1&max_id=-1&count=15`
  let result
  try {
    result = await axios.get(httpUrl,options);
  } catch (error) {
    console.log(error);
  }
  
  res.json(result.data);
})



app.listen(8080, () => {
  console.log('server is running on port 8080', 'http://localhost:8080');
})