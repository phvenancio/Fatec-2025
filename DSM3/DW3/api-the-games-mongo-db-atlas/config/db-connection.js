import mongoose from "mongoose";

// Usuário e senha do banco de dados
const dbUser = "phvenancio";
const dbPassword = "B8upYbYVQu7eNB1B";
const connect = () => {
    mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@apithe-game.tgmwa.mongodb.net/?retryWrites=true&w=majority&appName=apithe-game`
    );
    const connection = mongoose.connection;
    connection.on("error", () => {
        console.log("Erro ao conectar com o mongoDB.");
    });
    connection.on("open", () => {
        console.log("Conectado ao mongoDB com sucesso!");
    });
};
connect();

export default mongoose;