export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-6 py-16">
      <header className="space-y-4">
        <h1 className="text-balance text-4xl font-semibold tracking-tight">
          PediaNova AI
        </h1>
        <p className="text-balance text-lg text-slate-700">
          Individualized Pediatric Clinical Intelligence
        </p>
      </header>

      <section className="mt-10">
        <p className="max-w-2xl leading-relaxed text-slate-800">
          An AI-powered ecosystem for individualized, data-driven clinical
          decision support in pediatrics.
        </p>
      </section>
    </main>
  );
}
