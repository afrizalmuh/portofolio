import { FadeIn } from "@/components/FadeIn";
import { work } from "@/data/work";

export function Work() {
  return (
    <section id="work" aria-label="Work experience" className="py-24">
      <div className="container max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
              02 / Work
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              Experience
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-0">
          {work.map((entry, i) => (
            <FadeIn key={`${entry.company}-${i}`} delay={i * 0.08}>
              <article className="relative grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-t border-border group">
                {/* Date range */}
                <div className="md:col-span-3">
                  <time className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                    {entry.startDate} — {entry.endDate ?? "Present"}
                  </time>
                </div>

                {/* Details */}
                <div className="md:col-span-9">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-xl font-bold tracking-tight">
                      {entry.company}
                    </h3>
                  </div>
                  <p className="font-mono text-sm text-muted-foreground mb-5">
                    {entry.role} · {entry.location}
                  </p>

                  <ul className="space-y-2.5">
                    {entry.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-sm leading-relaxed text-muted-foreground pl-4 relative before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-border group-hover:before:bg-muted-foreground before:transition-colors"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}

          {/* End marker */}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
