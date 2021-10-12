alert("Please like, share and comment")
alert("This voice assistant was made by me and my friend ritesh a year ago.")
alert("This A.I is based on conditional statements so it is not to strong , most of the Powerful a.i today are based on complicated neural network or other machine learning algorithms")
alert("If there is any bug or any problem, then comment")
alert("type hi first")
var name = prompt(
 "Hello. What's your name?");
alert("Nice to meet you, " + name +
 "!");


function myFunction() {

var letter = document
.getElementById("myInput").value;

var IF =[ 'hello','howd',name +' hi' ,'hi'
,'hi, how are you'];

var ELSEIF1 =['bye','ok','bye '+ name,'nice to meet you','see you soon'];

var ELSEIF2 =[];

var ELSEIF3 =[];

var ELSEIF4 =[];

var ELSEIF5 =[];

var ELSEIF6 =[];

var ELSEIF7 =[];

var ELSEIF8 =[];

var ELSEIF9 =[];
 
var ELSE=['not able to understand. please serch it', name + 'sorry you can do google serch']

var randomNon  = Math.floor(Math.random()*3);

var randomNoun = Math.floor(Math.random()*4);

var randomnon = Math.floor(Math.random()*2);

var randomnoun = Math.floor(Math.random()*5);

var user;

var bot;

if (letter === "hi" || letter ==="hello" || letter === "hii" ||letter === "hiii") {
responsiveVoice.speak(IF[randomnoun]);
alert(IF[randomnoun]);
user = "You: " + letter;
bot = "Bot: "  + IF[randomnoun];
} 


else if (letter === "bye" ||letter === "talk you later") {
responsiveVoice.speak(ELSEIF1[randomNoun]);
alert(ELSEIF1[randomNoun]);
user = "You: " + letter;
bot = "Bot: "  + ELSEIF1[randomNoun];
} 


else if (letter ==="How are you?" ||letter === "how are you" ||letter === "how do you do" ||
letter === "How do you do") {
responsiveVoice.speak(ELSEIF2[randomNon]);
alert(ELSEIF2[randomNon]);
user = "You: " + letter;
bot = "Bot: "  + ELSEIF2[randomNon];
} 


else if (letter ==="tell me jokes" || letter ==="Tell me a joke" || letter ==="make me happy" || letter ==="चुटकुले   सुनाओ") {
responsiveVoice.speak(ELSEIF3[randomNon]);
alert(ELSEIF3[randomNon]);
user = "You: " + letter;
bot = "Bot: "  + ELSEIF3[randomNon];
} 


else if (letter ==="tell me a story") {
responsiveVoice.speak(ELSEIF4[randomNon]);
alert(ELSEIF4[randomNon]);
user = "You: " + letter;
bot = "Bot: "  + ELSEIF4[randomNon];
} 


else if (letter ==="capital of India" || letter ==="indian capital") {
responsiveVoice.speak(ELSEIF5[randomNon]);
alert(ELSEIF5[randomNon]);
user = "You: " + letter;
bot = "Bot: "  + ELSEIF5[randomNon];
} 


else {
responsiveVoice.speak(ELSE[randomNon]);
alert(ELSE[randomNon]);
user = "You: " + letter;
bot = "Bot: "  + ELSE[randomNon];
window.open("https://www.google.com");
}

document.getElementById("user").innerHTML = user ;

document.getElementById("bot").innerHTML = bot ;
}
