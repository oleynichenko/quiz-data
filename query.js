db = db.getSiblingDB(`quiz`);

var quer = {"links.permalink": permalink};

var projectio = {
  _id: 0,
  id: 1,
  links: 1,
  stat: 1
};

var res = db.tests.findOne(quer, projectio);
printjson(res);

// mongodb+srv://tests-dev:<PASSWORD>@cluster0-pgozq.mongodb.net/test?retryWrites=true