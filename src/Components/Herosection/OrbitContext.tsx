
import React, { createContext, useContext, useMemo, useState, useRef, useCallback } from "react";


type OrbitContextType = {
paused: boolean;
setPaused: (v: boolean) => void;
modalField: string | null;
openModal: (field: string | null) => void;
lastFocusedIdRef: React.MutableRefObject<string | null>;
burstIndex: number;
incrementBurst: () => void;
};


const OrbitContext = createContext<OrbitContextType | undefined>(undefined);


export function OrbitProvider({ children }: { children: React.ReactNode }) {
const [paused, setPaused] = useState(false);
const [modalField, setModalField] = useState<string | null>(null);
const lastFocusedIdRef = useRef<string | null>(null);
const [burstIndex, setBurstIndex] = useState(0);


const incrementBurst = useCallback(() => setBurstIndex((b) => b + 1), []);


const value = useMemo(
() => ({ paused, setPaused, modalField, openModal: setModalField, lastFocusedIdRef, burstIndex, incrementBurst }),
[paused, modalField, burstIndex, incrementBurst]
);


return <OrbitContext.Provider value={value}>{children}</OrbitContext.Provider>;
}


export function useOrbit() {
const ctx = useContext(OrbitContext);
if (!ctx) throw new Error("useOrbit must be used within OrbitProvider");
return ctx;
}