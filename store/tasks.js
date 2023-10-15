// store/index.js
export const state = () => ({
    tasks: [
        {
            id: 1,
            title: 'Task 1',
            description: 'ini deskripsi',
            isDone: false,
        },
        {
            id: 2,
            title: 'Task 2',
            description: 'ini deskripsi 2',
            isDone: false,
        },
        {
            id: 3,
            title: 'Task 3',
            description: ' ini deskripsi 3',
            isDone: false,
        }
    ],
})
    // contains your actions
export const actions = {
        addTask(context, task){
            context.commit('ADD_TASK',task)
    },
    updateStatus(context,task){
        context.commit('UPDATE_STATUS_TASK',task)

    }
}
    // contains your mutations
export const mutations = {
    ADD_TASK(state, task) {
        console.log(task)
        state.tasks.push(task)
    },
    UPDATE_STATUS_TASK(state,task){
        const{id, isDone} = task;
        const taskIndex = state.tasks.findIndex(task => task.id === id);

        const findTask = state.tasks[taskIndex];
        findTask.isDone = !isDone;
        state.tasks[taskIndex] = findTask;

    }
        
}
    // your root getters
export const getters = {
    getTasks: (state) => {
        return state.tasks
        },
    getTaskById : (state) => (id) => {
        return state.tasks.find(task => task.id == id)
    },
}