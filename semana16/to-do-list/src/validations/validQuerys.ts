export const validQueryString = (query: any, queryName: string): string => {
  if (!query) throw new Error(`The ${queryName} must be informed`);
  return query;
};
