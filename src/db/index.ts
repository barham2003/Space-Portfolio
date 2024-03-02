import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as schema from "./schema";

export const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function connectDb() {
  await client.connect();
}

connectDb();
client;
export const db = drizzle(client, { schema });
