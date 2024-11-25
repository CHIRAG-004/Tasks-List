import { defineStore } from "pinia";

type Item = {
    id: number;
    title: string;
    isFav: boolean;
}

type Tasks = {
    tasks: Item[]
}

export const useTaskStore = defineStore("taskStore", {
    state: () => ({
        tasks: [
        ]
    } as Tasks),
    getters: {
        favs(): Item[] {
            return this.tasks.filter(task => task.isFav)
        },
        favCount(): number {
            return this.tasks.filter(task => task.isFav).length
        },
        totalCount(): number {
            return this.tasks.length
        }
    },
    actions: {
        addTask(newTask: Item) {
            this.tasks.push(newTask)
            localStorage.setItem("tasks", JSON.stringify(this.tasks))
        },
        deleteTask(id: number) {
            this.tasks = this.tasks.filter(task => task.id !== id)
            localStorage.setItem("tasks", JSON.stringify(this.tasks))

        },
        toggleFav(id: number) {
            const task = this.tasks.find(t => t.id == id)
            if (task) {
                task.isFav = !task.isFav
            }
            localStorage.setItem("tasks", JSON.stringify(this.tasks))

        }
    }
})