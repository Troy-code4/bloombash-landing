import { useEffect, useRef, useState } from "react";

/**
 * Custom hook that detects when an element enters the viewport.
 * Returns a ref to attach to the target element and a boolean indicating visibility.
 *
 * @param {object} options - IntersectionObserver options
 * @param {number} options.threshold - Visibility threshold (0-1) before triggering
 * @param {string} options.rootMargin - Margin around the root observer
 * @param {boolean} options.once - If true, only triggers once and then stops observing
 * @returns {[React.RefObject, boolean]}
 */
export default function useInView({
  threshold = 0.15,
  rootMargin = "0px 0px -50px 0px",
  once = true,
} = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isInView];
}
