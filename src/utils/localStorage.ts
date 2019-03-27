export function saveToLocalStorage(key: string, value: any) {
  if(typeof localStorage !== 'undefined' && typeof localStorage.setItem === 'function') {
    localStorage.setItem(key, value);
  }
}
export function getFromLocalStorage(key: string) {
  if(typeof localStorage !== 'undefined' && typeof localStorage.getItem === 'function') {
    return localStorage.getItem(key);
  }
  return null;
}
export function removeFromLocalStorage(key: string, isClearAll?: boolean) {
  if(typeof localStorage !== 'undefined') {
    isClearAll ? localStorage.clear() : localStorage.removeItem(key);
  }
}