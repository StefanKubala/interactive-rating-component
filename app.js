const container = document.querySelector(".container");
const contThankYou = document.querySelector(".container-thank-you");
const btn = document.querySelector(".btn");
const span = document.querySelector(".inside-rating");
const circles = document.querySelectorAll(".circle")

for (let i = 0; i < circles.length; i++) {

    circles[i].addEventListener("click", function () {

        let circle = circles[i].innerHTML

        for (let i = 0; i < circles.length; i++) {
            circles[i].classList.contains("selected");
            circles[i].classList.remove('selected');
        }

        circles[i].classList.add("selected");

        btn.addEventListener("click", function () {
            container.style.display = "none";
            contThankYou.style.display = "flex";
            span.innerHTML = circle
        })
    })

}