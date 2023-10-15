<template>
  <div class="container py-5">
    <div class="row justify-content-between">
      <h3 style="text-align: center;">Daftar Kelas</h3>
      <nuxt-link class="navbar-brand" to="form/tambah_kelas">Tambah Kelas</nuxt-link>
      <table class="table table-striped table-dark table-hover">
<thead>
  <tr style="text-align: center;">
    <th scope="col">Id Kelas</th>
    <th scope="col">Nama Kelas</th>
    <th>Aksi</th>
  </tr>
</thead>
<tbody>
  <tr v-for="(item, kls) in kelas" :key="kls" style="text-align: center;">
    <td>{{ item.kelas }}</td>
    <td>{{ item.nama_kelas }}</td>
    <td>
      <nuxt-link :to="'app/detail/' + item.kelas" class="btn btn-primary">Detail</nuxt-link>|
      <button type="submit" @click="deleteData(item.kelas)" class="btn btn-danger">Delete</button>
    </td>
  </tr>
</tbody>
</table>
<NotifAlert ref="notification"></NotifAlert>
  </div>
</div>
</template>
<script>
import NotifAlert from '../../components/NotifAlert1.vue';
export default{
  components: {
    NotifAlert
  },
  layout(context){
      return 'custom1'
  },
  name: 'IndexPage',
  data() {
    return {
      kelas: [],
    }
  },
  mounted() {
    this.getKelas();
  },
  methods: {
    async getKelas() {
      const response = await this.$axios.get("/rest/v1/kelas", {
        headers: {
          apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1aWdnaGxzZ3RobHlvcndtcGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MjkzNTQsImV4cCI6MjAxMjAwNTM1NH0.2NtXZeZgjN2-JG7ndnzAWY8mlviJe84LuG1IHE3NrA4"
        }
      })
      this.kelas = response?.data
    },
    async deleteData(kelas){
        const response = await this.$axios.delete("/rest/v1/kelas?kelas=eq." + kelas, {
        headers: {
          apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1aWdnaGxzZ3RobHlvcndtcGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MjkzNTQsImV4cCI6MjAxMjAwNTM1NH0.2NtXZeZgjN2-JG7ndnzAWY8mlviJe84LuG1IHE3NrA4"
        }
      })
      this.$refs.notification.showNotification("Data Berhasil Dihapus")
        setTimeout(() => {
          this.kelas = response?.data
          this.$router.push('/app')
          this.getKelas();

            },2000)
      
    },
  }
}
</script>