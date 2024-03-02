ALTER TABLE "forms" ALTER COLUMN "phone" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "forms" ALTER COLUMN "phone" SET NOT NULL;