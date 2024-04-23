const mongoose = require('mongoose');

const dburl = "mongodb+srv://Sandith:ArchTec@arcytecclus.dgtjojh.mongodb.net/ArClient-db?retryWrites=true&w=majority&appName=ArcyTecClus";

mongoose.set("strictQuery", true, "userNewUrlParser", true);


const connection = async () => {

    try{
        await mongoose.connect(dburl);
        console.log("Connected to MongoDB");
    }catch (e){
        console.error(e.message);
        process.exit();
    }
};

module.exports = connection;