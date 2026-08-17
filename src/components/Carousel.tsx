import { useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";

interface CarouselProps {
  images: string[];
  alt: string;
}

const SWIPE_THRESHOLD = 50;

export function Carousel({ images, alt }: CarouselProps) {
  const [[index, direction], setIndex] = useState([0, 0]);

  const goTo = (newIndex: number, dir: number) => {
    const wrapped = (newIndex + images.length) % images.length;
    setIndex([wrapped, dir]);
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.x < -SWIPE_THRESHOLD) {
      goTo(index + 1, 1);
    } else if (info.offset.x > SWIPE_THRESHOLD) {
      goTo(index - 1, -1);
    }
  };

  return (
    <div className="w-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-ink-soft">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={index}
            src={images[index]}
            alt={`${alt} — pantalla ${index + 1} de ${images.length}`}
            loading="lazy"
            custom={direction}
            drag={images.length > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            initial={{ x: direction >= 0 ? 60 : -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction >= 0 ? -60 : 60, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full cursor-grab object-cover object-top active:cursor-grabbing"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1, -1)}
              aria-label="Imagen anterior"
              className="absolute top-1/2 left-3 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-ink/70 text-paper backdrop-blur-sm transition-colors hover:bg-accent"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1, 1)}
              aria-label="Imagen siguiente"
              className="absolute top-1/2 right-3 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-ink/70 text-paper backdrop-blur-sm transition-colors hover:bg-accent"
            >
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex justify-center gap-2">
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => goTo(i, i > index ? 1 : -1)}
              aria-label={`Ir a la imagen ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-accent" : "w-1.5 bg-line hover:bg-accent-soft"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
