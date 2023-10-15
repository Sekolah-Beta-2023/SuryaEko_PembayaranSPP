<template>
  <div class="container py-4">
      <h1 align="center">Tambah Tagihan</h1>
      <form action="" @submit.prevent="tambahTagihan">
      <div class="form-group">
          <label for="">Cari Siswa : </label>
          <select name="nim" id="nim" class="form-control">
        <option disabled value="">Cari Siswa</option>
        <option v-for="siswa in studentOptions" :key="siswa.nim" :value="siswa.nim">{{ siswa.nim }} - {{ siswa.nama }}</option>
      </select>
          <a v-if="!isCreate" @click="isCreate=!isCreate" type="submit" style="margin-top: 10px;" class="btn btn-primary">Tambah</a>
          <div v-else class="add-card">
            <div class="card mb-2">
          <div class="card-body d-flex flex-column p-0">
            <label class="label">Kode Tagihan</label>
            <input class="form-control" id="kode_tagihan" name="kode_tagihan"  placeholder="Masukkan Kode Tagihan" type="text">
          </div>
          <div class="card-body d-flex flex-column p-0">
            <label class="label">Biaya</label>
            <input id="biaya" name="biaya" class="form-control" placeholder="Biaya" type="text">
          </div>
          <div class="card-body d-flex flex-column p-0">
            <label class="label">Bulan</label>
            <input id="bulan" name="bulan" class="form-control" placeholder="Bulan" type="text">
          </div>
          <div class="card-body d-flex flex-column p-0">
            <label class="label">Keterangan</label>
            <input id="keterangan" name="keterangan" class="form-control" placeholder="Masukkan Keterangan" type="text">
          </div>
          <div class="card-body d-flex flex-column p-0">
            <label class="label">Tanggal Minimal Bayar</label>
            <input id="tgl_min_bayar" name="tgl_min_bayar" class="form-control"  type="date">
          </div>
          <div class="card-body d-flex flex-column p-0">
            <label class="label">Tanggal Maksimal Bayar</label>
            <input id="tgl_maks_bayar" name="tgl_maks_bayar" class="form-control" type="date">
          </div>
        </div>
        <div class="button-wrapper d-flex">
          <button class="button is-primary">Submit</button>
          <button class="btn btn-outline-secondary" @click="isCreate=!isCreate">Cancel</button>
        </div>
      </div>
          </div>
      
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
      return{
          isCreate: false,
          studentOptions: [],
          nim: '',

      }
  },
  mounted() {
    this.getSiswaOptions();
  },
  methods: {
      async getSiswaOptions(){
        try {
          const response = await this.$axios.get("/rest/v1/student", {
            headers: {
              apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1aWdnaGxzZ3RobHlvcndtcGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MjkzNTQsImV4cCI6MjAxMjAwNTM1NH0.2NtXZeZgjN2-JG7ndnzAWY8mlviJe84LuG1IHE3NrA4"
            }
          })
          this.studentOptions = response.data;
        } catch (error) {
          console.log(error)
          
        }
      },
      async tambahTagihan(){
        const dataTagihan = {
          kode_tagihan : document.getElementById('kode_tagihan').value,
          biaya : document.getElementById('biaya').value,
          bulan: document.getElementById('bulan').value,
          keterangan: document.getElementById('keterangan').value,
          nim :document.getElementById('nim').value,
          tgl_min_bayar: document.getElementById('tgl_min_bayar').value,
          tgl_maks_bayar : document.getElementById('tgl_maks_bayar').value
        }
        const response = await fetch("https://buigghlsgthlyorwmphi.supabase.co/rest/v1/tagihan", {
              method: "POST",
              headers: {
                  apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1aWdnaGxzZ3RobHlvcndtcGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MjkzNTQsImV4cCI6MjAxMjAwNTM1NH0.2NtXZeZgjN2-JG7ndnzAWY8mlviJe84LuG1IHE3NrA4",
                  "Content-Type" : "application/json",
                  Prefer: "return=representation"
              },
              body: JSON.stringify(dataTagihan)
          })
          this.$refs.notification.showNotification("Data Tagihan Berhasil Ditambahkan")
            setTimeout(() => {
              this.tagihan = response?.data
              this.$router.push(`/tagihan`)

            },3000)
          
      }
    

  }
}
</script>