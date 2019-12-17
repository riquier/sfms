import {gitDiffFilesOnly, gitDiffToObjectListProcessor} from "../git";
import {manualStepFilter, changeObject, outputManualSteps} from "../sfms";

export const command = 'find';
export const desc = 'Find manual steps introduced in a single commit';
// export const builder = yargs =>
//     yargs.positional('commitHash', {
//         describe: 'name to associate records added from this catalogue',
//     });

export const handler = async (argv) => {
    const gitDiffOutput = await gitDiffFilesOnly();
    const diffList: changeObject[] = gitDiffToObjectListProcessor(gitDiffOutput);
    const manualSteps: changeObject[] = diffList.filter(manualStepFilter);
    const output: string = outputManualSteps(manualSteps);
    console.log(output);
};