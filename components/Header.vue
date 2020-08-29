<template>
    <header>
        <div class="container mx-auto">
            <div class="left flex items-center">
                <nuxt-link class="brand shadow-lg text-gray-400	" to="/">
                    <span>DAN<span class="text-purple-800">!</span>EL</span>
                </nuxt-link>
                <div class="ml-2 font-bold text-gray-800 lang shadow">
                    <transition name='slide-fade'>
                        <div 
                         
                        v-if="language === 'polish'"
                        v-on:click="changeLanguage('english')" 
                    >
                        PL
                    </div>
                    </transition>
                    <transition name='slide-fade'>
                        <div  
                        v-if="language === 'english'"
                        v-on:click="changeLanguage('polish')" 
                        >
                        EN
                    </div>
                    </transition>
                    
                </div>
            </div>
            <div :class="{ active : $store.state.menuOpen }" class="mr-5 sm:mr-3 nav-btn nav-btn-closed shadow-lg"
            v-on:click="openMenu()"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        computed : {
            menuOpen(){
                return this.$store.state.menuOpen ? "Open" : "close"
            },
            language(){
                return this.$store.state.language
            }
        },
        methods:{
            openMenu(){
                this.$store.commit('MENU_OPEN')  
            },
            changeLanguage(lang){
                this.$store.commit("CHANGE_LANGUAGE",lang)
            }
        }
    }
</script>

<style lang="scss" scoped>
header{
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 70px;
    .container{
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
.brand{
    line-height: 50px;
    padding-left: 10px;
    padding-right: 10px;
    background: #fff;
    border-radius: 9px 0px 9px 0px ;
    font-weight: bold;
    font-size: 30px;
    letter-spacing: 5px;
    position: relative;
    display: flex;
    align-items: center;
    transition: all ease-in-out .3s;
    &:hover{
        background: #ddd;
        color : #2c2c2c
    }
    svg{
        width: 50px;
        height: 50px;
        
    }
}
.nav-btn{
    z-index: 110;
    border-radius: 50%;
    background: white;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    cursor: pointer;
    transition: all ease-in-out .3s;
    outline:none ;
    
    &:hover{
        background: purple;
        span{
            background: white;
        }
    }
    span{
        position: absolute;
        background: black;
        height: 3px;
        width: 30px;
        transition: all ease-in-out 0.3s;        
    }
    span:nth-child(1){
        transform: translateY(7px);
    }
    span:nth-child(3){
        transform: translateY(-7px);
    }
}
.active{
    border: solid #2c2c2c 1px;
    span:nth-child(1){
        transform: rotate(45deg);

    }
    span:nth-child(2){
        width: 0px;
    }
    span:nth-child(3){
        transform: rotate(-45deg);

    }
}
.lang{
    z-index: 110;
    border-radius: 50%;
    background: white;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    div{
        cursor: pointer;
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(100px);
}
</style>