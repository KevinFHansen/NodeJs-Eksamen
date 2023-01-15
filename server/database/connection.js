import {MongoClient} from "mongodb";

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
console.log("#1")
await client.connect();
console.log("#2")

const funchDB = client.db("funch");


export default{
    music: funchDB.collection("music"),
    products: funchDB.collection("products"),
    comments: funchDB.collection("comments"),
    tickets: funchDB.collection("tickets"),
    forum: funchDB.collection("forum")
}