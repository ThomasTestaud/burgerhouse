<template>

    <div class="bg-white rounded-lg shadow-md p-4 mb-4">
        <img :src="props.item.img" alt="Burger Image" class="w-full h-40 object-cover mb-4 rounded">
        <h3 class="text-xl font-semibold">{{ props.item.name }}</h3>
        <p class="text-gray-500">{{ props.item.dsc }}</p>
        <div class="flex items-center mt-2">
            <span class="text-yellow-500 mr-1">&#9733;</span>
            <span class="text-gray-600">{{ props.item.rate }}</span>
        </div>
        <div class="flex items-center mt-2">
            <span class="text-gray-600 mr-1">$</span>
            <span class="text-gray-800 font-semibold">{{ props.item.price/10 }}0</span>
        </div>
        <p class="text-gray-500 mt-2">{{ props.item.country }}</p>
        <Button content="Add to Cart" class="mt-4 " @click="addToCart()"/>
    </div>

</template>

<script setup>

const props = defineProps({
    item: Object
});

const cart = useState('cartItems', () => []);

const addToCart = () => {
    cart.value.push(props.item);
}

</script>