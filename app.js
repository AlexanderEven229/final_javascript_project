

//the object that holds all the story's info

let scenes = {
  one: {
    image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/04/THE-WALKING-DEAD.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5", 
    text: "As the zombie apocalypse sweeps across the nation, you find yourself trapped in your middle school, surrounded by the undead. With no adults around to help, you must rely on your wits and courage to survive. Before you can escape, you must find and save your little sister. What is your sister's name?",
  },
  two: {
    image: "https://media.cnn.com/api/v1/images/stellar/prod/200806235145-hannah-watters-croded-hallway-georgia.jpg?q=x_196,y_110,h_850,w_1511,c_crop/h_540,w_960", 
    text: "Looking down the hallway over the chaotic throng of bodies, you manage to glimpse Your sister being chased by a zombie into a classroom. There's no way you can push your way through. What do you want to do?",
    buttons: [["Run Away", "proceedTo(scenes.three)"],["Climb over the people", "proceedTo(scenes.four)"]]
  },
  three: {
    image: "https://www.tristatehomepage.com/wp-content/uploads/sites/92/2022/10/GettyImages-154836975.jpg?w=876&h=493&crop=1",
    text: "A gang of Zombies cuts off your path of escape. Against your better judgement, you turn back and throw yourself over the crowd.",
    buttons: [["Continue", "proceedTo(scenes.four)"]]
  },
    four: {
    image: "AllDead_UNIT_498207.0.webp",
    text: "You see Your sister in the corner of the classroom - trapped by a zombie. The zombie is large and super scary. You see a heavy looking trophy on a shelf near you. What do you want to do?",
    buttons: [["Leave. Your sister will prob be ok.", "proceedTo(scenes.six)"],["Grab the trophy and save Your sister", "proceedTo(scenes.five)"]]
  },
    five: {
    image: "https://media2.giphy.com/media/l0HUnQR733uhm48UM/giphy.gif?cid=ecf05e478jrgya822lvgy56kera4gpkjv30tsru082nqx4q7&rid=giphy.gif&ct=g",
    text: "Nicely done. You defeated the Zombie and saved Your sister!",
    buttons: [["Reset", "proceedTo(scenes.one)"]]

  },
    six: {
    image: "https://media.tenor.com/TT-F0ehjSgcAAAAC/aliens-game-over-man.gif",
    text: "Your sister was unable to get away. Try again",
    buttons: [["Reset", "proceedTo(scenes.one)"]]

  },
  
};





//Getting the HTML elements so we can manipulate them

let images = document.getElementById("images"); 
let text = document.getElementById("text"); 
let buttonBox = document.getElementById('buttonBox');
let input = document.getElementById('input');
let container = document.getElementById('container');


//Declare the variable for the sister's name

let sister;



//Gets the input, adds the input to the sister variable, removes the input field and advances 
//the story

input.addEventListener('keydown', function(event) {
  console.log(input.value);
  if (event.key == "Enter") {
    sister =  input.value;
    container.removeChild(input)
    proceedTo(scenes.two)
  }
});





//Changes the text in the scenes object to your sister's name, splits into letters, 
//displays each letter one at at a time

let changeText = function(words) {

  updatedText = words.replace("Your sister", sister).split("");
  text.innerHTML = "";
  for (let i=0; i < updatedText.length; i++) {
      setTimeout(function() {
      text.innerHTML += updatedText[i];
    }, 40);
  }
};


//Gets image link and formats to display as HTML

let changeImage = function(img) {
  images.style.backgroundImage = `url(${img})`;
};



//Creates a button for each option we add to a scenes 

let changeButtons = function(buttonList) {
  buttonBox.innerHTML = "";
  for (let i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += `<button onClick=${buttonList[i][1]}>${buttonList[i][0].replace("Your sister", sister)}</button>`;
  };
};






//Advances the game 
let proceedTo = function(scenes) {

  if (!scenes.buttons) {
    input.value = ""
    container.appendChild(input);  
  }

  changeImage(scenes.image)
  changeText(scenes.text)
  changeButtons(scenes.buttons)
  

  
  
};



//starts the game
proceedTo(scenes.one);


// To do:
// More general reset button 
// Add some kind of puzzle? Maybe the player has to guess a number or word?
// start screen?
// print function gets crazy if you press enter before it is finished
// include methods on scenes object?


// let resetGame = function() {
//   input.value = "";
//   container.appendChild(input);
//   proceedTo(scenes.one);
// };