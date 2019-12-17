import {ManualStepConfig, manualStepTypeGuide} from "./config";
import {GitFileStatus} from "../git";

export type changeObject = {
    change: GitFileStatus;
    feature: string;
    type: string;
    path: string
}
export const manualStepFilter = (changes: changeObject): boolean => {
    const manualStepConfig: ManualStepConfig | undefined = manualStepTypeGuide.find(
        (config) => config.type === changes.type
            && config.changeTypes.includes(changes.change));
    return !!manualStepConfig;
};