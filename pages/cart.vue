<template>
    <div class="">

        <h2 class="text-2xl font-bold bg-white text-center p-4 border border-red-500 rounded-lg mx-2">Your Cart</h2>
        
        <div v-for="item in cart.items" :key="item.id" class="my-4 bg-white rounded-lg py-2 px-4 shadow-md relative">
            <Icon name="material-symbols:delete-rounded" class="absolute top-2 right-2 text-red-500 cursor-pointer" @click="removeItem(item.id)" />
            <h4 class="text-lg font-semibold">{{ item.name }}</h4>
            <p class="text-gray-600">Price: ${{ item.price }}</p>
        </div>

        <div class="mt-4 font-bold  bg-white text-center p-4 border border-red-500 rounded-lg mx-2">
            Total: ${{ cart.total }}
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const stateItems = useState('cartItems', () => []);

const cart = ref({
    items: [...stateItems.value],
    total: computed(() => {
        return cart.value.items.reduce((acc, item) => acc + item.price, 0);
    })
});

const removeItem = (id) => {
    cart.value.items = cart.value.items.filter(item => item.id !== id);
}
</script>