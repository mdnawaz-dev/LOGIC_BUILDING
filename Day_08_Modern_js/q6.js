/*
Level : Hard

Question: Sturcture given -- you write:
Write a function removeDuplicateUsers(users)
Users is array of objects with id and name
Two Users are duplicate if they have same id
Return array with duplicates removed
Use Map - key is user.id value is user object
Test: 
const users = [
{ id: 1, name: "Nawaz" },
{ id: 2, name: "Ahmed" },
{ id: 1, name: "Nawaz" },
{ id: 3, name: "Sara" },
{ id: 2, name: "Ahmed" } ];

Result should have only 3 users - first occurrence kept
*/

//Solution:
function removeDuplicateUsers(users) {
    const userMap = new Map();

    users.forEach(user => {
        if (!userMap.has(user.id)) {
            userMap.set(user.id, user);
        }
    });

    return [...userMap.values()];
}

const users = [
{ id: 1, name: "Nawaz" },
{ id: 2, name: "Ahmed" },
{ id: 1, name: "Nawaz" },
{ id: 3, name: "Sara" },
{ id: 2, name: "Ahmed" }
];

const uniqueUsers = removeDuplicateUsers(users);
console.log(uniqueUsers);

//OUTPUT:
/*[
  { id: 1, name: 'Nawaz' },
  { id: 2, name: 'Ahmed' },
  { id: 3, name: 'Sara' }
]
*/