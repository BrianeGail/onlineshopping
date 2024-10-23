import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cartlist = ref([]);
  const product = ref([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      product.value = data;
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const addItemToCart = (item) => {
    // Check if the item already exists in the cart
    const existingItem = cartlist.value.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      // Show an alert if the item is already in the cart
      alert("Item already exists in the cart!");
      return; // Item already exists, so we do nothing or handle it as needed
    }
  
    // Create a new item with quantity set to 1
    const itemWithQuantityOne = { ...item, quantity: 1 }; 
    cartlist.value.push(itemWithQuantityOne);
  };
  

  const removeItem = (index) => {
    if (index >= 0 && index < cartlist.value.length) {
      cartlist.value.splice(index, 1);
    }
  };

  const increaseQuantity = (item) => {
    const existingItem = cartlist.value.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1; // Increment quantity
    }
  };
  
  const decreaseQuantity = (item) => {
    const existingItem = cartlist.value.find(cartItem => cartItem.id === item.id);
    if (existingItem && existingItem.quantity > 0) {
      existingItem.quantity -= 1; // Decrement quantity if greater than 0
    }
  };
  

  return {
    cartlist,
    product,
    fetchProducts,
    addItemToCart,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  };
});