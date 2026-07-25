const toggleBtn = document.getElementById("toggleBtn");

let isBlue = false;

toggleBtn.addEventListener("click", function () {
    if (isBlue) {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "lightblue";
    }

    isBlue = !isBlue;
});