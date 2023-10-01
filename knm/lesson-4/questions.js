const questionsData = [
  {
    wording: 'Слово "воля" в рамках нашего курса это то же самое, что и...',
    pointsAvailable: 1.2,
    options: {
      a: 'желание',
      b: 'потребность',
      c: 'рацон леашпия',
      d: 'желание отдавать',
      e: 'Нет правильных ответов',
    },
    correctOptions: ['d', 'c'],
    themes: ['knm-4']
  },
  {
    wording: 'Что такое "рацон лекабэль"?',
    pointsAvailable: 0.8,
    options: {
      a: 'желание получать',
      b: 'желание отдавать',
    },
    correctOptions: ['a'],
    themes: ['knm-4']
  },
  {
    wording: '"Рацон леашпия" в рамках нашего курса то же самое, что и...',
    pointsAvailable: 1,
    options: {
      a: 'желание получать',
      b: 'желание отдавать',
      c: 'желание влиять',
      d: 'Нет правильных ответов',
    },
    correctOptions: ['b', 'c'],
    themes: ['knm-4']
  },
  {
    wording: '"Воля" и "рацон леашпия" это в рамках нашего курса синонимы.',
    pointsAvailable: 0.8,
    options: {
      a: 'Да',
      b: 'Нет',
    },
    correctOptions: ['a'],
    themes: ['knm-4']
  },
  {
    wording: 'Что такое "рацон" согласно словарю курса?',
    pointsAvailable: 0.8,
    options: {
      a: 'Желание',
      b: 'Воля',
      c: 'Потребность',
      d: 'Нет правильных ответов',
    },
    correctOptions: ['a'],
    themes: ['knm-4']
  },
  {
    wording: 'Как на курсе мы называем эгоистичное желание, ориентировано лишь на то, чтобы что-то получить?',
    pointsAvailable: 1,
    options: {
      a: 'Воля',
      b: 'Рацон леашпия',
      c: 'Желание влиять',
      d: 'Нет правильных ответов',
    },
    correctOptions: ['d'],
    themes: ['knm-4']
  },
  {
    wording: 'Воля – это и есть приведение желания к подобию света.',
    pointsAvailable: 0.8,
    options: {
      a: 'Да',
      b: 'Нет',
    },
    correctOptions: ['a'],
    themes: ['knm-4']
  },
  {
    wording: 'От какого слова происходит имя первого человека?',
    pointsAvailable: 1,
    options: {
      a: 'Земля',
      b: 'Глина',
      c: 'Уподоблюсь',
      d: 'Свет',
    },
    correctOptions: ['a', 'b', 'c'],
    themes: ['knm-4']
  },
  {
    wording: 'Какие сфирот отвечают за этап замысла в процессе реализации воли?',
    pointsAvailable: 1.2,
    options: {
      a: 'Кетер',
      b: 'Хохма',
      c: 'Бина',
      d: 'Даат',
      e: 'Малхут',
    },
    correctOptions: ['b', 'c', 'd'],
    themes: ['knm-4']
  },
  {
    wording: 'К какому этапу реализации воли относится сфира Нецах?',
    pointsAvailable: 1.2,
    options: {
      a: 'К этапу замысла',
      b: 'К этапу инструментов для реализации',
      c: 'К этапу сил для реализации',
      d: 'К этапу энергии для реализации',
      e: 'Нет правильных ответов',
    },
    correctOptions: ['e'],
    themes: ['knm-4']
  },
  {
    wording: 'К какому этапу реализации воли относится сфира Кетер?',
    pointsAvailable: 1,
    options: {
      a: 'К этапу замысла',
      b: 'К этапу инструментов для реализации',
      c: 'К этапу сил для реализации',
      d: 'К этапу энергии для реализации',
      e: 'Нет правильных ответов',
    },
    correctOptions: ['e'],
    themes: ['knm-4']
  },
  {
    wording: 'К какой сфире относится совершение действия в процессе реализации воли?',
    pointsAvailable: 1,
    options: {
      a: 'Кетер',
      b: 'Хохма',
      c: 'Хесед',
      d: 'Малхут',
      e: 'Есод',
    },
    correctOptions: ['e'],
    themes: ['knm-4']
  },
  {
    wording: 'В какой сфире находятся все инструменты, подобранные для совершения действия в процессе реализации воли?',
    pointsAvailable: 1,
    options: {
      a: 'Бина',
      b: 'Хохма',
      c: 'Хесед',
      d: 'Тиферет',
      e: 'Есод',
    },
    correctOptions: ['d'],
    themes: ['knm-4']
  },
  {
    wording: 'Все разнообразие вариантов средств, выбранных для совершения действия находятся в сфире...',
    pointsAvailable: 1,
    options: {
      a: 'Год',
      b: 'Бина',
      c: 'Хесед',
      d: 'Тиферет',
      e: 'Есод',
    },
    correctOptions: ['c'],
    themes: ['knm-4']
  },
  {
    wording: 'Какая из трех вертикальных линий на дереве сфирот связана с функциями расширения?',
    pointsAvailable: 0.8,
    options: {
      a: 'Правая',
      b: 'Левая',
      c: 'Средняя',
    },
    correctOptions: ['a'],
    themes: ['knm-4']
  },
  {
    wording: 'Какие из сфирот стремятся к наибольшему охвату всех имеющихся возможностей на своем уровне?',
    pointsAvailable: 1.2,
    options: {
      a: 'Хохма',
      b: 'Бина',
      c: 'Хесед',
      d: 'Тиферет',
      e: 'Нецах',
      f: 'Год',
      g: 'Есод',
    },
    correctOptions: ['a', 'c', 'e'],
    themes: ['knm-4']
  },
];
