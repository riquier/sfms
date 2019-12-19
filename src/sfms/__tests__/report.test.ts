import {changeObject} from '..';
import {outputManualStep, outputManualSteps} from '../report';
import {GitFileStatus} from '../../git';

describe('report', () => {
  describe('outputManualStep', () => {
    it('will output the file path', () => {
      const input: changeObject = {
        change: GitFileStatus.MODIFIED,
        feature: 'force-app/main/default',
        path:
          'force-app/main/default/flows/DEX_Circumstances_SCORE_Assessment.flow-meta.xml',
        type: 'flows',
      };
      const output: string = outputManualStep(input);
      expect(output).toEqual(
        'force-app/main/default/flows/DEX_Circumstances_SCORE_Assessment.flow-meta.xml',
      );
    });
  });
  describe('outputManualSteps', () => {
    it('will output multiple manual steps', () => {
      const input: changeObject[] = [
        {
          change: GitFileStatus.MODIFIED,
          feature: 'force-app/main/default',
          path:
            'force-app/main/default/flows/DEX_Circumstances_SCORE_Assessment.flow-meta.xml',
          type: 'flows',
        },
        {
          change: GitFileStatus.MODIFIED,
          feature: 'force-app/main/default',
          path:
            'force-app/main/default/flows/DEX_Goal_SCORE_Assessment.flow-meta.xml',
          type: 'flows',
        },
      ];
      const output: string = outputManualSteps(input);
      expect(output).toEqual(
        `force-app/main/default/flows/DEX_Circumstances_SCORE_Assessment.flow-meta.xml\n` +
          'force-app/main/default/flows/DEX_Goal_SCORE_Assessment.flow-meta.xml',
      );
    });
  });
});
