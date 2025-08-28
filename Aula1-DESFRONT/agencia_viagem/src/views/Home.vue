<template>
  <Header />

  <section class="inicio">
    <h2>Seu destino, nosso planejamento: aproveite cada detalhe da sua viagem!</h2>
  </section>

  <main class="conteudo">
    <div class="card1">
      <h1>Parque dos Lençóis Maranhenses</h1>
      <img src="https://blog.viajeguanabara.com.br/wp-content/uploads/2024/07/lencois-maranhenses.webp" >
    </div>
    <div class="card2">
      <h1>Lago Azul, Bonito (MS)</h1>
      <img src="https://imgmd.net/images/v1/guia/2660977/bonito.jpg" >
    </div>
    <div class="card3">
      <h1>Cristo Redentor, Rio de Janeiro</h1>
      <img src="https://prefeitura.rio/wp-content/uploads/2021/03/CristoRedentor-4.jpeg" >
    </div>
  </main>

  <Footer />
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: { Header, Footer }
}
</script>

<style scoped>
.inicio {
  background-color: #c6b5d8;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
}
.card1, .card2, .card3 {
  padding: 1rem;
  img{
    max-width: 600px;
  }
}
.card2{
  background-color: #f4f4f4;
  width: 100%;
}
.conteudo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 40px;
}
img {
  width: 80%;
  height: 80%;
  border-radius: 6px;
}
h2 {
  text-align: center;
  color: rgb(166, 107, 173);
}
</style>


