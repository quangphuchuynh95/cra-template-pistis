export const createSearchPattern = (keyword: string) => {
  const keywords = String(keyword).toLocaleLowerCase().trim().split(/[-_\s\\|!@#$%^&*()]+/i);
  return new RegExp(`(${keywords.join('.*')})+`, 'i');
}

export const numberLikeRegex = /^\d+(\.\d+)$/;
