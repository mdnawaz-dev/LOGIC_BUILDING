const card = document.querySelector("#display");
const button = document.querySelector("#Refreshbtn");

async function getUser() {

    const userId = Math.floor(Math.random() * 10) + 1;

    try {

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );

        if (!response.ok) {
            throw new Error("Something went wrong");
        }

        const user = await response.json();

        card.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> ${user.website}</p>
            <p><strong>Company:</strong> ${user.company.name}</p>
            <p><strong>City:</strong> ${user.address.city}</p>
        `;

    } catch (error) {

        card.innerHTML = `<p>${error.message}</p>`;

    }

}

button.addEventListener("click", getUser);

getUser();