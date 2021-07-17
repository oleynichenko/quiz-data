db = db.getSiblingDB(`quiz`);

var newLinkData = {
	name: "Все вопросы",
	permalink: "js-functions-short",
	interval: null,
	time: null,
	enable: true,
	enabledInfo: true,
	goInStat: false,
	questionsQuantity: 3
};

var id = "2";

db.tests.updateOne({id}, {$push: {links: newLinkData}});
