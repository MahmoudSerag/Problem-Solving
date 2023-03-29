function canBeEqual(target: number[], arr: number[]): boolean {
  return target.sort((a: number, b: number) => a - b).join('') ===
    arr.sort((a: number, b: number) => a - b).join('')
    ? true
    : false;
}

console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]));
