// alert("Working!");
// document.querySelector("button").addEventListener("click",);
//
// function handleClick(){
//   alert("I got clicked!");
// }
//By anonymous fn for first button
// document.querySelector("button").addEventListener("click",function (){
//   alert("I got clicked!");
// });

//for all buttons
// var noOfDrumButtons = document.querySelectorAll(".drum").length;
// for(var i=0 ; i< noOfDrumButtons; i++){
//
//   document.querySelectorAll(".drum")[i].addEventListener("click",function (){
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
//   });
//
// }

// var noOfDrumButtons = document.querySelectorAll(".drum").length;
// for(var i=0 ; i< noOfDrumButtons; i++){
//
//   document.querySelectorAll(".drum")[i].addEventListener("click",function (){
//    this.style.color = "white";
//   });
//
// }
var noOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0 ; i< noOfDrumButtons; i++){

// detecting mouse click
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });

}

// Addind addEventListener to keyboard keys
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

//makeSound function
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
    case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
    case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
    case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
    default: console.log(key);

  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed"); // Adding class pressed to the key i.e. pressed so that it gets animated.
  setTimeout(function(){
    activeButton.classList.remove("pressed");   //to undo the animation after 0.1 sec of the key being pressed.
  }, 100);
}
