const questionsData = [
  {
    wording: `Функцией обратного вызова (callback) можно назвать функцию:`,
    pointsAvailable: 1,
    options: {
      a: `созданную для обратного вызова`,
      b: `вызываемую внутри другой функции`,
      c: `передаваемую в качестве аргумента другой функции`
    },
    correctOptions: [`c`],
    themes: [`js`, `js-functions`]
  },
  {
    wording: `Возможно ли в JS определять одну функцию в теле другой?`,
    pointsAvailable: 0.8,
    options: {
      a: `Да`,
      b: `Нет`,
    },
    correctOptions: [`a`],
    themes: [`js`, `js-functions`]
  },
  {
    code: `function practice(ninja, weapon) {<br>  console.log(ninja + ' is handling ' + weapon);<br>}<br><br>practice("Yoshi");`,
    wording: `Что произойдет в результате выполнения этого кода?`,
    pointsAvailable: 0.8,
    options: {
      a: `Будет сгенерировано исключение`,
      b: `Вывод в консоль <code>'Yoshi is handling undefine'</code>`,
      c: `Нет верных ответов`
    },
    correctOptions: [`с`],
    themes: [`js`, `js-functions`, `attention`]
  },
];

print(`Загружено  вопросов ${questionsData.length}`);
