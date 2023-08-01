CREATE TABLE IF NOT EXISTS "availability" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text,
	"email" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "events" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"time_start" time,
	"time_end" time,
	"dates" date[]
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ranges" (
	"id" serial PRIMARY KEY NOT NULL,
	"start" timestamp with time zone,
	"end" timestamp with time zone,
	"availability_id" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ranges" ADD CONSTRAINT "ranges_availability_id_availability_id_fk" FOREIGN KEY ("availability_id") REFERENCES "availability"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
