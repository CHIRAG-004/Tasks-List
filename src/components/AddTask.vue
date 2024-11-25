<template>
    <form @submit.prevent="handleSubmit"
        class="flex justify-center max-w-[350px] sm:max-w-[430px] md:max-w-[550px] mx-auto">
        <input type="text" placeholder="I need to..." v-model="newTask" class="py-2 pl-3 rounded-md max-w-[70%] ">
        <button class="ml-5 border-[2px] px-4 py-2 rounded-md bg-[#d2b58a]">Add</button>
    </form>
</template>

<script setup lang="ts">
import { useTaskStore } from "../stores/taskStore"
import { reactive, ref } from "vue"

const taskStore = useTaskStore()
const newTask = ref("")
const idStore: number[] = reactive(taskStore.tasks.map(task => task.id))
const handleSubmit = () => {
    if (newTask.value.length > 0) {
        let temp = Math.floor(Math.random() * 1000000)
        if(idStore.includes(temp)){
            handleSubmit()
        }
        taskStore.addTask({
            id: temp,
            title: newTask.value,
            isFav: false,
        })
        
    }
    newTask.value = ""
}

</script>
