const quotes = [
    {text: "Time is what we want Most, But what we use Worst.",author : "William penn"},
    {text: "One day is a Dream, Day one is a decision",author : "Paulo Coelho"},
    {text : "Today is your Opportunity to build the tomorrow you want.",author : "Ken Poirot"},
    {text : "If you don't fight for what you want then don't cry for what you lost.", author : "Krishna"},
    {text : "Never stop Learning because life Never stop Teaching", author : "Martin Luther King."}
];
const quoteElement = document.getElementById("quote");
const shareBtn = document.getElementById("share-btn");
const saveBtn = document.getElementById("save-btn");
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
quoteElement.innerText = `"${randomQuote.text}" - "${randomQuote.author}"`;

shareBtn.addEventListener('click',() => {
    const tweetUrl = `https://twitter.com/intent.tweet?text=${randomQuote.text} - ${randomQuote.author}`;
    window.open(tweetUrl,'_blank');
});
saveBtn.addEventListener('click',() => {
    const savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
    savedQuotes.push(randomQuote);
    localStorage.setItem('savedQuotes' , JSON.stringify(savedQuotes));
    alert('Quote saved to favorites!');
});
function addQuote(){

let quote = document.getElementById("userQuote").value;
let author = document.getElementById("authorName").value;

if(quote !== "" && author !== ""){

quotes.push({
text: quote,
author: author
});

document.getElementById("quoteDisplay").innerText = quote;
document.getElementById("authorDisplay").innerText = "- " + author;

document.getElementById("userQuote").value = "";
document.getElementById("authorName").value = "";

}

}