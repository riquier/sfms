import {GitFileStatus} from "../git";

export type ManualStepConfig = {
    type: string;
    changeTypes: GitFileStatus[];
}

export const manualStepTypeGuide: ManualStepConfig[] = [
    {
        type: 'dashboards',
        changeTypes: [GitFileStatus.MODIFIED],
    },
    {
        type: 'documents',
        changeTypes: [GitFileStatus.MODIFIED],
    },
    {
        type: 'homePageLayouts',
        changeTypes: [GitFileStatus.MODIFIED],
    },
    {
        type: 'letterhead',
        changeTypes: [GitFileStatus.MODIFIED],
    },
    {
        type: 'layouts',
        changeTypes: [GitFileStatus.MODIFIED],
    },
    {
        type: 'remoteSiteSettings',
        changeTypes: [GitFileStatus.MODIFIED],
    },
    {
        type: 'reports',
        changeTypes: [GitFileStatus.MODIFIED],
    },
    {
        type: 'profiles',
        changeTypes: [GitFileStatus.MODIFIED],
    },
];
