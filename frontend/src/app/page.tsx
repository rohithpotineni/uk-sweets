export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(circle_at_top,_#fff8e1,_#fff)] px-6 py-16 text-center text-zinc-800">
      <div className="max-w-3xl rounded-3xl border border-amber-200 bg-white/80 p-10 shadow-xl backdrop-blur">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
          UK Sweets storefront
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          A polished online sweet shop foundation.
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600">
          This starter includes a Next.js frontend, a FastAPI backend, and a PostgreSQL-ready configuration for your next sweets brand experience.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="http://127.0.0.1:8000/health"
            className="rounded-full bg-amber-600 px-5 py-3 font-medium text-white transition hover:bg-amber-700"
          >
            Check API health
          </a>
          <a
            href="https://nextjs.org/docs"
            className="rounded-full border border-zinc-300 px-5 py-3 font-medium text-zinc-700 transition hover:bg-zinc-100"
          >
            Next.js docs
          </a>
        </div>
      </div>
    </main>
  );
}
