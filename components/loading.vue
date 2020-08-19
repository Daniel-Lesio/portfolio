<template>
<transition name='load'>
        <div class="preloader" v-if="loading">
        <div class="elem">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="text-gray-800 font-bold ">Loading..<span class="dot">.</span></div>
    </div>
</transition>
</template>

<script>
    export default {
    
    data : ()=>({
        loading : false
    }),
    methods :{
         start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
    
    }
</script>

<style lang="scss" scoped>
.preloader{
    z-index: 99;
    position: fixed;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ddd;
    h1{font-size: 40px;}
}
.load-enter-active {
  animation: bounce-in .5s;
}
.load-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    opacity: 0;
    transform:  scale(0.8) translateX(100vw);
  }
  50% {
      opacity: .5;
    transform:  scale(0.8) translateX(-10vw);
  }
  100% {
      opacity: 1;
    transform: scale(1) translateX(0vw);
  }
}
.elem{
    width: 100px;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    span{
        background: white;
        width: 40px;
        height: 40px;
        border-radius: 5px;
        animation-name: pre;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        &:nth-child(1){
            animation-delay: 0.0s;
        }
        &:nth-child(2){
            animation-delay: 0.50s;
        }
        &:nth-child(3){
            animation-delay: 1s;
        }
        &:nth-child(4){
            animation-delay: 1.5s;
        }
    }
}
.dot{
    animation-name: dot;
    animation-duration: .5s;
    animation-iteration-count: infinite;
}

@keyframes dot {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
@keyframes pre {
    0%{
        opacity: 0;    
    }
    
    100%{
        opacity: 1;
    }
}
</style>