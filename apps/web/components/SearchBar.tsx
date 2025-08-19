"use client";

type SearchBarProps = {
  query: string;
  setQuery: (q: string) => void;
};

export default function SearchBar({ query, setQuery }: SearchBarProps) {
  return (
    <div className="mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search events..."
        className="w-full rounded-lg px-4 py-2 border border-slate-700 bg-slate-900 text-slate-100 
                   focus:outline-none focus:border-blue-500 transition"
      />
    </div>
  );
}
