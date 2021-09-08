export function clip(value: string, maxLength: number, addEllipsis = true) {
  let clipped = value.slice(0, maxLength);
  if (addEllipsis && value.length > maxLength) {
    clipped += '...';
  }
  return clipped;
}

export const randomString = (
  length: number,
  pool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ09123456789',
) => {
  let string = '';
  while (string.length < length) {
    const index = Math.floor(Math.random() * pool.length);
    string += pool[index];
  }
  return string;
}

export const slugify = (text: string) => text.replaceAll(/[^a-z0-9]+/ig, '-')

export function upperFirst(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

export function toUpperAndSnake(value: string): string {
  return value.toUpperCase().replace(/(\s|-)/g, '_');
}

export function camelToUpper(value: string): string {
  return value
    .replace(/(.)([A-Z])/g, '$1_$2')
    .replace(/([^0-9])([0-9])/g, '$1_$2')
    .toUpperCase()
    .replace(/[^a-zA-Z0-9]+/g, '_');
}
