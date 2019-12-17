import {changeObject, manualStepFilter} from "../detect";
import {GitFileStatus} from "../../git";

describe('detect', () => {
    describe('manualStepFilter', () => {
        it('can detect page layout change', () => {
            const change: changeObject = {
                feature: "",
                path: "",
                type: 'layouts',
                change: GitFileStatus.MODIFIED
            };
            const result = manualStepFilter(change);
            expect(result).toBeTruthy();
        });
        it('will skip new layouts', () => {
            const change: changeObject = {
                feature: "",
                path: "",
                type: 'layouts',
                change: GitFileStatus.ADDED
            };
            const result = manualStepFilter(change);
            expect(result).toBeFalsy();
        });
        it('will skip apex changes', () => {
            const change: changeObject = {
                feature: "",
                path: "",
                type: 'classess',
                change: GitFileStatus.MODIFIED
            };
            const result = manualStepFilter(change);
            expect(result).toBeFalsy();
        })
    })
});