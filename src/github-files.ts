// CONFIG STARTS

const _cli = {
  tag: "pre8",
  date: "March 11, 2022",
};

const _gui = {
  tag: "pre8",
  date: "March 11, 2022",
};

// CONFIG ENDS

const _cliBaseUrl = "https://github.com/ReserveBlockIO/Core-CLI/releases/tag/";
const _guiBaseUrl =
  "https://github.com/ReserveBlockIO/ReserveBlockWindowsWallet/releases/tag/";

export const githubFiles = {
  cli: {
    ..._cli,
    url: `${_cliBaseUrl}${_cli.tag}`,
  },
  gui: {
    ..._gui,
    url: `${_guiBaseUrl}${_gui.tag}`,
  },
};

console.log("test");
