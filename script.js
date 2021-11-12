function changeText() {
    var sentence;
    var adjective = [ "economic", "federal", "free", "full", "good" ];
    var noun = [ "time", "person", "year", "way", "day", "thing" ];
    var verb = [ "be", "have", "do", "say", "get" ];
    var adverb = [ "up", "so", "out", "just", "now" ];

    let sentence = (adjective[randomNumber()], noun[randomNumber()], verb[randomNumber()], adverb[randomNumber()]);
    console.log(sentence);

    document.getElementById("textGen").innerHTML = sentence;
}

function randomNumber() {
    return Math.floor(Math.random() * (6 - 0));
}