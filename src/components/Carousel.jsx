import { useEffect, useState } from "react";

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((previous) => {
        if (previous + 1 < slides.length) {
          return previous + 1;
        } else {
          return 0;
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="overflow-hidden relative flex size-[90%] m-auto">
      <div
        className={`flex transition ease-out duration-400`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide) => {
          return (
            <img
              className="rounded-[20px]"
              src={require(`../assets/courses/certificate_${slide.id}.jpeg`)}
              alt={`${slide.id} certificate`}
              key={slide.id}
            />
          );
        })}
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-2 w-full">
        {slides.map((slide, i) => (
          <div
            key={"circle " + i}
            onClick={() => {
              setCurrent(i);
            }}
            className={`rounded-full bg-bright-orange cursor-pointer self-center ${
              i === current ? "w-4 h-4" : "opacity-50 w-3 h-3"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

// shadow-skills size-full outline outline-1 outline-bright-orange rounded-full justify-center bg-bright-orange bg-opacity-[10%]
