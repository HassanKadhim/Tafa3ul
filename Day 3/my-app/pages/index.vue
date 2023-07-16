<template>
    <div class="m-8 flex flex-col gap-4">
        <div class="flex justify-between">
            <h1 class="text-3xl font-bold">Todo List</h1>
            <h1 class="text-3xl font-bold">{{ list.length }}</h1>
        </div>
        <div class="flex gap-2 w-full">
            <div class="flex gap-4 w-full">
                <UInput placeholder="Todo Name" @keydown.enter="addTodo" v-model="todoName" size="xl" />
                <UInput type="date" v-model="todoDate" size="xl" />
            </div>
            <UButton @click="addTodo">Add</UButton>
            <UButton @click="removeAllTodo" color="red">Remove All</UButton>
        </div>
        <TransitionGroup>
            <UCard v-for="item, index in listReverse" :key="item.name">
                <div class="flex justify-between">
                    <div class="flex gap-4">
                        <span class="font-bold">
                            {{ index + 1 }}. {{ item.name }}
                        </span>
                        <div>
                            {{ item.date }}
                        </div>
                    </div>
                    <UButton color="red" @click="removeTodo(index)">Remove Item</UButton>
                </div>
            </UCard>
        </TransitionGroup>
    </div>
</template>

<script setup>
const todoName = ref('')
const todoDate = ref(new Date().toISOString().split('T')[0])

const toast = useToast()

const list = ref([])

const listReverse = computed(() => list.value.reverse())

// {
//     name: "Todo name",
//     date: "2023...."
// }

const addTodo = () => {
    if (!todoName.value) {
        toast.add({
            title: "Name is required.",
            color: 'red'
        })
        return
    }

    const todo = {
        name: todoName.value,
        date: todoDate.value
    }

    list.value.push(todo)

    todoName.value = ""
}


const removeTodo = (index) => {
    list.value.splice(index, 1)
}

const removeAllTodo = () => {
    list.value = []
}
</script>


<style>
.v-enter-active,
.v-leave-active {
    transition: all 0.25s ease;
}

.v-enter-from,
.v-leave-to {
    transform: translateY(-40px);
    opacity: 0;
}
</style>