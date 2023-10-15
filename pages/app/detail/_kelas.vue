<template>
    <div class="container">
      <div class="card" style="width: 300px;">
        <h3>Detail Data Kelas</h3>
        <img src="../kelas.jpeg" alt="gambar" style="width: 200px; height: 200px; margin-left: 20px;">
        <div class="card-body">
          <h5 class="card-title">Nim Siswa: {{ kelas }}</h5>
          <h5 class="card-title">Nama Kelas: {{ nama_kelas }}</h5>
        </div>
        <button type="button" class="btn btn-primary" @click="onEdit">Edit Kelas</button>
      <a class="btn btn-outline-secondary btn-sm mb-3" href="/app">Kembali
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
          kelas: "",
          nama_kelas: ""
        }
      },
      mounted() {
        const params = this.$route.params
        this.getDetailData(params?.kelas)
      },
      methods: {
        async getDetailData(dtlkelas) {
          const response = await httpClient("/rest/v1/kelas?kelas=eq." + dtlkelas, "GET")
          const data = await response.json()
          
          this.kelas = data[0]?.kelas
          this.nama_kelas = data[0]?.nama_kelas
        },
        onEdit() {
        this.$router.push(`/form/${this.kelas}/Edit`)
      }
      }
    }
    </script>