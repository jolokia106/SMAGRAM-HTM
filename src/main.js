import { createApp } from 'vue'
// import App from './App.vue'
import App from './NavBar.vue'

// import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)
// createApp(App).mount('#app')
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#navbar')

