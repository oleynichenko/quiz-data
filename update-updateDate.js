db = db.getSiblingDB(`quiz`);

var id = "2";
db.tests.updateOne({id}, {$set: {updateDate: new Date()}});