var QRCode = require('qrcode')

QRCode.toDataURL('I am a pony!', { scale: 10, maskPattern: 7, errorCorrectionLevel: "H", margin: 1, version: 20 }, function (err, url) {
  console.log(url)
})
