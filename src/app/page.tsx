import { NavBar } from "@/components/NavBar";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <About />
        <Separator />
        <Work />
        <Separator />
        <Education />
        <Separator />
        <Projects />
      </main>
      <footer className="border-t border-border py-10">
        <div className="container max-w-5xl mx-auto px-6">
          <p className="font-mono text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Afrizal Muhardianto
          </p>
        </div>
      </footer>
    </>
  );
}
