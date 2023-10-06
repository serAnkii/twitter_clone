import type { Config } from "drizzle-kit";

export default {
  schema: "./lib/schema.ts",
  out: "./drizzle",
  dbCredentials:{
    connectionString:process.env.CONN_STRING as string
  }
} satisfies Config;