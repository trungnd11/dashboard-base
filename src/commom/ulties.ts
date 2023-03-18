export const generateId = (): string => {
  const array: any = new Uint8Array(16);
  window.crypto.getRandomValues(array);
  return window.btoa(String.fromCharCode(...array));
};
