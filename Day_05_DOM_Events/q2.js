const input = document.getElementById("username");
const button = document.getElementById("addBtn");

button.addEventListener("click", function () {

    const paragraph = document.createElement("p");

    paragraph.textContent = input.value;

    document.body.appendChild(paragraph);

    input.value = "";
});