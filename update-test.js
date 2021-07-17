db = db.getSiblingDB(`quiz`);

var id = "3";
db.tests.replaceOne({id}, test);
