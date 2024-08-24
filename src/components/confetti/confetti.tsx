"use client";

import { useCallback, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";

import "./confetti.css";

interface ConfettiProps {
  children?: React.ReactNode;
  className?: string;
  frequency?: number;
  colors?: string[];
  animations?: string[];
}

export const Confetti = ({
  children,
  className,
  colors = ["#323d15", "#ce522a", "#e7d444"],
  animations = ["slow", "medium", "fast"],
}: ConfettiProps) => {
  const [height, setHeight] = useState<number | null>(null);
  const [width, setWidth] = useState<number | null>(null);

  const debouncedSetHeight = useDebounceCallback(setHeight, 250);
  const debouncedSetWidth = useDebounceCallback(setWidth, 250);

  const confettiRef = useCallback(
    (node: HTMLDivElement) => {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { height, width } = entry.contentRect;

          debouncedSetHeight(height);
          debouncedSetWidth(width);

          // Reset the confetti popper by looping over all the confetti
          // containers and removing them.
          const containers = Array.from(
            document.querySelectorAll(".confetti-container"),
          );

          for (const container of containers) {
            while (container.firstChild) {
              container.removeChild(container.firstChild);
            }
          }
        }
      });

      if (node !== null) {
        let confettiInterval: NodeJS.Timeout | null = null;

        const containerEl = document.createElement("div");
        const elPosition = node.style.position;

        if (elPosition !== "relative" && elPosition !== "absolute") {
          node.style.position = "relative";
        }

        containerEl.classList.add("confetti-container");

        node.style.setProperty(
          "--confetti-container-height",
          `${(height || node.getBoundingClientRect().height) + 25}px`,
        );

        node.appendChild(containerEl);

        // Pop the confetti!
        confettiInterval = setInterval(
          () => {
            const confettiEl = document.createElement("div");
            const confettiSize = `${Math.floor(Math.random() * 3) + 7}px`;
            const confettiBackground =
              colors[Math.floor(Math.random() * colors.length)];
            const confettiLeft = `${Math.floor(Math.random() * node.offsetWidth)}px`;
            const confettiAnimation =
              animations[Math.floor(Math.random() * animations.length)];
            confettiEl.classList.add(
              "confetti",
              `confetti--animation-${confettiAnimation}`,
            );
            confettiEl.style.left = confettiLeft;
            confettiEl.style.width = confettiSize;
            confettiEl.style.height = confettiSize;
            confettiEl.style.backgroundColor = confettiBackground;

            setTimeout(() => {
              confettiEl?.parentNode?.removeChild(confettiEl);
            }, 4500); // This timeout value should match the animation duration in confetti.css, plus a bit for padding

            containerEl.appendChild(confettiEl);
          },
          width && width < 768 ? 125 : 25,
        );

        setTimeout(() => {
          clearInterval(confettiInterval);
        }, 3000);
      }
    },
    [animations, colors, debouncedSetHeight, debouncedSetWidth, height, width],
  );

  return (
    <div className={className} ref={confettiRef}>
      {children}
    </div>
  );
};
