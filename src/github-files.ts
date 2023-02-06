// CONFIG STARTS

const _cli = {
  tag: "beta2.3",
  date: "Jan 24, 2023",
};

const _gui = {
  tag: "beta3.1",
  date: "Feb 6, 2023",
};

const _snapshot = {
  tag: "snap2",
  date: "Feb 5, 2023",
  height: 637108
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
    url: `${_cliBaseUrl}${_cli.tag}`,
  },
  gui: {
    ..._gui,
    url: `${_guiBaseUrl}${_gui.tag}`,
  },
  snapshot: {
    ..._snapshot,
    url: `${_snapshotBaseUrl}${_snapshot.tag}`,
  },
};

console.log("test");
