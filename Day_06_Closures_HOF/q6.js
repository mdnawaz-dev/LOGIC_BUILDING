/*

Level: Hard
Question:
Build a function pipeline system . write a function called pipe(...fns) It returns a mew function that takes a value that value passes through each function in order output of one become inout of next 
Test: const process = pipe(x => x*2, x => x+10 , x => x/2)
process: (10) should like : 10*2=20 ,20+10=30 , 30/2=15
*/

//Solution:
function pipe(...fns) {
    return function(value) {
        let result = value;
        
    for (const fn of fns) {
        result = fn(result);
    }

    return result;
  };
}

    const process = pipe( x => x * 2, x => x + 10 , x => x / 2 );

    console.log(process(10));

//OUPUT: //15
