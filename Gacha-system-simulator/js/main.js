`use strict`;

{
  const btn = document.getElementById('btn');

  // 冗長コード
  // btn.addEventListener('click', () => {
  //   const n = Math.floor(Math.random() * results.length);
  //   btn.textContent = results[n]
  //
  //   switch (n) {
  //     case 0:
  //       btn.textContent = '大吉'
  //       break;
  //
  //     case 1:
  //       btn.textContent = '吉'
  //       break;
  //
  //     case 2:
  //       btn.textContent = '凶'
  //       break;
  //   }
  // });

  // 配列使った書き方
  // btn.addEventListener('click', () => {
  //   const results = ['大吉', '吉', '末吉', '凶'];
  //
  //   btn.textContent = results[Math.floor(Math.random() * results.length)]
  // });

  // 確率を細かく操作したいとき
  btn.addEventListener('click', () => {
    const n = Math.random();
    if (n < 0.07) {
      btn.textContent = '⭐️⭐️⭐️⭐️⭐️'; //7%
    } else if (n < 0.3) {
      btn.textContent = '⭐️⭐️⭐️⭐️'; //23%
    } else {
      btn.textContent = '⭐️⭐️⭐️'; //70%
    }
  });
}