import util from 'util';
import {exec, ExecOptions} from 'child_process';

const execPromise = util.promisify(exec);

/**
 * Evaluates the diff of two git commits
 * @param oldCommit
 * @param newCommit
 * @param cwd
 */
export const gitDiffFilesOnly = async (
  oldCommit = 'head',
  newCommit = '',
  cwd = '.',
): Promise<string> => {
  const gitDifCommand = `git diff ${oldCommit} ${newCommit} --name-status`;
  const options: ExecOptions = {cwd};

  const {stdout} = await execPromise(gitDifCommand, options);
  return stdout;
};
