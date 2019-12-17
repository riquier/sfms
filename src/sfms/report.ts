import {changeObject} from "./detect";

export const outputManualStep = (change: changeObject): string => change.path;

export const outputManualSteps = (changes: changeObject[]): string => changes
    .map(outputManualStep)
    .join('\n');