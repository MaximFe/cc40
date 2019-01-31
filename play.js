var isCorrect = document.getElementById('isCorrect');
var isNotCorrect = document.getElementById('isNotCorrect');
var isTrue = document.getElementsByClassName('isTrue');
var isWrong = document.getElementsByClassName('isWrong');
var sumOfAnswers = 0;
var sumOfWrongAnswers = 0;

function handler1() {
  sumOfAnswers++;
  isCorrect.textContent = sumOfAnswers;
};
function handler2() {
  sumOfWrongAnswers++;
  isNotCorrect.textContent = sumOfWrongAnswers;
};
for (var i = 0 ; i < isTrue.length; i++) {
  isTrue[i].addEventListener('click', handler1, {once: true} );
};
for (var i = 0 ; i < isWrong.length; i++) {
  isWrong[i].addEventListener('click', handler2, {once: true} );
};
