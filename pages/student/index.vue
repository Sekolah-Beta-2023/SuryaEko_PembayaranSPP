<template>
    <div class="container py-5">
      <div class="row justify-content-between">
        <h3 style="text-align: center;">Daftar Siswa</h3>
        <nuxt-link class="navbar-brand" to="/form/tambah">Tambah Siswa</nuxt-link>
        <table class="table table-striped table-dark table-hover">
  <thead>
    <tr style="text-align: center;">
      <th scope="col">Nim</th>
      <th scope="col">Nama</th>
      <th scope="col">Kelas</th>
      <th scope="col">Email</th>
      <th scope="col">Alamat</th>
      <th scope="col">No Telepon</th>
      <th>Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, idx) in student" :key="idx" style="text-align: center;">
      <td>{{ item.nim }}</td>
      <td>{{ item.nama }}</td>
      <td>{{ item.kelas }}</td>
      <td>{{ item.email }}</td>
      <td>{{ item.alamat }}</td>
      <td>{{ item.no_telepon }}</td>
      <td>
        <nuxt-link :to="'student/detail/' + item.nim" class="btn btn-primary">Detail</nuxt-link>|
        <button type="submit" @click="deleteData(item.nim)" class="btn btn-danger">Delete</button>
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
        student: [],
      }
    },
    mounted() {
      this.getStudent();
    },
    methods: {
      async getStudent() {
        const response = await this.$axios.get("/rest/v1/student", {
          headers: {
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1aWdnaGxzZ3RobHlvcndtcGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MjkzNTQsImV4cCI6MjAxMjAwNTM1NH0.2NtXZeZgjN2-JG7ndnzAWY8mlviJe84LuG1IHE3NrA4"
          }
        })
        this.student = response?.data
      },
      async deleteData(nim){
          const response = await this.$axios.delete("/rest/v1/student?nim=eq." + nim, {
          headers: {
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1aWdnaGxzZ3RobHlvcndtcGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MjkzNTQsImV4cCI6MjAxMjAwNTM1NH0.2NtXZeZgjN2-JG7ndnzAWY8mlviJe84LuG1IHE3NrA4"
          }
        })
        this.$refs.notification.showNotification("Data Berhasil Dihapus")
        setTimeout(() => {
              this.student = response?.data
              this.$router.push(`/student`)
              this.getStudent()

            },2000)
      },
    }
  }
  </script>