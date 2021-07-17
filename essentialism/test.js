var test = {
	"id": "3",
	"enable": true,
	"title": "Основы эссенциализма",
	"questions": {
		"themes": [
			"essentialism"
		],
	},
	"canonLink": "essentialism",
	"levels": [
		{
			"name": "average",
			"marked": false,
			"score": {
				"min": 0,
				"max": 90
			},
			"feedback": {
				"function": delSymbols(setFeedbackAverageLevel)
			},
			"sharing": {
				"function": delSymbols(setSharingAverageLevel)
			},
			"recommendation": {
				"function": delSymbols(getRecommendAverageLevel)
			}
		},
		{
			"name": "profi",
			"marked": true,
			"conclusionPhrase": "Профессиональный уровень",
			"score": {
				"min": 90,
				"max": 95
			},
			"feedback": {
				"data": '<p>Отличный результат! Вы безусловно профессионал и до уровня EXPERT остается совсем немного! Ваших знаний вполне достаточно чтобы помогать другим, поэтому не стесняйтесь поделиться этим результом.</p>'
			},
			"sharing": {
				"data": {
					"imageName": "essentialism-profi.jpg",
					"imageNameTw": "essentialism-profi-tw.jpg",
					"hashtag": "#essentialist_profi"
				}
			},
			"recommendation": {
				"data": "profi"
			}
		},
		{
			"name": "expert",
			"marked": true,
			"conclusionPhrase": "Уровень эксперта",
			"score": {
				"min": 95,
				"max": 100
			},
			"feedback": {
				"data": "Блестяще! Вы безусловно мастер в этой теме."
			},
			"sharing": {
				"data": {
					"imageName": "essentialism-expert.jpg",
					"imageNameTw": "essentialism-expert-tw.jpg",
					"hashtag": "#essentialist_expert"
				}
			},
			"recommendation": {
				"data": "email"
			}
		},
		{
			"name": "master",
			"marked": true,
			"conclusionPhrase": "Макcимальный результат",
			"score": {
				"min": 100,
				"max": 101
			},
			"sharing": {
				"data": {
					"imageName": "essentialism-expert.jpg",
					"imageNameTw": "essentialism-expert-tw.jpg",
					"hashtag": "#essentialist_expert"
				}
			},
			"recommendation": {
				"data": "email"
			}
		}
	],
	"images": {
		"main": "essentialism-main.jpg",
		"mainTw": "essentialism-main-tw.jpg"
	},
	"description": 'Оценивает способность удалять из жизни все неважное. Создан в 2018 году на основе бестселлера бизнес-тренера Грега МакКеона "Эссенциализм. Путь к простоте". Состоит из 18 случайных вопросов из 30-ти возможных.',
	"introText": null,
	"benefit": 'Кроме навыка концентрации на важном, тест говорит и об уровне житейской мудрости. Чтобы ответить на некоторые вопросы, придется выкинуть из головы популярные психологические штампы и вспомнить как "устроена" жизнь на самом деле.',
	"recommendation": {
		"lowAverage": '<p>Подтяните основы правильного разделения на важное и неважное. В статье ${stuff.preceptsLink} собраны несколько основных принципов эссенциализма. Просмотрите свои ошибки, прочитайте статью и попробуйте пересдать тест.</p><p>Будьте готовы сделать это не один раз, прежде чем получите результат выше среднего. Отнеситесь к этому как к работе за которую вам заплатят годами достойной жизни в ощущении мира с собой.</p><p>P.S. Если вы настроены по-серьезному — берите для работы сразу книгу "Эссенциализм. Путь к простоте":</p> ${stuff.book} <p>В отличие от статей в интернете, она содержит огромное количество реальных примеров из жизни, что на порядок ускоряет понимание.</p>',
		"upAverage": '<p>Чтобы не жалеть в будущем о времени, растраченном на ненужные дела, проработайте книгу "Эссенциализм. Путь к простоте". Сделайте это даже если большинство вещей в ней будут казаться очевидными. "Дьявол кроется в деталях" — в любом деле есть "невидимые" мелочи, без учета которых всегда получается не то, что хотелось. Найдите их!</p><p>Книга:</p>${stuff.book}<p>Пока есть красные вопросы в тесте — не прекращайте читать. Именно читать и думать, а не просто искать ответы на тест. Ясное понимание своего места в жизни и роли в ней других людей определенно стоит этих усилий.</p><p>P.S. Если с книгой пока не получается — возьмите ее обзор ${stuff.book15Link}. Его нельзя назвать альтернативой, но на часть вопросов там есть неплохие обьяснения.</p>',
		"profi": '<p>Дожмите до уровня EXPERT, хотя это и не просто. При пересдаче теста может оказаться что результат хуже, поскольку в тесте появятся новые вопросы. Или вы наткнетесь на вопрос с ответом на который абсолютно не согласны. Или у вас появиться явное ощущение, что и так все нормально. Несмотря ни на что — дожмите до эксперного уровня.</p> <p>Есть знание материала, есть понимание и есть осознание. К последнему доходят самые настырные и не столько от потребности, как из принципа. Только дойдя туда, становиться очевидно насколько это действительно было нужно. Тест — всего лишь очень скромная помощь в этом. Основное оружие — перечитывание и попытки применения к жизненным ситуациям.</p><p>Дожмите до уровня EXPERT :-)</p><p>Статьи:</p><ul><li>${stuff.preceptsLink}</li><li>${stuff.book15Link}</li></ul><p>Книга:</p>${stuff.book}',
		"email": '<p>Поделитесь этим результатом! Есть много людей, которым нужны профессионалы такого уровня и только от новых и нестандартных задач зависит ваш дальнейший рост.</p><p>P.S. Если вы преподаватель и готовы организовать мастер-класс по этой теме — будем рады <a href="mailto:kurtal1976@gmail.com.com?subject=По проекту tests.kiev.ua">сотрудничеству</a>.</p>'
	},
	"stuff": {
		"preceptsLink": '<a href="https://newtonew.com/opinion/menshe-no-luchshe-9-zapovedey-essencialista" target="_blank">9 заповедей эссенциалиста</a>',
		"book15Link": '<a href="https://habr.com/company/makeright/blog/297638/" target="_blank">Эссенциализм за 15 минут</a>',
		"book": '<ul><li><a href="https://www.ozon.ru/context/detail/id/30966970/?partner=tests&from=bar" target="_blank">Ozon.ru</a></li><li><a href="http://apyecom.com/click/5b06db0b8b30a89b618b45e9/69879/subaccount/url=https%3A%2F%2Fwww.yakaboo.ua%2Fjessencializm-put-k-prostote.html" target="_blank">Yakaboo.ua</a></li><li><a href="https://www.litres.ru/greg-makkeon/essencializm-put-k-prostote/?lfrom=398640029" target="_blank">Электронный вариант</a></li></ul>'
	},
	"links": [
		{
			"name": "Основная",
			"permalink": "essentialism",
			"interval": null,
			"time": null,
			"enable": true,
			"enabledInfo": true,
			"goInStat": true,
			"questionsQuantity": 18,
			"isDisqus": true
		},
		{
			"name": "Все вопросы",
			"permalink": "essentialism-full",
			"interval": null,
			"time": null,
			"enable": true,
			"enabledInfo": true,
			"goInStat": false
		},
		{
			"name": "Три вопроса",
			"permalink": "essentialism-short",
			"interval": null,
			"time": null,
			"enable": true,
			"enabledInfo": true,
			"goInStat": false,
			"questionsQuantity": 3,
			"isDisqus": true
		}
	],
	"stat": {
		"levels": {
			"profi": 90,
			"expert": 95
		},
		"report": {}
	}
};
