interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}


class CartItem implements CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;

  constructor(productId: string, name: string, price: number, quantity: number) {
    this.productId = productId;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice(): number {
    return this.price * this.quantity;
  }
}


class ShoppingCart {
    items: CartItem[];
  
    constructor() {
      this.items = [];
    }
  
    addItem(item: CartItem) {
      let existingItemIndex = -1;
  
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].productId === item.productId) {
          existingItemIndex = i;
          break;
        }
      }
  
      if (existingItemIndex !== -1) {
        this.items[existingItemIndex].quantity += item.quantity;
      } else {
        this.items.push(item);
      }
    }
  
    removeItem(productId: string) {
      this.items = this.items.filter((item) => item.productId !== productId);
    }
  
    getTotalPrice(): number {
      let totalPrice = 0;
  
      for (const item of this.items) {
        totalPrice += item.getTotalPrice();
      }
  
      return totalPrice;
    }
  }
  



const item1 = new CartItem("12345", "Pen", 10, 2);
const item2 = new CartItem("67890", "Pencil", 5, 3);

const cart = new ShoppingCart();
cart.addItem(item1);
cart.addItem(item2);

console.log("Cart Total Price: ", cart.getTotalPrice());
