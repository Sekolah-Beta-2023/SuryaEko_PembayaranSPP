<template>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container">
        <a class="navbar-brand" href="#">Pembayaran SPP</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse" >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <nuxt-link class="nav-link" aria-current="page" to="/">Home</nuxt-link>
        </li>
        <li class="nav-item">
        <nuxt-link class="nav-link" aria-current="page" to="/student">Siswa</nuxt-link>
        </li>
        <li class="nav-item">
        <nuxt-link class="nav-link" aria-current="page" to="/app">Kelas</nuxt-link>
        </li>
        <li class="nav-item">
        <nuxt-link class="nav-link" aria-current="page" to="/tagihan">Tagihan</nuxt-link>
        </li>
        <li class="nav-item">
        <nuxt-link class="nav-link" aria-current="page" to="/pembayaran">Pembayaran</nuxt-link>
        </li>
        </ul>
        </div>
        </div>
        </nav>
</template>