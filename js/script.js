/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Christian Paredes
******************************************/

/*  quotes array */

    const quotes = [
      
      {quote:`Someone's sitting in the shade today because someone planted a tree a long time ago.`,
       author: `Warren Buffett`,
       citation: null,
       year: "2020"},

      {quote:`Education is the most powerful weapon which you can use to change the world`,
       author: `Nelson Mandela`,
       citation: null,
       year: "2013"},

      {quote:`When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.`,
       author: `Henry Ford`,
       citation: null,
       year: null},

      {quote:`Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.`,
       author: `Marie Curie`,
       citation: null,
       year: null},

      {quote:`Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.`,
       author: `Thomas Edison`,
       citation: null,
       year: null},


      {quote:`Life is either a daring adventure, or nothing.`,
       author: `Helen Keller`,
       citation: "Let Us Have Faith",
       year: "1940"},


      {quote:`One child, one teacher, one book, one pen can change the world.`,
       author: `Malala Yousafzai`,
       citation: "YouTube",
       year: "2016"}, 


      {quote:`Art washes away from the soul the dust of everyday life.`,
       author: `Pablo Picasso`,
       citation: null,
       year: null}, 


      {quote:`Love many things, for therein lies the true strength, and whosoever loves much performs much, and can accomplish much, and what is done in love is done well.`,
       author: `Vincent van Gogh`,
       citation: null,
       year: null}, 

    ]


/* getRandomQuote function */
 
function getRandomQuote() {

/* Create a random number between zero and the last index in the quotes array */

 const rNum = Math.floor(Math.random() * quotes.length);
 //console.log(rNum);

/* Use the random number variable and bracket notation 
  to grab a random object from the `quotes` array, and 
 store it in a variable */

 let objLitQuote = quotes[rNum];

 

// 3. Return the variable storing the random quote object
 
   return objLitQuote;
}

/* printQuote` function */

function printQuote() {
  // 1. Create a variable that calls the getRandomQuote() 
  // function
    const quoteObject = getRandomQuote();
  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and citation properties, but leave off 
  // the second closing `</p>` tag for now
  let html = `<p class="quote">${quoteObject.quote}</p> 
              <p class="source">${quoteObject.author}`
 
  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string
  if (quoteObject.citation != null) {
      html += `<span class="citation:before">, ${quoteObject.citation} </span>`
  }

  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string
  if(quoteObject.year != null) {
    html += `<span class="year:before">, ${quoteObject.year}</span>`
  }
  //else {
  //  html += `<span class="year:before"></span>`
  //}

  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string
    html += `</p>`

  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string
  document.querySelector("div.quote-box").innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);