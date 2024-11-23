let quoteAuthorElement = document.getElementById('quote-author');
let quoteBodyElement = document.getElementById('quote-body');
let quoteBtn = document.getElementById('quote-button');
let lastGeneratedIndex = -1;

const quotes = [
  {
    quoteBody: "“Be yourself; everyone else is already taken.”",
    quoteAuthor: "--Oscar Wilde"
  },
  {
    quoteBody: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    quoteAuthor: "--Marilyn Monroe"
  },
  {
    quoteBody: "“So many books, so little time.”",
    quoteAuthor: "--Frank Zappa"
  },
  {
    quoteBody: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    quoteAuthor: "--Albert Einstein"
  },
  {
    quoteBody: "“A room without books is like a body without a soul.”",
    quoteAuthor: "--Marcus Tullius Cicero"
  },
  {
    quoteBody: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    quoteAuthor: "--Bernard M. Baruch"
  },
  {
    quoteBody: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    quoteAuthor: "--Dr. Seuss"
  },
];


quoteBtn.addEventListener('click', () => {
  // select random quote
  const {quoteBody, quoteAuthor} = generateRandomQuote(quotes);
  quoteBodyElement.innerHTML = quoteBody;
  quoteAuthorElement.innerHTML = quoteAuthor;
});


function generateRandomQuote(quotes) {
  let generatedIndex = null;
  do {
    generatedIndex = Math.floor(Math.random() * quotes?.length);
  } while (generatedIndex === lastGeneratedIndex);
  lastGeneratedIndex = generatedIndex;
  return quotes[generatedIndex];
}