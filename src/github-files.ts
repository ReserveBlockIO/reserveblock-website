// CONFIG STARTS

const _cli = {
  tag: "beta4.0.0",
  date: "June 9, 2023",
};

const _gui = {
  tag: "beta4.0.2",
  date: "June 29, 2023",
};

const _snapshot = {
  tag: "snap9",
  date: "June 11, 2023",
  height: 1072215
}


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

