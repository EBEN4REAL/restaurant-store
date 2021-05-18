export default class ThemeChanger {
    /**
     * @constructor
     */
    constructor() {}
    _addDarkTheme() {
        const darkThemeLinkEl = document.createElement('link')
        darkThemeLinkEl.setAttribute('rel', 'stylesheet')
        darkThemeLinkEl.setAttribute('href', './css/dark.css')
        darkThemeLinkEl.setAttribute('id', 'dark-theme-style')
        const docHead = document.querySelector('head')
        docHead.append(darkThemeLinkEl)
    }
    _removeDarkTheme() {
        const darkThemeLinkEl = document.querySelector('#dark-theme-style')
        const parentNode = darkThemeLinkEl.parentNode
        parentNode.removeChild(darkThemeLinkEl)
    }
    _darkThemeSwitch() {
        const nightMode = localStorage.getItem('nightMode') && localStorage.getItem('nightMode') == 'true' 
        ? true 
        : localStorage.getItem('nightMode') && localStorage.getItem('nightMode') == 'false' 
        ? false 
        : false

        const darkThemeLinkEl = document.querySelector('#dark-theme-style')
        if (!darkThemeLinkEl || nightMode) {
            this._addDarkTheme()
        } else {
            this._removeDarkTheme()
        }
    }
}