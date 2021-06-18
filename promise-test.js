'use strict';

/* resolveは処理が正常に終了した時に呼び、rejectは処理でエラーが起きたときに呼ぶ
   Promise内でどちらかが呼ばれるとPromiseの処理が終わる */
const waitPromise = new Promise((resolve, reject) => {
  // setTimeout関数は、コールバック関数とミリ秒を引数に渡すことで、渡したミリ秒が経過後にコールバック関数が呼ばれる
  setTimeout(() => resolve(), 1000);
});

//thenメソッドにコールバック関数としてconsole~を渡すことで、Promiseの処理後hogeが出力される
waitPromise.then(() => console.log('hoge'));
console.log('fuga');