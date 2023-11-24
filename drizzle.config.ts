import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default {
	schema: "./src/lib/server/schema.ts",
	out: "./drizzle",
	driver: "mysql2",
	dbCredentials: {
		uri: `mysql://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}?ssl={"rejectUnauthorized":true}`,
	},
} satisfies Config;
