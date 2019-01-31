var isCorrect = document.getElementById('isCorrect');
var isNotCorrect = document.getElementById('isNotCorrect');
var isTrue = document.getElementsByClassName('isTrue');
var isWrong = document.getElementsByClassName('isWrong');
var sumOfAnswers = 0;
var sumOfWrongAnswers = 0;

function handler1(event) {
  sumOfAnswers++;
  isCorrect.textContent = sumOfAnswers;
  event.target.style.color="green";
};
function handler2(event) {
  sumOfWrongAnswers++;
  isNotCorrect.textContent = sumOfWrongAnswers;
  event.target.style.color="red";
};
for (var i = 0 ; i < isTrue.length; i++) {
  isTrue[i].addEventListener('click', handler1.bind(event), {once: true} );
};
for (var i = 0 ; i < isWrong.length; i++) {
  isWrong[i].addEventListener('click', handler2.bind(event), {once: true} );
};
