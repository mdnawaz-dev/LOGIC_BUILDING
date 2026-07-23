/*
Level: Hard

Question :
Write a function analyzeMarks(MarksArray) that takes an array of marks and returns an object with:
*total : sum of all marks.
*avg : average marks.
*highest : highest mark.
*lowest : lowest mark.
* passed = count of marks above 40 .
Test with [85, 42, 91, 38, 76].*/

//Solution:
function analyzeMarks(MarksArray) {
    const total = MarksArray.reduce(( sum, mark) => sum + mark, 0); 
    const avg = total / MarksArray.length;
    const highest = Math.max(...MarksArray);
    const lowest = Math.min(...MarksArray);
    const passed = MarksArray.filter(mark => mark > 40).length;

    return {
        total:total,
        avg:avg,
        highest:highest,
        lowest:lowest,
        passed:passed
    };
}

const testmarks = [85, 42, 91, 38, 76];
const result = analyzeMarks(testmarks);
console.log(result);   

//Output:
//{ total: 332, avg: 66.4, highest: 91, lowest: 38, passed: 4 }