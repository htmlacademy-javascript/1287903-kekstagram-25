const MAX_VALUE= 10;

function returnNumber(min,max) {
  return Math.floor((Math.random()*(max-min+1))+min);
}
returnNumber(1,10);

function checkLength(comment,max) {
  return comment.length<=max;
}
checkLength('Привет всем,как дела?Как жизнь?!', MAX_VALUE);