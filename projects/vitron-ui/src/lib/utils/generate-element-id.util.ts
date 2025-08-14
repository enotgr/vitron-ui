export function generateElementId(prefix: string = 'vui'): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 10)}`;
}
