import { GraduationCap } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" aria-label="Education" className="py-24">
      <div className="container max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
              03 / Education
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              Education
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-0">
          {education.map((entry, i) => (
            <FadeIn key={`${entry.institution}-${i}`} delay={i * 0.08}>
              <article className="relative grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-t border-border group">
                {/* Date range */}
                <div className="md:col-span-3">
                  <time className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                    {entry.startDate} — {entry.endDate ?? "Present"}
                  </time>
                </div>

                {/* Details */}
                <div className="md:col-span-9">
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap className="h-4 w-4 text-muted-foreground shrink-0" />
                    <h3 className="text-xl font-bold tracking-tight">
                      {entry.institution}
                    </h3>
                  </div>
                  <p className="font-mono text-sm text-muted-foreground mb-1">
                    {entry.degree}
                  </p>
                  <p className="font-mono text-xs text-muted-foreground/70 mb-4">
                    {entry.field} · {entry.location}
                  </p>
                  {entry.description && (
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {entry.description}
                    </p>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}

          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
