<template>
    <div class="py-4">
  <div class="container">
  <div class="title border-bottom d-flex align-item-center justify-content-between py-2">
  <h5>Sistem Informasi Pembayaran SPP</h5>
  <div class="d-flex align-item-center ms-auto">
    <div class="d-flex align-items-center justify-content-end w-100">
    <span class="me-2">View As</span>
    <button class="btn btn-outline-secondary py-1 px-3" @click="isGrid=!isGrid">{{ isGrid?'Grid':'List' }}</button>
    </div>
  </div>
</div>
  <div class="list-task row">
    <CardItem1 v-for="(daftarsiswa,s) in inputSiswa" :key="s" :form="daftarsiswa" :isGrid="isGrid" />
  </div>
  <form v-on:submit.prevent="simpanSiswa">
  <div class="action py-2">
    <a v-if="!isCreating" href="#" class="add-button"  @click="isCreating=!isCreating">Add Task</a>
    <div v-else class="add-card">
      <div class="card mb-2">
        <div class="card-body d-flex flex-column p-0">
          <label class="label">Nis</label>
          <input v-model="form.nis" class="form-control border-0 mb-2" placeholder="nis" type="text">
          <label class="label">Nama Siswa</label>
          <input v-model="form.nama" class="form-control border-0 mb-2" placeholder="Nama Siswa" type="text">
          <label class="label">Kelas</label>
          <select v-model="form.kelas">
                  <option disabled value="">Nothing Selected</option>
                  <option v-for="option in opsi.daftar_kelas" :key="option.value">{{ option.text }}</option>
              </select>
          <label class="label">Jenis Pembayaran</label>    
          <label class="radio">
            <input v-model="form.jenis_pembayaran" type="radio" value="Cash"> Cash
          </label>
          <label class="radio">
            <input v-model="form.jenis_pembayaran" type="radio" value="Transfer"> Transfer
          </label>
          <label class="label">Alamat</label>
          <textarea v-model="form.alamat" class="form-control border-0 small" placeholder="Alamat" rows="3"></textarea>
        </div>
      </div>
      <div class="button-wrapper d-flex">
        <button class="button is-primary">Submit</button>
        <button class="btn btn-outline-secondary" @click="isCreating=!isCreating">Cancel</button>
      </div>
    </div>
  </div>
</form>
  </div>
  </div>
</template>
<script>
import CardItem1 from "@/components/Card/CardItem1.vue"
export default {
layout (context) {
  return 'custom'
},
components : {
  CardItem1
},
data(){
  return{
    // untuk mencari data
    searchQuery : '',
    // untuk mengubah layout view
    isGrid : true,
    // status sebelum menambahkan task
    isCreating: false,
    // daftar task
    pembayaran : '',
    form:{
      nis: '',
      nama: '',
      kelas:'',
      jenis_pembayaran: '',
      alamat: '',
    },
    opsi: {
      daftar_kelas:[
        {value:'XIRPL3', text:'XI Rekayasa Perangkat Lunak 3'},
        {value:'XIAKT1', text:'XI Akutansi 1'},
        {value:'XIDKV1', text:'XI Desain Komunikasi Visual 1'},
        {value:'XIANM1', text:'XI Animasi 1'},
        {value:'XIRPL2', text:'XI Rekayasa Perangkat Lunak 2'},
      ]
    },
    inputSiswa:[],
  }
},

computed : {
  resultQuery(){
    if(this.searchQuery){
      return this.students.filter((item) => {
        return this.searchQuery
        .toLowerCase()
        .split(" ")
        .every((v) => item.nama.toLowerCase().includes(v));
      });
    } else{
      console.log(this.students);
      return this.students
    }
  },
},
methods:{
  simpanSiswa(){
    // const daftarsiswa = {
    //   form: this.form
    // }
    const daftarsiswa = {...this.form}
    this.inputSiswa.push(daftarsiswa)
  }
},



}
</script>
<style>
</style>