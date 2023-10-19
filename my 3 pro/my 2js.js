
(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";
  helloSpeaker.speak = function speak(name) {
  console.log(speakWord + " " + name);
}

 window.helloSpeaker = helloSpeaker;

})(window);

(function (window) {
var byeSpeaker = {};
var speakWord = "Good Bye";
byeSpeaker.speak = function speak(name) {
  console.log(speakWord + " " + name);
}
 window.byeSpeaker = byeSpeaker;

})(window);for (var i = 0; i < names.length; i++) {
 var firstLetter = names[i].charAt(0).toLowerCase();
   if (firstLetter=="j") {
    // byeSpeaker.xxxx
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }}
})();

