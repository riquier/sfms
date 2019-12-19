import {
  gitDiffToObjectListProcessor,
  gitDiffLineToObjectConverter,
  gitDiffLineValidator,
} from '../helpers';

describe('git diff', () => {
  describe('gitDiffLineValidator', () => {
    it('can handle an empty string', () => {
      const stdout = '';
      const output = gitDiffLineValidator(stdout);
      expect(output).toBeFalsy();
    });
    it('will ignore garage', () => {
      const stdout = 'asd /as das das //asd09234 asda{}';
      const output = gitDiffLineValidator(stdout);
      expect(output).toBeFalsy();
    });
    it('can process a well formated line', () => {
      const stdout = `A       force-app/main/default/flows/DEX_Circumstances_SCORE_Assessment.flow-meta.xml`;
      const output = gitDiffLineValidator(stdout);
      expect(output).toBeTruthy();
    });
  });
  describe('gitDiffLineToObjectConverter', () => {
    it('can process a well formated line', () => {
      const stdout = `A       force-app/main/default/flows/DEX_Circumstances_SCORE_Assessment.flow-meta.xml`;
      const output = gitDiffLineToObjectConverter(stdout);
      expect(output).not.toBeNull();
      expect(output).toHaveProperty('change', 'A');
      expect(output).toHaveProperty('feature', 'force-app/main/default');
      expect(output).toHaveProperty('type', 'flows');
      expect(output).toHaveProperty(
        'path',
        'force-app/main/default/flows/DEX_Circumstances_SCORE_Assessment.flow-meta.xml',
      );
    });
  });
  describe('gitDiffToObjectListProcessor', () => {
    it('can process an empty string', () => {
      const stdout = '';
      const output = gitDiffToObjectListProcessor(stdout);
      expect(output).toHaveLength(0);
    });
    it('will ignore garage', () => {
      const stdout = 'asd /as das das //asd09234 asda{}';
      const output = gitDiffToObjectListProcessor(stdout);
      expect(output).toHaveLength(0);
    });
    it('can handle single line', () => {
      const stdout = `A       force-app/main/default/flows/DEX_Circumstances_SCORE_Assessment.flow-meta.xml`;
      const output = gitDiffToObjectListProcessor(stdout);
      expect(output).toHaveLength(1);
    });
  });
});
