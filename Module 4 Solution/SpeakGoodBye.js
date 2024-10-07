// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2
function byeSpeaker(name) {
  console.log(speakWord + "Goodbye" + name);
  var greeting = "Goodbye";
}
function newFunction() {
  (function (window) {
    var yaakovGreeter = {};
    yaakovGreeter.name = "Yaakov";
    yaakovGreeter.byeSpeaker = function () {
      console.log(greeting + yaakovGreeter.name);
    };

    window.yaakovGreeter = yaakovGreeter;

  })(window);
}
function newFunction() {
  (function (window) {
    var jenGreeter = {};
    jenGreeter.name = "Jen";
    jenGreeter.byeSpeaker = function () {
      console.log(greeting + jenGreeter.name);
    };

    window.jenGreeter = jenGreeter;

  })(window);
}
function newFunction() {
  (function (window) {
    var jasonGreeter = {};
    jasonGreeter.name = "Jason";
    jasonGreeter.byeSpeaker = function () {
      console.log(greeting + jasonGreeter.name);
    };

    window.jasonGreeter = jasonGreeter;

  })(window);
}
function newFunction() {
  (function (window) {
    var frankGreeter = {};
    frankGreeter.name = "Frank";
    frankGreeter.byeSpeaker = function () {
      console.log(greeting + frankGreeter.name);
    };

    window.frankGreeter = frankGreeter;

  })(window);
}
function newFunction() {
  (function (window) {
    var paulGreeter = {};
    paulGreeter.name = "Paul";
    paulGreeter.goodbyeSpeaker = function () {
      console.log(greeting + paulGreeter.name);
    };

    window.paulGreeter = paulGreeter;

  })(window);
}
function newFunction() {
  (function (window) {
    var paulaGreeter = {};
    paulaGreeter.name = "Paula";
    paulaGreeter.byeSpeaker = function () {
      console.log(greeting + paulaGreeter.name);
    };

    window.paulaGreeter = paulaGreeter;

  })(window);
}
function newFunction() {
  (function (window) {
    var larryGreeter = {};
    larryGreeter.name = "Larry";
    larryGreeter.byeSpeaker = function () {
      console.log(greeting + larryGreeter.name);
    };

    window.larryGreeter = larryGreeter;

  })(window);
}
function newFunction() {
  (function (window) {
    var lauraGreeter = {};
    lauraGreeter.name = "Laura";
    lauraGreeter.byeSpeaker = function () {
      console.log(greeting + lauraGreeter.name);
    };

    window.lauraGreeter = lauraGreeter;

  })(window);
}
function newFunction() {
  (function (window) {
    var jimGreeter = {};
    JimGreeter.name = "Jim";
    jimGreeter.byeSpeaker = function () {
      console.log(greeting + jimGreeter.name);
    };

    window.jimGreeter = jimGreeter;

  })(window);
}

// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var byeSpeaker =

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
var speakWord = "Goodbye";

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
function speak(name) {
  console.log(speakWord + "Goodbye" + name);
}

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;
