(function() {
  'use strict';

  let price = document.getElementById('price');
  let num = document.getElementById('num');
  let unit = document.getElementById('unit');
  let btn = document.getElementById('btn');
  let result = document.getElementById('result');
  let reset = document.getElementById('reset');
  let disabledIcon = document.getElementById('disabledIcon');

  function checkInput() {
    if (
      // この正規表現にマッチしない場合は全てnullを返す処理
      // 一桁目に1~9のどれか、それ以降に0~9と言う数値が繰り返されるかどうか先頭から末尾まで調べる
      price.value.match(/^[1-9][0-9]*$/) !== null &&
      num.value.match(/^[1-9][0-9]*$/) !== null) {
      btn.classList.remove('disabled');
      disabledIcon.classList.remove('disabled-icon');
      btn.classList.add('active');
    } else {
      btn.classList.add('disabled');
      disabledIcon.classList.add('disabled-icon');
      btn.classList.remove('active');
    }
  }
  btn.addEventListener('click', () => {
    let payLess;
    let short;
    let payMore;
    let over;
    let str;
    if (btn.classList.contains('disabled') === true) {
      // 何も処理を走らせたくないとき
      return;
    }
    payLess = Math.floor(price.value / num.value / unit.value) * unit.value;
    short = price.value - (payLess * num.value);
    // ceilは繰り上げの処理
    payMore = Math.ceil(price.value / num.value / unit.value) * unit.value;
    // absは絶対値を取得する処理
    over = Math.abs(price.value - (payMore * num.value));
    if (over === 0 && short === 0) {
      str = '一人' + (price.value / num.value) + '円ぴったり！天才！';
    } else {
      str =
        // '一人' + payLess + '円だと' + short + '円たりません。' +
        `1人${payMore}円：お釣り${over}円
      お酒飲んでない人、あんまり食べてない人にあげちゃいましょう。`;
    }

    result.textContent = str;
    reset.classList.remove('hidden');

    reset.addEventListener('click', function() {
      result.textContent = 'RESULT...'
      price.value = '';
      num.value = '';
      unit.value = 100;
      btn.classList.add('disabled');
      disabledIcon.classList.add('disabled-icon')
      reset.classList.add('hidden');
      btn.classList.remove('active');
      // 最初にpriceに入力可能にしておく
      price.focus();
    })
  });
  // ユーザーが値を入力したかどうかの判定はkeyup
  price.addEventListener('keyup', checkInput);
  num.addEventListener('keyup', checkInput);

})();