db = db.getSiblingDB(`quiz`);

(() => {
	const newCode = `function Samurai(name) {
  var weapon = "katana";

  this.getWeapon = function() {
    return weapon;
  };

  this.getName = function() {
    return name;    
  };

  this.message = name + "wielding a " + weapon;

  this.getMessage = function () {
    return this.message;    
  };
}

var samurai = new Samurai ("Hattori");
samurai.getWeapon();
samurai.getName();
samurai.getMessage();`;

	const id = ``;
	db.questions.updateOne({id}, {$set: {code: newCode}})
})();