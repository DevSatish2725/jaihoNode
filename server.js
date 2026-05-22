const { MongoClient } = require("mongodb");

const URI = process.env.MONGO_URI;

const client = new MongoClient(URI);
const dbName = "students";

const main = async () => {
  try {
    await client.connect();
    console.log("Connect to the server.");
    const db = client.db(dbName);
    const collection = db.collection("personal_info");
    // const filter = { _id: "6a0eb77d0505fc46a8d60481" };
    // const updateDocument = {
    //   name: "Suraj",
    // };
    // await collection.updateOne(filter, updateDocument);
    // await collection.insertMany([data]);
    const result = await collection.find({}).toArray();
    console.log("result", result);
  } catch (err) {
  } finally {
    client.close();
  }
};

main();
