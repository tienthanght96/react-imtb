export function generateArrayListNumbers (totalItem: number) {
  if(!totalItem) return [];
  return Array.from(Array(totalItem).keys()).map(e => e + 1);
}