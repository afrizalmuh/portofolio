import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FadeIn } from "@/components/FadeIn";
import { about } from "@/data/about";

export function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="min-h-screen flex items-center pt-24 pb-20"
    >
      <div className="container max-w-5xl mx-auto px-6">
        {/* Name */}
        <FadeIn>
          <div className="mb-10">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] uppercase text-foreground">
              {about.name.split(" ").map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </h1>
          </div>
        </FadeIn>

        {/* Photo + Bio */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-3 flex items-start">
              <Avatar className="w-36 h-36 md:w-48 md:h-48 rounded-2xl border-2 border-border">
                <AvatarImage
                  src={about.photo ?? ""}
                  alt={`${about.name} profile photo`}
                />
                <AvatarFallback className="rounded-2xl text-2xl font-bold bg-secondary text-secondary-foreground">
                  {about.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="md:col-span-9">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                {about.title}
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl mb-8">
                {about.bio}
              </p>

              {/* Contact links */}
              <TooltipProvider>
                <div className="flex items-center gap-2 flex-wrap">
                  {about.contact.github && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" asChild>
                          <a
                            href={about.contact.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>GitHub</TooltipContent>
                    </Tooltip>
                  )}

                  {about.contact.linkedin && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" asChild>
                          <a
                            href={about.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>LinkedIn</TooltipContent>
                    </Tooltip>
                  )}

                  {about.contact.email && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm" asChild>
                          <a href={`mailto:${about.contact.email}`}>
                            <Mail className="h-4 w-4 mr-2" />
                            Get in touch
                            <ArrowUpRight className="h-3 w-3 ml-1" />
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>{about.contact.email}</TooltipContent>
                    </Tooltip>
                  )}
                </div>
              </TooltipProvider>
            </div>
          </div>
        </FadeIn>

        {/* Skills */}
        <FadeIn delay={0.2}>
          <div className="border-t border-border pt-10">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {about.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="font-mono text-xs"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
