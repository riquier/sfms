import {gitDiffFilesOnly} from '..';

const child_process = require('child_process');

jest.mock('child_process', () => ({
  exec: jest.fn(),
}));

describe('diff', () => {
  describe('gitDiffFilesOnly', () => {
    it('can handle changes', () => {
      child_process.exec.mockResolvedValueOnce({
        stdout:
          'A       force-app/main/default/flows/DEX_Circumstances_SCORE_Assessment.flow-meta.xml',
      });
      const output = gitDiffFilesOnly();
      expect(output).resolves.toEqual(
        'A       force-app/main/default/flows/DEX_Circumstances_SCORE_Assessment.flow-meta.xml',
      );
      expect(child_process.exec).toHaveBeenCalled();
    });
    it('can handle no changes', () => {
      child_process.exec.mockResolvedValueOnce({
        stdout: '',
      });
      const output = gitDiffFilesOnly();
      expect(output).resolves.toEqual('');
      expect(child_process.exec).toHaveBeenCalled();
    });
  });
});
