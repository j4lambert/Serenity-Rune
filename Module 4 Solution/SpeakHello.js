// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2

// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
function helloSpeaker(name){
  console.log(speakWord + "Hello" + name);
  var greeting = "Hello";
}

function newFunction() {
  (function (window) {
    var yaakovGreeter = {};
    yaakovGreeter.name = "Yaakov";
    yaakovGreeter.helloSpeaker.speak= function () {
      console.log(greeting + yaakovGreeter.name);
    };

    window.yaakovGreeter = yaakovGreeter;

  })(window);
}
function newFunction() {
  (function (window) {
    var jenGreeter = {};
    jenGreeter.name = "Jen";
    jenGreeter.helloSpeaker.speak = function () {
      console.log(greeting + jenGreeter.name);
    };

    window.jenGreeter = jenGreeter;

  })(window);
}
function newFunction() {
  (function (window) {
    var jasonGreeter = {};
    jasonGreeter.name = "Jason";
    jasonGreeter.helloSpeaker.speak = function () {
      console.log(greeting + jasonGreeter.name);
    };

    window.jasonGreeter = jasonGreeter;

  })(window);
}
function newFunction() {
  (function (window) {
    var frankGreeter = {};
    frankGreeter.name = "Frank";
    frankGreeter.helloSpeaker.speak = function () {
      console.log(greeting + frankGreeter.name);
    };

    window.frankGreeter = frankGreeter;

  })(window);
}
function newFunction() {
  (function (window) {
    var paulGreeter = {};
    paulGreeter.name = "Paul";
    paulGreeter.helloSpeaker.speak = function () {
      console.log(greeting + paulGreeter.name);
    };

    window.paulGreeter = paulGreeter;

  })(window);
}
function newFunction() {
  (function (window) {
    var paulaGreeter = {};
    paulaGreeter.name = "Paula";
    paulaGreeter.helloSpeaker.speak = function () {
      console.log(greeting + paulaGreeter.name);
    };

    window.paulaGreeter = paulaGreeter;

  })(window);
}
function newFunction() {
  (function (window) {
    var larryGreeter = {};
    larryGreeter.name = "Larry";
    larryGreeter.helloSpeaker.speak = function () {
      console.log(greeting + larryGreeter.name);
    };

    window.larryGreeter = larryGreeter;

  })(window);
}
function newFunction() {
  (function (window) {
    var lauraGreeter = {};
    lauraGreeter.name = "Laura";
    lauraGreeter.helloSpeaker.speak = function () {
      console.log(greeting + lauraGreeter.name);
    };

    window.lauraGreeter = lauraGreeter;

  })(window);
}
function newFunction() {
  (function (window) {
    var jimGreeter = {};
    JimGreeter.name = "Jim";
    jimGreeter.helloSpeaker.speak = function () {
      console.log(greeting + jimGreeter.name);
    };

    window.jimGreeter = jimGreeter;

  })(window);
}

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "Hello";

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
function speak(name) {
  console.log(speakWord + " " + name);
}

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;
