( function (global) {

  var Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName,lastName,language);
  }

    Greetr.prototype = {};
     
  Greetr.init = function (firstName,lastName,language) {

    var self = this;

    this.firstName = firstName || '';
    this.lastName = lastName || '';
    this.language = language || 'en';
  }

  Greetr.init.prototype = Greetr.prototype;

  Greetr.global = global.G$ = Greetr;

} (window));