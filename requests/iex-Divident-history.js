const https = require('https');
const iexToken = ""; //TODO
const options = {
  hostname: 'cloud.iexapis.com',
  port: 80,
  path: `/stable/stock/AAPL/upcoming-dividends?token=${iexToken}`,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()