<template>
    <div class="bg-red-500 text-white p-2 fixed bottom-0 w-full flex justify-around">
        <button @click="goToPage(button.link)" v-for="button in buttons" :key="button.text" class="hover:bg-white hover:text-red-500 focus:bg-white focus:text-red-500 rounded-full px-3 py-1 transition-all duration-300">
            <Icon :name="button.icon"  size="30" c/>
        </button>
    </div>
</template>


<script setup>
import { ref } from 'vue'; 
import { useRouter } from 'vue-router';

const router = useRouter();

const buttons = ref([
    { text: 'Menu', link: '/', icon: 'mdi:hamburger' },
    { text: 'Commande', link: '/cart', icon: 'material-symbols:shopping-cart' },
    { text: 'Contact', link: '/contact', icon: 'material-symbols:call-quality' },
])

const goToPage = (link) => {
    router.push(link);
}

</script>