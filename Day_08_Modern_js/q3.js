/*
Level : Medium
Question : You Have Api data where some fields might be missing. const patients = [
{ name: "Nawaz", vitals: { bp: 120/80, temp: 98.6 } },
 { name: "Ahmed", vitals: null },
  { name: "sara" } ]; 
   for each patient - safely print their bp using? and ?? with fallback "Not recorded" */

// Solution:
const patients = [
{ name: "Nawaz", vitals: { bp: 120/80, temp: 98.6 } },
 { name: "Ahmed", vitals: null },
  { name: "sara" } ]; 
patients.forEach(patient => {
    const Result = patient.vitals?.bp ?? "Not recorded";
    console.log(Result);
    });

//OUTPUT:
//120/80 or 1.5
//Not recorded
//Not recorded