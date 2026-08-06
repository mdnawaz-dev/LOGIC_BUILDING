const student = [
    { name: "Nawaz", Marks: 85 },
    { name: "Ahmed", Marks: 42 },
    { name: "Sara", Marks: 91 },
    { name: "Zaid", Marks: 38 },
    { name: "Ali", Marks: 75 }
];

function GenerateReport(studentList){

    const totalStudents = studentList.length;

    const passedCount = studentList.filter(student =>
        student.Marks >= 40
    ).length;

    const failedCount = totalStudents - passedCount;

    const higherScorer = studentList.reduce((topStudent,currentStudent)=>{

        return currentStudent.Marks > topStudent.Marks
            ? currentStudent
            : topStudent;

    });

    const summary = document.getElementById("summary");

    summary.className = "summary";

    summary.innerHTML = `
        <h2>Batch Report</h2>

        <p>Total Students : ${totalStudents}</p>

        <p>Passed Students : ${passedCount}</p>

        <p>Failed Students : ${failedCount}</p>

        <p>Highest Scorer :
            ${higherScorer.name}
            (${higherScorer.Marks} Marks)
        </p>
    `;

    const cards = document.getElementById("cards");

    cards.innerHTML = "";

    studentList.forEach(student=>{

        const status =
            student.Marks >=40
            ? "Pass ✅"
            : "Fail ❌";

        cards.innerHTML += `

        <div class="card">

            <h3>${student.name}</h3>

            <p>Marks : ${student.Marks}</p>

            <p class="${
                student.Marks >=40
                ? "pass"
                : "fail"
            }">

                ${status}

            </p>

        </div>

        `;

    });

}

document
.getElementById("generateBtn")
.addEventListener("click",()=>{

    GenerateReport(student);

});