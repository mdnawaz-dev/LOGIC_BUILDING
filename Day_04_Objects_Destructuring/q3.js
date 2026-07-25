/*
Level : Hard

Question:
1.create an array of 3 products objects.
2.Each product has names price, category.
3.use filter to get only products with price above 1000.
4.use map to add a discounted price property.
5.use forEach to print each product like:
prooduct: Laptop | price: 5000 | After discount :4500
*/

//Solution:
const products = [
    { name: "Laptop", price: 5000, category: "Electronics" },
    { name: "Pen", price: 20, category: "Stationary" },
    { name:"Mobile", price: 3000, category: "Electronics"}
    ];
    products
    .filter(product => product.price > 1000)
    .map(product => {
    product.discountedPrice = product.price * 0.9;
    return product;
    })
    .forEach(product => {
    console.log(`Product: ${product.name} | Price: ${product.price} | After discount: ${product.discountedPrice}`);
    }); 

// Output: Product: Laptop | Price: 5000 | After discount: 4500
//Product: Mobile | Price: 3000 | After discount: 2700
