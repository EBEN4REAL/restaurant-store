<template>
    <div class="mt-2">
      <div class="toggler-button refresh_toggler">
        <input type="checkbox" v-model="nightMode" /> 
        <div class="dark_check refresh_dark_check" :class="!nightMode ? 'light_check' : null" @click="darkThemeSwitch">
            <div class="dark_check_inner" :style="[nightMode ? {left: '21px'} : null]"></div>
        </div>
      </div>
    </div>
</template>
<script>
import ThemeChanger from "@/utils/theme.js";

export default {
    name: 'ThemeSwitch',
    data() {
        return {
            nightMode: localStorage.getItem('nightMode') && localStorage.getItem('nightMode') == 'true' 
                ? true 
                : localStorage.getItem('nightMode') && localStorage.getItem('nightMode') == 'false' 
                ? false 
                : false,
            themeChanger:null
        }
    },
    methods: {
        darkThemeSwitch() {
            this.themeChanger._darkThemeSwitch();
            this.nightMode = !this.nightMode
            localStorage.setItem('nightMode', this.nightMode)
        },
    },
    created() {
        this.themeChanger = new ThemeChanger();
    },

}
</script>