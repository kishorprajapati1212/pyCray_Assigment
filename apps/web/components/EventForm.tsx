"use client";

import { useState } from "react";

export default function EventForm({ onAdd }: { onAdd: (event: { name: string; date: string }) => void }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState<{ name?: boolean; date?: boolean }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { name?: boolean; date?: boolean } = {};
    if (!name.trim()) newErrors.name = true;
    if (!date) newErrors.date = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onAdd({ name: name.trim(), date });
    setName("");
    setDate("");
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-4 items-center bg-slate-900 p-4 rounded-xl shadow-lg"
    >
      {/* Event Name */}
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          if (errors.name) setErrors((prev) => ({ ...prev, name: false })); 
        }}
        placeholder="Enter event name..."
        className={`flex-1 px-4 py-2 rounded-lg border 
          ${errors.name ? "border-red-500" : "border-slate-700"} 
          bg-slate-800 text-slate-100 
          placeholder-slate-400 focus:outline-none focus:ring-2 
          ${errors.name ? "focus:ring-red-500" : "focus:ring-blue-500"}`}
      />

      {/* Date Picker */}
      <input
        type="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          if (errors.date) setErrors((prev) => ({ ...prev, date: false })); 
        }}
        className={`px-4 py-2 rounded-lg border 
          ${errors.date ? "border-red-500" : "border-slate-700"} 
          bg-slate-800 text-slate-100  
          focus:outline-none focus:ring-2 
          ${errors.date ? "focus:ring-red-500" : "focus:ring-blue-500"} 
          cursor-pointer [color-scheme:dark]`}
          
      />

      {/* Add Button */}
      <button
        type="submit"
        className="px-5 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition shadow"
      >
        + Add
      </button>
    </form>
  );
}
