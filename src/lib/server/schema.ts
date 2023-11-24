import {
	boolean,
	timestamp,
	int,
	mysqlTable,
	varchar,
} from "drizzle-orm/mysql-core";

export const todos = mysqlTable("todos", {
	id: int("id").autoincrement().primaryKey(),
	content: varchar("title", { length: 600 }).notNull(),
	completed: boolean("completed").notNull().default(false),
	createdAt: timestamp("created_at").defaultNow(),
});
