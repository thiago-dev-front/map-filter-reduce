const cdz = [
  {
    nome: 'Mu de Áries',
    signo: 'Áries',
    categoria: 'Cavaleiro de Ouro',
    idade: 20,
  },
  {
    nome: 'Saga de Gêmeos',
    signo: 'Gêmeos',
    categoria: 'Cavaleiro de Ouro',
    idade: 28,
  },
  {
    nome: 'Shaka de Virgem',
    signo: 'Virgem',
    categoria: 'Cavaleiro de Ouro',
    idade: 20,
  },
  {
    nome: 'Dohko de Libra',
    signo: 'Libra',
    categoria: 'Cavaleiro de Ouro',
    idade: 261,

  },
  {
    nome: 'Camus de Aquário',
    signo: 'Aquário',
    categoria: 'Cavaleiro de Ouro',
    idade: 20,
  }
]


// Map

cdz.map( (item, index) => {
  console.log(`${index}: ${item.nome}`);
})


// Filter 

let filter = cdz.filter( value => value.idade == 20 )
console.log('filter', filter);

// Reduce

let totalIdade = cdz.reduce( (acumulador, elementoAtual) => {
  return acumulador + elementoAtual.idade
}, 0)

console.log('totalIdade', totalIdade);