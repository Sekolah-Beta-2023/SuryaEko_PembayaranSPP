<template>
    <div class="container py-4">
        <h2>Form Pembayaran</h2>
    <form id="tambah-artikel" @submit.prevent="onFormSubmit">
      
        <div class="form-group">
        <label for="title">Kode Tagihan</label>
        <input v-model="kode_tagihan" id="kode_tagihan" type="text"  class="form-control" name="kode_tagihan" readonly>
      </div>
      <div class="form-group">
        <label for="title">Biaya</label>
        <input v-model="biaya" id="biaya" type="text"  class="form-control" name="biaya" readonly>
      </div>
      <div class="form-group">
        <label for="title">Kode Pembayaran</label>
        <input v-model="kode_bayar" id="kode_bayar" type="text"  class="form-control" name="kode_bayar">
      </div>
      <div class="form-group">
        <label for="content">Jumlah Bayar</label>
        <input v-model="jumlah_bayar" id="jumlah_bayar"  class="form-control" name="jumlah_bayar" >
      </div>
      <div class="form-group">
        <label for="title">Tanggal Pembayaran</label>
        <input v-model="tgl_pembayaran" id="tgl_pembayaran" type="date"  class="form-control" name="tgl_pembayaran">
      </div>
      <div class="form-group">
        <label for="title">Jenis Pembayaran</label>
        <select v-model="jenis_pembayaran" name="jenis_pembayaran" id="jenis_pembayaran" class="form-control">
            <option disabled value="">Jenis Pembayaran</option>
            <option value="cash">Cash</option>
            <option value="transfer">Transfer</option>
        </select>
      </div>
      <div class="form-group">
        <label for="title"></label>
      <button class="btn btn-success" type="submit">Bayar</button>
      </div>
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
            kode_bayar: "",
            kode_tagihan: "",
            biaya: "",
            jumlah_bayar: "",
            tgl_pembayaran: "",
            jenis_pembayaran: ""

        
      }
    },
    mounted() {
      const params = this.$route.params
      this.getDetailData(params?.kode_tagihan)
    },
    methods: {
        async getDetailData(datatagihan) {
        const response = await httpClient("/rest/v1/tagihan?kode_tagihan=eq." + datatagihan, "GET")
        const data = await response.json()
        this.kode_tagihan = data[0]?.kode_tagihan
        this.biaya = data[0]?.biaya
      },
        async onFormSubmit(){
          const biaya = parseFloat(this.biaya);
          const jumlahBayar = parseFloat(this.jumlah_bayar)
          if (biaya <= jumlahBayar) {
            // const formTambah = document.getElementById("tambah-artikel")
            // const formData = new FormData(formTambah)
            const dataForm = {
                kode_bayar: document.getElementById('kode_bayar').value,
                kode_tagihan: document.getElementById('kode_tagihan').value,
                biaya: document.getElementById('biaya').value,
                jumlah_bayar: document.getElementById('jumlah_bayar').value,
                tgl_pembayaran: document.getElementById('tgl_pembayaran').value,
                jenis_pembayaran: document.getElementById('jenis_pembayaran').value,
            }
              const response = await fetch("https://buigghlsgthlyorwmphi.supabase.co/rest/v1/pembayaran", {
                method: "POST",
                headers: {
                    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1aWdnaGxzZ3RobHlvcndtcGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MjkzNTQsImV4cCI6MjAxMjAwNTM1NH0.2NtXZeZgjN2-JG7ndnzAWY8mlviJe84LuG1IHE3NrA4",
                    "Content-Type" : "application/json",
                    Prefer: "return=representation"
                },
                body: JSON.stringify(dataForm)
            })
            this.$refs.notification.showNotification("Pembayaran Berhasil")
            
            setTimeout(() => {
            this.pembayaran = response?.data
            this.$router.push(`/pembayaran`)

            },2000)
          } else {
            this.$refs.notification.showNotification("Pembayaran Tidak mencukupi")
            
            setTimeout(() => {
            this.$router.push(`/tagihan`)
            },2000)
        }
    }


      }
  }
</script>