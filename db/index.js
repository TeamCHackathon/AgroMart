import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://fortunechinenyem:agromart@cluster0.dkbmnkt.mongodb.net/";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export async function connectToDatabase() {
  const client = new MongoClient(url, options);
  await client.connect();
  return client;
}
