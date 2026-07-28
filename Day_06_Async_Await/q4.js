/*
Level: Hard

Question:
Create an HTML page with:

1. An input field to enter a Post ID (1–100).
2. A button labeled "Get Post".
3. A <div> to display the result.

When the button is clicked:

1. Get the Post ID from the input field.
2. If the input is empty or not between 1 and 100,
   display:
   "Please enter a valid Post ID."

3. Show:
   "Loading..."
   while the data is being fetched.

4. Fetch the post from:
   https://jsonplaceholder.typicode.com/posts/{id}

5. If the request is successful,
   display the post title and body inside the div.

6. If the post is not found or any error occurs,
   display:
   "Something went wrong."

7. Use:
   - addEventListener()
   - async/await
   - fetch()
   - try...catch
   - response.ok
   - DOM manipulation (textContent / innerHTML)
*/

//Solution:
const button = document.getElementById("getPost");
const input = document.getElementById("postId");
const div = document.getElementById("result");

button.addEventListener("click", async () => {

    const postId = input.value.trim();

    // Validation
    if (postId === "" || postId < 1 || postId > 100) {
        div.textContent = "Please enter a valid Post ID.";
        return;
    }

    // Loading message
    div.textContent = "Loading...";

    try {

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        );

        if (!response.ok) {
            throw new Error("Post not found");
        }

        const post = await response.json();

        div.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;

    } catch (error) {

        div.textContent = "Something went wrong.";

    }

});

//OUTPUT: 16 Get Post
/*
sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio
suscipit nam nisi quo aperiam aut asperiores eos fugit maiores voluptatibus quia voluptatem quis ullam qui in alias quia est consequatur magni mollitia accusamus ea nisi voluptate dicta 
*/
