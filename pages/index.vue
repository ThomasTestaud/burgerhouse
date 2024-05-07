<template>

<!--

    <div v-for="burger in burgers" class="bg-white rounded-lg shadow-md p-4 mb-4">
        <img :src="burger.img" alt="Burger Image" class="w-full h-40 object-cover mb-4">
        <h3 class="text-xl font-semibold">{{ burger.name }}</h3>
        <p class="text-gray-500">{{ burger.dsc }}</p>
        <div class="flex items-center mt-2">
            <span class="text-yellow-500 mr-1">&#9733;</span>
            <span class="text-gray-600">{{ burger.rate }}</span>
        </div>
        <div class="flex items-center mt-2">
            <span class="text-gray-600 mr-1">$</span>
            <span class="text-gray-800 font-semibold">{{ burger.price }}</span>
        </div>
        <p class="text-gray-500 mt-2">{{ burger.country }}</p>
    </div>
-->

<ItemCard :item="burger" v-for="burger in burgers" />

</template>

<script setup>
import burgers from '../data/burgers.json';



</script>