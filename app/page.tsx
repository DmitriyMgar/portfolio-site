import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <main className="mx-auto max-w-2xl px-6 py-16 sm:px-8">
        <Hero />
        <hr className="my-16 border-white/20" />
        <About />
        <hr className="my-16 border-white/20" />
        <Projects />
        <hr className="my-16 border-white/20" />
        <Contact />
      </main>
    </div>
  );
}
