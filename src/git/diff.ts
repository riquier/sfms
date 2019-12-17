import util from 'util';
import {exec, ExecOptions} from 'child_process';

const execPromise = util.promisify(exec);

/**
 * Evaluates the diff of two git commits
 * @param oldCommit
 * @param newCommit
 * @param cwd
 */
export const gitDiffFilesOnly = async (oldCommit: string = 'head', newCommit: string = '', cwd: string = '.'): Promise<string> => {
    const gitDifCommand: string = `git diff ${oldCommit} ${newCommit} --name-status`;
    const options: ExecOptions = {cwd};

    const { stdout, stderr } = await execPromise(gitDifCommand, options);

    // todo process error
    if(stderr){
        console.error(stderr);
        throw new Error();
    }

    return stdout;
};