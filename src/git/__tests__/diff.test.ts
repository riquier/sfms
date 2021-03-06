import {gitDiffFilesOnly} from '..';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const childProcess = require('child_process');

jest.mock('child_process', () => ({
  exec: jest.fn(),
}));

describe('diff', () => {
  describe('gitDiffFilesOnly', () => {
    it('can handle changes', () => {
      childProcess.exec.mockResolvedValueOnce({
        stdout:
          'A       force-app/main/default/flows/DEX_Circumstances_SCORE_Assessment.flow-meta.xml',
      });
      const output = gitDiffFilesOnly();
      // eslint-disable-next-line jest/valid-expect
      expect(output).resolves.toEqual(
        'A       force-app/main/default/flows/DEX_Circumstances_SCORE_Assessment.flow-meta.xml',
      );
      expect(childProcess.exec).toHaveBeenCalled();
    });
    it('can handle no changes', () => {
      childProcess.exec.mockResolvedValueOnce({
        stdout: '',
      });
      const output = gitDiffFilesOnly();
      // eslint-disable-next-line jest/valid-expect
      expect(output).resolves.toEqual('');
      expect(childProcess.exec).toHaveBeenCalled();
    });
  });
});
