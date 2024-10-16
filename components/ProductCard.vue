<template>
  <div class="card text-center">
    <img :src="product.image" class="thumb" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>

    <v-row class="d-flex align-center">
      <!-- View Details button -->
      <v-col class="d-flex align-center">
        <NuxtLink :to="`/products/${product.id}`">
          <p class="btn my-4" style="background-color: gray">
            <i class="fa-solid fa-eye"></i> View Details
          </p>
          <!-- {{ name }} -->
        </NuxtLink>
      </v-col>

      <!-- Cart button/component -->
      <v-col class="d-flex align-center">
        <!-- <Cart /> -->
        <v-btn @click="addtocart(product)">Add to cart</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/useCartStore";
import { storeToRefs } from "pinia";
const { product } = defineProps(["product"]);
const store = useCartStore();

const {  cartlist } = storeToRefs(store);

const addtocart = (payload) => {
  console.log(payload);
  cartlist.value.push(payload);
};
</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
