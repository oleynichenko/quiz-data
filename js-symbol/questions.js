var questionsData = [
  {
    wording: 'В каких случаях будет создан символьный примитив?',
    pointsAvailable: 0.8,
    options: {
      a: '<code>let sym1 = Symbol();</code>',
      b: '<code>let sym2 = Symbol("number");</code>',
      c: '<code>let sym3 = new Symbol();</code>',
      d: '<code>let sym4 = "symbol";</code>',
    },
    correctOptions: ['a', 'b'],
    themes: [`js`, `js-symbol`]
  },
  {
    wording: 'Какая основная причина появления символов в JS?',
    pointsAvailable: 1,
    options: {
      a: 'Необходимость создания уникальных свойств в объектах',
      b: 'Необходимость создания приватных свойств в объектах',
      c: 'Нет верных ответов'
    },
    correctOptions: ['a'],
    themes: [`js`, `js-symbol`]
  },
  {
  	code: 'let sym = Symbol(); <br><br>console.log(typeof sym);',
    wording: 'Что будет выведено в консоль?',
    pointsAvailable: 0.8,
    options: {
      a: '<code>Symbol</code>',
      b: '<code>Object</code>',
      c: '<code>Function</code>',
      d: 'Нет верных ответов',
    },
    correctOptions: ['d'],
    themes: [`js`, `js-symbol`]
 	},
 	{
 		code: 'let sym = Symbol("name");',
    wording: 'Как изменить имя символа с "name" на "mySymbol"?',
    pointsAvailable: 0.8,
    options: {
      a: '<code>sym.name = "mySymbol";</code>',
      b: '<code>sym["name"] = "mySymbol";</code>',
      c: '<code>Symbol.keyFor(sym) = "mySymbol";</code>',
      d: 'Никак',
    },
    correctOptions: ['d'],
    themes: [`js`, `js-symbol`]
 	},
 	{
 		code: 'console.log(Symbol("name1") == Symbol("name2"));',
    wording: 'Почему при запуске этого кода мы увидим в консоли <code>false</code>?',
    pointsAvailable: 0.8,
    options: {
      a: 'Поскольку у символов разные имена',
      b: 'Поскольку каждый символ уникальный',
      c: 'Вообще-то в консоли будет <code>true</code>',
    },
    correctOptions: ['b'],
    themes: [`js`, `js-symbol`]
 	}, 	
 	{
    wording: 'Выберите верные продолжения фразы: "Глобальный реестр символов..."',
    pointsAvailable: 0.8,
    options: {
    	a: 'хранит символы созданные с помощью синтаксиса <code>Symbol()</code>',
      b: 'хранит символы доступные в глобальной области видимости',
      c: 'хранит символы созданные с помощью синтаксиса <code>Symbol.keyFor()</code>',
    },
    correctOptions: ['b'],
    themes: [`js`, `js-symbol`]
 	},
 	{
    wording: 'Для чего используется метод <code>Symbol.for</code>?',
    pointsAvailable: 1,
    options: {
      a: 'Для создания символа',
      b: 'Для чтения символа',
      c: 'Для получения имени символа',
    },
    correctOptions: ['a', 'b'],
    themes: [`js`, `js-symbol`]
 	},
  {
    code: 'let test = Symbol("name"); <br><br>console.log(Symbol.keyFor(test));',
    wording: 'Что будет выведено в консоль после запуска этого кода?',
    pointsAvailable: 1.2,
    options: {
      a: '<code>"name"</code>',
      b: '<code>undefined</code>',
      c: '<code>"Symbol(name)"</code>',
      d: 'Нет верных ответов',
    },
    correctOptions: ['b'],
    themes: [`js`, `js-symbol`]
  },
  {
    code: 'let isAdmin = Symbol.for("myStatus"); <br><br>let user = {<br>  name: "Jhon", <br>  [isAdmin]: true <br>};',
    wording: 'Как получить из объекта <code>user</code> значение его символьного свойства?',
    pointsAvailable: 1,
    options: {
      a: '<code>user[isAdmin]</code>',
      b: '<code>user.myStatus</code>',
      c: '<code>user[Symbol.for("myStatus")]</code>',
      d: 'Нет верных ответов',
    },
    correctOptions: ['a', 'c'],
    themes: [`js`, `js-symbol`]
  },
  {
    code: 'let key = Symbol(); <br><br>let obj = {<br>  key: 1, <br>  [key]: 2<br>}; <br><br>console.log(obj.key)',
    wording: 'Что будет в консоли после запуска этого кода?',
    pointsAvailable: 0.8,
    options: {
      a: '1',
      b: '2',
      c: 'Сообщение о сгенерированном исключении',
    },
    correctOptions: ['a'],
    themes: [`js`, `js-symbol`]
  },
  {
    code: 'let user = {<br>  name: "John", <br>  [Symbol.for("isAdmin")]: true<br>};',
    wording: 'С помощью какого метода можно увидеть символьное свойство объекта <code>user</code>?',
    pointsAvailable: 1,
    options: {
      a: '<code>user.getOwnPropertySymbols()</code>',
      b: '<code>user.getOwnPropertyNames()</code>',
      c: '<code>Reflect.ownKeys(user)</code>',
      d: 'Такого метода не существует',
    },
    correctOptions: ['a', 'c'],
    themes: [`js`, `js-symbol`]
  },
  {
    wording: 'Что вернет метод <code>Symbol.for("mySymbol")</code>, если символа с именем <code>"mySymbol"</code> в глобальном реестре символов не существует?',
    pointsAvailable: 1,
    options: {
      a: '<code>undefined</code>',
      b: '<code>null</code>',
      c: 'Нет верных ответов'
    },
    correctOptions: ['c'],
    themes: [`js`, `js-symbol`]
  },
  {
    wording: 'Выберите операторы или методы которые "не видят" символьные свойства объекта.',
    pointsAvailable: 1.2,
    options: {
      a: '<code>for...in</code>',
      b: '<code>Object.keys</code>',
      c: '<code>Reflect.ownKeys</code>',
      d: '<code>Object.getOwnPropertyNames</code>'
    },
    correctOptions: ['a', 'b', 'd'],
    themes: [`js`, `js-symbol`]
 	},
 ];

 // console.log(questions.length);