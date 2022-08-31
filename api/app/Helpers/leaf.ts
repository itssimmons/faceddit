export function leaf(obj: Record<any, any>, str: string): typeof obj {
  return str.split('.').reduce((prev, curr) => prev[curr], obj);
}

export function isLeafable(str: string): boolean {
  return str.split('.').length > 1
}
