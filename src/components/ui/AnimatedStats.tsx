"use client";
import { useEffect, useRef, useState } from "react";

export type Stat = { target: number; prefix?: string; suffix?: string; label: string };

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return value;
}

function Counter({ stat, active, accentColor }: { stat: Stat; active: boolean; accentColor: string }) {
  const value = useCountUp(stat.target, 1800, active);
  const formatted = value >= 1000 ? value.toLocaleString("es-ES") : String(value);
  return (
    <div className="text-center">
      <p className="text-3xl font-black" style={{ color: accentColor }}>
        {stat.prefix}{formatted}{stat.suffix}
      </p>
      <p className="mt-1 text-xs leading-tight text-[#606265]/60">{stat.label}</p>
    </div>
  );
}

const NESA_STATS: Stat[] = [
  { target: 1500, prefix: "+", suffix: "",   label: "Clínicas en +47 países" },
  { target: 25,   prefix: "+", suffix: "",   label: "Estudios científicos publicados y en curso" },
  { target: 30,   prefix: "+", suffix: "",   label: "Instituciones públicas" },
  { target: 6,    prefix: "+", suffix: " M", label: "Sesiones clínicas realizadas" },
];

export default function AnimatedStats({
  stats,
  accentColor = "#566597",
  borderColor = "#d0d1d1",
}: {
  stats?: Stat[];
  accentColor?: string;
  borderColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const data = stats ?? NESA_STATS;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid gap-6 border-t pt-8"
      style={{
        gridTemplateColumns: `repeat(${data.length}, minmax(0, 1fr))`,
        borderColor,
      }}
    >
      {data.map((s) => (
        <Counter key={s.label} stat={s} active={active} accentColor={accentColor} />
      ))}
    </div>
  );
}