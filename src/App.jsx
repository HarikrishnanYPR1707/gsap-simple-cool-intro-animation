import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const App = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="relative">
      <div
        id="intro-slider"
        className="absolute h-screen top-0 left-0 bg-gray-200 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
      >
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
