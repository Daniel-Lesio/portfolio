<template>
  <div>
    <PageHeader :url='url' :urlMini='urlMini'>
        <h1 class="text-white font-bold " >{{pageName}}</h1>
        
        <div class="arrow-down" v-on:click="goto('#contact')" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M16.939 7.939L12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"/></svg>
        </div>
    </PageHeader>
    <section id="contact">
    <div class="mx-auto container page">
      x : {{menuOpen ?'otwarte':'zamknięte' }}
    </div>
  </section>
  </div>
</template>

<script>
import jump from 'jump.js'

export default {
  data(){
    return{
      url : require(`../assets/headers/contact.jpg`),
      urlMini :  require(`../assets/headers/contact-mini.jpg`)
    }
  },
  computed : {
    menuOpen(){
      return this.$store.state.menuOpen
    },
    pageName(){
        return this.$store.state.language === "polish" ? 'Galeria' : 'Gallery' 
    }
  },
  components : {},
  methods : {
      goto(target){
          jump(target)
      }
  }
}
</script>

<style lang='scss' scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.page{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.arrow-down{
    cursor: pointer;
    position: absolute;
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    svg{
        fill: white;
        transform : scale(2.5);
        animation-name: arrow;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;

    }
}
@keyframes arrow {
    0%{
        transform: translateY(0) scale(2.5);
    }
    70%{
        transform: translateY(10px) scale(2.5);

    }
    100%{
        transform: translateY(0) scale(2.5);
    }
    
}
</style>
