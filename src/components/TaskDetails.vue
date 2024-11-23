<template>
    <div class="py-4 px-5 mt-5 rounded-md flex justify-between items-center bg-white shadow-md">
        <h3 class="font-bold text-sm">{{ task.title }}</h3>
        <div class="flex">
            <img :src="DeleteIcon" alt="delete" class="cursor-pointer" @click="taskStore.deleteTask(task.id)">
            <img :src="task.isFav ? FavIcon : NotFavIcon" alt="fav" class="ml-[13px] cursor-pointer"
                @click="taskStore.toggleFav(task.id)">
        </div>
    </div>
</template>

<script setup lang="ts">
import FavIcon from "../assets/fav.svg"
import NotFavIcon from "../assets/notFav.svg"
import DeleteIcon from "../assets/delete.svg"
import { useTaskStore } from "../stores/taskStore.ts"


type Item = {
    id: number;
    title: string;
    isFav: boolean;
}
const props = defineProps<{
    task: Item;
}>()

const taskStore = useTaskStore()

</script>
