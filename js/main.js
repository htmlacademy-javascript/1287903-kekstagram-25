const MAX_VALUE= 10;
function checkComment(comment,max) {
  return comment.length<=max;
}
checkComment('Привет всем,как дела?Как жизнь?!', MAX_VALUE);


const NAMES = [
  'Иван',
  'Артем',
  'Мария',
  'Сергей',
  'Виктор',
  'Юлия',
  'Настя',
  'Анна',
];
const TEXT = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

function returnNumber(min,max) {
  return Math.floor((Math.random()*(max-min+1))+min);
}

const commentUser = (digit) => ( {
  id: digit,
  avatar: `img/avatar-${returnNumber(1,6)}.svg`,
  message: TEXT[returnNumber(0,TEXT.length-1)],
  name: NAMES[returnNumber(0,NAMES.length-1)]
}
);

const createUser = (index) => ( {
  id: index ,
  url:`photos/${index}.jpg` ,
  description: 'Это самая лучшая фотография',
  likes:returnNumber(15,200),
  comments :commentUser (index+1)
}
);

const randomNumber = [];

for (let i=1;i<=25;i++) {
  randomNumber.push(createUser(i));
}

