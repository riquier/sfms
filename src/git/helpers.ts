import {changeObject} from '../sfms';
import {GitFileStatus} from './constants';
import {stringToEnumValue} from '../utils';

const newLineRegex = /\r?\n/;

/**
 *  Splits into 4 groups
 *
 *  Example: "A       force-app/main/default/flows/DEX_Circumstances_SCORE_Assessment.flow-meta.xml"
 *
 *  Group1: "A"
 *  Group2: "force-app/main/default/"
 *  Group3: "flow"
 *  Group4: "DEX_Circumstances_SCORE_Assessment.flow-meta.xml"
 * */
const sfdxChangeRegex = /^([a-z]+)[ \t]+(.+\/[^/]+)\/([^/]+)\/(.+)$/i;

/**
 *  Splits into 1 group
 *
 *  Example: "A       force-app/main/default/flows/DEX_Circumstances_SCORE_Assessment.flow-meta.xml"
 *
 *  Group1: "force-app/main/default/flows/DEX_Circumstances_SCORE_Assessment.flow-meta.xml"
 */
const pathRegex = /^[a-z]+[ \t]+(.+\/.+)$/i;

/**
 * Checks if line matches sfdxChangeRegex
 * @param line the input line
 * @return true of the line matches the regex
 */
export const gitDiffLineValidator = (line: string): boolean =>
  sfdxChangeRegex.test(line);

/**
 * Converts a git diff line into an object detailing the change
 * @param line
 */
export const gitDiffLineToObjectConverter = (line: string): changeObject => {
  const diffParts = line.split(sfdxChangeRegex); // can assume match due to filter
  const pathParts = line.split(pathRegex); // can assume match due to filter
  return {
    change: stringToEnumValue<typeof GitFileStatus, GitFileStatus>(
      GitFileStatus,
      diffParts[1],
    ),
    feature: diffParts[2],
    type: diffParts[3],
    path: pathParts[1],
  };
};

/**
 * Processes the results of a git diff with teh --name-status flag and returns
 * a list of objects detailing the change
 * @param stdout
 */
export const gitDiffToObjectListProcessor = (stdout: string): changeObject[] =>
  stdout
    .split(newLineRegex)
    .filter(gitDiffLineValidator)
    .map(gitDiffLineToObjectConverter);
