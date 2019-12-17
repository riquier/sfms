export const stringToEnumValue = <ET, T>(enumObj: ET, str: string): T =>
    (enumObj as any)[Object.keys(enumObj).filter(k => (enumObj as any)[k] === str)[0]];