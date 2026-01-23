import { useEffect } from "react";

export function useCursorLight(): void {
  useEffect(() => {
    const handleMove = (e: MouseEvent): void => {
      const root = document.documentElement;
      root.style.setProperty("--x", `${e.clientX}px`);
      root.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);
}
