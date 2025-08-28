<template>
  <header>
    <nav>
      <a href="/">Início</a> |
      <a href="/about">Sobre</a> |
      <a href="/services">Serviços</a>
    </nav>
  </header>
    <h1>Agência de Viagem - Tiguio</h1>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  background-color: #c6b5d8;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: rgb(158, 66, 170);
  font-weight: bold; 
}

h1 {
  text-align: center;
}
</style>
