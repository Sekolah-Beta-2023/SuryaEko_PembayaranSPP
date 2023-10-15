<template>
    <div class="container py-5">
      <div class="row justify-content-between">
        <h3 style="text-align: center;">Daftar Pembayaran</h3>
        <table class="table table-striped table-dark table-hover">
  <thead>
    <tr style="text-align: center;">
      <th scope="col">Kode Bayar</th>
      <th scope="col">Kode Tagihan</th>
      <th scope="col">Biaya</th>
      <th scope="col">Jumlah Bayar</th>
      <th scope="col">Tanggal Pembayaran</th>
      <th scope="col">Jenis Pembayaran</th>
      <th>Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, byr) in pembayaran" :key="byr" style="text-align: center;">
      <td>{{ item.kode_bayar }}</td>
      <td>{{ item.kode_tagihan }}</td>
      <td>{{ item.biaya }}</td>
      <td>{{ item.jumlah_bayar }}</td>
      <td>{{ item.tgl_pembayaran}}</td>
      <td>{{ item.jenis_pembayaran }}</td>
      <td>
        <nuxt-link :to="'detail/' + item.kode_bayar" class="btn btn-primary">Detail</nuxt-link>|
        <button type="submit" @click="deleteData(item.kode_bayar)" class="btn btn-danger">Delete</button>
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
    name: 'PagePembayaran',
    data() {
      return {
        pembayaran: [],
      }
    },
    mounted() {
        
      this.$nextTick(() =>{
            this.$nuxt.$loading.start()
            setTimeout(() => this.$nuxt.$loading.finish(), 3000)
        })
      this.getPembayaran();
    },
    methods: {
      async getPembayaran() {
        const response = await this.$axios.get("/rest/v1/pembayaran", {
          headers: {
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1aWdnaGxzZ3RobHlvcndtcGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MjkzNTQsImV4cCI6MjAxMjAwNTM1NH0.2NtXZeZgjN2-JG7ndnzAWY8mlviJe84LuG1IHE3NrA4"
          }
        })
        this.pembayaran = response?.data
      },
      async deleteData(kodebayar){
          const response = await this.$axios.delete("/rest/v1/pembayaran?kode_bayar=eq." + kodebayar, {
          headers: {
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1aWdnaGxzZ3RobHlvcndtcGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MjkzNTQsImV4cCI6MjAxMjAwNTM1NH0.2NtXZeZgjN2-JG7ndnzAWY8mlviJe84LuG1IHE3NrA4"
          }
        })
        this.$refs.notification.showNotification("Data Pembayaran Berhasil Dihapus")
        setTimeout(() => {
              this.pembayaran = response?.data
              this.$router.push(`/pembayaran`)
              this.getPembayaran();

            },2000)
        
      },
    }
  }
  </script>