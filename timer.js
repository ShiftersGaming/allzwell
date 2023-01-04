var max_time = 4;
var cinterval;
var continuation = 1;
var finishedloop = false;
var breathe = "Inhale Slowly";
const backbutton = document.querySelectorAll('.backbutton');
var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!" + err0r);
    });
}

function countdown_timer(){
  document.getElementById('breathe').innerHTML = breathe;
  max_time--;
  document.getElementById('countdown').innerHTML = max_time;
  if(max_time == 1 && continuation == 1){
    max_time = 8;
    continuation = 2;
    breathe = "Hold Your Breath";
  }
  if(max_time == 1 && continuation == 2){
    max_time = 9;
    continuation = 3;
    breathe = "Exhale Slowly"
    finishedloop = true;
  }
  if(max_time == 1 && finishedloop == true){
    max_time = 5;
    breathe = "Slowly Breathe In";
    finishedloop = false;
    continuation = 1;
  }

}
cinterval = setInterval('countdown_timer()', 1000);

function start() {
    clearInterval(cinterval);
    cinterval = setInterval('countdown_timer()', 1000);
}

function stop() {
    clearInterval(cinterval);
}
