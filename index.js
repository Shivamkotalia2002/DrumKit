//detect Button press
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let btninnerhtml = this.innerHTML;
        makesound(btninnerhtml);
        btnanimation(btninnerhtml);
    });
}

//Detect key press
document.addEventListener("keypress", function (event) {
    makesound(event.key);
    btnanimation(event.key);
});

function makesound(key) {
    switch (key) {
        case "b":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "o":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "q":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default: console.log(key);
    }
}

function btnanimation(currentkey) {
    let active_key = document.querySelector("." + currentkey);
    active_key.classList.add("pressed");

    setTimeout(function () {
        active_key.classList.remove("pressed");
    }, 100);
}