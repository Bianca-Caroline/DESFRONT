// Importa o Vue (a ferramenta que usamos para montar o site)
import { createApp } from 'vue'

// Importa a função createPinia para usar variáveis globais
import { createPinia } from 'pinia'

// Importa o arquivo principal do site (onde está a estrutura do site)
import App from './App.vue'

// Importa o arquivo com as rotas (para trocar de página sem recarregar o site)
import router from './router'

// Importa o arquivo de css (para inserir a fonte desejada)
import './font.css'

// Cria a aplicação Vue
const app = createApp(App)

// Habilita o Pinia para usar stores globais
app.use(createPinia())

// Adiciona as rotas no site (permite navegar entre páginas)
app.use(router)

// Monta a aplicação no elemento HTML com id="app"
app.mount('#app')



