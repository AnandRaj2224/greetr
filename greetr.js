( function (global) {

  var Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName,lastName,language);
  }

  var supportedLang = ['en', 'hindi'];

  var greetings  = {
    en : 'hello',
    hindi : 'namaste'
  };

  var formalGreetings = {
    en : 'greetings',
    hindi : 'namaskar'
  };

  var logMessages = {
    en : 'logged in',
    hindi : 'aap log in hain'
  };

  Greetr.prototype = {

    fullName : function () {
      return this.firstName + ' ' + this.lastName;
    },
    validate : function () {
      if(supportedLang.indexOf(this.language) === -1) {
        throw "invalid language";
      }
    },
    greeting : function () {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },
    formalGreeting : function () {
      return formalGreetings[this.language] + ' ' + this.fullName();
    },
    greet : function(formal) {
      var msg;

      if(formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }

      if(console) {
        console.log(msg);

        return this;
      }
    },

    log : function () {
      if(console) {
        console.log(logMessages[this.language] + ':' + this.fullName());

        return this;
      }
    },
    setLang : function (lang) {
      this.language = lang;
      this.validate();
      return this;
    } 

  };
     
  Greetr.init = function (firstName,lastName,language) {

    var self = this;

    this.firstName = firstName || '';
    this.lastName = lastName || '';
    this.language = language || 'en';
  }

  Greetr.init.prototype = Greetr.prototype;

  Greetr.global = global.G$ = Greetr;

} (window));