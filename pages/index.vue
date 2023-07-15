<template>
    <div  >
        <form class="flex justify-center items-center u-screen m-6"  @submit.prevent="addName">
            <label for="name">Name:</label>
            <input class="border border-red-300 rounded px-3 py-1" type="text" v-model="name" id="name" />
            <button class="bg-red-500 hover:bg-red-800 text-white rounded px-4 py-1 ml-2" type="submit">Enter</button>
        </form>

        <ol type="1">
            <li v-for="nameItem in names" :key="nameItem"  class="flex justify-center items-center u-screen">
                {{ nameItem }}
            </li>
        </ol>
    </div>
</template>

<script setup>

const names = ref([])
const name = ref('')

const addName = () => {
    if (name.value) {
        names.value.push(name.value)
        name.value = ''
    }
};
</script>
