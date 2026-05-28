"use client";

import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";
import { projects, type Project } from "@/data/projects";

type FilterValue = "all" | Project["status"];

const filters: { label: string; value: FilterValue }[] = [
  // { label: "All", value: "all" },
  { label: "Completed", value: "completed" },
  // { label: "In Progress", value: "in-progress" },
  // { label: "Archived", value: "archived" },
];

const statusLabel: Record<Project["status"], string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  archived: "Archived",
};

const statusVariant: Record<
  Project["status"],
  "default" | "secondary" | "outline"
> = {
  completed: "default",
  "in-progress": "secondary",
  archived: "outline",
};

export function Projects() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const visible =
    filter === "all" ? projects : projects.filter((p) => p.status === filter);

  return (
    <section id="projects" aria-label="Projects" className="py-24">
      <div className="container max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
              04 / Projects
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              Selected Work
            </h2>
          </div>
        </FadeIn>

        {/* Filter buttons */}
        <FadeIn delay={0.05}>
          <div
            className="flex flex-wrap gap-2 mb-10"
            role="group"
            aria-label="Filter projects"
          >
            {filters.map((f) => (
              <Button
                key={f.value}
                variant={filter === f.value ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(f.value)}
                className="font-mono text-xs"
              >
                {f.label}
              </Button>
            ))}
          </div>
        </FadeIn>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.06}>
              <Card className="flex flex-col h-full bg-card border-border hover:border-muted-foreground/30 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-base font-bold leading-tight">
                      {project.name}
                    </CardTitle>
                    <Badge
                      variant={statusVariant[project.status]}
                      className="shrink-0 font-mono text-[10px]"
                    >
                      {statusLabel[project.status]}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 pt-0">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="font-mono text-[10px] px-1.5 py-0"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {(project.repoUrl || project.liveUrl) && (
                  <CardFooter className="gap-2 pt-3">
                    {project.repoUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="px-2 h-8"
                      >
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.name} GitHub repository`}
                        >
                          <Github className="h-3.5 w-3.5 mr-1.5" />
                          <span className="text-xs">Code</span>
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="px-2 h-8"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.name} live demo`}
                        >
                          <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                          <span className="text-xs">Live</span>
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                )}
              </Card>
            </FadeIn>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-muted-foreground text-sm font-mono py-12 text-center">
            No projects match this filter.
          </p>
        )}
      </div>
    </section>
  );
}
