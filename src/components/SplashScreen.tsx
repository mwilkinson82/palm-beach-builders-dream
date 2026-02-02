import { useState, useEffect } from "react";
import logoSketch from "@/assets/beau-monde-logo-sketch.jpeg";

interface SplashScreenProps {
  duration?: number;
  onComplete: () => void;
}

export const SplashScreen = ({ duration = 10000, onComplete }: SplashScreenProps) => {
  const [phase, setPhase] = useState<"entering" | "visible" | "exiting" | "complete">("entering");

  useEffect(() => {
    // Phase 1: Logo fades in (1.5s)
    const enterTimer = setTimeout(() => {
      setPhase("visible");
    }, 100);

    // Phase 2: Stay visible, then start exit
    const exitTimer = setTimeout(() => {
      setPhase("exiting");
    }, duration - 1500);

    // Phase 3: Complete and unmount
    const completeTimer = setTimeout(() => {
      setPhase("complete");
      onComplete();
    }, duration);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [duration, onComplete]);

  if (phase === "complete") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f8f6f1] transition-opacity duration-1500 ${
        phase === "exiting" ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo Container */}
      <div
        className={`flex flex-col items-center transition-all duration-1500 ease-out ${
          phase === "entering" 
            ? "opacity-0 scale-95" 
            : "opacity-100 scale-100"
        }`}
      >
        {/* Logo Image */}
        <div className="relative mb-8">
          <img
            src={logoSketch}
            alt="Beau Monde Builders"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain"
          />
        </div>

        {/* Brand Text */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-light tracking-[0.2em] text-primary uppercase">
            Beau Monde
          </h1>
          <div className="flex items-center justify-center gap-4 mt-3">
            <div className="h-px w-8 bg-accent" />
            <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-primary/60 font-light">
              Builders
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>
        </div>

        {/* Subtle loading indicator */}
        <div className="mt-12">
          <div className="w-32 h-px bg-primary/10 overflow-hidden">
            <div 
              className="h-full bg-accent origin-left"
              style={{
                animation: `loadingBar ${duration - 1500}ms ease-out forwards`,
              }}
            />
          </div>
        </div>
      </div>

      {/* CSS for loading animation */}
      <style>{`
        @keyframes loadingBar {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};
