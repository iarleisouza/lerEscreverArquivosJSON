// importar o módulo fs - modul oque o nodejs permite que utilize arquivo no sistema operacional
const fs = require("fs")

const readFromFile = fileName => {
    if (!fs.existsSync(fileName)){
        return null
    }
// métododo readFileSync
    return fs.readFileSync(fileName, 'utf-8')
}
// ler o arquivo JSON  - funções de leitura 
const readJSON = fileName => {
    //função ler do arquivo
    const readFile = readFromFile(fileName)

    if (!readFile) {
        return readFile
    }
    // JSON.parse converter de JSON para javascript
    return JSON.parse(readFile)
}

// funcão responsável para escrita de arquivos
const write = ({ data, fileName}) => {
fs.writeFileSync(fileName, JSON.stringify(data)) //  JSON.stringify converte o dado javascript para JSON
}

const value = [
    {
        nome: "Iarlei",
        numero: 12
    },
    {
        nome: "Ryan",
        numero: 100
    }
]
// chamar a função write e passar o objeto
//write({ data: value, fileName: "dados.json"})

console.log(readJSON('dados.json'))
