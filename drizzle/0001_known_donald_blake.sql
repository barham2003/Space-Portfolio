CREATE TABLE IF NOT EXISTS "forms" (
	"name" text NOT NULL,
	"email" text NOT NULL,
	"university" text NOT NULL,
	"age" integer NOT NULL,
	"course_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "session" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" date NOT NULL
);
--> statement-breakpoint
ALTER TABLE "courses" ADD COLUMN "status" text NOT NULL;