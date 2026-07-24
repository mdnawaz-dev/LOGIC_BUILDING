/*
Level : Medium

Question :
Create an object called hospital with:
*name property
*add patient method - pushes new name into patients array 
*get patient count method - returns total patients call both methods and print results. */

//solution:
const hospital = {
 name: "CityCare Hopsital",
 patients: ["Nawaz", "Ahmed", "Ali"],

addPatient(patientName) {
    this.patients.push(patientName)
    return `${patientName} has been added`;
},

getPatientCount() {
    return this.patients.length;
 }
};

console.log(hospital.addPatient("Sana"));
console.log(hospital.getPatientCount());
console.log(hospital.patients);

//Output: Sana has been added
//4
//[ 'Nawaz', 'Ahmed', 'Ali', 'Sana' ]
