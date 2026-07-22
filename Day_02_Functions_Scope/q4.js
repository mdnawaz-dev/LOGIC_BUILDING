/* 
Level : Hard

Question : Write two functions 
1. CalculateArea( length, width) - returns area
2. CalculatePerimeter( length, width) - returns perimeter
3. then write a third function room summary (length, width) that calls Both and prints.*/

//Solution: 
function calculateArea(length, width) {
    return length * width;
}

function calculatePerimeter(length, width) {
    return 2 * (length + width);
}

function roomSummary(length, width) {
    const area = calculateArea(length, width);
    const perimeter = calculatePerimeter(length, width);
    console.log(` Room summary: Area is ${area}, Perimeter is ${perimeter}`);
}

roomSummary(5, 3);
roomSummary(10, 5);

//Output:
//   Room summary: Area is 15, Perimeter is 16
//   Room summary: Area is 50, Perimeter is 30
