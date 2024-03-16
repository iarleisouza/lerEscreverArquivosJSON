const fs = require("fs")

const readFromFile = fileName => {
    if (!fs.existsSync(fileName)){
        return null
    }

    return fs.readFileSync(fileName, 'utf-8')
}

const readJSON = fileName => {
    const readFile = readFromFile(fileName)

    if (!readFile) {
        return readFile
    }
    return JSON.parse(readFile)
}

const write = ({ data, fileName}) => {
fs.writeFileSync(fileName, JSON.stringify(data))
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

// write({ data: value, fileName: "dados.json"})

console.log(readJSON('dados.json'))
