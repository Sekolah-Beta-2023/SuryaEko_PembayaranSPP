<template>
    <div v-if="show" class="notification">
      {{ message }}
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        show: false,
        message: ""
      };
    },
    methods: {
      showNotification(message) {
        this.message = message;
        this.show = true;
        setTimeout(() => {
          this.show = false;
        }, 3000); // Notifikasi akan menghilang setelah 3 detik
      }
    }
  };
  </script>
  
  <style scoped>
  .notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: green;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
  }
  </style>