var test = {
	"id": "14",
	"enable": true,
	"title": "Каббала для народов мира: \"Повторение пройденного материала\"",
	"questions": {
		"themes": [
			"knm-lesson-5",
			"knm-lesson-6",
			"knm-lesson-7"
		]
	},
	"canonLink": "knm-lessons-5-7",
	"levels": [
		{
			"name": "common",
			"marked": false,
			"score": {
				"min": 0,
				"max": 90
			},
			"recommendation": {
				"data": "common"
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
				"data": "<p>Отличный результат! Вы безусловно отлично поработали над материалом!</p>"
			},
			"recommendation": {
				"data": "common"
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
				"data": "<p>Чудесно! Вы безусловно являетесь экспертом в этой теме.</p>"
			},
			"recommendation": {
				"data": "common"
			}
		},
		{
			"name": "master",
			"marked": true,
			"conclusionPhrase": "Максимальный результат",
			"score": {
				"min": 100,
				"max": 101
			},
			"feedback": {
				"data": "<p>Блестяще! Ваши знания безупречны!</p>"
			},
			"recommendation": {
				"data": "newtest"
			}
		}
	],
	"images": {
		"main": "essentialism-main.jpg",
		"mainTw": "essentialism-main-tw.jpg"
	},
	"description": "Оценивает знания полученные на занятиях: \"Гость и Хозяин\", \"10 Сфирот\" и \"Парцуфим\" курса 'Каббала для народов мира'. Состоит из 12 вопросов.",
	"recommendation": {
		"newtest": "<p>Продолжайте изучение материалы уроков: ${stuff.articleLink5}, ${stuff.articleLink6}, ${stuff.articleLink7}</p>",
		"common": "<p>Восполнить обнаруженные пробелы в знаниях вы можете с помощью материалов: ${stuff.articleLink5}, ${stuff.articleLink6}, ${stuff.articleLink7}</p>"
	},
	"stuff": {
		"articleLink5": "<a href=\"https://docs.google.com/document/d/1pfSRrpwPSkjx3Pho0Hmb-TYpIp2_xBtUQkt75bte40U\" target=\"_blank\">Гость и Хозяин</a>",
		"articleLink6": "<a href=\"https://docs.google.com/document/d/18KJ3s9GE-uDfw3u0D5oJj31jgIuVfk5jbB9B0Q0cWic\" target=\"_blank\">10 сфирот</a>",
		"articleLink7": "<a href=\"https://docs.google.com/document/d/1VQQzPzz26bz62HUyzxDDY_ow21fx5_saaaBGlUtO1Gk\" target=\"_blank\">Парцуфим</a>"
	},
	"links": [
		{
			"name": "Основная",
			"permalink": "knm-lessons-5-7",
			"interval": null,
			"time": null,
			"enable": true,
			"enabledInfo": true,
			"goInStat": true,
			"questionsQuantity": 12,
			"isDisqus": false
		},
		{
			"name": "Все вопросы",
			"permalink": "knm-lessons-5-7-full",
			"interval": null,
			"time": null,
			"enable": true,
			"enabledInfo": true,
			"goInStat": false
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
