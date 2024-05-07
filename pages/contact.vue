<template>
    <form class="rounded-lg shadow-md bg-white p-4">
        <div class="mb-4">
            <label for="name" class="block mb-2">Name</label>
            <input type="text" id="name" class="w-full px-4 py-2 rounded border border-red-500" />
        </div>
        <div class="mb-4">
            <label for="email" class="block mb-2">Email</label>
            <input type="email" id="email" class="w-full px-4 py-2 rounded border border-red-500" />
        </div>
        <div class="mb-4">
            <label for="message" class="block mb-2">Message</label>
            <textarea id="message" class="w-full px-4 py-2 rounded border border-red-500"></textarea>
        </div>
        <button type="submit" class="bg-white text-red-500 px-4 py-2 rounded">Submit</button>
    </form>
</template>