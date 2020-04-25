let moment = require("moment");
(() => {
  'use strict';

  const year = document.getElementById('year');
  const month = document.getElementById('month');
  const date = document.getElementById('date');
  const btn = document.getElementById('btn');
  const p = document.querySelector('p');


  function getResult() {

    // if (!bday.isValid()) {
    //   return '日付が無効です！';
    // }
    const now = moment(new Date());
    // const now = moment().format('YYYYMMDD')だと
    // nowの値をmomentオブジェクトとして扱うことができず,now.diff is not definedが吐かれてしまう
    const bday = year.value + month.value + date.value;
    const d = moment(bday, 'YYYYMMDD');
    let days = now.diff(d, 'day');
    let hours = now.diff(d, 'hour');
    let minutes = now.diff(d, 'minute');
    let seconds = now.diff(d, 'second');
    return `生まれてから${days}日:時間でいうと${hours}時間:分でいうと${minutes}分:秒でいうと${seconds}秒です`;
  }

  btn.addEventListener('click', () => {
    p.textContent = getResult();
  });
})();

//$ browserify js/main.js -o bundle.js




// const d = new Date(input.value);
// p.textContent = `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
// jsのgetMonthは０〜１１の値を返すので＋＋してあげる必要がある

// Moment.jsを使って書いてみる⬇️
// p.textContent = d.isValid() ? d.format('LL') : '無効な日付です！';

// const a = moment();
// console.log(a.format('LLLL'));
// Thursday, April 23, 2020 4:49 PM

// const b = moment('10-01-2020', 'MM-DD-YYYY');
// 10/1か1/10か判断ができないから

// const c = moment(new Date(2019, 0, 12));
// Dateオブジェクトも可能
// あるいはmoment([2019, 0, 12])のように配列で渡す

// hoge.locale('ja');みたいに変更することも可能

// console.log(moment('2019-01').daysInMonth());
// 31 などその月が何日か取得できる

// toArray
// toObject

// console.log(a.format('[Today]: LLLL'));
// []がないとdやaが置き換わってしまう

// clone()で元の変数を変更しない