<template>
    <div class="mt-2">
      <div class="toggler-button refresh_toggler">
        <input type="checkbox" v-model="darkMode" />
        <div class="dark_check refresh_dark_check" :class="!darkMode ? 'light_check' : null" @click="toggleCheck">
            <div class="dark_check_inner" :style="[darkMode ? {left: '21px'} : null]"></div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name: 'ThemeSwitch',
    data() {
        return {
            darkMode: localStorage.getItem('storeTheme') && localStorage.getItem('storeTheme') == "true"
                ? true 
                :  localStorage.getItem('storeTheme') && localStorage.getItem('storeTheme') == "false"
                ? false : false ,
        }
    },
    mounted() {
       this.switchTheme()
    },
    
    methods: {
        switchTheme() {
            const appBody = document.getElementById('app-body')
            const headerLinks = Array.from(document.querySelectorAll('.header__navigation-item-link'))

            if(this.darkMode) {
                appBody.classList.remove('light-mode') 
                appBody.classList.add('dark-mode') 
                headerLinks.forEach(link => {
                    link.classList.add('dark-mode-text')
                    link.classList.remove('light-mode-text')
                });
                
            }else {
                appBody.classList.add('light-mode') 
                appBody.classList.remove('dark-mode') 
                headerLinks.forEach(link => {
                    link.classList.remove('dark-mode-text')
                    link.classList.add('light-mode-text')
                });
            }
        },
        toggleCheck() {
            this.darkMode = !this.darkMode
            localStorage.setItem('storeTheme' , this.darkMode)
            this.switchTheme()
        },
    }

}
</script>