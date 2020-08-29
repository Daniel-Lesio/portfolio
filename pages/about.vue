<template>
  <div>
    <PageHeader :url='url' :urlMini='urlMini'>
        <h1 class="text-white font-bold text-5xl md:text-6xl" >{{pageName}}</h1>
        
        <div class="arrow-down" v-on:click="goto('#contact')" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M16.939 7.939L12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"/></svg>
        </div>
    </PageHeader>
    <section id="contact">
    <div class="mx-auto container page py-24">
      <div class="box p-5 text-center bg-white shadow">
          <h1 class="text-4xl font-bold" >{{ content.header }}</h1>
          <hr class="bg-purple-800  mx-auto rounded mt-2 mb-4"/>
          <!-- <p class="text-lg">{{ content.content }}</p> -->
          <p class='text-lg my-2' v-for="(p,index) in content.paragraphs" :key="index">
            {{ p }}
          </p>
          <nuxt-link to="/contact" class="btn pointer hover:bg-purple-700 text-white mt-10 px-3 py-2 bg-purple-800">
            {{ buttonText }}
          </nuxt-link >
      </div>
    </div>
  </section>
  </div>
</template>

<script>
import jump from 'jump.js'

export default {
  data(){
    return{
      url : require(`../assets/headers/about.jpg`),
      urlMini :  require(`../assets/headers/about-mini.jpg`)
    }
  },
  computed : {
    buttonText(){
      return this.$store.state.language === "polish" ? "Kontakt" : "Contact"
    },
    content(){
        let pol = {
          header : 'O_mnie',
          paragraphs : [
            "Nazywam się Daniel Lesiewicz jestem full stack developerem. Zajmuję się projektowaniem stron internetowych, sklepów online  oraz aplikacji.",
            "W swojej pracy korzystam z najnowszych technologii.",
            "Tworzyłem zarówno backend jak i frontend aplikacji.",
            "Lubię się uczyć nowych rzeczy i rozwiązywać problemy.",
            "Nie lubię chamstwa,ludzi aroganckich i ciast owocowych.",
            "Pozdrawiam i zapraszam do kontaktu."
          ]          
        }
        let eng = {
          header : 'About_me',
          paragraphs : [
            "My name is Daniel Lesiewicz and I am a full stack developer. I design websites, online stores and applications.",
            "I use the latest technologies in my work.",
            "In my work, I created both the backend and frontend of the application.",
            "I like learning new things and solving problems.",
            "I don't like rudeness, arrogant people and  cakes with fruits.",
            "Best regards and feel free to contact me."          ]
        }
        return this.$store.state.language === "polish" ? pol : eng
    },
    menuOpen(){
      return this.$store.state.menuOpen
    },
    pageName(){
        return this.$store.state.language === "polish" ? 'O_mnie' : 'AboutMe' 
    },
    text(){
        let ob = {
            header : 'O Mnie',
            content : 'Jestem Full Stack Developerem'
        } 
        return ob
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
.box{
  z-index: 2;
}
.page{
  
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
  grid-template-columns: 1fr 1fr;
  gap: 20px;
      
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
#contact{
  background: url('~assets/headers/mirror.jpg')center;
  background-attachment: fixed;
  position: relative;
  &::after{
    z-index: 0;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    // background: red;
    background: radial-gradient(rgba(white,0.4),rgba(white,0.9));
  }
}
.btn{
  align-self: center;
  justify-content: center;
  display: inline-block;
  width: 80%;
  cursor: pointer;
  transition: all ease-in-out .3s;
  &:hover{
   
  }
}
</style>
