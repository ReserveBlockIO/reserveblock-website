import { githubFiles } from "../github-files";

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

export function isIpad() {
  var ratio = window.devicePixelRatio || 1;
  var screen = {
    width: window.screen.width * ratio,
    height: window.screen.height * ratio,
  };
  return (
    (screen.width === 1640 && screen.height === 2360)

  );

}

export function isIpadPro() {
  var ratio = window.devicePixelRatio || 1;
  var screen = {
    width: window.screen.width * ratio,
    height: window.screen.height * ratio,
  };
  return (
    (screen.width === 2048 && screen.height === 2732) ||
    (screen.width === 2732 && screen.height === 2048) ||
    (screen.width === 1536 && screen.height === 2048) ||
    (screen.width === 2048 && screen.height === 1536)
  );
}

export function getOS() {
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "mac";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "ios";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "windows";
  } else if (/Android/.test(userAgent)) {
    os = "android";
  } else if (!os && /Linux/.test(platform)) {
    os = "linux";
  }

  return os;
}

export function isMobileOS() {
  const os = getOS();

  if (os !== "mac" && os !== "windows" && os !== "linux") {
    return true;
  }

  return false;
}

export function walletDownload() {
  // const windows =
  //   "https://github.com/ReserveBlockIO/ReserveBlockWindowsWallet/releases/download/pre2/rbx-winwallet-win-x64.zip";
  // const mac =
  //   "https://github.com/ReserveBlockIO/Core-CLI/releases/download/pre/rbx-corecli-mac-osx-x64.zip";
  // const linux =
  //   "https://github.com/ReserveBlockIO/Core-CLI/releases/download/pre/rbx-corecli-linux-x64.zip";

  // const other =
  //   "https://github.com/ReserveBlockIO/ReserveBlockWindowsWallet/releases/tag/pre2";

  // const os = getOS();
  // let url = other;
  // switch (os) {
  //   case "windows":
  //   case "mac":
  //     url = windows;
  //     break;
  //   case "linux":
  //     url = linux;
  //     break;
  // }

  // window.open(url);
  window.open(githubFiles.gui.url);
}

export function cliDownload() {
  window.open(githubFiles.cli.url);
  // const windows =
  //   "https://github.com/ReserveBlockIO/Core-CLI/releases/download/pre/rbx-corecli-win-x64.zip";
  // const mac =
  //   "https://github.com/ReserveBlockIO/Core-CLI/releases/download/pre/rbx-corecli-mac-osx-x64.zip";
  // const linux =
  //   "https://github.com/ReserveBlockIO/Core-CLI/releases/download/pre/rbx-corecli-linux-x64.zip";

  // const other = "https://github.com/ReserveBlockIO/Core-CLI/releases/tag/pre";

  // const os = getOS();
  // let url = other;
  // switch (os) {
  //   case "mac":
  //     url = mac;
  //     break;
  //   case "windows":
  //     url = windows;
  //     break;
  //   case "linux":
  //     url = linux;
  //     break;
  // }

  // window.open(url);
}
