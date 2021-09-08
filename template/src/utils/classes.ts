export function classes(props: Record<string, boolean> | string[]): string {
  if (Array.isArray(props)) {
    return props.join(' ');
  }
  return Object.keys(props).filter(c => props[c]).join(' ');
}
