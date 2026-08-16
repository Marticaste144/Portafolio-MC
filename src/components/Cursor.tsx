import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const ACCENT = "#7c3aed";
const ACCENT_SOFT = "#c4b5fd";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringX = useSpring(mouseX, { stiffness: 320, damping: 28, mass: 0.4 });
  const ringY = useSpring(mouseY, { stiffness: 320, damping: 28, mass: 0.4 });

  useEffect(() => {
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarsePointer) return;

    setEnabled(true);
    document.body.classList.add("cursor-none-custom");

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-cursor-hover]"));
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.classList.remove("cursor-none-custom");
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: ACCENT_SOFT,
        }}
        animate={{
          width: hovering ? 0 : 6,
          height: hovering ? 0 : 6,
          opacity: hovering ? 0 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full border-2 border-dashed"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 52 : 30,
          height: hovering ? 52 : 30,
          borderColor: hovering ? ACCENT_SOFT : ACCENT,
          boxShadow: hovering
            ? `0 0 26px 4px ${ACCENT_SOFT}59`
            : `0 0 14px 1px ${ACCENT}40`,
          rotate: 360,
        }}
        transition={{
          width: { duration: 0.3, ease: "easeOut" },
          height: { duration: 0.3, ease: "easeOut" },
          borderColor: { duration: 0.3 },
          boxShadow: { duration: 0.3 },
          rotate: {
            duration: hovering ? 3 : 9,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      />
    </>
  );
}
