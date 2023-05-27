
var words = [];

function addWord() {
    var wordInput = document.getElementById("word-input");
    var word = wordInput.value;
    if (word !== "") {
        words.push(word);
        wordInput.value = "";
        displayWords();
    }
}

function sortWords() {
    words.sort();
    displayWords();
}

function unsortWords() {
    words.reverse();
    displayWords();
}

function displayWords() {
    var wordList = document.getElementById("word-list");
    wordList.innerHTML = "";
    for (var i = 0; i < words.length; i++) {
        var listItem = document.createElement("li");
        listItem.appendChild(document.createTextNode(words[i]));
        wordList.appendChild(listItem);
    }
}