'use strict';

const fs = require('fs');
const fileName = './test.txt';

function appendFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}
//mainが非同期関数であることを宣言。これによってawaitが使えるようになる
async function main() {
  for (let count = 0; count < 500; count++) {
    //appendFilePromiseをawaitを用いて処理が完了するのを待機させる
    await appendFilePromise(fileName, 'あ');
    await appendFilePromise(fileName, 'い');
    await appendFilePromise(fileName, 'う');
    await appendFilePromise(fileName, 'え');
    await appendFilePromise(fileName, 'お');
    await appendFilePromise(fileName, '\n');
  }
}

main()