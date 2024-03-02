ALTER TABLE "courses" ALTER COLUMN "start_date" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "courses" ALTER COLUMN "start_date" SET NOT NULL;