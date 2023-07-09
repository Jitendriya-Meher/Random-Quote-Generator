
const quoteText = document.querySelector(".quote");
const btn = document.querySelector(".btn");
const author = document.querySelector(".author");
const soundBtn = document.querySelector(".sound");
const copy = document.querySelector(".copy");

// random quote generation
async function generateQuote(){

    btn.innerHTML = "Loading Quote...";

    // fetching random quotes /data from API and parsing it on display
    const url = "https://api.quotable.io/random";
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    quoteText.innerHTML = data.content;
    author.innerHTML = `-- ${data.author}`;

    btn.innerHTML = "New Quote";
}

// randering the quote on loading
generateQuote();

btn.addEventListener("click", generateQuote);

soundBtn.addEventListener("click", () => {
    // To convert text to speech in JavaScript, you can use the Web Speech API, specifically the SpeechSynthesis interface. 
    // In the speak function, we retrieve the text from the textarea element, create a new instance of SpeechSynthesisUtterance with the text as the argument, and then use the speak() method of speechSynthesis to start the text-to-speech conversion.

    const text = `${quoteText.innerHTML}, by ${author.innerHTML}`;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
});

copy.addEventListener("click", () =>{
    // To copy text to the clipboard in JavaScript, you can use the Clipboard API, which provides a modern and standardized way of interacting with the clipboard. Here's an example of how to copy text to the clipboard using the Clipboard API:
    // In the copyToClipboard function, we first retrieve the value of the input field. Then, we use the writeText method of the navigator.clipboard object to write the text to the clipboard. The writeText method returns a promise, so we use .then() to handle the success case and .catch() to handle any errors.
    navigator.clipboard.writeText(quoteText.innerHTML);
});