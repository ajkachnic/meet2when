import { relations } from "drizzle-orm";
import {
  pgTable,
  serial,
  text,
  time,
  date,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  name: text("name"),
  timeStart: time("time_start"),
  timeEnd: time("time_end"),

  dates: date("dates").array(),
});

export const availability = pgTable("availability", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  email: text("email"),
});

export const availabilityRelations = relations(availability, ({ many }) => ({
  ranges: many(ranges),
}));

export const ranges = pgTable("ranges", {
  id: serial("id").primaryKey(),
  start: timestamp("start", { withTimezone: true }),
  end: timestamp("end", { withTimezone: true }),

  availabilityId: integer("availability_id").references(() => availability.id),
});

export const rangesRelations = relations(ranges, ({ one }) => ({
  availability: one(availability, {
    fields: [ranges.availabilityId],
    references: [availability.id],
  }),
}));
