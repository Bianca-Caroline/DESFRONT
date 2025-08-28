<template>
  <Header />

    <section id="servicos" class="servicos secao-flex">

      <div class="txt2">

        <h2>Nossos Serviços</h2>

        <div class="topico">
          <h3>Pacotes de viagens personalizados</h3>
        </div><!--topico-->

        <div class="topico">
          <h3>Suporte 24h durante a viagem</h3>
        </div><!--topico-->

        <div class="topico">
          <h3>Reservas de hotéis e passeios</h3>
        </div><!--topico-->

      </div><!--txt2-->

    </section><!--servicos-->

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
.secao-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 40px;
  gap: 60px;
}

/* TÍTULO */
.txt2 h2 {
  text-align: center;
  color: #222;
  font-size: 2em;
}

/* CONTAINER DOS TÓPICOS */
.topico {
  gap: 15px;
  display: flex;
  justify-content: center;
}

/* SERVIÇOS */
.servicos {
  background-color: #f4f4f4;
  margin-bottom: 60px;
}

/* TÍTULOS */
.servicos h3{
  color: #b99cd8;
}
</style>
