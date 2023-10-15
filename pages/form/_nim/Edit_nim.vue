<template>
    <div class="container">
    <form id="tambah-artikel" @submit.prevent="onFormSubmit">
      
        <input v-model="nim" id="nim" type="hidden"  class="form-control" name="nim">
      <div class="form-group">
        <label for="title">Nama Siswa</label>
        <input v-model="nama" id="nama" type="text"  class="form-control" name="nama">
      </div>
      <div class="form-group">
        <label for="title">Kelas</label>
        <select v-model="selected_kelas" name="kelas" id="kelas" class="form-control">
          <option disabled value="">Pilih Kelas</option>
          <option v-for="kelas in kelasOptions" :key="kelas.kelas" :value="kelas.kelas">{{ kelas.nama_kelas }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="title">Email</label>
        <input v-model="email" id="email" type="email"  class="form-control" name="email">
      </div>
      <div class="form-group">
        <label for="content">Alamat</label>
        <textarea v-model="alamat" id="alamat" class="form-control" name="alamat" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="title">No Telepon</label>
        <input v-model="no_telepon" id="no_telepon" type="text"  class="form-control" name="no_telepon">
      </div>

      <button class="btn btn-primary" type="submit">Edit Siswa</button>
    </form>
    <NotifAlert ref="notification"></NotifAlert>
  </div>
</template>

<script>
import NotifAlert from '../../../components/NotifAlert.vue'
import httpClient from '~/utils/httpClient'
export default{
  components: {
    NotifAlert

  },
    layout(context){
        return 'custom1'
    },
    data(){
        return {
        kelasOptions: [],
            nama: "",
            selected_kelas: "",
            email: "",
            alamat: "",
            no_telepon: "",
            nim: ""
        
      }
    },
    mounted() {
      const params = this.$route.params
      this.getDetailData(params?.nim)
      this.getKelasOptions()
    },
    methods: {
        async getDetailData(studentNim) {
        const response = await httpClient("/rest/v1/student?nim=eq." + studentNim, "GET")
        const data = await response.json()
        this.nama = data[0]?.nama
        this.selected_kelas = data[0]?.kelas
        this.email = data[0]?.email
        this.alamat = data[0]?.alamat
        this.no_telepon = data[0]?.no_telepon
        this.nim = data[0]?.nim
      },
        async onFormSubmit(){
            // const formTambah = document.getElementById("tambah-artikel")
            // const formData = new FormData(formTambah)
            const dataForm = {
                nama: document.getElementById('nama').value,
                kelas: document.getElementById('kelas').value,
                email: document.getElementById('email').value,
                alamat: document.getElementById('alamat').value,
                no_telepon: document.getElementById('no_telepon').value,
            }
            const response = await fetch("https://buigghlsgthlyorwmphi.supabase.co/rest/v1/student?nim=eq." + this.nim, {
                method: "PATCH",
                headers: {
                    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1aWdnaGxzZ3RobHlvcndtcGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MjkzNTQsImV4cCI6MjAxMjAwNTM1NH0.2NtXZeZgjN2-JG7ndnzAWY8mlviJe84LuG1IHE3NrA4",
                    "Content-Type" : "application/json",
                    Prefer: "return=representation"
                },
                body: JSON.stringify(dataForm)
            })
            this.$refs.notification.showNotification("Data Berhasil Diubah")
            const data =  await response?.json()
            setTimeout(() => {
            this.$router.push(`/student/detail/${data[0]?.nim}`)

            },2000)
            
        },
        async getKelasOptions(){
          try {
            const response = await this.$axios.get("/rest/v1/kelas", {
              headers: {
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1aWdnaGxzZ3RobHlvcndtcGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MjkzNTQsImV4cCI6MjAxMjAwNTM1NH0.2NtXZeZgjN2-JG7ndnzAWY8mlviJe84LuG1IHE3NrA4"
              }
            })
            this.kelasOptions = response.data;
          } catch (error) {
            console.log(error)
            
          }
        }
    }

}
</script>