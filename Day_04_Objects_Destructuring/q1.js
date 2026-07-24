/*
Level : Medium

Question :
You have this object: 
const product = { title: "Laptop", 
price: 5000,
brand: "ASUS",
instock: true,
};
1.Destructure all four properties.
2. Add a new property discount : 5000.
3. update the price to price-discount.
4. Delete the instock property.
5, print the final object.
*/

//Solution:
const product = { title: "Laptop", 
price: 5000,
brand: "ASUS",
instock: true,
};
const { title, price, brand, instock } = product;
product.discount = 500;
product.price = product.price - product.discount;
delete product.instock;
console.log(product);

//Output:
//{ title: 'Laptop', price: 4500, brand: 'ASUS', discount: 5000 }