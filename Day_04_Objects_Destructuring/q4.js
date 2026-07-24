/*
Level : Hard

Question:
write a function called summrizestudent 
1.It takes a student object as parameter.
2.the student has name, marks(array), city.
3.inside the function
4.calculate Total marks using reduce.
5.calculate average.
6.Find highest mark using math.max with spread.
7.Return an object with: name , city , total , avg, highest .

*/

//solution: 
function summarizeStudent({name, marks, city}) {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const avg = total / marks.length;
    const highest = Math.max(...marks);

    return {
        name:name,
        city:city,
        total:total,
        avg:avg,
        highest:highest
    };

}

const student = {
    name : "Nawaz",
    marks : [85, 90, 78, 92, 88],
    city : "Ballari"
};

const summary = summarizeStudent(student);
console.log(summary);

//Output:
//{ name: 'Nawaz', city: 'Ballari', total: 433, avg: 86.6, highest: 92 }