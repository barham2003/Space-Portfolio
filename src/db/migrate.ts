import "dotenv/config";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db, client } from "@/db";
// This will run migrations on the database, skipping the ones already applied

async function migration() {
  console.log("Migration started!");
  await migrate(db, { migrationsFolder: "./drizzle" });
  console.log("Migration ended!");
  client.end();
  process.exit(0);
}

migration();
