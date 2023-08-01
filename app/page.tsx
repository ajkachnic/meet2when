"use client";

import Calendar from "@/components/calendar";
import { useState } from "react";

export default function Home() {
  const [days, setDays] = useState<Date[] | undefined>([]);
  return (
    <main className="">
      <div className="px-4 py-16 max-w-screen-lg mx-auto md:py-24  md:px-16">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl md:my-8 xl:text-5xl">
          Meet2When
        </h1>

        <div className="grid md:grid-cols-2">
          <div className="py-8">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-6">
              What dates might work?
            </h2>
            <Calendar
              mode="multiple"
              showOutsideDays
              selected={days}
              onSelect={setDays}
            />
          </div>
          <div className="py-8">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              What times might work?
            </h2>
            <div className="grid grid-cols-2 gap-y-4 items-center py-4">
              <label className="font-medium select-none">
                No earlier than:
              </label>
              <input
                className="bg-gray-100 px-4 py-2 rounded-md"
                type="time"
                defaultValue="08:00"
                step="240"
              />
              <label className="font-medium select-none">No later than:</label>
              <input
                className="bg-gray-100 px-4 py-2 rounded-md"
                type="time"
                defaultValue="18:00"
                step="240"
              />
            </div>
          </div>
        </div>
        <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg">
          Create Event
        </button>
      </div>
    </main>
  );
}
