import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center">
      <div className="mx-auto max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 px-6">
        
        {/* Left Content */}
        <section className="flex-1 space-y-6 text-center md:text-left">
          <header>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Event Manager <span className="text-blue-500">2025</span>
            </h1>
            <p className="mt-4 text-lg text-slate-400 max-w-lg mx-auto md:mx-0">
              Create, organize, and track your events with a modern and 
              professional interface built for the future.
            </p>
          </header>

          <div>
            <Link
              href="/events"
              className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 font-medium text-white shadow hover:bg-blue-700 transition"
            >
              + Add Event
            </Link>
          </div>
        </section>

        {/* Right Illustration */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="https://www.swipez.in/images/product/billing-software/industry/cable/accurate-billing.svg" // put this inside public/
            alt="Event illustration"
            className="w-full max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
