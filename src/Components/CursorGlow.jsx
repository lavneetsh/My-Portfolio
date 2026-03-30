import React, { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-64 h-64 pointer-events-none z-50 transition-transform duration-300 ease-out"
      style={{
        transform: `translate(${position.x - 128}px, ${position.y - 128}px)`
      }}
    >
      <div className="w-full h-full bg-primary-container/15 rounded-full blur-[80px]"></div>
    </div>
  );
}
