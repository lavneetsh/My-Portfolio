import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  // Spring config: stiff enough to feel responsive, damping to avoid jitter
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.5 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 128);
      mouseY.set(e.clientY - 128);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-64 h-64 pointer-events-none z-50"
      style={{ x: springX, y: springY }}
    >
      <div className="w-full h-full bg-primary-container/10 rounded-full blur-[80px]" />
    </motion.div>
  );
}
