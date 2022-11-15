const pessoa = {
    nome: 'ANDRÉ',
    sobreNome: 'JKESKI',
    livros: {
        titles: ['maquina e conceitos', 'brushing', 'machine learning o guia']
    }
}

const {nome, sobreNome} = pessoa
const {titles} = pessoa.livros

console.log(titles)