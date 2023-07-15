function subscribe() {
    let name = prompt("What is your name?");
    prompt("What is your email address?");

    alert(`Thanks, ${name}! See you soon!
    Meanwhile, have a cup of coffee and enjoy! 🎆`);
}
let button = document.querySelector("button");
button.addEventListener("click", subscribe);