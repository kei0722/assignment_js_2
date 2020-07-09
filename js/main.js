'use strict';

document.querySelector('button').addEventListener('click', () => {
  const fizzNum = document.getElementById('fizz-num').value;
  const buzzNum = document.getElementById('buzz-num').value;

  function addNum (a, b) {
    const li = document.createElement('li');
    li.textContent = a + b;
    document.querySelector('ul').appendChild(li);
  }

  const ul = document.querySelector('ul');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  } // ボタンがクリックされる度に【出力】以下に表示されているものをリセット

  if (Number.isInteger(Number(fizzNum)) && fizzNum !== '' && Number.isInteger(Number(buzzNum)) && buzzNum !== '') {
    for (let i = 1; i < 100; i++) {
      if (i % fizzNum === 0 && i % buzzNum === 0) {
        addNum ('FizzBuzz', i);
      } else if (i % fizzNum === 0) {
        addNum ('Fizz', i);
      } else if (i % buzzNum === 0) {
        addNum ('Buzz', i);
      }
    }

  } else {
    addNum ('整数値を入力してください', '');
  }
});
