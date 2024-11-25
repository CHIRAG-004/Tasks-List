<template>
  <main>
    <!-- header -->
    <header class="bg-[#e7e7e7] pb-8">
      <div class="flex  text-center justify-center items-center ">
        <img src="./assets/logo.jpg" alt="logo" class="w-32 -rotate-[6deg] rounded-lg mt-14" />
        <h1 class="text-[#777] rotate-[2deg] font-bold text-3xl ml-5 mt-16">
          Tasks List
        </h1>
      </div>
      <!-- add task form -->
      <div class="mt-8">
        <AddTask />
      </div>
    </header>




    <!-- Filter -->
    <nav class="sm:max-w-[400px] md:max-w-[640px] max-w-[300px] my-5 mx-auto flex justify-end">
      <select v-model="selectedOption"
        class="bg-white border-[2px] border-solid border-[#555] rounded-[6px] cursor-pointer text-[1em] px-2 py-1">
        <option value="all">All</option>
        <option value="fav">Fav</option>
      </select>
    </nav>


    <!-- tasks list -->
    <div class="sm:max-w-[450px] md:max-w-[640px] max-w-[330px] my-5 mx-auto">
      <p class="text-[15px] pl-2">You have {{ selectedOption == 'all' ? `${taskStore.totalCount} ` +
        (taskStore.totalCount > 1 ? "tasks" :
          "task") :
        `${taskStore.favCount} favourite ` + (taskStore.favCount > 1 ? "tasks" : "task") }} left to do.</p>
      <div v-for="(task, index) in (selectedOption == 'all' ? taskStore.tasks : taskStore.favs)" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import TaskDetails from "./components/TaskDetails.vue";
import AddTask from "./components/AddTask.vue"
import { useTaskStore } from "./stores/taskStore";
import { ref, onMounted } from "vue"

const selectedOption = ref("all")
const taskStore = useTaskStore();


onMounted(() => {
  if (JSON.parse(localStorage.getItem("tasks") || "[]").length > 0) {
    taskStore.tasks = JSON.parse(localStorage.getItem("tasks") || "[]")
  }
  else {
    taskStore.tasks = [
      {
        id: 0,
        title: "Upgrade yourself",
        isFav: true
      }
    ]
  }
})

</script>
