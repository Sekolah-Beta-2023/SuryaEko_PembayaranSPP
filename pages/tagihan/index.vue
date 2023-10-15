<template>
  <div class="container py-5">
    <div class="row justify-content-between">
      <h3 style="text-align: center;">Daftar Tagihan</h3>
      <nuxt-link class="navbar-brand" to="/tagihan/tampil">Tambah Tagihan</nuxt-link>
      <table class="table table-striped table-dark table-hover">
<thead>
  <tr style="text-align: center;">
    <th scope="col">Kode tagihan</th>
    <th scope="col">Biaya</th>
    <th scope="col">Bulan</th>
    <th scope="col">Keterangan</th>
    <th scope="col">NIM Siswa</th>
    <th scope="col">Tanggal Minimal Bayar</th>
    <th scope="col">Tanggal Maksimal Bayar</th>
    <th>Aksi</th>
  </tr>
</thead>
<tbody>
  <tr v-for="(item, tgn) in tagihan" :key="tgn" style="text-align: center;">
    <td>{{ item.kode_tagihan }}</td>
    <td>{{ item.biaya }}</td>
    <td>{{ item.bulan }}</td>
    <td>{{ item.keterangan }}</td>
    <td>{{ item.nim }}</td>
    <td>{{ item.tgl_min_bayar }}</td>
    <td>{{ item.tgl_maks_bayar }}</td>
    <td>
      <nuxt-link :to="'tagihan/detail/' + item.kode_tagihan" class="btn btn-primary">Detail</nuxt-link>|
      <button type="submit" @click="deleteData(item.kode_tagihan)" class="btn btn-danger">Delete</button>
    </td>
  </tr>
</tbody>
</table>
<NotifAlert ref="notification"></NotifAlert>
  </div>
</div>
</template>
<script>
import NotifAlert from '../../components/NotifAlert1.vue'
export default{
  components: {
    NotifAlert
  },
  layout(context){
      return 'custom1'
  },
  name: 'PageTagihan',
  data() {
    return {
      tagihan: [],
    }
  },
  mounted() {
      
    this.$nextTick(() =>{
          this.$nuxt.$loading.start()
          setTimeout(() => this.$nuxt.$loading.finish(), 3000)
      })
    this.getTagihan();
  },
  methods: {
    async getTagihan() {
      const response = await this.$axios.get("/rest/v1/tagihan", {
        headers: {
          apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1aWdnaGxzZ3RobHlvcndtcGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MjkzNTQsImV4cCI6MjAxMjAwNTM1NH0.2NtXZeZgjN2-JG7ndnzAWY8mlviJe84LuG1IHE3NrA4"
        }
      })
      this.tagihan = response?.data
    },
    async deleteData(kodetagihan){
        const response = await this.$axios.delete("/rest/v1/tagihan?kode_tagihan=eq." + kodetagihan, {
        headers: {
          apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1aWdnaGxzZ3RobHlvcndtcGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MjkzNTQsImV4cCI6MjAxMjAwNTM1NH0.2NtXZeZgjN2-JG7ndnzAWY8mlviJe84LuG1IHE3NrA4"
        }
      })
      this.$refs.notification.showNotification("Data Tagihan Berhasil Dihapus")
        setTimeout(() => {
              this.tagihan = response?.data
              this.$router.push(`/tagihan`)
              this.getTagihan();
            },2000)
      
    },
  }
}
</script>