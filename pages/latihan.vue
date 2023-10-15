<template>
    <div>
        <select v-model = "category" class="form-control">
        <option value="cash">Cash</option>
        <option value="lunas">Lunas</option>
        <option value="kredit">Kredit</option>
        </select>
        <ul>
            <li v-for="student in filteredStudents" :key="student.id">{{ student.name }}</li>
        </ul>
    </div>
</template>
<script>
export default{
    layout(context){
        return 'custom'
    },
    data(){
        return{
            category : '',
            students : [
                {id : 1, name: 'Surya', category : 'lunas'},
                {id : 2, name: 'Ardi', category : 'kredit'},
                {id : 3, name: 'Kurniawan', category : 'lunas'},
            ],
            
        };
    },
    computed : {
        filteredStudents(){
            if(!this.category){
                return this.students;
            }
            return this.students.filter(student => !student.category.indexOf(this.category));
        },
    },
}
</script>
