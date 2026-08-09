"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const DEFAULT_INTERVAL_MS = 4500;

type PageHeroCarouselContextValue = {
  activeIndex: number;
};

type PageHeroCarouselProviderProps = {
  children: ReactNode;
  imageCount: number;
  intervalMs?: number;
};

const PageHeroCarouselContext = createContext<PageHeroCarouselContextValue | null>(
  null,
);

export function PageHeroCarouselProvider({
  children,
  imageCount,
  intervalMs = DEFAULT_INTERVAL_MS,
}: PageHeroCarouselProviderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const safeActiveIndex = imageCount > 0 ? activeIndex % imageCount : 0;

  useEffect(() => {
    activeIndexRef.current = imageCount > 0
      ? activeIndexRef.current % imageCount
      : 0;

    if (imageCount <= 1) {
      return;
    }

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let timeoutId: number | undefined;
    let isCancelled = false;

    function scheduleNextImage() {
      if (isCancelled || reducedMotionQuery.matches) {
        return;
      }

      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }

      timeoutId = window.setTimeout(() => {
        timeoutId = undefined;
        const nextIndex = (activeIndexRef.current + 1) % imageCount;
        activeIndexRef.current = nextIndex;
        setActiveIndex(nextIndex);
        scheduleNextImage();
      }, intervalMs);
    }

    function handleReducedMotionChange() {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
        timeoutId = undefined;
      }

      scheduleNextImage();
    }

    scheduleNextImage();
    reducedMotionQuery.addEventListener("change", handleReducedMotionChange);

    return () => {
      isCancelled = true;
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
      reducedMotionQuery.removeEventListener("change", handleReducedMotionChange);
    };
  }, [imageCount, intervalMs]);

  return (
    <PageHeroCarouselContext.Provider value={{ activeIndex: safeActiveIndex }}>
      {children}
    </PageHeroCarouselContext.Provider>
  );
}

export function usePageHeroCarousel() {
  const context = useContext(PageHeroCarouselContext);

  if (!context) {
    throw new Error(
      "usePageHeroCarousel must be used within PageHeroCarouselProvider",
    );
  }

  return context;
}
