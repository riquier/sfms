export const stringToEnumValue = <ET, T>(enumObj: ET, str: string): T =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (enumObj as any)[
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Object.keys(enumObj).filter(k => (enumObj as any)[k] === str)[0]
  ];
