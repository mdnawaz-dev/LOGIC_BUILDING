async function displayUsers () {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();
    const userList = document.getElementById("userList");

    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user.name;
        userList.appendChild(li);
    });
}
displayUsers();

/*OUTPUT: Leanne Graham
Ervin Howell
Clementine Bauch
Patricia Lebsack
Chelsey Dietrich
Mrs. Dennis Schulist
Kurtis Weissnat
Nicholas Runolfsdottir V
Glenna Reichert
Clementina DuBuque */