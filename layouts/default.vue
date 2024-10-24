<template>
  <div>
    <v-app>
      <v-app-bar app color='#181C14'>
        <v-toolbar-title>
          <NuxtLink to="/" class="white--text">| Vue Exercise | </NuxtLink>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn >
            <NuxtLink to="/" class="white--text">Home</NuxtLink>
          </v-btn>
          <v-btn text>
            <NuxtLink to="/about" class="white--text">About</NuxtLink>
          </v-btn>
          <v-btn text>
            <NuxtLink to="/products" class="white--text">Products</NuxtLink>
          </v-btn>
          <Addproducts />
        </v-toolbar-items>
      </v-app-bar>
      <div class="container mx-auto p-4 mt-20" >   
        <slot />
      </div>
    </v-app>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
