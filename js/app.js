
var exercises,
    workout,
    timer,
    rand,
    seconds,
    farewell,
    farewell_message,
    dothis = document.getElementById('sweat_roulette'),
    button = document.getElementById('button'),
    audioStart = document.getElementById('audio_start'),
    audioNext = document.getElementById('audio_next'),
    audioStop = document.getElementById('audio_stop');

function generateExercise() {

  exercises = [
    'Push Ups',
    'Squats',
    'Sit Ups',
    'Burpees',
    'High Knees',
    'Stretch',
    'Star Jumps'
  ];

  workout = exercises[Math.floor(Math.random() * exercises.length)];

  dothis.innerHTML = '<h2 class="workout">' + workout + '</h2>';

  audioNext.pause();
  audioNext.play();     

}

function startRoutine(){

  button.innerHTML = '<a src="javascript:void(0);" onclick="stopRoutine();" class="exercise stop" >I\'m Done.</a>';

  generateExercise();

  function loop() {
      rand = Math.round(Math.random() * (60000 - 20000)) + 20000;
      seconds = Math.round(rand / 1000 % 60);

      timer = setTimeout(function() {
              
        generateExercise();
        loop();

      }, rand);
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
    dothis.innerHTML = '<h2 class="farewell">' + farewell + '</h2>';

  
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
