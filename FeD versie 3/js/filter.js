// Filter kleuren


var buttons = document.querySelectorAll("button");

var go = document.querySelector("go");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonClick);
}

function buttonClick() {
    this.classList.toggle('clicked');
}


// Animatie toevoegen aan bundel


var buttonLijst = document.querySelectorAll(".button");

for (var i = 0; i < buttonLijst.length; i++) {

    buttonLijst[i].addEventListener('click', function () {
        this.children[0].classList.toggle("added");

        console.log("this", this);
        //console.log("this.children[0]", this.children[0]);

        this.classList.toggle("active")

    })

}
