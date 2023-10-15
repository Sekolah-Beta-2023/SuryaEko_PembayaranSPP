<template>
  <div class="container">
    <div class="card" style="width: 300px;">
      <h3>Detail Data Siswa</h3>
      <img src="../gambar.jpg" alt="gambar" style="width: 200px; height: 200px; margin-left: 20px;">
      <div class="card-body">
        <h5 class="card-title">Nim Siswa: {{ nim }}</h5>
        <h5 class="card-title">Nama Siswa: {{ nama }}</h5>
        <h5 class="card-title">Kelas : {{ kelas }}</h5>
        <h5 class="card-title">Email: {{ email }}</h5>
        <h5 class="card-title">Alamat : {{ alamat }}</h5>
        <h5 class="card-title">No Telepon: {{ no_telepon }}</h5>
      </div>
      <button type="button" class="btn btn-primary" @click="onEdit">Edit Siswa</button>
    <a class="btn btn-outline-secondary btn-sm mb-3" href="/student">Kembali
    </a>
    </div>

  </div>
</template>

<script>
  import httpClient from "~/utils/httpClient"
  export default {
    layout(context){
      return 'custom1'
    },
    data() {
      return {
        nama: "",
        kelas: "",
        email: "",
        alamat:"",
        no_telepon: "",
        nim: "",
      }
    },
    mounted() {
      const params = this.$route.params
      this.getDetailData(params?.nim)
    },
    methods: {
      async getDetailData(studentNim) {
        const response = await httpClient("/rest/v1/student?nim=eq." + studentNim, "GET")
        const data = await response.json()
        this.nama = data[0]?.nama
        this.kelas = data[0]?.kelas
        this.email = data[0]?.email
        this.alamat = data[0]?.alamat
        this.no_telepon = data[0]?.no_telepon
        this.nim = data[0]?.nim
      },
      onEdit() {
      this.$router.push(`/form/${this.nim}/Edit_nim`)
    }
    }
  }
  </script>