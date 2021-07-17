  const questions = [
    {
      wording: `Выберите более верное продолжение фразы: "Javascript — это язык программирования больше..."`,
      pointsAvailable: 0.8,
      options: {
        a: `функциональный`,
        b: `объектно-ориентированный, поскольку и функции в нем являются  объектами`
      },
      correctOptions: [`a`],
      themes: [`js`, `js-functions`]
    },
    {
      wording: `Верно ли, что функции в JS обладают всеми свойствами объектов?`,
      pointsAvailable: 0.8,
      options: {
        a: `Да`,
        b: `Нет`,
        c: `Да, но кроме функций-генераторов`
      },
      correctOptions: [`a`],
      themes: [`js`, `js-functions`]
    },
    {
      wording: `Функции в JS можно:`,
      pointsAvailable: 1.2,
      options: {
        a: `Создавать с помощью литерала функции`,
        b: `Присваивать переменным`,
        c: `Присваивать элементам массивов`,
        d: `Присваивать свойствам других объектов`,
        e: `Передавать в качестве аргументов другим функциям`,
        f: `Возвращать в качестве значений из других функций`,
        g: `Наделять свойствами`
      },
      correctOptions: [`a`, `b`, `c`, `d`, `e`, `f`, `g`],
      themes: [`js`, `js-functions`]
    },
    {
      code: `function myFun() {\n  return true;\n}`,
      wording: `Это пример определения функции с помощью`,
      pointsAvailable: 0.8,
      options: {
        a: `объявления функции (Function Declaration)`,
        b: `функционального выражения (Function Expression)`,
        c: `конструктора функций`
      },
      correctOptions: [`a`],
      themes: [`js`, `js-functions`]
    },
    {
      code: `new Function('a', 'b', 'return a + b');`,
      wording: `Это пример определения функции с помощью`,
      pointsAvailable: 1,
      options: {
        a: `объявления функции (Function Declaration)`,
        b: `функционального выражения (Function Expression)`,
        c: `функции-конструктора`,
        d: `нет правильных ответов`
      },
      correctOptions: [`d`],
      themes: [`js`, `js-functions`]
    },
    {
      wording: `Имя функции должно быть обязательно указано при ее определении с помощью`,
      pointsAvailable: 0.8,
      options: {
        a: `объявления функции (Function Declaration)`,
        b: `функционального выражения (Function Expression)`,
        c: `стрелочной функции`
      },
      correctOptions: [`a`],
      themes: [`js`, `js-functions`]
    },
    {
      wording: `В каких случаях будет сгенерировано исключение?`,
      pointsAvailable: 1.2,
      options: {
        a: `<code>function myFunc() {}();</code>`,
        b: `<code>(function myFunc() {})();</code>`,
        c: `<code>function() {}();</code>`,
        d: `<code>(function() {}());</code>`,
        f: `<code>(function() {})();</code>`,
        g: `<code>+function() {}();</code>`,
      },
      correctOptions: [`a`, `c`],
      themes: [`js`, `js-functions`]
    },
    {
      code: `a) [1, 2, 3].sort(function sortAsc(a,b) { return b - a; });<br><br>b) function ninja() {}<br>   ninja();<br><br>c) var myBtn = document.getElementById('myBtn');<br>   myBtn.addEventListener('click', function() { alert('Clicked'); });`,
      wording: `В каких пунктах используется функция обратного вызова?`,
      pointsAvailable: 0.8,
      options: {
        a: `a`,
        b: `b`,
        c: `c`
      },
      correctOptions: [`a`, `c`],
      themes: [`js`, `js-functions`]
    },
    {
      wording: `Выберите неверные варианты синтаксиса стрелочной функции.`,
      pointsAvailable: 1,
      options: {
        a: `<code>const myFunc = param1, param2 => param1 - param2;</code>`,
        b: `<code>const myFunc = param1, param2 => {return param1 - param2;};</code>`,
        c: `<code>const myFunc = param1 => param1 - param2;</code>`
      },
      correctOptions: [`a`, `b`],
      themes: [`js`, `js-functions`]
    },
    {
      code: `function skulk(ninja) {\n  return performAction(ninja, 'skulking');\n}`,
      wording: `Выберите правильное утверждение относительно функции <code>skulk</code>.`,
      pointsAvailable: 1,
      options: {
        a: `Параметр <code>ninja</code> функции <code>skulk()</code> передается в качестве аргумента функции <code>performAction()</code>`,
        b: `Аргумент <code>ninja</code> функции <code>skulk()</code> передается в качестве параметра функции <code>performAction()</code>`,
        c: `Параметр <code>ninja</code> функции <code>skulk()</code> передается в качестве параметра функции <code>performAction()</code>`,
      },
      correctOptions: [`a`],
      themes: [`js`, `js-functions`]
    },
    {
      code: `function performAction(ninja, action: 'jumping') {<br>  return ninja + ' ' + action;<br>}<br><br>performAction('Fuma', undefined)`,
      wording: `Какой будет результат запуска кода?`,
      pointsAvailable: 1,
      options: {
        a: `<code>'Fuma undefined'</code>`,
        b: `<code>'Fuma jumping'</code>`,
        c: `Будет сгенерировано исключение`
      },
      correctOptions: [`c`],
      themes: [`js`, `js-functions`, `attention`]
    },
    {
      code: `var ninja = ((name = 'Fuma') => {'Yoshi'})();`,
      wording: `Какое значение примет переменная <code>ninja</code> после выполнения кода?`,
      pointsAvailable: 1,
      options: {
        a: `<code>undefined</code>`,
        b: `<code>'Fuma'</code>`,
        c: `<code>'Yoshi'</code>`,
        d: `Нет правильных ответов`
      },
      correctOptions: [`a`],
      themes: [`js`, `js-functions`]
    },
    {
      code: `function test(a, b, ...c) { /*a, b, c*/ }`,
      wording: `Какое значение принимает параметр <code>с</code> в теле функции <code>test</code> при ее вызове <code>test()</code>?`,
      pointsAvailable: 1,
      options: {
        a: `<code>undefined</code>`,
        b: `<code>null</code>`,
        c: `При выполнении функции будет сгенерировано исключение`,
        d: `Нет правильных ответов`
      },
      correctOptions: [`d`],
      themes: [`js`, `js-functions`]
    },
    {
      wording: `Выберите верные утверждения о параметре <code>this</code> для функции в JS.`,
      pointsAvailable: 1,
      options: {
        a: `Представляет контекст функции`,
        b: `Представляет объект для которого вызывается функция`,
        c: `<code>This</code> — это неявный (не указанный в сигнатуре функции) параметр`
        d: `Все утверждения неверные`
      },
      correctOptions: [`a`, `b`, `c`],
      themes: [`js`, `js-functions`]
    },
    {
      code: `'use strict';<br><br>function infiltrate(person) {<br>  arguments[0] = 'ninja';<br><br>  console.log('The person is a ' + person);<br>}`,
      wording: `Что выведет в консоль вызов <code>infiltrate('gardener')</code>?`,
      pointsAvailable: 1,
      options: {
        a: `<code>'The person is a gardener'</code>`,
        b: `<code>'The person is a ninja'</code>`,
        c: `Будет сгенерировано исключение`
      },
      correctOptions: [`a`],
      themes: [`js`, `js-functions`]
    },
    {
      code: `function Emperor() {<br>  this.rules = true;<br>  return 1;<br>}<br><br>var emperor = new Emperor();`,
      wording: `Какое значение примет <code>emperor</code> после выполнения кода?`,
      pointsAvailable: 1,
      options: {
        a: `<code>{rules: true}</code>`,
        b: `<code>1</code>`,
        c: `Будет сгенерировано исключение`
      },
      correctOptions: [`a`],
      themes: [`js`, `js-functions`]
    },
    {
      wording: `Выберите верные утверждения о методе <code>call()</code> для функций в JS.`,
      pointsAvailable: 1,
      options: {
        a: `По умолчанию существует для любой функции`,
        b: `Вызывает функцию`,
        c: `Указывает на объект который будет служить в качестве контекста функции`,
        d: `Все утверждения неверные`
      },
      correctOptions: [`a`, `b`, `c`],
      themes: [`js`, `js-functions`]
    },
    {
      wording: `Выберите правильные утверждения о стрелочных функциях.`,
      pointsAvailable: 0.8,
      options: {
        a: `Позволяют создавать функции более кратким способом, чем Function Expression и Function Declaration`,
        b: `Не имеют собственного <code>this</code>`,
        c: `Запоминают значение <code>this</code> в момент когда создаются`
        d: `Получают <code>this</code> в момент когда вызываются`,
        f: `Все утверждения неверные`
      },
      correctOptions: [`a`, `b`, `c`],
      themes: [`js`, `js-functions`]
    },
    {
      code: `var param = true;<br><br>var obj = {<br>  param: false,<br>  showParam: () => {<br>    console.log(this.param);  <br>  }<br>};`,
      wording: `Какой будет результат вызова метода <code>obj.showParam()</code>?`,
      pointsAvailable: 1,
      options: {
        a: `<code>true</code>`,
        b: `<code><code>false</code></code>`,
        c: `Будет сгенерировано исключение`
      },
      correctOptions: [`a`],
      themes: [`js`, `js-functions`]
    },
    {
      code: `function Ninja() {<br>  this.whoAmI = function () {<br>    return this;<br>  }.bind(this);<br>}<br><br>var ninja1 = new Ninja();<br><br>var ninja2 = {<br>  whoAmI: ninja1.whoAmI<br>};`,
      wording: `Какой будет результат вызова метода <code>ninja2.whoAmI()</code>?`,
      pointsAvailable: 1.2,
      options: {
        a: `<code>ninja1</code>`,
        b: `<code>ninja2</code>`,
        c: `Будет сгенерировано исключение`
      },
      correctOptions: [`a`],
      themes: [`js`, `js-functions`]
    },
    {
      code: `var person = 'samurai';
var later;

function outerFunction() {
  person = 'ninja';

  function innerFunction() {
    console.log('I am a ' + person);
  }

  later = innerFunction;
}

outerFunction();
later();`,
      wording: `Какой будет результат запуска этого кода?`,
      pointsAvailable: 1.2,
      options: {
        a: `<code>'I am a samurai'</code>`,
        b: `<code>'I am a ninja'</code>`,
        c: `<code>'I am a person'</code>`,
        d: `Будет сгенерировано исключение`
      },
      correctOptions: [`b`],
      themes: [`js`, `js-functions`]
    },
    {
      wording: `Что отслеживает лексическая среда (LexicalEnvironment)?`,
      pointsAvailable: 1,
      options: {
        a: `Локальные переменные`,
        b: `Объявления функций`,
        c: `Параметры функций`,
        d: `Родительскую лексическую среду`
      },
      correctOptions: [`a`, `b`, `c`, `d`],
      themes: [`js`, `js-functions`]
    },
    {
      wording: `Выберите верное продолжение утверждения: "Замыкания предоставляют функции доступ к внешним переменным находящимся в области видимости при ее...".`,
      pointsAvailable: 1,
      options: {
        a: `определении`,
        b: `вызове`
      },
      correctOptions: [`a`],
      themes: [`js`, `js-functions`]
    },
    {
      code: `function Samurai(name) {
  var weapon = 'katana';

  this.getWeapon = function() {
    return weapon;
  };

  this.getName = function() {
    return name;    
  };

  this.message = name + 'wielding a ' + weapon;

  this.getMessage = function () {
    return this.message;    
  };
}

var samurai = new Samurai ("Hattori");

samurai.getWeapon();
samurai.getName();
samurai.getMessage();`,
      wording: `Какие идентификаторы доступны в этом коде через замыкания?`,
      pointsAvailable: 1.2,
      options: {
        a: `<code>weapon</code>`,
        b: `<code>name</code>`,
        c: `<code>this.message</code>`,
        d: `никакие`,
      },
      correctOptions: [`a`, `b`],
      themes: [`js`, `js-functions`]
    },
    {
      code: `function perform(ninja) {
  sneak(ninja);
  infiltrate(ninja);
}

function sneak(ninja) {
  return ninja + ' skulking';
}

function infiltrate(ninja) {
  return ninja + ' infiltrating';
}

perform ('Kuma');`,
      wording: `Какой наибольший размер стека вызовов будет во время выполнения приведенного фрагмента кода?`,
      pointsAvailable: 1.2,
      options: {
        a: `2`,
        b: `3`,
        c: `4`,
        d: `Нет правильных ответов`,
      },
      correctOptions: [`b`],
      themes: [`js`, `js-functions`]
    },
    {
      code: `getNinja();
getSamurai();

function getNinja()
  return 'Yoshi';
}

var getSamurai = () => 'Hattori';`,
      wording: `При вызове какой функции сгенерируется исключение?`,
      pointsAvailable: 1,
      options: {
        a: `<code>getNinja</code>`,
        b: `<code>getSamurai</code>`,
        d: `Код сработает без исключений`,
      },
      correctOptions: [`b`],
      themes: [`js`, `js-functions`]
    },
  ];
