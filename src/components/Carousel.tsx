import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";

interface CarouselProps {
  images: string[];
  alt: string;
}

const SWIPE_THRESHOLD = 50;

export function Carousel({ images, alt }: CarouselProps) {
  const [[index, direction], setIndex] = useState([0, 0]);
  const [zoomed, setZoomed] = useState(false);
  const wasDragging = useRef(false);

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

  useEffect(() => {
    if (!zoomed) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomed(false);
      if (images.length > 1) {
        if (e.key === "ArrowRight") {
          setIndex(([i]) => [(i + 1) % images.length, 1]);
        }
        if (e.key === "ArrowLeft") {
          setIndex(([i]) => [(i - 1 + images.length) % images.length, -1]);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomed, images.length]);

  return (
    <div className="w-full">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-line bg-ink-soft">
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
            onPointerDown={() => {
              wasDragging.current = false;
            }}
            onDragStart={() => {
              wasDragging.current = true;
            }}
            onDragEnd={handleDragEnd}
            onTap={() => {
              if (wasDragging.current) return;
              setZoomed(true);
            }}
            data-cursor-hover
            initial={{ x: direction >= 0 ? 60 : -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction >= 0 ? -60 : 60, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full cursor-zoom-in object-contain active:cursor-grabbing"
          />
        </AnimatePresence>

        <div className="pointer-events-none absolute right-3 bottom-3 flex h-7 w-7 items-center justify-center rounded-full bg-ink/70 text-paper opacity-70 backdrop-blur-sm">
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M9 3H3v6M15 3h6v6M9 21H3v-6M15 21h6v-6" />
          </svg>
        </div>

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

      {createPortal(
        <AnimatePresence>
          {zoomed && (
            <motion.div
              className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/90 p-6 backdrop-blur-sm sm:p-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setZoomed(false)}
            >
              <motion.img
                key={index}
                src={images[index]}
                alt={`${alt} — pantalla ${index + 1} de ${images.length}, ampliada`}
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="max-h-full max-w-full cursor-zoom-out rounded-xl object-contain shadow-2xl"
              />

              <button
                type="button"
                onClick={() => setZoomed(false)}
                aria-label="Cerrar"
                data-cursor-hover
                className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-ink/70 text-paper backdrop-blur-sm transition-colors hover:bg-accent"
              >
                ×
              </button>

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goTo(index - 1, -1);
                    }}
                    aria-label="Imagen anterior"
                    data-cursor-hover
                    className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/70 text-paper backdrop-blur-sm transition-colors hover:bg-accent sm:left-6"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goTo(index + 1, 1);
                    }}
                    aria-label="Imagen siguiente"
                    data-cursor-hover
                    className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/70 text-paper backdrop-blur-sm transition-colors hover:bg-accent sm:right-6"
                  >
                    ›
                  </button>
                  <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-paper/70">
                    {index + 1} / {images.length}
                  </span>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </div>
  );
}
