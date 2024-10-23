<template>
  <div>
    <header class="shadow-sm" style="background-color: #181c14">
      <nav class="container mx-auto p-4 flex justify-between items-center">
        <NuxtLink to="/products" class="font-bold text-white"
          >Vue Exercise Merch</NuxtLink
        >
        <div class="flex items-center space-x-4">
          <NuxtLink to="/" class="font-bold text-white">Home</NuxtLink>
          <v-btn icon @click="drawer = !drawer">
            <v-icon color="red">fa-solid fa-cart-shopping</v-icon>
          </v-btn>
        </div>
      </nav>
    </header>

    <v-navigation-drawer v-model="drawer" right app temporary width="400">
      <v-list-item class="d-flex justify-end">
        <v-btn icon @click="drawer = false">
          <v-icon color="red">fa-solid fa-square-xmark</v-icon>
        </v-btn>
      </v-list-item>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6 text-center"
              >ITEMS</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="cartlist.length === 0">
          <v-list-item-content class="text-center">
            <v-icon color="grey" large class="mb-2">mdi-cart-off</v-icon>
            <p>Your cart is empty.</p>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-for="(item, index) in cartlist" :key="item.id">
          <v-card class="custom-border mb-2" outlined>
            <v-list-item>
              <v-list-item-avatar>
                <v-img
                  :src="item.image"
                  alt="Item Image"
                  height="80"
                  width="80"
                  class="rounded-circle"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle class="grey--text">
                  ID: {{ item.id }} | Price:
                  <span class="font-weight-bold">${{ item.price }}</span>
                </v-list-item-subtitle>
              </v-list-item-content>

              <div class="d-flex align-center">
                <v-btn icon @click="store.decreaseQuantity(item)">
                  <v-icon><i class="fa-solid fa-minus"></i></v-icon>
                </v-btn>

                <v-text-field
                  v-model="item.quantity"
                  class="mx-3"
                  type="number"
                  min="0"
                  style="width: 40px"
                  hide-details
                  single-line
                ></v-text-field>

                <v-btn icon @click="store.increaseQuantity(item)">
                  <v-icon><i class="fa-solid fa-plus"></i></v-icon>
                </v-btn>
              </div>

              <v-list-item-action>
                <v-btn icon @click="removeItem(index)">
                  <v-icon color="red">fa-solid fa-trash</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-card>
          <v-divider
            v-if="index < cartlist.length - 1"
            class="my-3"
          ></v-divider>
        </v-list-item>

        <v-list-item v-if="cartlist.length > 0">
          <v-list-item-content class="text-right">
            <v-list-item-subtitle class="grey--text text-h6">
              Total Price:
              <span class="font-weight-bold text-h5">${{ totalPrice }}</span>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="cartlist.length > 0">
      <v-btn color="success" class="mt-4 mb-2 py-4" block @click="openCheckout">
        Proceed to Checkout
      </v-btn>
    </v-list-item>
  </v-list>
    <!-- Include the CheckoutModal component -->
    <CheckoutModal ref="checkoutModal" />
   
    </v-navigation-drawer>

    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "@/stores/useCartStore";
import { storeToRefs } from "pinia";
import CheckoutModal from '@/components/CheckoutModal.vue';

const store = useCartStore();
const { cartlist } = storeToRefs(store);
const drawer = ref(false); // Drawer state




const checkoutModal = ref(null); // Correctly create a ref for the modal

const openCheckout = () => {
  // Ensure checkoutModal exists before setting isVisible
  if (checkoutModal.value) {
    checkoutModal.value.isVisible = true; // Open the modal
  } else {
    console.error("CheckoutModal not found.");
  }
};
const totalPrice = computed(() => {
  return cartlist.value.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
});

function removeItem(index) {
  store.removeItem(index);
}
</script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
.custom-border {
  border-color: #798645; /* Change this to your desired color */
  border-width: 1px;
  border-style: solid;
  background-color: transparent; /* Ensure the background is transparent */
}
</style>
