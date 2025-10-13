export function seededRandom(seed: number) {
let v = seed % 2147483647;
if (v <= 0) v += 2147483646;
return () => {
v = (v * 16807) % 2147483647;
return (v - 1) / 2147483646;
};
}


export function clamp(v: number, lo: number, hi: number) {
return Math.min(Math.max(v, lo), hi);
}