import {Argv} from 'yargs';
import {gitDiffFilesOnly, gitDiffToObjectListProcessor} from '../git';
import {manualStepFilter, changeObject, outputManualSteps} from '../sfms';

export const command = 'find [original] [current]';
export const desc = 'Find manual steps introduced in a single commit';
export const builder = (yargs: Argv): Argv =>
  yargs
    .positional('original', {
      describe: 'the original git reference',
      default: 'HEAD',
    })
    .positional('current', {
      describe: 'the current git reference',
      default: '',
    })
    .option('cwd', {
      description: 'working directory of git repository',
      default: '.',
    });

type FindArguments = {
  original: string;
  current: string;
  cwd: string;
};

export const handler = async (argv: FindArguments): Promise<void> => {
  const gitDiffOutput = await gitDiffFilesOnly(
    argv.current,
    argv.original,
    argv.cwd,
  );
  const diffList: changeObject[] = gitDiffToObjectListProcessor(gitDiffOutput);
  const manualSteps: changeObject[] = diffList.filter(manualStepFilter);
  const output: string = outputManualSteps(manualSteps);
  // eslint-disable-next-line no-console
  console.log(output);
};
