// CONFIG STARTS

const _cli = {
  tag: "beta3.2",
  date: "Feb 6, 2023",
};

const _gui = {
  tag: "beta3.2",
  date: "Feb 6, 2023",
};

const _snapshot = {
  tag: "snap3",
  date: "Feb 7, 2023",
  height: 643689
}

// CONFIG ENDS

const _cliBaseUrl = "https://github.com/ReserveBlockIO/Core-CLI/releases/tag/";
const _guiBaseUrl =
  "https://github.com/ReserveBlockIO/rbx-wallet-gui/releases/tag/";


const _snapshotBaseUrl =
  "https://github.com/ReserveBlockIO/ReserveBlockSnapshot/releases/tag/";

export const githubFiles = {
  cli: {
    ..._cli,
    url: `https://github.com/ReserveBlockIO/ReserveBlock-Core/releases/latest`,
  },
  gui: {
    ..._gui,
    url: `https://github.com/ReserveBlockIO/rbx-wallet-gui/releases/latest`,
  },
  snapshot: {
    ..._snapshot,
    url: `https://github.com/ReserveBlockIO/ReserveBlockSnapshot/releases/latest`,
  },
};

