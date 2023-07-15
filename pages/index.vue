<template>
    <div>
        new
        <ul>
            <li v-for="item in x">{{ item }} <button @click="removeName(item)"> dd</button> </li>
        </ul>
    </div>
</template>

<script setup >
const x = ref(
    ['hussam', 'ali']
)


const removeName = (name) => {
    alert(name)
}


</script>

