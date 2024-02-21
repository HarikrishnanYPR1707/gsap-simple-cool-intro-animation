import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const App = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();

      t1.to("#intro-slider-fader", {
        opacity: 0,
        delay: 1,
        duration: 0.8,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "25",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-25",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 1,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="relative">
      <div
        id="intro-slider"
        className="absolute overflow-hidden h-screen top-0 left-0 bg-gray-200 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight justify-center items-center"
      >
        <div
          id="intro-slider-fader"
          className="absolute z-20 inset-0 bg-gray-950"
        />
        <h1 className="text-9xl font-bold" id="title-1">
          FrontEnd Developer
        </h1>
        <h1 className="text-9xl font-bold" id="title-2">
          Content Creator
        </h1>
        <h1 className="text-9xl font-bold" id="title-3">
          Freelancer
        </h1>
      </div>
      <div className="h-screen flex bg-gray-950 justify-center items-center">
        <h1
          id="welcome"
          className="font-bold font-spaceGrotesk text-9xl text-white"
        >
          Welcome.
        </h1>
      </div>
    </div>
  );
};

export default App;
