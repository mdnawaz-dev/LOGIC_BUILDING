/*
Level: Medium 

Question : Build a word frequency counter using Map.
*Take a sentence as string
*split into words
*count how many times each word appears
*prove the result

Test: "the cat sat on the mat and the cat played with the mat"
*/

//Solution:
const sentence = "the cat sat on the mat and the cat played with the mat";
const words = sentence.split(" ");
const frequency = new Map();

words.forEach(word => {
    if (frequency.has(word)) {
        let count = frequency.get(word);
        count++;
        frequency.set(word, count);
    } else {
        frequency.set(word, 1);
    }
});

console.log(frequency);

//OUTPUT:
/*
Map(8) {
  'the' => 4,
  'cat' => 2,
  'sat' => 1,
  'on' => 1,
  'mat' => 2,
  'and' => 1,
  'played' => 1,
  'with' => 1
}
*/
