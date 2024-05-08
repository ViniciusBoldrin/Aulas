// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from 'drizzle-orm'
import {
  boolean,
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core'

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `integration-day_${name}`)

export const participants = createTable(
  'participant',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).unique(),
    homeOffice: boolean('home_office').default(false),
    company: varchar('company', { length: 256 }),
    department: varchar('department', { length: 256 }),
    shirtSize: varchar('shirt_size', { length: 5 }),
    createdAt: timestamp('created_at')
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (user) => ({
    nameIndex: index('name_idx').on(user.name),
  }),
)
