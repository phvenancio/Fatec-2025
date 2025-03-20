// Importar o modulo MongoClient
const {MongoClient} = require('mongodb');

// Função principal
async function main() {
    // Definir a URI de conexão com o MongoDB
    const url = "mongodb://127.0.0.1:27017";
    // Criar instância do clinte MongoDB
    const client = new MongoClient(url);

    try{
        // Conecta com o servidor MongoDB
        await client.connect();
        // Seleciona o banco de dados "biblioteca"
        const database = client.db('biblioteca');
        // Seleciona a colecao "livros"
        const livros = database.collection('livros');

       /* // Inserindo dados no banco
        await livros.insertMany([
            {titulo:"1984", autor:"George Orwell", ano:1949, genero:"Distopia"},
            {titulo:"Dom Casmurro", autor:"Machado de Assis", ano:1899, genero:"Romance"},
            {titulo:"Senhor dos Aneis", autor:"J.R.R. Tolkien", ano:1954, genero:"Fantasia"}
        ]);
        // Consulta todos os documentos
        const todosLivros = await livros.find().toArray();
        console.log("Livros:", todosLivros);*/

        /* // Atualizar um documento
        await livros.updateOne(
            {titulo: "1984"}, // Filtro para encontrar registro
            {$set:{ano:1950}} // Valor atualizado para o campo específico
        );*/

        //Excluir um documento do bd
        await livros.deleteOne({titulo:"Dom Casmurro"});

    }finally{
        await client.close();
    }
}
// Chama a função principal e captura o erro, se houver
// main().catch(console.error);