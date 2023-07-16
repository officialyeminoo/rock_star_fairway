const {MongoClient, ObjectId} = require('mongodb');
const mongo = new MongoClient("mongodb://127.0.0.1");
const db = mongo.db("todo");

async function read() 
{
    const data = await db.collection("task").findOne();
    // const data = await db.collection("task").find();
    console.log(data);
}

read();


// another way 
function readPromise()
{
    db.collection("task").findOne()
    .then(data =>{
        console.log(data);
    });
}

readPromise();

async function insert(user)
{
    const result = await db.collection("task").insertOne(user);
    console.log(result);
}

const user_one = {subject : "english", done: true};
const user_two = {subject : "computer science", done: 20};
insert(user_one);
insert(user_two);

async function updateDone(subject, done)
{
    const result  = await db.collection("task").updateOne({subject},{$set: {done}});
    console.log(result);
}


updateDone("php", true);

async function remove(subject)
{
    const result = await db.collection("task").deleteOne({subject});
    console.log(result);
}

remove("php");