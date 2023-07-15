<template>
    <div>
        <h1 v-for="item in x" :key="item">{{ item }}</h1>
    </div>
</template>

<script setup >
const x = ref([1, 2, 3, 4])



</script>

