<template>
    <div class="container">
    <form id="tambah-kelas" @submit.prevent="onFormSubmit">
      <div class="form-group">
        <label for="title">ID Kelas</label>
        <input id="kelas" type="text"  class="form-control" name="kelas" required>
      </div>
      <div class="form-group">
        <label for="title">Nama Kelas</label>
        <input id="nama_kelas" type="text"  class="form-control" name="nama_kelas" required>
      </div>

      <button class="btn btn-primary" type="submit">Tambah Kelas</button>
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
        return {}
    },
    methods: {
        async onFormSubmit(){
            // const formTambah = document.getElementById("tambah-artikel")
            // const formData = new FormData(formTambah)
            const dataForm = {
                kelas: document.getElementById('kelas').value,
                nama_kelas: document.getElementById('nama_kelas').value,
            }
            const response = await fetch("https://buigghlsgthlyorwmphi.supabase.co/rest/v1/kelas", {
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
              this.$router.push(`/app`)

            },3000)
        },
    }

}
</script>