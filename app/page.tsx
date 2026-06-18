import Scene from "@/components/three/Scene";
import { ArrowRight, Globe, Send, Link as LinkIcon, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-8">
      {/* 3D Background */}
      <Scene />

      {/* Hero Content */}
      <div className="z-10 max-w-4xl w-full space-y-8 text-center md:text-left">
        <header className="space-y-4">
          <div className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            Available for new projects
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            Building the <br /> Future of Web.
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-light">
            Award-winning creative developer specializing in immersive 3D experiences and high-performance applications.
          </p>
        </header>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all flex items-center gap-2 group">
            View Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/10 transition-all flex items-center gap-2">
            Get in touch
          </button>
        </div>

        {/* Socials / Stats */}
        <footer className="pt-16 flex flex-wrap gap-8 justify-center md:justify-start items-center border-t border-white/10">
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">
              <Send className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">
              <LinkIcon className="w-5 h-5" />
            </a>
          </div>
          <div className="h-4 w-px bg-white/10 hidden md:block" />
          <div className="flex gap-8 text-sm font-medium tracking-tight">
            <div className="flex flex-col">
              <span className="text-white/40">Role</span>
              <span>Creative Dev</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/40">Location</span>
              <span>Global / Remote</span>
            </div>
          </div>
        </footer>
      </div>

      {/* Aesthetic Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]" />
    </main>
  );
}
