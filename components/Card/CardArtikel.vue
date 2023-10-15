<template>
    <div class='col-md-4'>
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-smh-md-250 position-relative">
                <div class="col-12 d-none d-lg-block">
                    <img :src= "article.img"  alt="#" width="370" height="200">
                </div>
                <div class="col-12 p-4 d-flex flex-column position-static">
                    <h4 class="mb-2">{{ article.title }}</h4>
                    <p class="card-text mb-auto">{{ article.content }}</p>
                    <nuxt-link class="stretched-link" :to="'artikel/detail/' + article.id">Continue Reading</nuxt-link>
                </div>
            </div>
        </div>
</template>
<script>
export default{
    props:{
        article:{
            type: Object,
            default(){
                return{}
            }
        }
    }
}
</script>