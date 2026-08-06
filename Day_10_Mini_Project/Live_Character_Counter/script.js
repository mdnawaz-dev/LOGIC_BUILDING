
const textarea = document.querySelector("#text");
const para = document.querySelector("#para");

textarea.addEventListener("input", () => {

    const count = textarea.value.length;

    para.textContent = `Characters: ${count}/300`;

    if (count > 300) {

        para.style.color = "red";

    } else {

        para.style.color = "black";

    }

});