var questionsData = [
  {
    wording: 'Выберите названия ступеней постижения управления Творца согласно Тании.',
    pointsAvailable: 1,
    options: {
      a: 'Праведник, которому хорошо',
      b: 'Праведник, которому очень хорошо',
      c: 'Законченый праведник',
      d: 'Средний',
      e: 'Бейнони',
      f: 'Полный грешник'
    },
    correctOptions: ['a', 'd', 'e'],
    themes: ['knm-3-lesson-5', 'knm-3']
  },
  {
    wording: 'Кто использует слово "средний" в названии ступеней постижения управления Творца?',
    pointsAvailable: 1,
    options: {
      a: 'Бааль Сулам',
      b: 'Рамхаль',
      c: 'Алтер Ребе'
    },
    correctOptions: ['a', 'c'],
    themes: ['knm-3-lesson-5', 'knm-3']
  },
  {
    wording: 'Если ли добро в сердце у грешника, которому плохо?',
    pointsAvailable: 0.8,
    options: {
      a: 'Да',
      b: 'Нет',
    },
    correctOptions: ['b'],
    themes: ['knm-3-lesson-5', 'knm-3']
  },
  {
    wording: 'Ступень среднего доступна каждому человеку.',
    pointsAvailable: 1.2,
    options: {
      a: 'Да, согласно Бааль Суламу',
      b: 'Нет, согласно Бааль Суламу',
      c: 'Да, согласно Алтер Ребе',
      d: 'Нет, согласно Алтер Ребе'
    },
    correctOptions: ['b', 'c'],
    themes: ['knm-3-lesson-5', 'knm-3']
  },
  {
    wording: 'Где может быть ступень среднего?',
    pointsAvailable: 1.2,
    options: {
      a: 'В раскрытии лика',
      b: 'В скрытии лика'
    },
    correctOptions: ['b', 'a'],
    themes: ['knm-3-lesson-5', 'knm-3']
  },
  {
    wording: 'В каком мире может находиться праведник, которому хорошо?',
    pointsAvailable: 1.2,
    options: {
      a: 'Ацилут',
      b: 'Брия',
      c: 'Ецира',
      d: 'Асия'
    },
    correctOptions: ['b', 'a'],
    themes: ['knm-3-lesson-5', 'knm-3']
  },
  {
    wording: 'Какая ступень постижения управления Творца выше?',
    pointsAvailable: 0.8,
    options: {
      a: 'Грешник, которому хорошо',
      b: 'Грешник, которому плохо'
    },
    correctOptions: ['a'],
    themes: ['knm-3-lesson-5', 'knm-3']
  },
  {
    wording: 'Какая ступень постижения управления Творца самая высокая?',
    pointsAvailable: 0.8,
    options: {
      a: 'Праведник, которому хорошо',
      b: 'Праведник, которому плохо',
      c: 'Законченный праведник',
      d: 'Незаконченный праведник'
    },
    correctOptions: ['a', 'c'],
    themes: ['knm-3-lesson-5', 'knm-3']
  },
  {
    wording: 'В каком духовном мире находится одинарное скрытие?',
    pointsAvailable: 0.8,
    options: {
      a: 'Ацилут',
      b: 'Брия',
      c: 'Ецира',
      d: 'Асия'
    },
    correctOptions: ['d'],
    themes: ['knm-3-lesson-5', 'knm-3']
  },
  {
    wording: 'Где находится ступень постижения управления вознаграждением и наказанием?',
    pointsAvailable: 1,
    options: {
      a: 'В Ацилут',
      b: 'В Брия',
      c: 'В Ецира',
      d: 'В Асия'
    },
    correctOptions: ['b', 'c'],
    themes: ['knm-3-lesson-5', 'knm-3']
  },
  {
    wording: 'В каком духовном мире возможна абсолютная любовь?',
    pointsAvailable: 0.8,
    options: {
      a: 'В Ацилут',
      b: 'В Брия',
      c: 'В Ецира',
      d: 'В Асия'
    },
    correctOptions: ['a'],
    themes: ['knm-3-lesson-5', 'knm-3']
  },
  {
    wording: 'Возможна ли независимая любовь в мире Брия?',
    pointsAvailable: 0.8,
    options: {
      a: 'Да',
      b: 'Нет'
    },
    correctOptions: ['a'],
    themes: ['knm-3-lesson-5', 'knm-3']
  },
  {
    wording: 'В каких духовных мирах осуществляется управление раскрытием лика?',
    pointsAvailable: 0.8,
    options: {
      a: 'В Ацилут',
      b: 'В Брия',
      c: 'В Ецира',
      d: 'В Асия'
    },
    correctOptions: ['a', 'b', 'c'],
    themes: ['knm-3-lesson-5', 'knm-3']
  },
  {
    wording: 'Кто написал книгу "Путь праведных?"',
    pointsAvailable: 0.8,
    options: {
      a: 'Алтер Ребе',
      b: 'Бааль Сулам',
      c: 'Рамхаль'
    },
    correctOptions: ['c'],
    themes: ['knm-3-lesson-5', 'knm-3']
  },
  {
    wording: 'Сколько ступеней описывает Рамхаль в "Месилат Ешарим"?',
    pointsAvailable: 0.8,
    options: {
      a: '4',
      b: '5',
      c: '10',
      d: 'Нет правильных ответов'
    },
    correctOptions: ['d'],
    themes: ['knm-3-lesson-5', 'knm-3']
  },
  {
    wording: 'Праведник по Рамхалю это тоже самое что и ...',
    pointsAvailable: 1.2,
    options: {
      a: 'грешник, которому хорошо',
      b: 'законченный грешник',
      c: 'незаконченный праведник',
      d: 'законченный праведник',
      e: 'Нет правильных ответов'
    },
    correctOptions: ['a'],
    themes: ['knm-3-lesson-5', 'knm-3']
  },
];
