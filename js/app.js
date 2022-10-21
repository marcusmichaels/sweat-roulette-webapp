var exercises,
  count,
  workout,
  timer,
  restTimer,
  rand,
  seconds,
  farewell,
  farewell_message,
  totalrounds,
  dothis = document.getElementById("sweat_roulette"),
  button = document.getElementsByClassName("button exercise")[0],
  audioStart = document.getElementById("audio_start"),
  audioNext = document.getElementById("audio_next"),
  audioStop = document.getElementById("audio_stop");

var tweetStart =
  '<a class="tweet" href="https://twitter.com/intent/tweet?text=I%20lasted%20';
var tweetEnd =
  '%20rounds%20on%20%23sweatroulette%20-%20https%3A%2F%2Fsweatroulette.com" target="_blank"> - Tweet your score - </a>';

function generateExercise() {
  exercises = [
    "Push Ups",
    "Squats",
    "Sit Ups",
    "Burpees",
    "High Knees",
    "Star Jumps",
    "Side Plank",
    "Plank",
  ];

  workout = exercises[Math.floor(Math.random() * exercises.length)];

  dothis.innerHTML = '<h2 class="workout">' + workout + "</h2>";

  audioNext.pause();
  audioNext.play();
}

function startRoutine() {
  count = 0;
  totalrounds = 0;

  setButton("I'm done.", "exercise stop", stopRoutine);

  generateExercise();

  function loop() {
    rand = Math.round(Math.random() * (40000 - 20000)) + 20000;
    seconds = Math.round((rand / 1000) % 60);

    count++;
    generateExercise();

    if (count % 2 === 0) {
      totalrounds++;
      console.log("Round " + totalrounds);
      restLoop();
    } else {
      timer = setTimeout(function () {
        loop();
      }, rand);
    }
  }

  function restLoop() {
    dothis.innerHTML = '<h2 class="workout">Rest</h2>';

    restTimer = setTimeout(function () {
      loop();
    }, 10000);
  }

  loop();
}

function stopRoutine() {
  setButton("Another round?", "exercise start", startRoutine);

  farewell_message = [
    "Finished Already?!",
    "Well you did better than the last guy.",
    "See you tomorrow. Don't be late.",
    "Just starting is the hardest bit.",
  ];

  farewell =
    farewell_message[Math.floor(Math.random() * farewell_message.length)];

  clearTimeout(timer);
  clearTimeout(restTimer);

  dothis.innerHTML =
    '<h2 class="farewell">' +
    farewell +
    '</h2><div class="rounds"> <p>You lasted ' +
    totalrounds +
    " round" +
    (totalrounds === 1 ? "" : "s") +
    "<br>" +
    tweetStart +
    totalrounds +
    tweetEnd +
    "</p></div>";

  audioStop.pause();
  audioStop.play();
}

function setButton(text, classes, clickHandler) {
  button.className = "button " + classes;
  button.onclick = clickHandler;
  button.innerHTML = text;
}

button.onclick = startRoutine; // set the initial function of the button
// function playMusic() {
//   if(!audioMusic.paused){
//     audioMusic.pause();
//   } else {
//     audioMusic.play();
//   }
// }

// function rewindMusic() {
//   audioMusic.currentTime = 0;
// }
