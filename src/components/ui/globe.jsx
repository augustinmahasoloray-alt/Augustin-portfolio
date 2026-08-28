import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function Globe({ className = "" }) {
  const canvasRef = useRef(null);
  const phi = useRef(0);

  useEffect(() => {
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.25,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [0.1, 0.1, 0.1],
      markerColor: [0.4, 0.1, 0.1],
      glowColor: [0.1, 0.1, 0.1],
      markers: [
        { location: [48.8566, 2.3522], size: 0.04 },
        { location: [-18.8792, 47.5079], size: 0.04 },
      ],
      onRender: (state) => {
        state.phi = phi.current;
        phi.current += 0.003;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      className={`relative aspect-square w-full max-w-[600px] ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute left-0 top-0 h-full w-full"
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
        }}
      />
    </div>
  );
}

