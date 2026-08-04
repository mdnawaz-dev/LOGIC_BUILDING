/*
Level : Hard

Question: Create a clear Inventory with:
private field #items (a map, key = itemName, value = quantity)
method addItem (name, qty) - adds or increases quantity
method removeItem(name, qty) - decreases quantity 
cannot go below 0 , remove key entirely if reaches 0
method getQuantity(name) - returns quantity or 0 if not found
method getTotalItem - returns sum of all Quantites 
Test with a small shop scenero - add, remove, checktotal.

*/

//Solution:
class Inventory {
    #items = new Map();

    addItem(name, qty) {
        if (this.#items.has(name)) {
            const currentQty = this.#items.get(name);
            this.#items.set(name, currentQty + qty);
        } else {
            this.#items.set(name, qty);
        }
    }

    removeItem(name, qty) {
        if (!this.#items.has(name)) {
            console.log("Item not found");
            return;
        }

        const currentQty = this.#items.get(name);

        if (qty >= currentQty) {
            this.#items.delete(name);
        } else {
            this.#items.set(name, currentQty - qty);
        }
    }

    getQuantity(name) {
        return this.#items.get(name) ?? 0;
    }

    getTotalItems() {
        let total = 0;

        for (const qty of this.#items.values()) {
            total += qty;
        }

        return total;
    }
}
     
const shop = new Inventory();
shop.addItem("pen", 10);
shop.addItem("Book", 5);  
shop.addItem("pen", 3);

console.log(shop.getQuantity("pen"));
console.log(shop.getQuantity("Book"));

shop.removeItem("pen", 2);
console.log(shop.getQuantity("pen"));
shop.removeItem("Book", 5);
console.log(shop.getQuantity("Book"));
console.log(shop.getTotalItems());

//Output:
//13
//5
//11
//0
//11







