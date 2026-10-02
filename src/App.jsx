import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./index.css";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: "58%",
    text: "Increase in pick up point use",
  },
  {
    value: "23%",
    text: "Decrease in customer phone calls",
  },
  {
    value: "27%",
    text: "Increase in digital engagement",
  },
  {
    value: "40%",
    text: "Decrease in support requests",
  },
];

function App() {
  const sectionRef = useRef(null);
  const visualRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // --------------------------------
      // 1. Initial headline animation
      // --------------------------------
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
      });

      // --------------------------------
      // 2. Statistics stagger animation
      // --------------------------------
      gsap.from(".stat-item", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.4,
        ease: "power2.out",
      });

      // --------------------------------
      // 3. Scroll-driven visual
      // --------------------------------
      gsap.to(visualRef.current, {
        x: 280,
        y: 80,
        rotate: 8,
        scale: 1.08,

        ease: "none",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1200",
          scrub: 1,
          pin: true,
        },
      });

      // --------------------------------
      // 4. Subtle title movement on scroll
      // --------------------------------
      gsap.to(titleRef.current, {
        y: -80,
        opacity: 0.25,

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=700",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <section
        ref={sectionRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f4f1ea]"
      >
        {/* Background decorative circle */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10 md:h-[620px] md:w-[620px]" />

        {/* Main content */}
        <div className="relative z-10 w-full max-w-[1400px] px-6 md:px-10">
          
          {/* Header */}
          <div className="text-center">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-black/50">
              Digital Experiences
            </p>

            <h1
              ref={titleRef}
              className="text-[9vw] font-black uppercase leading-[0.85] tracking-[0.08em] md:text-[7vw]"
            >
              W E L C O M E
              <br />
              I T Z F I Z Z
            </h1>
          </div>

          {/* Main visual */}
          <div
            ref={visualRef}
            className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex h-44 w-72 -translate-x-1/2 -translate-y-1/2 items-center justify-center md:h-56 md:w-96"
          >
            <div className="relative h-full w-full">
              
              {/* Car body */}
              <div className="absolute left-1/2 top-1/2 h-20 w-64 -translate-x-1/2 -translate-y-1/2 rounded-[45%] border-[5px] border-black bg-white shadow-2xl md:h-24 md:w-80" />

              {/* Car roof */}
              <div className="absolute left-1/2 top-[30%] h-14 w-32 -translate-x-1/2 rounded-t-[80px] border-[5px] border-b-0 border-black bg-[#d9d9d9] md:h-16 md:w-40" />

              {/* Window */}
              <div className="absolute left-1/2 top-[35%] h-9 w-20 -translate-x-1/2 rounded-t-[40px] bg-black md:h-10 md:w-24" />

              {/* Wheels */}
              <div className="absolute bottom-[19%] left-[15%] h-12 w-12 rounded-full border-4 border-black bg-[#222] md:h-14 md:w-14" />
              <div className="absolute bottom-[19%] right-[15%] h-12 w-12 rounded-full border-4 border-black bg-[#222] md:h-14 md:w-14" />

              {/* Headlight */}
              <div className="absolute right-[8%] top-[45%] h-3 w-5 rounded-full bg-yellow-200" />
            </div>
          </div>

          {/* Statistics */}
          <div
            ref={statsRef}
            className="absolute bottom-8 left-1/2 grid w-[calc(100%-3rem)] max-w-[1200px] -translate-x-1/2 grid-cols-2 gap-8 md:bottom-12 md:grid-cols-4 md:gap-5"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-item border-t border-black/20 pt-3"
              >
                <div className="text-4xl font-bold tracking-tight md:text-5xl">
                  {stat.value}
                </div>

                <p className="mt-2 max-w-[180px] text-xs leading-5 text-black/55 md:text-sm">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-6 right-6 hidden text-[10px] uppercase tracking-[0.25em] text-black/40 md:block">
            Scroll to explore ↓
          </div>
        </div>
      </section>

      {/* Extra section so scrolling is possible */}
      <section className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <div className="max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">
            Continue exploring
          </p>

          <h2 className="text-5xl font-bold md:text-7xl">
            Motion meets interaction.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-white/60">
            This section gives the scroll interaction enough space to
            demonstrate the animation smoothly.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;