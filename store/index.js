export const state = () =>({
    counter : 0,
    lightmode : false,
    menuOpen : false,
    language : 'english'
})

export const mutations = {
    increment(state){
        state.counter++
    },
    changeMode({lightmode}, payload){
      lightmode = payload  
    },
    MENU_OPEN(state){
        state.menuOpen = !state.menuOpen 
    },
    CLOSE_MENU(state){
        console.log("CLOSE_MENU")
        state.menuOpen = false
    },
    CHANGE_LANGUAGE(state,lang){
        this.state.language = lang
    }
}