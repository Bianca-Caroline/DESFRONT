// Importa a função defineStore do Pinia
import { defineStore } from 'pinia'

// Cria o store principal chamado 'main'
export const useMainStore = defineStore('main', {
  // Aqui ficam as variáveis globais (state)
  state: () => ({
  nome: 'Bianca',         // Nome da pessoa, variável global
  preco: 100,            // Preço original, variável global
  desconto: 10,          // Valor do desconto, variável global
  dataAtual: new Date().toLocaleDateString() // Data atual formatada, variável global
  })
})