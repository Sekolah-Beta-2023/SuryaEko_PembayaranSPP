<template>
    <nav class="navbar is-light">
        <div class="container">
            <div class="navbar-brand">
                <nuxt-link class="navbar-item" to="/">Sistem Informasi Pembayaran SPP</nuxt-link>
                <button class="button navbar-bugger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            my profile
                        </a>
                        <div class="navbar-dropdown">
                            <nuxt-link class="navbar-item" to="/profile">My Profile</nuxt-link>
                            <hr class="navbar-divider"/>
                            <a class="navbar-item">Logout</a>
                        </div>
                    </div>
                    <template>
                        <nuxt-link class="navbar-item" to="/register">Register</nuxt-link>
                    </template>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
// import { mapGetters } from 'vuex'
export default {
    // computed: {
    //     ...mapGetters(['isAuthenticated', 'loggedInUser'])
    // },
    methods: {
        async logout() {

        }
    }
}
</script>