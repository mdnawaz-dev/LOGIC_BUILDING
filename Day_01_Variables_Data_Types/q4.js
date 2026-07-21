/* Level: Hard 
Question 4: Build a smallprofile card generate take an obeject
const user = {
    name: "Nawaz",
    age: 20,
    skills: ["javascript", "nodejs", "mongodb"],
    city: "Ballari"
} */

// solution:
const user = {
    name: "Nawaz",
    age: 20,
    skills: ["javascript", "nodejs", "mongodb"],
    city: "Ballari"
};  

function generateProfileCard(user) {
    const skillsstring = user.skills.join(",");
    const msg = ` ===Profile Card===
    Name: ${user.name}
    Age: ${user.age}
    Skills: ${skillsstring}
    City: ${user.city}`;
 console.log(msg);
}
generateProfileCard(user);

// output:  
 /*
 ===Profile Card===
    Name: Nawaz
    Age: 20
    Skills: javascript,nodejs,mongodb
    City: Ballari 
    */