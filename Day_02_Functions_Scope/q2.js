/* Level : Medium

Question : Write a functionCalulate (Billprice, Quantity, discount) that 
*Multiples price * Quantity 
*Subtracts discount from total
*Returns the final Bill
*prints "Your bill is $2350" Using template literal */

//Solution :
function calculateBill(price, quantity, discount) {
    const total = price * quantity;
    const finalBill = total - discount;
    console.log(` Your bill is ${finalBill}`);
};

calculateBill(500, 2, 50);
calculateBill(2000, 3, 100);

//Output : 
//      Your bill is 950
 //     Your bill is 5900

