// Bigger button with alert
function makeBigger() {
    alert("Hello, world!");
    document.getElementById("textInput").style.fontSize = "24pt";
}

// Radio buttons
function fancifyText() {
    let text = document.getElementById("textInput");

    if (document.getElementById("fancy").checked) {
        alert("FancyShmancy selected!");
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    } else {
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
}

// Moo button
function mooText() {
    let textArea = document.getElementById("textInput");
    let text = textArea.value;

    // Uppercase text
    text = text.toUpperCase();

    // Add "-Moo" to last word of each sentence
    let sentences = text.split(".");
    for (let i = 0; i < sentences.length; i++) {
        let words = sentences[i].trim().split(" ");
        if (words.length > 0 && words[0] !== "") {
            words[words.length - 1] += "-MOO";
            sentences[i] = words.join(" ");
        }
    }

    textArea.value = sentences.join(".");
}