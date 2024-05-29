import pg from "pg";
const { Client } = pg;
import DB_URI from "./config.js";

const client = new Client(DB_URI);

client.connect();

export default client;
