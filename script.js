/*
Solution of assignment 4:
Expected output:
Hello gj
Good Bye reddy
Good Bye gadibavi
Good Bye uma
Hello vishu
Hello vishwam
Hello jo
Hello joe
Hello war
Good Bye umas
*/

(function() {
    var names = ["gj", "reddy", "gadibavi", "uma", "vishnu", "vishwam", "jo", "joe", "war", "umas"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
