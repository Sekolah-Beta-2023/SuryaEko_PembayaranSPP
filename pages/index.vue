<template>
  <div class="container py-4">
    <h1>Selamat Datang Di Sistem Informasi Pembayaran SPP</h1>
    <div class="row mb-2">
                <div class="col-4">
            <div class="card" style="width: 18rem;">
              <img src="./gambar.jpg" alt="">
            <div  class="card-body">
                <h5 class="card-title">Siswa</h5>
                <p class="card-text">Daftar Siswa</p>
                <nuxt-link to="/student" class="btn btn-primary">Data Siswa</nuxt-link>
            </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card" style="width: 18rem;">
              <img src="./kelas.jpeg" alt="" style="height: 285px;">
            <div  class="card-body">
                <h5 class="card-title">Kelas</h5>
                <p class="card-text">Daftar Kelas</p>
                <nuxt-link to="/app" class="btn btn-primary">Data Kelas</nuxt-link>
            </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card" style="width: 18rem;">
              <img src="./notes.jpeg" alt="">
            <div  class="card-body">
                <h5 class="card-title">Tagihan</h5>
                <p class="card-text">Daftar Tagihan Pembayaran SPP</p>
                <nuxt-link to="/tagihan" class="btn btn-primary">Data Tagihan</nuxt-link>
            </div>
            </div>
        </div>
        <div class="col-4 py-4">
            <div class="card" style="width: 18rem;">
              <img src="./notes.jpeg" alt="">
            <div  class="card-body">
                <h5 class="card-title">Pembayaran</h5>
                <p class="card-text">Daftar Pembayaran SPP</p>
                <nuxt-link to="/pembayaran" class="btn btn-primary">Data Pembayaran</nuxt-link>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  layout(context){
    return 'custom1'
  }
}
</script>