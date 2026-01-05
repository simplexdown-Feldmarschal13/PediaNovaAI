export default function Home() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">
      <header className="text-center">
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          PediaNova AI
        </h1>
        <p className="mt-4 text-balance text-lg font-medium text-slate-700 sm:text-xl">
          Individualized Pediatric Clinical Intelligence
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-slate-800">
          PediaNova AI is an AI-powered ecosystem for individualized, data-driven
          pediatric clinical decision support, designed to help clinicians
          synthesize patient-specific information with relevant evidence and
          guidelines.
        </p>
      </header>

      <div className="mx-auto mt-16 max-w-3xl space-y-14">
        <section aria-labelledby="clinical-challenge">
          <h2
            id="clinical-challenge"
            className="text-lg font-semibold tracking-tight text-slate-900"
          >
            The Clinical Challenge
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-slate-800">
            <p>
              Pediatric decision-making frequently occurs under time constraints
              and with incomplete context. Variation in local practice patterns,
              heterogeneous patient presentations, and age-dependent physiology
              can contribute to inconsistent assessment and management.
            </p>
            <p>
              Clinical information is often fragmented across systems and notes.
              When data are dispersed and guideline updates are difficult to
              track at the point of care, clinicians may face unnecessary
              cognitive load and avoidable variability in decision processes.
            </p>
          </div>
        </section>

        <section aria-labelledby="approach">
          <h2
            id="approach"
            className="text-lg font-semibold tracking-tight text-slate-900"
          >
            The PediaNova AI Approach
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-slate-800">
            <p>
              PediaNova AI emphasizes individualized intelligence: supporting
              decisions that are responsive to the child’s context, clinical
              trajectory, and uncertainty. The goal is to organize and interpret
              relevant information so that patient-specific factors are
              considered explicitly.
            </p>
            <p>
              The platform is designed to integrate clinical data with pediatric
              guidelines and evidence-informed pathways, complemented by
              explainable models where appropriate. Outputs are intended to be
              transparent, traceable to inputs, and aligned with clinical
              reasoning.
            </p>
            <p>
              A safety-first philosophy guides the design: conservative
              defaults, clear representation of uncertainty, and emphasis on
              clinician oversight. The system is structured to support careful
              review rather than accelerate unexamined decisions.
            </p>
          </div>
        </section>

        <section aria-labelledby="architecture">
          <h2
            id="architecture"
            className="text-lg font-semibold tracking-tight text-slate-900"
          >
            Conceptual Architecture
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-slate-900">
                PediaData Core
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Secure, standardized pediatric data foundations to support
                high-quality inputs, including structured clinical signals and
                longitudinal context.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-slate-900">
                PediaAI Engine
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Risk stratification, decision support, and explainable models
                intended to surface relevant factors, assumptions, and
                uncertainty.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-slate-900">
                PediaNova Interfaces
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Clinical, educational, and system-level interfaces designed for
                usability, auditability, and responsible integration into care
                workflows.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="who-for">
          <h2
            id="who-for"
            className="text-lg font-semibold tracking-tight text-slate-900"
          >
            Who It Is For
          </h2>
          <ul className="mt-4 space-y-3 leading-relaxed text-slate-800">
            <li className="rounded-lg border border-slate-200 bg-white px-4 py-3">
              <span className="font-medium text-slate-900">
                Pediatric clinicians
              </span>
              <span className="text-slate-700">
                {" "}
                — to support structured assessment, differential consideration,
                and guideline-aligned decisions.
              </span>
            </li>
            <li className="rounded-lg border border-slate-200 bg-white px-4 py-3">
              <span className="font-medium text-slate-900">
                Medical students and residents
              </span>
              <span className="text-slate-700">
                {" "}
                — to reinforce evidence-oriented reasoning and pediatric-specific
                clinical frameworks.
              </span>
            </li>
            <li className="rounded-lg border border-slate-200 bg-white px-4 py-3">
              <span className="font-medium text-slate-900">
                Health systems and policymakers
              </span>
              <span className="text-slate-700">
                {" "}
                — to support quality improvement, consistency of care pathways,
                and reviewable decision-support processes.
              </span>
            </li>
          </ul>
        </section>

        <section aria-labelledby="ethics">
          <h2
            id="ethics"
            className="text-lg font-semibold tracking-tight text-slate-900"
          >
            Ethics and Responsibility
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-slate-800">
            <p>
              PediaNova AI is intended to provide decision support, not to
              replace clinical judgment. Recommendations and risk estimates must
              be interpreted in context and verified by qualified clinicians.
            </p>
            <p>
              Pediatric data require heightened ethical care. The platform is
              designed to prioritize privacy, minimize unnecessary data
              exposure, and support transparent review. Responsibility for
              clinical decisions remains with the treating team.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
