"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface NeonGradientCardProps {
  /**
   * @default <div />
   * @type ReactElement
   * @description
   * The content of the card
   * */
  children?: React.ReactNode;

  /**
   * @default ""
   * @type string
   * @description
   * The class name of the card
   * */
  className?: string;

  /**
   * @default 5
   * @type number
   * @description
   * The sizes of the neon gradient borders
   * */
  borderSize?: number;

  /**
   * @default 20
   * @type number
   * @description
   * The radius of the card
   * */
  borderRadius?: number;

  /**
   * @default "#ffaa40"
   * @type string
   * @description
   * The first color of the neon gradient
   * */
  neonColors?: {
    firstColor: string;
    secondColor: string;
  };
}

export const NeonGradientCard: React.FC<NeonGradientCardProps> = ({
  className,
  children,
  borderSize = 2,
  borderRadius = 20,
  neonColors = {
    firstColor: "#ff00aa",
    secondColor: "#00FFF1",
  },
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = dimensions;
      const perimeter = 2 * (width + height);
      containerRef.current.style.setProperty(
        "--neon-first-color",
        neonColors.firstColor
      );
      containerRef.current.style.setProperty(
        "--neon-second-color",
        neonColors.secondColor
      );
      containerRef.current.style.setProperty(
        "--card-width",
        `${width}px`
      );
      containerRef.current.style.setProperty(
        "--card-height",
        `${height}px`
      );
       containerRef.current.style.setProperty(
        "--card-content-width",
        `${width - borderSize * 2}px`
      );
      containerRef.current.style.setProperty(
        "--card-content-height",
        `${height - borderSize * 2}px`
      );
       containerRef.current.style.setProperty(
        "--border-size",
        `${borderSize}px`
      );
       containerRef.current.style.setProperty(
        "--border-radius",
        `${borderRadius}px`
      );
    }
  }, [dimensions, neonColors, borderSize, borderRadius]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-10 size-full overflow-hidden rounded-[var(--border-radius)] hover:shadow-[0_0_20px_var(--neon-first-color)] transition-shadow duration-500",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative size-full min-h-[inherit] rounded-[var(--border-radius)] bg-gray-100 p-6 dark:bg-neutral-900",
          "before:absolute before:-left-[var(--border-size)] before:-top-[var(--border-size)] before:-z-10 before:block" +
            " before:h-[var(--card-height)] before:w-[var(--card-width)] before:rounded-[var(--border-radius)] before:content-['']" +
            " before:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] before:bg-[length:100%_200%]" +
            " before:animate-background-position-spin",
          "after:absolute after:-left-[var(--border-size)] after:-top-[var(--border-size)] after:-z-10 after:block" +
            " after:h-[var(--card-height)] after:w-[var(--card-width)] after:rounded-[var(--border-radius)] after:content-['']" +
            " after:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] after:bg-[length:100%_200%] after:opacity-80" +
            " after:filter-blur-[calc(0.8*var(--border-size))]" +
            " after:animate-background-position-spin",
        )}
      >
        <div className="absolute top-[var(--border-size)] left-[var(--border-size)] h-[var(--card-content-height)] w-[var(--card-content-width)] rounded-[calc(var(--border-radius)-var(--border-size))] bg-black/90 backdrop-blur-sm z-20">
             {children}
        </div>
        
      </div>
    </div>
  );
};
