<template>
    <div class="container">
    <form id="tambah-artikel" @submit.prevent="onFormSubmit">
      <div class="form-group">
        <label for="title">Nim</label>
        <input id="nim" type="text"  class="form-control" name="nim" required>
      </div>
      <div class="form-group">
        <label for="title">Nama</label>
        <input id="nama" type="text"  class="form-control" name="nama" required>
      </div>
      <div class="form-group">
        <label for="title">Kelas</label>
        <select name="kelas" id="kelas" class="form-control">
          <option disabled value="">Pilih Kelas</option>
          <option v-for="kelas in kelasOptions" :key="kelas.kelas" :value="kelas.kelas">{{ kelas.nama_kelas }}</option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="title">Email</label>
        <input id="email" type="email"  class="form-control" name="email" required>
      </div>
      <div class="form-group">
        <label for="content">Alamat</label>
        <textarea id="alamat" class="form-control" name="alamat" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="title">No Telepon</label>
        <input id="no_telepon" type="text"  class="form-control" name="no_telepon">
      </div>

      <button class="btn btn-primary" type="submit">Tambah Siswa</button>
    </form>
    <NotifAlert ref="notification"></NotifAlert>
  </div>
</template>

<script>
import NotifAlert from '../../components/NotifAlert.vue'

export default{
  components: {
    NotifAlert
  },
    layout(context){
        return 'custom1'
    },
    data(){
        return {
          kelasOptions : [],
        }
    },
    mounted() {
      this.getKelasOptions();
    },
    methods: {
        async onFormSubmit(){
            // const formTambah = document.getElementById("tambah-artikel")
            // const formData = new FormData(formTambah)
            const dataForm = {
                nim: document.getElementById('nim').value,
                nama: document.getElementById('nama').value,
                kelas: document.getElementById('kelas').value,
                email: document.getElementById('email').value,
                alamat: document.getElementById('alamat').value,
                no_telepon: document.getElementById('no_telepon').value,
            }
            const response = await fetch("https://buigghlsgthlyorwmphi.supabase.co/rest/v1/student", {
                method: "POST",
                headers: {
                    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1aWdnaGxzZ3RobHlvcndtcGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MjkzNTQsImV4cCI6MjAxMjAwNTM1NH0.2NtXZeZgjN2-JG7ndnzAWY8mlviJe84LuG1IHE3NrA4",
                    "Content-Type" : "application/json",
                    Prefer: "return=representation"
                },
                body: JSON.stringify(dataForm)
            })
            
            this.$refs.notification.showNotification("Data Berhasil Ditambahkan")
            setTimeout(() => {
              this.student = response?.data
              this.$router.push(`/student`)

            },3000)
            
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