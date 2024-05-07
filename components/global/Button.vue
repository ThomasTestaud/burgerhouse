<template>
    <button :class="[colors[props.type] , sizes[props.size], 'text-white font-bold rounded duration-300 transition-all']">
        {{ props.content }}
    </button>
</template>

<script setup>

const props = defineProps({
    content: String,
    type: {
        type: String,
        default: 'primary'
    },
    size: {
        type: String,
        default: 'md'
    }
})

const colors = {
    primary: 'bg-red-500 hover:bg-red-700',
    secondary: 'bg-secondary-500 hover:bg-secondary-700',
    validate: 'bg-green-500 hover:bg-green-700',
    warning: 'bg-yellow-500 hover:bg-yellow-700',
    danger: 'bg-red-500 hover:bg-red-700',
}

const sizes = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-4 text-md',
    lg: 'py-3 px-6 text-lg',
}

</script>