
var num_buttons = document.querySelectorAll(".drum").length;
document.addEventListener("keypress", function(event)  {
    play_sound(event.key);
    button_animation(event.key);
})

for (var index = 0; index < num_buttons; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function() {
        play_sound(this.innerText);
        button_animation(this.innerText);
    });
};

function play_sound(key)
{
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function button_animation(key) {
    var active_button = document.querySelector("."+key);
    // active_button.addClass('pressed');
    active_button.classList.add("pressed");
    setTimeout(function() {
        active_button.classList.remove("pressed");
    },200);



}



