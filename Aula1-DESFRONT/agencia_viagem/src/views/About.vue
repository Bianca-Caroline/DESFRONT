<template>
  <Header />

  <section>
    <h2>Sobre Nós</h2>
    <p>
      Somos uma agência dedicada a criar experiências inesquecíveis em suas
      viagens.
    </p>
  </section>

  <body>
    <!-- Exibe o nome global vindo do store -->
    <h1>Bem-vinda, {{ store.nome }}</h1>

    <!-- Mostra a data global -->
    <p>Data atual: {{ store.dataAtual }}</p>

    <!-- Mostra o preço com desconto usando variáveis globais -->
    <p>Preço com desconto: {{ store.preco - store.desconto }}</p>
  </body>

  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { useMainStore } from '../stores/mainStore' // Importa o store global

export default {
  components: { Header, Footer },

  name: 'Sobre',               // Nome do componente/página
  setup() {
  const store = useMainStore() // Pega a instância do store
  return { store }             // Deixa disponível no template
  }
};
</script>

<style scoped>
section, body {
  align-items: center;
  text-align: center;
}
</style>
