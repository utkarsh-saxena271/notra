import { pgTable, serial, text, timestamp, integer } from 'drizzle-orm/pg-core';
import { users } from './user.schema.js';

export const notes = pgTable('notes', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  authorId: integer('author_id').references(() => users.id),
  createdAt: timestamp('created_at').defaultNow(),
});