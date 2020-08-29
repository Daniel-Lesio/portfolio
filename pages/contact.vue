<template>
  <div>
    <PageHeader :url='url' :urlMini='urlMini'>
        <h1 class="text-5xl md:text-6xl text-white font-bold " >{{pageName}}</h1>
        
        <div class="arrow-down" v-on:click="goto('#contact')" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M16.939 7.939L12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"/></svg>
        </div>
    </PageHeader>
    <section id="contact" class="py-5">
      <h1 class='text-purple-800 text-2xl text-center font-bold my-3'>Kontakt :</h1>
        <div class="container mx-auto text-center  p-5 ">
          <div class='grid-2'>
            <div class="box box-1 bg-white shadow-lg">
              <h1 class="font-bold text-4xl text-purple-800 shadow bg-white p-5 mb-5 ">{{content.header}}</h1>
              <a href="tel:+48667221779" class="contact-box py-5 shadow bg-white my-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M72.9 53.5c-1.7-1.7-4.5-1.7-6.2 0l-7 7c-3.2-1-9.3-3.2-13.1-7s-6-9.9-7-13.1l7-7c1.7-1.7 1.7-4.5 0-6.2L29 9.5c-1.7-1.7-4.5-1.7-6.2 0l-12 12c-1.7 1.7-2.6 4-2.6 6.3.1 6.3 1.8 28 18.9 45.1S66 91.6 72.3 91.8h.1c2.3 0 4.5-.9 6.2-2.6l11.9-11.9c1.7-1.7 1.7-4.5 0-6.2L72.9 53.5zM72.3 83c-5.5-.1-24.2-1.6-39-16.3C18.6 51.9 17.1 33 17 27.7l8.8-8.8 11.4 11.4-5.7 5.7c-1.1 1-1.5 2.6-1.2 4 .1.5 2.7 12.5 10 19.8s19.3 9.9 19.8 10c1.5.3 3-.1 4-1.2l5.7-5.7 11.4 11.4-8.9 8.7z" fill="#121212"/></svg>
                <div class="font-bold text-2xl contact-info">+48 667 221 779</div>
              </a>
              <a href="mailto:eldan8600@gmail.com" class="contact-box py-5 shadow bg-white my-3">
                  <svg version="1.1" id="Warstwa_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 100 100" xml:space="preserve"><style>.st0{fill:#121212}</style><path class="st0" d="M87.8 12.2H21.6c-5.2 0-9.4 4.2-9.4 9.4v23.6h9.4V31.1l30.2 22.7c.8.6 1.8.9 2.8.9 1 0 2-.3 2.8-.9l30.2-22.7v42.5H50V83h37.8c5.2 0 9.4-4.2 9.4-9.4v-52c.1-5.2-4.2-9.4-9.4-9.4zM54.7 44.1L24.8 21.6h59.9l-30 22.5z"/><path class="st0" d="M2.8 50h33.1v9.5H2.8V50zm9.4 14.2h28.3v9.4H12.2v-9.4zm14.2 14.1h18.9v9.5H26.4v-9.5z"/></svg>
                <div class="font-bold text-2xl contact-info">eldan8600@gmail.com</div>
              </a>
            </div>
            <div class="box box-2 bg-white shadow-lg p-5">
                <form v-on:submit="formHandler" class="px-2">
                  <label for="email" class="text-gray-700 font-bold py-3 mb-2">Email</label>
                  <input 
                  class="shadow appearance-none border border-purple-800 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                  id="email" 
                  type="email" 
                  placeholder="email"
                  v-model="email"
                  >
                  <label for="theme" class="text-gray-700 font-bold py-3 mb-2">{{content.theme}}</label>
                  <input 
                  class="shadow appearance-none border border-purple-800 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                  id="theme" type="text" :placeholder="content.theme"
                  v-model="theme"
                  >
                  <label for="message" class="text-gray-700 font-bold py-3 mb-2">{{content.message}}</label>
                  <textarea 
                  class="no-resize appearance-none  w-full bg-gray-200 text-gray-700 border border-purple-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" 
                  type='text' id="message" :placeholder="content.message"
                  v-model="message"
                  >
                  </textarea>
                  <button class="bg-purple-800  hover:bg-purple-700 text-white font-bold py-2 px-4 my-2 w-full rounded focus:outline-none focus:shadow-outline" type="submit">
                    {{ content.send }}
                  </button>
                </form>
            </div>
          </div>
        </div>
  </section>
<transition name='message'>
    <div 
    :class="error ? 'text-red-600 border-red-600' : 'text-purple-800 border-purple-800'"
  class="formMessage border  w-full text-center  bg-white font-bold text-2xl p-3 shadow-2xl"
  v-if="showMessage"
  >
    {{ formMessage }}
  </div>
</transition>
  </div>
</template>

<script>
import jump from 'jump.js'

export default {
  data(){
    return{
      url : require(`../assets/headers/contact.jpg`),
      urlMini :  require(`../assets/headers/contact-mini.jpg`),
      email : '',
      theme : "",
      message : "", 
      error : false,
      showMessage : false
    }
  },
  computed : {
    formMessage(){
      let pol = {
          success : "Wiadomość Wysłana",
          error : "Błąd"

      }
      let eng = {
        success : "message sent",
        error : 'error'
      }
      if(this.error === true){
        return this.$store.state.language === 'polish' ? pol.error : eng.error 
      }
      return this.$store.state.language === 'polish' ? pol.success : eng.success
    },
    content(){
      let pol = { 
        header : "skontaktuj się ze mną : ",
        theme : "temat", 
        message  : 'wiadomość',
        send : "Wyślij"
        }
      let eng = { 
        header : "contact me : ",
        theme : "theme",
        message : "message",
        send : "Send"
      }
      return this.$store.state.language === 'polish' ? pol : eng 
    },
    menuOpen(){
      return this.$store.state.menuOpen
    },
    pageName(){
        return this.$store.state.language === "polish" ? 'Kontakt' : 'Contact' 
    }
  },
  components : {},
  methods : {
    clean(){
          this.email = ''
          this.message = ''
          this.theme = ''
    },
      goto(target){
          jump(target)
      },
      formHandler(e){
        e.preventDefault()
        let data = JSON.stringify({
           email : this.email,
          theme : this.theme,
          msg : this.message
        })
        
        this.$axios.post("http://46.41.150.207/api/messages/",data , {
          headers : {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
        }).then(res=>{
          console.log(res)
          this.clean()
          this.showMessage = true
          this.error = false
          setTimeout(() => {
            this.showMessage = false
          }, 2000);
        })
        .catch(err=>{
          console.log("error : ",err)
          this.clean()
          this.showMessage = true
          this.error = true
          setTimeout(() => {
            this.showMessage = false
          }, 2000);
        })
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
.contact-box{  
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color : #111111;
  transition: transform ease-in-out .3s;
  &:hover{
    transform: scale(0.9);
  }
  svg{
    height: 70px;
  }
}
.grid-2{
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px ){
  grid-template-columns: 1fr 1fr;
  }
  gap: 20px;
}
.box-{
  grid-row: 1
}
.formMessage{
  position: fixed;
  bottom: 0px;
  // transform: translateX(-50%);
  // left: 50%;
  z-index: 1000;  
}
.message-enter-active, .message-leave-active {
  transition: all .5s;
}
.message-enter, .message-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform :  translateY(100px)
}
</style>
