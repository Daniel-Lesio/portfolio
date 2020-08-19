<template>
  <div>
    <PageHeader :url='url' :urlMini='urlMini'>
        <h1 class="text-5xl md:text-6xl text-white font-bold " >{{pageName}}</h1>
        
        <div class="arrow-down" v-on:click="goto('#contact')" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M16.939 7.939L12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"/></svg>
        </div>
    </PageHeader>
    <section id="contact">
    <section class="mx-auto container page py-24">
      <div class="box">
        box1
      </div>
      <div class="box">
        <form class="mx-auto w-full max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                First Name
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
            </div>
          <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Last Name
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
      </div>
    </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        E-mail
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email">
      <p class="text-gray-600 text-xs italic">Some tips - as long as needed</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Message
      </label>
      <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
      <p class="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p>
    </div>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3">
      <button class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Send
      </button>
    </div>
    <div class="md:w-2/3"></div>
  </div>
</form>
      </div>
    </section>
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
        return this.$store.state.language === "polish" ? 'Kontakt' : 'Contact' 
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
  display: block;
  
  @media (min-width: 768px ) {
  display:  flex;
  }
}
.box{
  @media (min-width: 768px ) {
  flex :1
  }
  &:nth-child(even){
  background: lightcoral;
  }
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
