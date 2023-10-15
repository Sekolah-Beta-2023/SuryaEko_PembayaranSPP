<template>
    <main>
        <HeaderWeb/>
    <Nuxt />
</main>
</template>
<script>
// Memanggil component sesuai lokasi masing - masing file
import HeaderWeb from "~/components/HeaderWeb.vue";
export default {
    components : {
        HeaderWeb,
    }
// Dideklarasikan agar dapat diakses oleh template
}
</script>
<style>
</style>