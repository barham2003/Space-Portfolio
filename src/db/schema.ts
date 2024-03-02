import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import {
  date,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  status: text("status").notNull(),
  instructor: text("instructor").notNull(),
});

export const courseRelations = relations(courses, ({ many }) => ({
  forms: many(forms),
}));

export const forms = pgTable("forms", {
  name: text("name").notNull(),
  email: text("email").notNull(),
  university: text("university").notNull(),
  age: integer("age").notNull(),
  courseId: integer("course_id").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  phone: text("phone").notNull(),
});

export const formRelations = relations(forms, ({ one }) => ({
  course: one(courses, {
    fields: [forms.courseId],
    references: [courses.id],
  }),
}));

export const apps = pgTable("apps", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  url: text("url").notNull(),
});

export const session = pgTable("session", {
  id: serial("id").primaryKey(),
  createdAt: date("created_at").notNull().defaultNow(),
});

export type Course = InferSelectModel<typeof courses>;
export type InsertCourse = InferInsertModel<typeof courses>;
export type Form = InferSelectModel<typeof forms>;
export type InsertForm = InferInsertModel<typeof forms>;
export type InsertApp = InferInsertModel<typeof apps>;
export type App = InferSelectModel<typeof apps>;
export type Session = InferSelectModel<typeof session>;
export type InsertSession = InferInsertModel<typeof session>;
