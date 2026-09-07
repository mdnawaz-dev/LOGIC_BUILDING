let year = prompt("Enter the year to know it is leap or not!:");
year = Number(year);
A = year
if(year%4==0 && year%100!==0 || year%400==0){
  console.log("It is leap year!")
} else {
  console.log("It is not a leap year!")
}