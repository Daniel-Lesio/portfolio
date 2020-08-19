<template>
    <div class="socials">
        <a  
        href='https://www.facebook.com/daniel.lesiewicz.900/' 
        class="icon shadow rounded-full bg-white"
        v-on:mouseover="showIcon(0)"
        v-on:mouseleave="hideIcon()"    
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/></svg>
           <transition name="slide">
                <div class="icon-description text-gray-800 bg-white rounded p-2 shadow"
                    v-if="iconInView === 0 "
                >
                    facebook
                </div>
           </transition>
        </a>
        <a  
        href='https://www.facebook.com/daniel.lesiewicz.900/' 
        class="icon shadow rounded-full bg-white"
        v-on:mouseover="showIcon(1)"
        v-on:mouseleave="hideIcon()"    
        >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="4.983" cy="5.009" r="2.188"/><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"/></svg>
           <transition name="slide">
                <div class="icon-description text-gray-800 bg-white rounded p-2 shadow"
                    v-if="iconInView === 1 "
                >
                    linkedin
                </div>
           </transition>
        </a>
        <a  
        href='https://www.facebook.com/daniel.lesiewicz.900/' 
        class="icon shadow rounded-full bg-white"
        v-on:mouseover="showIcon(2)"
        v-on:mouseleave="hideIcon()"    
        >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 012.496-.336 9.554 9.554 0 012.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"/></svg>
           <transition name="slide">
                <div class="icon-description text-gray-800 bg-white rounded p-2 shadow"
                    v-if="iconInView === 2 "
                >
                    github  
                </div>
           </transition>
        </a>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                iconInView : Number || null
            }
        },
        methods :{
            showIcon(i){
                this.iconInView = i
            },
            hideIcon(){
                this.iconInView = null
            }
        }

    }
</script>

<style lang="scss" scoped>
.socials{
    z-index: 100;
    position: fixed;
    transform: translateY(-50%);
    top: 50%;
    right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.icon{
    margin-top: 10px;
    width: 50px;
    height:  50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.icon-description{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    position: absolute;
    right:  0;
    padding-right: 50px;
    transform: translateX(-25px);
    z-index: -1;
    border-radius: 0% 0% 0% 0%;
    font-weight: 900;
}
.slide-enter-active, .slide-leave-active {
  transition: all .5s ease-in-out ;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translate(-10px);
  
}

</style>