import { createSearchPattern } from './regex';

export interface RangeGenerator {
  (from: number, to: number): number[]
  (length: number): number[]
}

export const range: RangeGenerator = (from: number, to?: number): number[] => {
  if (typeof to === 'undefined') {
    to = from;
    from = 0;
  }
  const range: number[] = [];
  for (let i = from; i < to; i++) {
    range.push(i);
  }
  return range;
}

export function merge<T>(...items: T[][]): T[] {
  return Array<T>().concat(...items);
}

export function unique<T>(items: T[]): T[] {
  return Array.from(new Set(items));
}

export function getFields<T, K extends keyof T>(items: T[], field: K): T[K][] {
  return items.map(item => item[field]);
}

export function replaceIndex<T>(
  items: T[],
  index: number,
  value: T | ((s: T) => T),
): T[] {
  return items.map(
    (item, i) => (i === index ? (value instanceof Function ? value(item) : value) : item),
  );
}

export function removeIndex<T>(items: T[], index: number): T[] {
  const array = [...items];
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export interface SearchFunction {
  <T>(
    items: T[],
    searchFields: ((keyof T)[]),
    keyword: string,
    separator?: string,
  ): T[];
  <T>(
    items: T[],
    getSearchString: ((item: T) => string),
    keyword: string,
    separator?: string,
  ): T[];
}

/**
 * Return items matched with keyword
 * @param items items to search in
 * @param searchFields properties of item to search
 * @param keyword search keyword
 * @param separator
 */
export const search: SearchFunction = <T>(
  items: T[],
  searchFields: ((keyof T)[]) | ((item: T) => string),
  keyword: string,
  separator = '|||',
): T[] => {
  const pattern = createSearchPattern(keyword);
  return items.filter(item => {
    let searchText: string;
    if (searchFields instanceof Function) {
      searchText = searchFields(item);
    } else {
      searchText = searchFields
        .map(field => String(item[field]))
        .join(separator);
    }
    return pattern.test(searchText);
  })
}

/**
 * Keep array sequence and reverse sequence of one or some properties
 * @param items
 * @param property property to reverse
 */
export function reverserProperty<T>(
  items: T[],
  property: (keyof T)[] | keyof T,
): T[] {
  const reverseFields = Array.isArray(property) ? property : [property];
  const reverseValues = reverseFields.map(field => ({
    field,
    items: [...items].reverse().map(item => item[field]),
  }));
  return items.map((item, index) => {
    const tmpItem: T = { ...item };
    reverseValues.forEach(({ field, items }) => {
      tmpItem[field] = items[index];
    })
    return tmpItem;
  })
}
