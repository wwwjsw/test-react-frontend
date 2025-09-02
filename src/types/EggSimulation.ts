import type { EggDrop } from "./EggDrop";

export interface EggSimulation {
    foundFloor: number,
    totalDrops: number,
    drops: EggDrop[],
}