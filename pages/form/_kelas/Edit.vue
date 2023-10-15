<template>
    <div class="container">
    <form id="tambah-artikel" @submit.prevent="onFormSubmit">
      
        
      <div class="form-group">
        <label for="title">ID Kelas</label>
        <input v-model="kelas" id="kelas" type="text" readonly  class="form-control" name="kelas">
      </div>
      <div class="form-group">
        <label for="title">Nama Kelas</label>
        <input v-model="nama_kelas" id="nama_kelas" type="text"  class="form-control" name="nama_kelas">
      </div>

      <button class="btn btn-primary" type="submit">Edit Kelas</button>
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
            
            kelas: "",
            nama_kelas: "",
        
      }
    },
    mounted() {
      const params = this.$route.params
      this.getDetailData(params?.kelas)
    },
    methods: {
        async getDetailData(getKelas) {
        const response = await httpClient("/rest/v1/kelas?kelas=eq." + getKelas, "GET")
        const data = await response.json()
        
        this.kelas = data[0]?.kelas
        this.nama_kelas = data[0]?.nama_kelas
      },
        async onFormSubmit(){
            // const formTambah = document.getElementById("tambah-artikel")
            // const formData = new FormData(formTambah)
            const dataForm = {
                kelas: document.getElementById('kelas').value,
                nama_kelas: document.getElementById('nama_kelas').value,
            }
            const response = await fetch("https://buigghlsgthlyorwmphi.supabase.co/rest/v1/kelas?kelas=eq." + this.kelas, {
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
            this.$router.push(`/app/detail/${data[0]?.kelas}`)

            },2000)
            
        },
    }

}
</script>