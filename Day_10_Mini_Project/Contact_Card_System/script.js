const contacts = [
    {
        name: "MD NAWAZ",
        phone: 9741934569,
        email: "Nawaz@gmail.com",
        city: "Ballari"
    },
    {
        name: "Ahmed",
        phone: 7975899567,
        email: "Ahmed@gmail.com",
        city: "Ballari"
    },
    {
        name: "Sara",
        phone: 8976547866,
        email: "Sara@gmail.com",
        city: "Ballari"
    }
];

function SearchContact(contacts, cityName) {
    return contacts.filter(contact =>
        contact.city.toLowerCase() === cityName.toLowerCase()
    );
}

function printContact(contact) {

    const result = document.getElementById("result");

    result.innerHTML += `
        <div class="card">
            <p><strong>Name:</strong> ${contact.name}</p>
            <p><strong>Phone:</strong> ${contact.phone}</p>
            <p><strong>Email:</strong> ${contact.email}</p>
            <p><strong>City:</strong> ${contact.city}</p>
        </div>
    `;
}

const button = document.getElementById("searchBtn");

button.addEventListener("click", () => {

    const city = document.getElementById("cityInput").value.trim();

    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = "";

    const result = SearchContact(contacts, city);

    if (result.length === 0) {

        resultDiv.innerHTML =
            `<p class="no-result">No contacts found.</p>`;

        return;
    }

    result.forEach(printContact);

});