
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
    dothis = document.getElementById('sweat_roulette'),
    button = document.getElementById('button'),
    audioStart = document.getElementById('audio_start'),
    audioNext = document.getElementById('audio_next'),
    audioStop = document.getElementById('audio_stop');

var tweetStart = '<a class="tweet" href="http://twitter.com/intent/tweet?text=I%20lasted%20';
var tweetEnd = '%20rounds%20on%20%23sweatroulette%20-%20http%3A%2F%2Fsweatroulette.com" target="_blank"> - Tweet your score - </a>';


function generateExercise() {

  exercises = [
    'Push Ups',
    'Squats',
    'Sit Ups',
    'Burpees',
    'High Knees',
    'Star Jumps',
    'Side Plank',
    'Plank'
  ];

  workout = exercises[Math.floor(Math.random() * exercises.length)];

  dothis.innerHTML = '<h2 class="workout">' + workout + '</h2>';

  audioNext.pause();
  audioNext.play();     

}

function startRoutine(){
  count = 0;
  totalrounds = 0;

  button.innerHTML = '<a src="javascript:void(0);" onclick="stopRoutine();" class="exercise stop" >I\'m Done.</a>';

  generateExercise();

  function loop() {
    rand = Math.round(Math.random() * (60000 - 20000)) + 20000;
    seconds = Math.round(rand / 1000 % 60);

    timer = setTimeout(function() {
      
      count++;
      generateExercise();

      if(count % 2 === 0){

        loop();

      } else {

        totalrounds++;
        console.log('Round ' + totalrounds);
        restLoop();

      }

    }, rand);
  }

  function restLoop() { 

    dothis.innerHTML = '<h2 class="workout">Rest</h2>';

    restTimer = setTimeout(
      function(){
        dothis.innerHTML = '<h2 class="workout">' + workout + '</h2>';
        loop();
      }, 1000);
  }

  loop();

}

function stopRoutine() {

  button.innerHTML = '<a src="javascript:void(0);" onclick="startRoutine();" class="exercise start" >Another round?</a>';

  farewell_message = [
    'Finished Already?!',
    'Well you did better than the last guy.',
    'See you tomorrow. Don\'t be late.',
    'Just starting is the hardest bit.'
  ];

  farewell = farewell_message[Math.floor(Math.random() * farewell_message.length)];

    clearTimeout(timer);
    clearTimeout(restTimer);

    dothis.innerHTML = '<h2 class="farewell">' + farewell + '</h2><div class="rounds"> <p>You lasted ' + totalrounds + ' rounds<br>' + tweetStart + totalrounds + tweetEnd + '</p></div>';

  
  audioStop.pause();
  audioStop.play();

}



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
