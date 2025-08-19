"use client";

import { useState } from "react";
import EventForm from "../../components/EventForm";
import { useLocalStorage } from "../../hooks/useLocalStorage";

type Event = { name: string; date: string };

export default function EventsPage() {
  const [events, setEvents, loaded] = useLocalStorage<Event[]>("events", []);
  const [query, setQuery] = useState<string>("");

  const addEvent = (event: Event) => {
    setEvents((prev) => {
      const updated = [...prev, event];
      updated.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      return updated;
    });
  };

  const deleteEvent = (index: number) => {
    setEvents((prev) => prev.filter((_, i) => i !== index));
  };

  const filteredEvents = events.filter((e) =>
    e.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold">
            Event Manager <span className="text-blue-500">2025</span>
          </h1>
          <p className="text-slate-400">Plan smarter. Manage better. 🎯</p>
        </header>

        <div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search events..."
            className="w-full rounded-lg px-4 py-2 border border-slate-700 bg-slate-900 text-slate-100 
                       focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-800">
          <EventForm onAdd={addEvent} />
        </div>

        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
          {!loaded ? (
            <p className="text-center text-slate-500">Loading…</p>
          ) : filteredEvents.length === 0 ? (
            <p className="text-center text-slate-500">
              No matching events found 😢
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {filteredEvents.map((event, index) => (
                <div
                  key={`${event.name}-${event.date}-${index}`}
                  className="bg-slate-900 p-5 rounded-2xl shadow-lg border border-slate-800 
                             hover:border-blue-600 transition flex justify-between items-center"
                >
                  <div>
                    <h2 className="font-semibold text-lg mb-2 break-words max-w-[200px]">
                      {event.name}
                    </h2>
                    <p className="text-sm text-slate-400">
                      {new Date(event.date).toLocaleDateString()}
                    </p>
                  </div>

                  <button
                    onClick={() => deleteEvent(index)}
                    className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
                    aria-label="Delete Event"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 
                          01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4a1 1 
                          0 011-1h4a1 1 0 011 1v3m-9 0h10"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
