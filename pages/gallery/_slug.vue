<template>
  <article class="container mx-auto">
    <div class="product-img">
        <img :src="article.img" alt="">
    </div>
    <h1 class=" font-bold text-4xl text-center text-gray-800">{{ article.title}}</h1>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
    export default {
        async asyncData({ $content, params }) {
        const article = await $content('products', params.slug).fetch()
        return { article } 
        }
    }
</script>

<style lang="scss" scoped>
.product-img{
    min-height: 400px;
    background: white;
    perspective: 1000px;
    img{

    transform: translate3d(42px, -62px, -135px);
    }
}
</style>