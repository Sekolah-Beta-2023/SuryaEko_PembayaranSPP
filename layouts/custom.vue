<template>
    <main>
        <HeaderWeb/>
        <TheHeader/>
    <Nuxt />
</main>
</template>
<script>
// Memanggil component sesuai lokasi masing - masing file
import HeaderWeb from "~/components/HeaderWeb.vue";
import TheHeader from '~/components/TheHeader.vue';
export default {
    components : {
        HeaderWeb,
        TheHeader
    }
// Dideklarasikan agar dapat diakses oleh template
}
</script>
<style>
</style>