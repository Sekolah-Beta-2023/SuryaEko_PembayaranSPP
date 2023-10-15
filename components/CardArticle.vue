<template>
    <div class="p-3">
      <div class="card" style="background-color: skyblue; border: none;">
        <img src="https" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <p class="card-text text-truncate">{{ content }}</p>
          <nuxt-link :to="'student/detail/' + articleId" class="btn btn-primary">Go somewhere</nuxt-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        default: ""
      },
      content: {
        type: String,
        default: ""
      },
      articleId: {
        type: String,
        default: ""
      },
    }
  }
  </script>