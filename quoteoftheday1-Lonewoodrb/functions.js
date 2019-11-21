var quotes = [
    'never forgetti your the king you can betti',
    'King oh King you make me sing',
    'あなたは私の王です',
    'My son. The day you were born, the very forests of Lordaeron whispered the name, Arthas. My child. I watched you with pride, as you grew into a weapon. Of rightousness. Remember, our line has always ruled with wisdom, and strength. And I know that you will show restraint, when exercising your great power. But the truest victory, my son, is stirring the hearts of your people. I tell you this, for when my days have come to and end. You, shall be king.',
    'Alexa Play Despacito'
]
function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

