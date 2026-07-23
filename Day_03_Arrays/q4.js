/* 
Level : Medium

Question : You have a PatientList: const Patients = ["Ali", "Sana", "Nawaz", "Ahmed", "Zaid"]. 
1.Add a new Patient "Fatima" to the end.
2. Remove the first Patient.
3. Find and print the Patient whose name starts with "N".
4. print final list.
*/

//solution:
const Patients = ["Ali", "Sana", "Nawaz", "Ahmed", "Zaid"];
Patients.push("Fatima");
Patients.shift();
const PatientsName = Patients.find((Patients) => Patients.startsWith("N"));
console.log(PatientsName);
console.log(Patients);

//Output:
// Fatima
// [ 'Sana', 'Nawaz', 'Ahmed', 'Zaid', 'Fatima' ]   