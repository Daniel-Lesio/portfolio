<template>
    <section :style="{'background-image' : `url(${urlMini})` }" >
        <slot></slot>
    </section>
</template>

<script>
    export default {
        props : {
            url : String || null,
            urlMini : String || null,
            backgroundColor : String || null
        },
        data(){
            return {
                imgUrl : String
            }
        },
        mounted(){
            let myimg = new Image
                myimg.src = this.url
                myimg.onload = ()=>{
                    this.urlMini = this.url
                }
            
        }
    }
</script>

<style lang="scss" scoped>
section {
    position: relative;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-attachment: fixed;
}
h1{
    color: white;
}
</style>