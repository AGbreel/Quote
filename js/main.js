var quoteList = [
  {
    author: "Jim Rohn",
    quote: "Beware of what you become in pursuit of what you want.",
  },
  {
    author: "Epictetus",
    quote:
      "It's not what happens to you, but how you react to it that matters.",
  },
  {
    author: "Frank Sinatra",
    quote: "The best revenge is massive success.",
  },
  {
    author: "Wayne Gretzy",
    quote: "You miss 100% of the shots you don't take.",
  },
  {
    author: "Nelson Mandela",
    quote:
      "Resentment is like drinking poison and waiting for your enemies to die.",
  },
  {
    author: "Elbert Hubbard",
    quote: "Do not take life too seriously. You will not get out alive.",
  },
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Frank Zappa",
    quote: "So many books, so little time.",
  },
  {
    author: "Marcus Tullius Cicero",
    quote: "A room without books is like a body without a soul.",
  },
  {
    author: "Bernard M. Baruch",
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  },
  {
    author: "Dr. Seuss",
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  },
  {
    author: "Mae West",
    quote: "You only live once, but if you do it right, once is enough.",
  },
  {
    author: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
  },
  {
    author: "Robert Frost",
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
  },
  {
    author: "Mark Twain",
    quote: "If you tell the truth, you don't have to remember anything.",
  },
  {
    author: "Maya Angelou",
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  },
  {
    author: "Elbert Hubbard",
    quote: "A friend is someone who knows all about you and still loves you.",
  },
  {
    author: "Oscar Wilde",
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
  },
  {
    author: "Andre Gide, Autumn Leaves",
    quote:
      "It is better to be hated for what you are than to be loved for what you are not.",
  },
  {
    author: "Ralph Waldo Emerson",
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  },
];

var checkRandom = -1;

function getQuote() {
  var randomNumber = Math.floor(Math.random() * quoteList.length);
  if (randomNumber == checkRandom) {
    randomNumber = (randomNumber + 1) % quoteList.length;
  }
  document.getElementById("quoteOutput").innerHTML = `\“${quoteList[randomNumber]["quote"]}\“`;
  document.getElementById("authorOutput").innerHTML = `--${quoteList[randomNumber]["author"]}--`;
  checkRandom = randomNumber;
}