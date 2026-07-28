// Level: HARD
// Question:
// Write an async function called SearchUser.
// It takes a username as parameter.
// Fetch all users from JSONPlaceholder.
// Find the user whose username matches (case-insensitive).
// If found, fetch their todos and count completed todos.
// Return an object:
// {
//   name,
//   username,
//   completedTodos,
//   totalTodos
// }
// If user not found, return "User not found".

async function SearchUser(username) {
    try {
        console.log("Fetching users...");

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        const user = users.find(
            user => user.username.toLowerCase() === username.toLowerCase()
        );

        if (!user) {
            return "User not found";
        }

        console.log(`User found: ${user.name}`);

        console.log("Fetching todos...");

        const todosResponse = await fetch(
            `https://jsonplaceholder.typicode.com/todos?userId=${user.id}`
        );

        if (!todosResponse.ok) {
            throw new Error("Failed to fetch todos");
        }

        const todos = await todosResponse.json();

        const completedTodos = todos.filter(todo => todo.completed).length;

        return {
            name: user.name,
            username: user.username,
            completedTodos,
            totalTodos: todos.length
        };
    } catch (error) {
        console.error("Error:", error.message);
    }
}

async function main() {
    const result = await SearchUser("Bret");
    console.log("\nFinal Result:");
    console.log(result);
}

main();

/*OUTPUT: Fetching users...
User found: Leanne Graham
Fetching todos...

Final Result:
{
  name: 'Leanne Graham',
  username: 'Bret',
  completedTodos: 11,
  totalTodos: 20
} */