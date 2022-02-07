export function dec2hex(dec: number) {
  return dec.toString(16).padStart(2, "0");
}

export function generateId(len: number = 16) {
  var arr = new Uint8Array(len / 2);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, dec2hex).join("");
}

export function copyToClipboard(str: string) {
  navigator.clipboard.writeText(str);
}

export function chunkArray(myArray: any[], chunk_size: number) {
  var results = [];

  while (myArray.length) {
    results.push(myArray.splice(0, chunk_size));
  }

  return results;
}

export function isMobile() {
  return window.innerWidth < 900;
}
