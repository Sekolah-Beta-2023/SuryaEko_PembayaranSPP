<template>
    <div>
        <main class="container">
            <div class="row mb-2">
                <div v-for="(task,index) in tasks" :key="index" class="col-4">
            <div class="card" style="width: 18rem;">
            <div  class="card-body">
                <h5 class="card-title">{{ task.title}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ task.isDone ? 'Sudah Selesai' : 'belum selesai' }}</h6>
                <p class="card-text">{{ task.description }}</p>
                <nuxt-link :to="`/task/detail/${task.id}`" class="card-link">Detail</nuxt-link>
            </div>
            </div>
        </div>
    </div>
    <form class="add-card" v-on:submit.prevent="onSubmit" >
        <div class="card mb-2">
            <div class="card-body d-flex flex-column p-0">
            <input
            class="form-control border-0 mb-2"
            placeholder="Title"
            type="text"
            v-model="task.title"
            >
            <textarea
            class="form-control border-0 small"
            placeholder="Description"
            rows="3"
            v-model="task.description"
            ></textarea>
            </div>
            </div>
        <div class="button-wrapper d-flex">
            <button class="btn btn-primary me-2" type="submit">Save</button>
            <button class="btn btn-outline-secondary" @click="isCreating =
            !isCreating">Cancel</button>
            </div>
            </form>
            </main>
            
    </div>
</template>
<script>
import { mapActions } from "vuex";

export default{
    layout(context){
        return 'custom'
    },
    data(){
        return{
            task: {
                    id: 3,
                    title: '',
                    description: '',
                    isDone: false
                }
        }
    },
    computed : {
        tasks() {
            return this.$store.state.tasks.tasks;
        },
    },
    methods: {
        ...mapActions('tasks', ['addTask']),
        onSubmit() {
        // memperbaharui task id
        this.task.id += 1
        // agar tidak terjadi konflik saat perubahan data
        const payload = this.task
        // proses pemanggilan action ('nama_file/nama_method', parameter)
        // this.$store.tasks.commit('ADD_TASK', payload);
        this.addTask(payload);

        // mengembalikan isi form seperti semula
        this.task = {
            title: '',
            description: '',
            isDone: false
        }
        },
    }


}
</script>