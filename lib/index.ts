// postgres://postgres.yopwvvqnkxdwnxbfexaq:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres

import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import * as schema from "./schema"
const connectionString = process.env.CONN_STRING
const sql = postgres(connectionString!, { max: 1 })
export const db = drizzle(sql,{
    schema
});
 
await migrate(db, { migrationsFolder: "drizzle" });