const BLOBS = [
  {
    wrap: "-top-[15%] -left-[20%] h-[38rem] w-[38rem]",
    color: "bg-accent/14",
    radius: "42% 58% 65% 35% / 45% 45% 55% 55%",
    delay: "-2s",
  },
  {
    wrap: "-top-[5%] -right-[18%] h-[34rem] w-[34rem]",
    color: "bg-accent-soft/9",
    radius: "60% 40% 40% 60% / 50% 60% 40% 50%",
    delay: "-9s",
  },
  {
    wrap: "top-[55%] left-[8%] h-[30rem] w-[30rem]",
    color: "bg-accent-dim/16",
    radius: "40% 60% 55% 45% / 55% 40% 60% 45%",
    delay: "-15s",
  },
  {
    wrap: "bottom-[-10%] right-[5%] h-[32rem] w-[32rem]",
    color: "bg-accent/10",
    radius: "55% 45% 35% 65% / 40% 55% 45% 60%",
    delay: "-21s",
  },
];

export function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {BLOBS.map((blob, i) => (
        <div
          key={i}
          className={`hero-blob ${blob.wrap}`}
          style={{ animationDelay: blob.delay }}
        >
          <div
            className={`hero-blob-shape ${blob.color}`}
            style={{ borderRadius: blob.radius }}
          />
        </div>
      ))}
    </div>
  );
}
