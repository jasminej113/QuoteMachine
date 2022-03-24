//loads quote automatically 
window.onload = go;
function go() {
  // jQuery, Triggers genRandQuote when New Quote button is clicked
  $("#new-quote").click(function() {
    genRandQuote();
  });
  
  $("#tweet-quote").click(function() {
    
  });

  // Generate a random quote when window is loaded initially
  genRandQuote();
}
  
function genRandQuote() {
var quotes = [{
		id: 1,
		text: "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.",
		source: "Lao Tzu"
	},
	{
		id: 2,
		text: "Do today what others won't and achieve tomorrow what others can't.",
		source: "Jerry Rice"
	},
	{
		id: 3,
		text: "In character, in manner, in style, in all things, the supreme excellence is simplicity.",
		source: "Henry Wadsworth Longfellow"
	},
	{
		id: 4,
		text: "If we don't discipline ourselves, the world will do it for us.",
		source: "William Feather"
	},
	{
		id: 5,
		text: "Rule your mind or it will rule you.",
		source: "Horace"
	},
  {
		id: 6,
		text: "One day at a time.",
		source: "Warriors"
	},        
  
];
//javascript
  var randQuote = quotes[Math.floor(Math.random() * (quotes.length))];
  $("#text").html(randQuote.text);
  $("#author").html(randQuote.source);
  $("#tweet-quote").attr("href", stringToClickToTweetURL('"' + randQuote.text + '" - ' + randQuote.source));
}


// This function makes strings into click to tweet URLS
function stringToClickToTweetURL(str) {
  
  // Convert to Click to Tweet URL
  var stringToConvert = str.split(" ").join("%20").split("@").join("%40").split("!").join("%21");

  // Put 'Click to Tweet' URL suffix at the begining
  var resultString = "https://twitter.com/intent/tweet?text=" + stringToConvert;

  // Return properly formatted "Click to Tweet URL"
  return resultString;
}