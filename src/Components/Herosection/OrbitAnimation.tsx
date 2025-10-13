
import React, { useEffect, useRef, useCallback } from "react";
import BulletProjectile from "./OrbitBullets";
import { useOrbit } from "./OrbitContext";

interface BulletConfig {
  perBulletDelayMs: number;
  launchDurationMsDesktop: number;
  launchDurationMsMobile: number;
  maxDistanceFactor: number;
  burstIntervalMs: number;
  colors: {
    accentStart: string;
    accentEnd: string;
  };
}

interface BulletsLayerProps {
  prefersReduced: boolean;
  fields: string[];
  config: BulletConfig;
}

export default function BulletsLayer({ prefersReduced, fields, config }: BulletsLayerProps) {
  const { paused, incrementBurst } = useOrbit();
  const intervalRef = useRef<number | null>(null);

  /**
   * Stable callback to manage burst timing
   */
  const startBurstCycle = useCallback(() => {
    if (prefersReduced || paused) return;

    incrementBurst(); // fire initial burst
    intervalRef.current = window.setInterval(incrementBurst, config.burstIntervalMs) as unknown as number;
  }, [prefersReduced, paused, incrementBurst, config.burstIntervalMs]);

  /**
   * Mount/unmount logic
   */
  useEffect(() => {
    startBurstCycle();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [startBurstCycle]);

  if (prefersReduced) return null;

  return (
    <div
      className="absolute inset-0 overflow-visible z-40 pointer-events-none"
      aria-hidden="true"
    >
      {fields.map((label, idx) => (
        <BulletProjectile
          key={`${label}-${idx}`}
          idx={idx}
          label={label}
          total={fields.length}
          config={config}
        />
      ))}
    </div>
  );
}
