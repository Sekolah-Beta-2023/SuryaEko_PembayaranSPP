<template>
    <div class="container py-4">
      <div class="card" style="width: 400px;">
        <h3 align="center">Detail Tagihan Siswa</h3>
        <img src="../notes.jpeg" alt="gambar" style="width: 250px; height: 250px; margin-left: 70px;">
        <div class="card-body">
          <h5 class="card-title">Kode Tagihan: {{ kode_tagihan }}</h5>
          <h5 class="card-title">Biaya: {{ biaya }}</h5>
          <h5 class="card-title">Bulan : {{ bulan }}</h5>
          <h5 class="card-title">Keterangan: {{ keterangan }}</h5>
          <h5 class="card-title">Nim Siswa : {{ nim }}</h5>
          <h5 class="card-title">Tanggal Minimal Bayar: {{ tgl_min_bayar }}</h5>
          <h5 class="card-title">Tanggal Maksimal Bayar: {{ tgl_maks_bayar }}</h5>
        </div>
        <button type="button" class="btn btn-primary" @click="onPembayaran">Lakukan Pembayaran</button>
      <a class="btn btn-outline-secondary btn-sm mb-3" href="/tagihan">Kembali
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
          kode_tagihan: "",
          biaya: "",
          bulan: "",
          keterangan:"",
          nim: "",
          tgl_min_bayar: "",
          tgl_maks_bayar: "",
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
          this.bulan = data[0]?.bulan
          this.keterangan = data[0]?.keterangan
          this.nim = data[0]?.nim
          this.tgl_min_bayar = data[0]?.tgl_min_bayar
          this.tgl_maks_bayar = data[0]?.tgl_maks_bayar
        },
        onPembayaran() {
        this.$router.push(`/form/${this.kode_tagihan}/pembayaran`)
      }
      }
    }
    </script>