const questionsData = [
  {
    wording: 'Фундаментальная наука на 100% уверена в реальности нашего мира.',
    pointsAvailable: 0.8,
    options: {
      a: 'Да',
      b: 'Нет',
    },
    correctOptions: ['b'],
    themes: ['kb-3', 'kb']
  },
  {
    wording: 'Согласно словарю курса, духовный мир это - ...',
    pointsAvailable: 1,
    options: {
      a: 'настоящая реальность',
      b: 'степень удаления Б-жественного света от его первоисточника',
      c: 'реальность удаленная от Мира Бесконечности',
      d: 'Нет правильных ответов',
    },
    correctOptions: ['d'],
    themes: ['kb-3', 'kb']
  },
  {
    wording: 'Возможно ли ощутить духовный мир обычными органами чувств?',
    pointsAvailable: 1,
    options: {
      a: 'Да',
      b: 'Нет',
      c: 'Зависит о каком именно духовном мире мы говорим',
    },
    correctOptions: ['b'],
    themes: ['kb-3', 'kb']
  },
  {
    wording: 'Считается, что наш мир находится внутри ...',
    pointsAvailable: 1.2,
    options: {
      a: 'Ацилут',
      b: 'Брия',
      c: 'Ецира',
      d: 'Нет правильных ответов',
    },
    correctOptions: ['a', 'b', 'c'],
    themes: ['kb-3', 'kb']
  },
  {
    wording: 'Вселенная лишь совсем немного состоит из материи.',
    pointsAvailable: 0.8,
    options: {
      a: 'Да',
      b: 'Нет',
    },
    correctOptions: ['a'],
    themes: ['kb-3', 'kb']
  },
  {
    wording: 'Вселенная на 9.999… процентов состоит из ...',
    pointsAvailable: 0.8,
    options: {
      a: 'пустоты',
      b: 'материи',
    },
    correctOptions: ['a'],
    themes: ['kb-3', 'kb']
  },
  {
    wording: 'Чего в обьеме тела обычного человека больше?',
    pointsAvailable: 1,
    options: {
      a: 'Пустоты',
      b: 'Материи',
      c: 'Воды',
    },
    correctOptions: ['a'],
    themes: ['kb-3', 'kb']
  },
  {
    wording: 'От какого слова происходит слово "мир" на иврите?',
    pointsAvailable: 0.8,
    options: {
      a: 'Раскрытие',
      b: 'Приближение',
      c: 'Отдаление',
      d: 'Нет правильных ответов',
    },
    correctOptions: ['d'],
    themes: ['kb-3', 'kb']
  },
  {
    wording: 'Сколько существует духовных миров согласно каббале?',
    pointsAvailable: 0.8,
    options: {
      a: '3',
      b: '4',
      c: '5',
      d: '7',
      e: '10',
    },
    correctOptions: ['c'],
    themes: ['kb-3', 'kb']
  },
  {
    wording: 'Какому миру соответствует ментальный план?',
    pointsAvailable: 1,
    options: {
      a: 'Ацилут',
      b: 'Брия',
      c: 'Ецира',
      d: 'Асия',
    },
    correctOptions: ['b'],
    themes: ['kb-3', 'kb']
  },
  {
    wording: 'Выберите из списка названия духовных миров.',
    pointsAvailable: 1,
    options: {
      a: 'Кадмон',
      b: 'Ацилут',
      c: 'Эйн Соф',
      d: 'Асия',
      e: 'Наш мир',
    },
    correctOptions: ['b', 'd'],
    themes: ['kb-3', 'kb']
  },
  {
    wording: 'Астральный план соответствует миру ...',
    pointsAvailable: 1,
    options: {
      a: 'Асия',
      b: 'Брия',
      c: 'Ацилут',
      d: 'Нет правильных ответов',
    },
    correctOptions: ['d'],
    themes: ['kb-3', 'kb']
  },
  {
    wording: 'Что такое языческое восприятие мира?',
    pointsAvailable: 1.2,
    options: {
      a: 'Когда считается, что есть "плохой бог"',
      b: 'Когда считаестя, что есть несколько богов',
      c: 'Когда считается, что есть "сатана"',
      d: 'Когда считается, что добро и зло – это отдельные сущности',
    },
    correctOptions: ['a', 'b', 'd'],
    themes: ['kb-3', 'kb']
  },
  {
    wording: 'В каком мире больше всего Б-жественного света?',
    pointsAvailable: 1,
    options: {
      a: 'Ацилут',
      b: 'Брия',
      c: 'Ецира',
      d: 'Адам Кадмон',
    },
    correctOptions: ['d'],
    themes: ['kb-3', 'kb']
  },
  {
    wording: 'В каком мире из перечисленных меньше всего раскрыто присутствие Творца?',
    pointsAvailable: 1,
    options: {
      a: 'В Ацилут',
      b: 'В Брия',
      c: 'В Ецира',
    },
    correctOptions: ['c'],
    themes: ['kb-3', 'kb']
  },
  {
    wording: 'В каком духовном мире меньше всего раскрыто присутствие Творца?',
    pointsAvailable: 1.2,
    options: {
      a: 'В Ацилут',
      b: 'В Брия',
      c: 'В Ецира',
      d: 'В нашем мире',
      e: 'Нет правильных ответов',
    },
    correctOptions: ['е'],
    themes: ['kb-3', 'kb']
  },
  {
    wording: 'Что такое "Эйн Соф" согласно словарю курса',
    pointsAvailable: 0.8,
    options: {
      a: 'Мир Б-жественности',
      b: 'Мир Бесконечности',
      c: 'Творец',
      d: 'Нет правильных ответов',
    },
    correctOptions: ['b'],
    themes: ['kb-3', 'kb']
  },
];
