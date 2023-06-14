import { useVelocity, useMotionValue, animate } from "framer-motion";
import { LegacyRef, useEffect, useRef } from "react";

const ProgressRing = ({
  radius,
  stroke,
  progress: p,
  skill,
}: {
  radius: number;
  stroke: number;
  progress: number;
  skill: string;
}) => {
  const nodeRef = useRef<HTMLSpanElement | null>(null);
  const svgRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    const node = nodeRef.current;
    const svg = svgRef.current;
    if (!node || !svg) return;

    const controls = animate(0, p, {
      duration: 2,
      onUpdate(value) {
        node.textContent = value.toFixed(0) + "%";
        svg.style.strokeDashoffset = String((1 - value / 100) * circumference);
      },
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [nodeRef]);

  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  return (
    <div className="grid grid-cols-1 items-center justify-center w-max">
      <svg
        height={radius * 2}
        width={radius * 2}
        style={{ transform: "rotate(-90deg)" }}
        className="row-start-1 col-start-1"
      >
        <circle
          stroke="#f5f5f5"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          ref={svgRef}
          stroke="#171717"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeLinecap: "round" }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>

      <div className="flex flex-col font-bold text-center row-start-1 col-start-1">
        <span className="">{skill}</span>
        <span ref={nodeRef} className="text-3xl"></span>
      </div>
    </div>
  );
};

export default ProgressRing;
